export const quoteEmail = "stayobservant@gmail.com";

export function quoteHref(service?: string) {
  const subject = service ? `Quote request: ${service}` : "Let's talk about a design project";
  const body = [
    "Hi Brian,",
    "",
    service ? `I'd like to discuss ${service.toLowerCase()}.` : "I'd like to discuss a project for my business.",
    "",
    "Name:",
    "Company / website:",
    "What we'd like to achieve:",
    "Ideal timing:",
    "Budget range (if known):",
    "",
    "Thanks!",
  ].join("\r\n");
  return `mailto:${quoteEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
