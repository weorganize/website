import { useState } from "react";
import { supabase, isSupabaseConfigured } from "@/integrations/supabase/client";
import {
  sanitizeEmail,
  sanitizeCompanyName,
  sanitizeText,
  isValidEmail,
  containsSuspiciousContent,
} from "@/lib/sanitize";

interface LeadData {
  email: string;
  company: string;
  challenge?: string;
  source?: string;
}

interface UseSubmitLeadReturn {
  submitLead: (data: LeadData) => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

export function useSubmitLead(): UseSubmitLeadReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitLead = async (data: LeadData): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    // Sanitize all inputs
    const sanitizedEmail = sanitizeEmail(data.email);
    const sanitizedCompany = sanitizeCompanyName(data.company);
    const sanitizedChallenge = data.challenge ? sanitizeText(data.challenge) : null;
    const sanitizedSource = data.source ? sanitizeText(data.source) : "website";

    // Validate email format
    if (!isValidEmail(sanitizedEmail)) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return false;
    }

    // Check for required fields
    if (!sanitizedCompany) {
      setError("Please enter your company name.");
      setIsLoading(false);
      return false;
    }

    // Check for suspicious content
    if (
      containsSuspiciousContent(data.email) ||
      containsSuspiciousContent(data.company) ||
      (data.challenge && containsSuspiciousContent(data.challenge))
    ) {
      setError("Invalid input detected. Please try again.");
      setIsLoading(false);
      return false;
    }

    try {
      // Try Edge Function first (handles emails)
      const edgeFunctionUrl = `${SUPABASE_URL}/functions/v1/submit-lead`;

      const response = await fetch(edgeFunctionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: sanitizedEmail,
          company: sanitizedCompany,
          challenge: sanitizedChallenge,
          source: sanitizedSource,
        }),
      });

      if (response.ok) {
        setIsLoading(false);
        return true;
      }

      // If Edge Function fails and Supabase is configured, fall back to direct insert
      if (isSupabaseConfigured() && supabase) {
        console.warn("Edge function failed, falling back to direct insert");

        const { error: dbError } = await supabase.from("leads").insert({
          email: sanitizedEmail,
          company: sanitizedCompany,
          challenge: sanitizedChallenge,
          source: sanitizedSource,
        });

        if (dbError) {
          // If leads table doesn't exist, try contact_submissions as last resort
          if (dbError.code === "42P01") {
            const { error: fallbackError } = await supabase
              .from("contact_submissions")
              .insert({
                name: sanitizedCompany,
                email: sanitizedEmail,
                company: sanitizedCompany,
                message: sanitizedChallenge || "Strategy call request",
              });

            if (fallbackError) {
              throw fallbackError;
            }
          } else {
            throw dbError;
          }
        }
      } else {
        // Supabase not configured, just log
        console.warn("Supabase not configured, lead submission skipped");
        throw new Error("Backend not configured");
      }

      setIsLoading(false);
      return true;
    } catch (err) {
      console.error("Error submitting lead:", err);
      setError("Failed to submit. Please try again or email us directly.");
      setIsLoading(false);
      return false;
    }
  };

  return { submitLead, isLoading, error };
}
