import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 8);
      setProgress(max > 4 ? Math.min(1, y / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close the mobile menu whenever a new page opens.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b bg-background/85 shadow-card backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      {/* Reading progress along the bottom edge of the bar. */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-[2px] overflow-hidden">
        <div
          className="h-full bg-primary/70 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav
        className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-6 md:h-20 md:gap-8 md:px-8 lg:px-12"
        aria-label="Main"
      >
        <Link to="/" className="group flex shrink-0 items-center gap-3" aria-label="Home">
          <span className="grid size-10 place-items-center rounded-xl bg-ink font-mono text-sm font-semibold text-ink-foreground shadow-card transition-all duration-300 group-hover:-rotate-6 group-hover:bg-primary group-hover:text-primary-foreground md:size-11">
            PK
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight text-foreground md:text-base">
              {profile.name}
            </span>
            <span className="mt-1.5 hidden text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 group-hover:text-primary sm:block">
              Software Developer
            </span>
          </span>
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-1 rounded-full border bg-card/70 p-1.5 shadow-card backdrop-blur md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="group relative block rounded-full px-4 py-2 text-[13px] font-medium tracking-wide text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-foreground data-[status=active]:bg-ink data-[status=active]:text-ink-foreground data-[status=active]:shadow-card lg:px-6"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:hidden" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="group hidden shrink-0 items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium tracking-wide text-ink-foreground shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-card-hover md:inline-flex"
        >
          Let&apos;s talk
          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        <button
          type="button"
          className="ml-auto grid size-10 place-items-center rounded-lg border bg-card/70 text-foreground transition-colors hover:bg-secondary md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <ul className="animate-in fade-in slide-in-from-top-2 space-y-1 border-t px-4 pb-4 pt-2 duration-300 md:hidden">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground data-[status=active]:bg-ink data-[status=active]:text-ink-foreground"
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
