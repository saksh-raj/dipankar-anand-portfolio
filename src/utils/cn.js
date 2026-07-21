// Minimal className joiner (avoids extra deps).
export function cn(...parts) {
  return parts.filter(Boolean).join(" ");
}
