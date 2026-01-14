/**
 * Input sanitization utilities for security
 * Prevents XSS and injection attacks
 */

/**
 * Sanitizes a string by removing potentially dangerous characters
 * while preserving normal text content
 */
export function sanitizeString(input: string): string {
  if (typeof input !== "string") return "";

  return input
    .trim()
    // Remove null bytes
    .replace(/\0/g, "")
    // Escape HTML entities to prevent XSS
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    // Limit length to prevent DoS
    .slice(0, 5000);
}

/**
 * Sanitizes an email address
 */
export function sanitizeEmail(email: string): string {
  if (typeof email !== "string") return "";

  return email
    .toLowerCase()
    .trim()
    // Remove any characters that aren't valid in emails
    .replace(/[^\w.@+-]/g, "")
    .slice(0, 254); // RFC 5321 max email length
}

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Sanitizes company name
 */
export function sanitizeCompanyName(name: string): string {
  if (typeof name !== "string") return "";

  return name
    .trim()
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .slice(0, 200);
}

/**
 * Sanitizes free-form text input (like messages/challenges)
 */
export function sanitizeText(text: string): string {
  if (typeof text !== "string") return "";

  return text
    .trim()
    .replace(/\0/g, "") // Remove null bytes
    .slice(0, 5000);
}

/**
 * Checks if a value looks like it might be an injection attempt
 */
export function containsSuspiciousContent(input: string): boolean {
  if (typeof input !== "string") return false;

  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i, // onclick=, onload=, etc.
    /data:/i,
    /vbscript:/i,
  ];

  return suspiciousPatterns.some((pattern) => pattern.test(input));
}
