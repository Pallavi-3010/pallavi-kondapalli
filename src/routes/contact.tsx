import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/portfolio/Contact";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("Contact — Pallavi Kondapalli", "Get in touch with Pallavi Kondapalli by email, GitHub or LinkedIn."),
  component: Contact,
});
