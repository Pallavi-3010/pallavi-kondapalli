import { createFileRoute } from "@tanstack/react-router";
import { Skills } from "@/components/portfolio/Skills";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/skills")({
  head: () => pageHead("Technical Skills — Pallavi Kondapalli", "Pallavi Kondapalli's technical skills: C, C++, Java, Python, Linux, Docker, RabbitMQ and AutoML."),
  component: Skills,
});
