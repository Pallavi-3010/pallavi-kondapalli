import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => pageHead("About — Pallavi Kondapalli", "About Pallavi Kondapalli, a Computer Science Engineering graduate and Junior Software Developer in Hyderabad."),
  component: About,
});
