import { profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">© 2026 Pallavi Kondapalli. All Rights Reserved.</p>
        <div className="flex items-center gap-1">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="grid size-10 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            <GithubIcon className="size-[18px]" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="grid size-10 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            <LinkedinIcon className="size-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
