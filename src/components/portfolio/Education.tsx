import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" index="05" eyebrow="Academics" title="Education">
      <ol className="relative space-y-6 border-l pl-8 md:pl-10">
        {education.map((e, i) => (
          <li key={e.degree} className="relative">
            <span className="absolute -left-[41px] top-7 grid size-5 place-items-center rounded-full border-4 border-background bg-primary md:-left-[49px]" />
            <Reveal delay={i * 80}>
              <article className="flex flex-col gap-4 rounded-2xl border bg-card p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                    <GraduationCap className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{e.degree}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{e.institution}</p>
                  </div>
                </div>
                <div className="flex items-baseline gap-2 sm:flex-col sm:items-end sm:gap-0">
                  <span className="text-3xl font-semibold tracking-tight text-primary">{e.score}</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Aggregate</span>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
