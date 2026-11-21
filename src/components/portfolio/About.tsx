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
          <div className="overflow-hidden rounded-2xl border border-ink-border bg-ink shadow-soft">
            <div className="flex items-center gap-1.5 border-b border-ink-border px-4 py-3">
              <span className="size-2.5 rounded-full bg-ink-muted/40" />
              <span className="size-2.5 rounded-full bg-ink-muted/40" />
              <span className="size-2.5 rounded-full bg-ink-muted/40" />
              <span className="ml-3 font-mono text-xs text-ink-muted">pallavi.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-ink-foreground">
              <code>
                <span className="text-code-accent">const</span> pallavi = {"{"}
                {"\n"}
                {aboutHighlights.map((h) => (
                  <span key={h.label}>
                    {"  "}
                    <span className="text-code-key">{h.label.toLowerCase().replace(/\s/g, "_")}</span>:{" "}
                    <span className="text-code-string">"{h.value}"</span>,{"\n"}
                  </span>
                ))}
                {"  "}
                <span className="text-code-key">learning</span>: <span className="text-code-accent">true</span>,
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
