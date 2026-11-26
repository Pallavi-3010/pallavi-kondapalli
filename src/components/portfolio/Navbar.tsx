import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Close the mobile menu whenever a new page opens.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/15 bg-card shadow-card">
      <nav
        className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-4 sm:px-6 min-[1100px]:flex min-[1100px]:gap-12 min-[1100px]:px-8"
        aria-label="Main"
      >
        <Link to="/" className="group flex min-w-0 items-center gap-3 min-[1100px]:shrink-0" aria-label="Home">
          <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-ink font-mono text-sm font-semibold text-ink-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground md:size-11">
            PK
          </span>
          {/* Name and role share one line so the brand sits level with the menu. */}
          <span className="flex min-w-0 items-center gap-2.5 leading-none">
            <span className="truncate text-sm font-semibold text-foreground sm:text-base">
              {profile.name}
            </span>
            <span aria-hidden="true" className="hidden h-4 w-px shrink-0 bg-border sm:block" />
            <span className="hidden shrink-0 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 group-hover:text-primary sm:block">
              Software Developer
            </span>
          </span>
        </Link>

        <ul className="hidden min-w-0 flex-1 items-center gap-1 rounded-full border border-primary/15 bg-secondary/50 p-1.5 min-[1100px]:flex">
          {navLinks.map((link) => (
            <li key={link.to} className="min-w-0 flex-1">
              <Link
                to={link.to}
                className="group block rounded-full px-3 py-2.5 text-center text-[13px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[status=active]:bg-ink data-[status=active]:text-ink-foreground"
              >
                <span className="relative inline-block">
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:hidden"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Button asChild variant="default" className="hidden shrink-0 rounded-full bg-ink px-5 text-ink-foreground hover:bg-primary hover:text-primary-foreground xl:inline-flex">
        <Link to="/contact">
          Let&apos;s talk
          <ArrowUpRight className="size-3.5" />
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
        <ul id="mobile-navigation" className="max-h-[calc(100svh-5rem)] space-y-1 overflow-y-auto border-t px-4 pb-4 pt-2 min-[1100px]:hidden">
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
