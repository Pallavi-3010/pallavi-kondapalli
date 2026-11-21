import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { navLinks } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function Section({
  id,
  index,
  eyebrow,
  title,
  children,
  className,
  next = true,
}: {
  next?: boolean;
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("pt-32 pb-20 md:pt-40 md:pb-24", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {index} <span className="text-muted-foreground">/ {eyebrow}</span>
          </p>
          <h1
            id={`${id}-title`}
            className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {title}
          </h1>
        </Reveal>
        <div className="mt-12">{children}</div>
        {next && <NextPage current={id} />}
      </div>
    </section>
  );
}

export function TechBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border bg-background px-2.5 py-1 font-mono text-xs text-secondary-foreground">
      {children}
    </span>
  );
}

function NextPage({ current }: { current: string }) {
  const i = navLinks.findIndex((l) => l.to === `/${current}`);
  const nextLink = navLinks[i + 1];
  if (!nextLink) return null;
  return (
    <div className="mt-20 flex justify-end border-t pt-8">
      <Link
        to={nextLink.to}
        className="group inline-flex items-center gap-3 text-right"
      >
        <span>
          <span className="block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Next
          </span>
          <span className="block text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {nextLink.label}
          </span>
        </span>
        <span className="grid size-10 place-items-center rounded-full border bg-card transition-all group-hover:translate-x-1 group-hover:border-primary/40 group-hover:bg-accent group-hover:text-accent-foreground">
          <ArrowRight className="size-4" />
        </span>
      </Link>
    </div>
  );
}
