import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";
import { GithubIcon, TechGlyph } from "./icons";
import { Reveal } from "./Reveal";
import { Section, TechBadge } from "./Section";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <Section id="projects" index="04" eyebrow="Selected work" title="Projects">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 80} className={cn(i === 0 && "md:col-span-2")}>
            <article className="group flex h-full flex-col rounded-2xl border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover md:p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <TechGlyph icon={p.icon} name={p.title} className="size-5" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">{p.title}</h3>
              {p.subtitle && <p className="mt-1 text-sm font-medium text-primary">{p.subtitle}</p>}
              <p className={cn("mt-4 leading-relaxed text-muted-foreground", i === 0 && "max-w-3xl")}>
                {p.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2 pt-1">
                {p.stack.map((s) => (
                  <li key={s}>
                    <TechBadge>{s}</TechBadge>
                  </li>
                ))}
              </ul>
              {p.repoUrl && (
                <div className="mt-auto pt-6">
                  <Button asChild variant="outline" size="sm">
                    <a href={p.repoUrl} target="_blank" rel="noreferrer">
                      <GithubIcon /> View on GitHub <ArrowUpRight />
                    </a>
                  </Button>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
