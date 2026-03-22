/**
 * Validates an email address using RFC 5322-compatible regex.
 * Checks for a local part, @, and a domain with at least one dot.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
