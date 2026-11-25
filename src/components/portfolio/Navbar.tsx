import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
        className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-4 sm:px-6 min-[1100px]:flex min-[1100px]:gap-12 min-[1100px]:px-8"
        aria-label="Main"
      >
        <Link to="/" className="group flex min-w-0 items-center gap-3 min-[1100px]:shrink-0" aria-label="Home">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ink font-mono text-sm font-semibold text-ink-foreground shadow-card transition-all duration-300 group-hover:-rotate-6 group-hover:bg-primary group-hover:text-primary-foreground md:size-11">
            PK
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="text-sm font-semibold text-foreground sm:text-base">
              {profile.name}
            </span>
            <span className="mt-1.5 hidden text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 group-hover:text-primary sm:block">
              Software Developer
            </span>
          </span>
        </Link>

        <ul className="hidden min-w-0 flex-1 items-center gap-1 rounded-full border bg-card/70 p-1.5 shadow-card backdrop-blur min-[1100px]:flex">
          {navLinks.map((link) => (
            <li key={link.to} className="min-w-0 flex-1">
              <Link
                to={link.to}
                className="group relative block rounded-full px-3 py-2.5 text-center text-[13px] font-medium text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[status=active]:bg-ink data-[status=active]:text-ink-foreground data-[status=active]:shadow-card"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:hidden" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Button asChild variant="hero" className="group hidden shrink-0 rounded-full bg-ink px-5 text-ink-foreground xl:inline-flex">
        <Link to="/contact">
          Let&apos;s talk
          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        </Button>

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="size-11 shrink-0 rounded-lg bg-card/70 text-foreground min-[1100px]:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </nav>

      {open && (
        <ul id="mobile-navigation" className="animate-in fade-in slide-in-from-top-2 max-h-[calc(100svh-5rem)] space-y-1 overflow-y-auto border-t px-4 pb-4 pt-2 duration-300 min-[1100px]:hidden">
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
