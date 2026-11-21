import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function Section({
  id,
  index,
  eyebrow,
  title,
  children,
  className,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("py-20 md:py-28", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {index} <span className="text-muted-foreground">/ {eyebrow}</span>
          </p>
          <h2
            id={`${id}-title`}
            className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {title}
          </h2>
        </Reveal>
        <div className="mt-12">{children}</div>
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
