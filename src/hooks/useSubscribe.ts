import { useState } from "react";
import { supabase, isSupabaseConfigured } from "@/integrations/supabase/client";
import {
  sanitizeEmail,
  isValidEmail,
  containsSuspiciousContent,
} from "@/lib/sanitize";

interface SubscribeData {
  email: string;
  source?: string;
}

interface UseSubscribeReturn {
  subscribe: (data: SubscribeData) => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

export function useSubscribe(): UseSubscribeReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const subscribe = async (data: SubscribeData): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    // Sanitize email
    const sanitizedEmail = sanitizeEmail(data.email);
    const source = data.source || "blog-newsletter";

    // Validate email format
    if (!sanitizedEmail || !isValidEmail(sanitizedEmail)) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return false;
    }

    // Check for suspicious content
    if (containsSuspiciousContent(data.email)) {
      setError("Invalid input detected. Please try again.");
      setIsLoading(false);
      return false;
    }

    // Check if Supabase is configured
    if (!isSupabaseConfigured() || !supabase) {
      console.warn("Supabase not configured, subscription skipped");
      // Still show success to user (graceful degradation)
      setSuccess(true);
      setIsLoading(false);
      return true;
    }

    try {
      // Try to insert into subscribers table
      const { error: dbError } = await supabase.from("subscribers").insert({
        email: sanitizedEmail,
        source: source,
        status: "active",
      });

      if (dbError) {
        // Handle duplicate email (unique constraint violation)
        if (dbError.code === "23505") {
          // Email already subscribed - treat as success
          setSuccess(true);
          setIsLoading(false);
          return true;
        }

        // If subscribers table doesn't exist, try leads table as fallback
        if (dbError.code === "42P01") {
          const { error: fallbackError } = await supabase.from("leads").insert({
            email: sanitizedEmail,
            company: "Newsletter Subscriber",
            source: source,
          });

          if (fallbackError && fallbackError.code !== "23505") {
            throw fallbackError;
          }
        } else {
          throw dbError;
        }
      }

      setSuccess(true);
      setIsLoading(false);
      return true;
    } catch (err) {
      console.error("Error subscribing:", err);
      setError("Failed to subscribe. Please try again.");
      setIsLoading(false);
      return false;
    }
  };

  const reset = () => {
    setError(null);
    setSuccess(false);
  };

  return { subscribe, isLoading, error, success };
}
