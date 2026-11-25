import { about, aboutHighlights } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" index="01" eyebrow="Introduction" title="About Me">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={120}>
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {aboutHighlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card-hover"
              >
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">{h.label}</dt>
                <dd className="mt-1.5 font-semibold text-foreground">{h.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
