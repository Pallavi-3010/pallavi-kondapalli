import { skillGroups } from "@/data/portfolio";
import { TechGlyph } from "./icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" index="02" eyebrow="Toolkit" title="Technical Skills" className="bg-muted/60">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 60}
            className={group.skills.length > 2 ? "sm:col-span-2" : ""}
          >
            <div className="h-full rounded-2xl border bg-card p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover">
              <h3 className="text-sm font-medium text-muted-foreground">{group.title}</h3>
              <ul
                className={
                  group.skills.length > 2 ? "mt-5 grid grid-cols-2 gap-3 md:grid-cols-4" : "mt-5 flex flex-wrap gap-3"
                }
              >
                {group.skills.map((s) => (
                  <li
                    key={s.name}
                    className="group flex items-center gap-3 rounded-xl border bg-background px-4 py-3 transition-colors hover:border-primary/40"
                  >
                    <span className="grid size-9 place-items-center rounded-lg bg-secondary text-secondary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <TechGlyph icon={s.icon} name={s.name} className="size-[18px]" />
                    </span>
                    <span className="font-medium text-foreground">{s.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
