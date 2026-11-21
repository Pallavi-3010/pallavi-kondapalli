import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/portfolio";
import { buildContactMailto } from "@/lib/contact";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const channels = [
  { label: "GitHub", value: "github.com/Pallavi-3010", href: profile.github, Icon: GithubIcon },
  { label: "LinkedIn", value: "in/pallavi-kondapalli", href: profile.linkedin, Icon: LinkedinIcon },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const canSend = Boolean(profile.email);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const href = buildContactMailto(profile.email, form);
    if (href) window.location.href = href;
  };

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <Section id="contact" index="06" eyebrow="Get in touch" title="Let's Connect" className="bg-muted/60">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            I am always interested in connecting with technology professionals, exploring new
            opportunities, and learning about innovative projects.
          </p>
          <ul className="mt-8 space-y-3">
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-xl border bg-card p-4 shadow-card transition-all hover:border-primary/30 hover:shadow-card-hover"
                >
                  <span className="grid size-10 place-items-center rounded-lg bg-secondary text-secondary-foreground">
                    <Icon className="size-[18px]" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs text-muted-foreground">{label}</span>
                    <span className="block text-sm font-medium text-foreground">{value}</span>
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4 rounded-xl border bg-card p-4 shadow-card">
              <span className="grid size-10 place-items-center rounded-lg bg-secondary text-secondary-foreground">
                <Mail className="size-[18px]" />
              </span>
              <span className="flex-1">
                <span className="block text-xs text-muted-foreground">Email</span>
                {profile.email ? (
                  <a href={`mailto:${profile.email}`} className="block text-sm font-medium text-foreground hover:text-primary">
                    {profile.email}
                  </a>
                ) : (
                  <span className="block text-sm font-medium text-muted-foreground">Coming soon</span>
                )}
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border bg-card p-6 shadow-card md:p-8"
            aria-describedby="contact-note"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required value={form.name} onChange={set("name")} autoComplete="name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required value={form.email} onChange={set("email")} autoComplete="email" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" required value={form.subject} onChange={set("subject")} />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required rows={5} value={form.message} onChange={set("message")} />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p id="contact-note" className="text-xs text-muted-foreground">
                {canSend
                  ? "Opens your email app with this message ready to send."
                  : "Messaging opens soon — reach out on LinkedIn meanwhile."}
              </p>
              <Button type="submit" variant="hero" size="lg" disabled={!canSend}>
                Send Message <Send />
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
