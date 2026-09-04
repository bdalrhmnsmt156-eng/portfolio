import { ArrowDownRight, MapPin } from "lucide-react";
import { ABOUT, PROFILE } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { DownloadCvButton } from "@/components/download-cv-button";
import { RichHtml } from "@/components/rich-html";

const STATS = [
  { value: "17", label: "Credentials" },
  { value: "6", label: "Domains" },
  { value: "4", label: "Projects" },
] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-full max-w-2xl -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <p className="mb-6 flex items-center gap-2 font-mono text-xs text-muted">
          <span className="inline-block size-2 animate-pulse bg-accent" />
          {PROFILE.eyebrow}
        </p>

        <h1 className="font-display text-display uppercase leading-[0.92] tracking-tight">
          <span className="block border-l-4 border-accent pl-4 sm:pl-6">{PROFILE.nameLines[0]}</span>
          <span className="mt-1 block border-l-4 border-accent/40 pl-4 text-gradient-accent sm:pl-6">
            {PROFILE.nameLines[1]}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl font-mono text-sm text-muted sm:text-base">// {PROFILE.role}</p>

        <div className="mt-3 flex items-center gap-2 text-sm text-subtle">
          <MapPin className="size-3.5" />
          {PROFILE.location}
        </div>

        <RichHtml as="p" html={ABOUT} className="mt-8 max-w-2xl text-base text-muted" />

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <DownloadCvButton size="lg" />
          <Button asChild variant="outline" size="lg">
            <a href="#projects">
              View projects
              <ArrowDownRight className="size-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>

        <dl className="mt-14 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-surface px-4 py-5 text-center sm:px-6">
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">{stat.label}</dt>
              <dd className="mt-1 font-display text-3xl tabular-nums text-fg">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
