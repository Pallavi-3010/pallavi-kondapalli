import { Cloud, Code2, Coffee, Sparkles } from "lucide-react";
import { siGithub } from "simple-icons";
import type { TechIcon } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

function Glyph({ path, className }: { path: string; className?: string | undefined }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("size-4 fill-current", className)}>
      <path d={path} />
    </svg>
  );
}

export function GithubIcon({ className }: { className?: string | undefined }) {
  return <Glyph path={siGithub.path} className={className} />;
}

export function LinkedinIcon({ className }: { className?: string | undefined }) {
  return <Glyph path={LINKEDIN_PATH} className={className} />;
}

const fallbacks: Record<string, typeof Code2> = { AutoML: Sparkles, AWS: Cloud, Java: Coffee };

export function TechGlyph({
  icon,
  name,
  className,
}: {
  icon: TechIcon;
  name: string;
  className?: string | undefined;
}) {
  if (icon) return <Glyph path={icon.path} className={className} />;
  const Fallback = fallbacks[name] ?? Code2;
  return <Fallback aria-hidden="true" className={cn("size-4", className)} />;
}
