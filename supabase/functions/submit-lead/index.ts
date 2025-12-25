import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const FOUNDER_EMAIL = Deno.env.get("FOUNDER_EMAIL") || "founder@weorganize.ai";
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") || "WeOrganize <hello@weorganize.ai>";

interface LeadPayload {
  email: string;
  company: string;
  challenge?: string;
  source?: string;
}

serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, company, challenge, source = "website" }: LeadPayload = await req.json();

    // Validate required fields
    if (!email || !company) {
      return new Response(
        JSON.stringify({ error: "Email and company are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 1. Store lead in Supabase
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

    const { data: lead, error: dbError } = await supabase
      .from("leads")
      .insert({
        email: email.toLowerCase().trim(),
        company: company.trim(),
        challenge: challenge?.trim() || null,
        source,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save lead");
    }

    // 2. Send confirmation email to user (if Resend is configured)
    if (RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: FROM_EMAIL,
            to: email,
            subject: "You're on the calendar - WeOrganize",
            html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="border-bottom: 2px solid #3b82f6; padding-bottom: 20px; margin-bottom: 20px;">
    <h1 style="margin: 0; font-size: 24px; font-weight: 600;">WeOrganize</h1>
  </div>

  <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 16px;">Thanks for booking a strategy call!</h2>

  <p style="margin-bottom: 16px;">We'll reach out within 24 hours to confirm a time that works for you.</p>

  <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin: 24px 0;">
    <h3 style="font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">What to expect:</h3>
    <ul style="margin: 0; padding-left: 20px;">
      <li style="margin-bottom: 8px;">A 30-minute conversation (no slideware)</li>
      <li style="margin-bottom: 8px;">We'll identify one workflow worth automating</li>
      <li style="margin-bottom: 0;">You'll leave with a clear next step—even if it's not with us</li>
    </ul>
  </div>

  <p style="margin-bottom: 8px;"><strong>Want to prep?</strong></p>
  <p style="margin-bottom: 24px; color: #666;">Think about the task your team dreads most. That's usually where we start.</p>

  <p style="color: #666; font-size: 14px;">— The WeOrganize Team</p>

  <div style="border-top: 1px solid #e5e7eb; margin-top: 32px; padding-top: 16px; font-size: 12px; color: #9ca3af;">
    <p style="margin: 0;">WeOrganize.ai | AI Agents & Automation</p>
  </div>
</body>
</html>
            `,
          }),
        });
      } catch (emailError) {
        console.error("Failed to send user confirmation email:", emailError);
        // Don't fail the request if email fails
      }

      // 3. Send notification to founder
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: FROM_EMAIL,
            to: FOUNDER_EMAIL,
            subject: `New Lead: ${company}`,
            html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 20px;">New Strategy Call Request</h2>

  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; width: 120px;">Email</td>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td>
    </tr>
    <tr>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Company</td>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${company}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Challenge</td>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${challenge || "Not provided"}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: 600;">Source</td>
      <td style="padding: 8px 0;">${source}</td>
    </tr>
  </table>

  <div style="margin-top: 24px;">
    <a href="https://supabase.com/dashboard/project/${SUPABASE_URL?.split("//")[1]?.split(".")[0]}/editor"
       style="display: inline-block; background: #3b82f6; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 500;">
      View in Supabase
    </a>
  </div>
</body>
</html>
            `,
          }),
        });
      } catch (emailError) {
        console.error("Failed to send founder notification:", emailError);
        // Don't fail the request if email fails
      }
    }

    return new Response(
      JSON.stringify({ success: true, id: lead.id }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process submission" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
