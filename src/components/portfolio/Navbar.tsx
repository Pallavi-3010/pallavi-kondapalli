import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever a new page opens.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b bg-background/80 shadow-card backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6" aria-label="Main">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-md bg-ink font-mono text-xs font-semibold text-ink-foreground transition-all duration-300 group-hover:-rotate-6 group-hover:bg-primary group-hover:text-primary-foreground">
            PK
          </span>
          <span className="text-sm font-semibold tracking-tight text-foreground">
            {profile.name}
            <span className="ml-0.5 text-primary transition-opacity duration-300 group-hover:opacity-0">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 rounded-full border bg-card/70 p-1 shadow-card backdrop-blur md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="group relative block rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-foreground data-[status=active]:bg-ink data-[status=active]:text-ink-foreground data-[status=active]:shadow-card"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:hidden" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-1 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="grid size-9 place-items-center rounded-full text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground"
          >
            <GithubIcon className="size-[18px]" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="grid size-9 place-items-center rounded-full text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground"
          >
            <LinkedinIcon className="size-[18px]" />
          </a>
        </div>

        <button
          type="button"
          className="grid size-9 place-items-center rounded-md text-foreground transition-colors hover:bg-secondary md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <ul className="animate-in fade-in slide-in-from-top-2 border-t px-6 py-3 duration-300 md:hidden">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground data-[status=active]:bg-ink data-[status=active]:text-ink-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
