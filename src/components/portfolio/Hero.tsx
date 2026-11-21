import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import photo from "@/assets/pallavi-kondapalli.jpeg.asset.json";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Reveal } from "./Reveal";
import { TypedName } from "./TypedName";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 md:pt-32">
      <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_65%)]" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground shadow-card">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Junior Software Developer at Midh Technologies
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              <TypedName
                first={profile.name.split(" ")[0] ?? ""}
                last={profile.name.split(" ").slice(1).join(" ")}
              />
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Professional headline">
              {profile.headline.map((h) => (
                <li
                  key={h}
                  className="rounded-md border border-primary/20 bg-accent px-2.5 py-1 font-mono text-xs text-accent-foreground"
                >
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {profile.intro}
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/projects">
                  View My Projects <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/contact">Contact Me</Link>
              </Button>
              <div className="ml-1 flex items-center gap-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="grid size-11 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <GithubIcon className="size-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="grid size-11 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <LinkedinIcon className="size-5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mx-auto w-full max-w-sm lg:max-w-none">
          <figure className="relative">
            <div className="absolute -inset-3 rounded-[1.75rem] border border-dashed border-primary/25" />
            <div className="relative overflow-hidden rounded-3xl border bg-card shadow-soft">
              <img
                src={photo.url}
                alt="Portrait of Pallavi Kondapalli"
                width={1003}
                height={1569}
                className="aspect-[4/5] w-full object-cover object-top"
                fetchPriority="high"
              />
            </div>
            <figcaption className="absolute -bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-xl border bg-card/95 px-4 py-3 shadow-card backdrop-blur">
              <div>
                <p className="text-sm font-semibold text-foreground">Pallavi Kondapalli</p>
                <p className="text-xs text-muted-foreground">Software Developer</p>
              </div>
              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="size-3.5 text-primary" /> Hyderabad
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
