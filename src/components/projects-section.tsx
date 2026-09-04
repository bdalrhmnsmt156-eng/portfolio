"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Box, Building2, Landmark, Plane, ShoppingBag } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RichHtml } from "@/components/rich-html";
import { cn } from "@/lib/utils";

const ICONS: Record<string, typeof Building2> = {
  "company-app": Building2,
  "bank-account": Landmark,
  "flight-booking": Plane,
  "ecommerce-polymorphism": ShoppingBag,
};

function badgeLabel(raw: string) {
  return raw.replace(/^[^\p{L}\p{N}]+/u, "").trim();
}

export function ProjectsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = useMemo(() => projects.find((p) => p.id === activeId) ?? null, [activeId]);

  return (
    <section id="projects" className="relative overflow-hidden border-b border-border py-20 sm:py-24">
      <div className="pointer-events-none absolute left-0 top-10 size-48 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 size-56 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Java & Python applications</p>
        <h2 className="mt-2 font-display text-3xl uppercase sm:text-4xl">Projects</h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Four OOP systems in floating bubbles — click any card for details, features, and source.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectBubble key={project.id} project={project} index={i} onOpen={() => setActiveId(project.id)} />
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActiveId(null)}>
        <DialogContent>
          {active ? <ProjectDetail project={active} /> : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ProjectBubble({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const Icon = ICONS[project.id] ?? Box;
  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn(
        "group relative flex min-h-[280px] flex-col items-start overflow-hidden rounded-bubble border border-border p-6 text-left shadow-[var(--shadow-border)] transition-[transform,box-shadow] duration-300 ease-[var(--ease-out-smooth)] bubble-sheen hover:-translate-y-1 hover:shadow-[var(--shadow-border-hover)] sm:p-8",
        index % 2 === 1 ? "md:translate-y-6" : "",
      )}
    >
      <span className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full border border-accent/20" />
      <span className="pointer-events-none absolute -right-4 -top-4 size-20 rounded-full border border-accent/10" />

      <span className="inline-flex size-14 items-center justify-center rounded-full border border-accent/30 bg-bg text-accent shadow-[0_0_0_8px_color-mix(in_oklab,var(--color-accent)_8%,transparent)]">
        <Icon className="size-6" />
      </span>

      <Badge variant="accent" className="mt-5">
        {badgeLabel(project.badge)}
      </Badge>

      <h3 className="mt-4 font-display text-2xl uppercase leading-tight tracking-tight">{project.titleEn}</h3>
      <p dir="auto" className="mt-1 font-mono text-sm text-muted">
        {project.title}
      </p>
      <p className="mt-3 line-clamp-3 text-sm text-muted">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="rounded-full border border-border bg-bg/60 px-2.5 py-1 font-mono text-[11px] text-muted">
            {t}
          </span>
        ))}
      </div>

      <span className="mt-auto inline-flex items-center gap-1 pt-6 text-xs font-medium uppercase tracking-[0.14em] text-subtle transition-colors group-hover:text-fg">
        View details
        <ArrowUpRight className="size-3.5" />
      </span>
    </button>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
      <DialogHeader>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{badgeLabel(project.badge)}</p>
        <DialogTitle>{project.titleEn}</DialogTitle>
        <p dir="auto" className="font-mono text-sm text-muted">
          {project.title}
        </p>
        <DialogDescription>{project.description}</DialogDescription>
      </DialogHeader>

      <ul className="grid gap-2 sm:grid-cols-2">
        {project.features.map((feature) => (
          <RichHtml
            key={feature}
            as="li"
            html={feature}
            className="rounded-lg border border-border bg-bg px-3 py-2.5 text-sm text-muted"
          />
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <Badge key={t} variant="mute">
            {t}
          </Badge>
        ))}
      </div>

      {project.code ? (
        <pre className="max-h-72 overflow-auto rounded-xl border border-border bg-bg p-4 font-mono text-[12px] leading-relaxed text-muted">
          <code>{project.code}</code>
        </pre>
      ) : project.github ? (
        <p className="rounded-xl border border-border bg-bg px-4 py-3 text-sm text-muted">
          Full source code is available in the public repository.
        </p>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
        <p dir="auto" className="text-xs text-subtle">
          {badgeLabel(project.initiative)}
        </p>
        {project.github ? (
          <Button asChild variant="github" size="sm">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
              <ArrowUpRight className="size-3.5" />
            </a>
          </Button>
        ) : null}
      </div>
    </>
  );
}
