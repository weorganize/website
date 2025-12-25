import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

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

    try {
      // Try Edge Function first (handles emails)
      const edgeFunctionUrl = `${SUPABASE_URL}/functions/v1/submit-lead`;

      const response = await fetch(edgeFunctionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          company: data.company,
          challenge: data.challenge || null,
          source: data.source || "website",
        }),
      });

      if (response.ok) {
        setIsLoading(false);
        return true;
      }

      // If Edge Function fails, fall back to direct Supabase insert
      // (won't send emails but at least captures the lead)
      console.warn("Edge function failed, falling back to direct insert");

      const { error: dbError } = await supabase
        .from("leads")
        .insert({
          email: data.email.toLowerCase().trim(),
          company: data.company.trim(),
          challenge: data.challenge?.trim() || null,
          source: data.source || "website",
        });

      if (dbError) {
        // If leads table doesn't exist, try contact_submissions as last resort
        if (dbError.code === "42P01") {
          const { error: fallbackError } = await supabase
            .from("contact_submissions")
            .insert({
              name: data.company,
              email: data.email.toLowerCase().trim(),
              company: data.company.trim(),
              message: data.challenge || "Strategy call request",
            });

          if (fallbackError) {
            throw fallbackError;
          }
        } else {
          throw dbError;
        }
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
