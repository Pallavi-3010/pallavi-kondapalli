import { createFileRoute } from "@tanstack/react-router";
import { Experience } from "@/components/portfolio/Experience";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/experience")({
  head: () => pageHead("Experience — Pallavi Kondapalli", "Pallavi Kondapalli's professional experience as Junior Software Developer at Midh Technologies Pvt. Ltd., Hyderabad."),
  component: Experience,
});
