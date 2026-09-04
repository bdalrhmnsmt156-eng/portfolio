import { CV_FACTS, CV_HIGHLIGHTS, CV_SUMMARY } from "@/data/portfolio";
import { DownloadCvButton } from "@/components/download-cv-button";
import { RichHtml } from "@/components/rich-html";

export function ResumeSection() {
  return (
    <section id="resume" className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Professional summary</p>
            <h2 className="mt-2 font-display text-3xl uppercase sm:text-4xl">Resume / CV</h2>
          </div>
          <DownloadCvButton size="lg" />
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Profile</h3>
            <RichHtml as="p" html={CV_SUMMARY} className="mt-4 text-sm text-muted" />
            <dl className="mt-6 space-y-3">
              {CV_FACTS.map((fact) => (
                <div key={fact.label} className="grid gap-1 border-t border-border pt-3 sm:grid-cols-[8.5rem_1fr]">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">{fact.label}</dt>
                  <dd className="text-sm text-fg">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Key highlights</h3>
            <ul className="mt-4 space-y-3">
              {CV_HIGHLIGHTS.map((item) => (
                <li key={item.label} className="rounded-xl border border-border bg-bg px-4 py-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">{item.label}</p>
                  <p className="mt-1 text-sm text-muted">{item.value}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
