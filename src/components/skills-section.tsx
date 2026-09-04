import { SKILLS } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Core competencies</p>
        <h2 className="mt-2 font-display text-3xl uppercase sm:text-4xl">Skills</h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Six domains, mapped to the same 17 credentials that sit further down the page.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill) => (
            <article
              key={skill.id}
              className="rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)]"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.08em]">{skill.title}</h3>
                <span className="font-mono text-xs tabular-nums text-muted">{skill.count}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.chips.map((chip) => (
                  <Badge key={chip} variant="mute">
                    {chip}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
