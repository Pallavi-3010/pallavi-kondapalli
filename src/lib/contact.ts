export type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * Builds a mailto link that opens the visitor's email app with the message prefilled.
 * Returns null when no contact email is configured, so the form never pretends to send.
 */
export function buildContactMailto(to: string | null, msg: ContactMessage): string | null {
  const address = to?.trim();
  if (!address) return null;
  const body = `${msg.message.trim()}\n\n— ${msg.name.trim()} (${msg.email.trim()})`;
  const params = new URLSearchParams({ subject: msg.subject.trim(), body });
  return `mailto:${address}?${params.toString().replace(/\+/g, "%20")}`;
}
