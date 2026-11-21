import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Pallavi Kondapalli — Software Developer",
      "Portfolio of Pallavi Kondapalli, Junior Software Developer at Midh Technologies, Hyderabad. Java, Python, Linux, Docker and RabbitMQ.",
    ),
  component: Hero,
});
