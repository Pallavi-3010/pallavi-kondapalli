import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/portfolio/Projects";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/projects")({
  head: () => pageHead("Projects — Pallavi Kondapalli", "Projects by Pallavi Kondapalli: WebScour distributed crawler, BigFeat AutoML, brain tumor detection and more."),
  component: Projects,
});
