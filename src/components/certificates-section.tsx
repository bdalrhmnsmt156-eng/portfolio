"use client";

import { useMemo, useState } from "react";
import { certData, type CertItem } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RichHtml } from "@/components/rich-html";

export function CertificatesSection() {
  const [active, setActive] = useState<CertItem | null>(null);
  const groups = certData;
  const src = useMemo(() => (active ? `/certs/${active.image}.jpg` : ""), [active]);

  return (
    <section id="certificates" className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Issued credentials</p>
        <h2 className="mt-2 font-display text-3xl uppercase sm:text-4xl">Certificates</h2>
        <p className="mt-3 max-w-xl text-sm text-muted">Seventeen scans — click any card to open the full certificate.</p>

        <div className="mt-12 space-y-12">
          {groups.map((group) => (
            <div key={group.group}>
              <div className="mb-4 flex items-center gap-3">
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{group.group}</h3>
                <span className="h-px flex-1 bg-border" />
                <span className="font-mono text-[11px] tabular-nums text-subtle">{group.items.length}</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActive(item)}
                    className="group overflow-hidden rounded-2xl border border-border bg-surface text-left shadow-[var(--shadow-border)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-bg">
                      <img
                        src={`/certs/${item.image}.jpg`}
                        alt=""
                        className="h-full w-full object-cover object-top opacity-90 transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-semibold leading-snug text-fg">{item.title}</p>
                      <p className="mt-1.5 text-xs text-muted">{item.issuer}</p>
                      <p className="mt-1 font-mono text-[11px] tabular-nums text-subtle">{item.date}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-3xl">
          {active ? (
            <>
              <DialogHeader>
                <DialogTitle className="normal-case tracking-normal">{active.title}</DialogTitle>
                <DialogDescription className="sr-only">{active.issuer}</DialogDescription>
              </DialogHeader>
              <RichHtml as="p" html={active.desc} className="text-sm text-muted" />
              <div className="overflow-hidden rounded-xl border border-border bg-bg">
                <img src={src} alt={`Certificate: ${active.title}`} className="w-full object-contain" />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline">{active.issuer}</Badge>
                <Badge variant="mute">{active.date}</Badge>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
