import { createFileRoute } from "@tanstack/react-router";
import { Education } from "@/components/portfolio/Education";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/education")({
  head: () => pageHead("Education — Pallavi Kondapalli", "Pallavi Kondapalli's education: B.Tech in Computer Science and Engineering, Intermediate and SSC."),
  component: Education,
});
