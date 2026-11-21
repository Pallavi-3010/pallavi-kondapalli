import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";
import { TechGlyph } from "./icons";
import { Reveal } from "./Reveal";
import { Section, TechBadge } from "./Section";

export function Experience() {
  return (
    <Section id="experience" index="03" eyebrow="Career" title="Professional Experience">
      <ol className="relative border-l pl-8 md:pl-10">
        <li className="relative">
          <span className="absolute -left-[41px] top-1 grid size-5 place-items-center rounded-full border-4 border-background bg-primary md:-left-[49px]" />
          <Reveal>
            <article className="rounded-2xl border bg-card p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{experience.designation}</h3>
                  <p className="mt-1 flex items-center gap-2 text-base font-medium text-primary">
                    <Briefcase className="size-4" /> {experience.company}
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="size-4" /> {experience.location}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  <span className="size-1.5 rounded-full bg-primary" />
                  {experience.status}
                </span>
              </div>
              <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">{experience.description}</p>
              <div className="mt-6 border-t pt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Technologies & tools
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {experience.tools.map((t) => (
                    <li key={t.name}>
                      <TechBadge>
                        <TechGlyph icon={t.icon} name={t.name} className="size-3.5" />
                        {t.name}
                      </TechBadge>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        </li>
      </ol>
    </Section>
  );
}
