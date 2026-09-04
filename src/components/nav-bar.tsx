"use client";

import { useState } from "react";
import { Menu, Shield } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { DownloadCvButton } from "@/components/download-cv-button";

const LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
] as const;

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 text-fg no-underline">
          <span className="inline-flex size-9 items-center justify-center rounded-md border border-accent/40 bg-accent/10">
            <Shield className="size-4 text-accent" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[11px] uppercase tracking-[0.16em]">Abd Elrahman</span>
            <span className="font-mono text-[10px] text-muted">Esmat · Portfolio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <DownloadCvButton />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="font-display text-left text-lg uppercase">{PROFILE.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-md px-3 py-3 text-base text-fg transition-colors hover:bg-surface-2"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-8">
              <DownloadCvButton className="w-full" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
