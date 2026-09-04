import { ArrowUp } from "lucide-react";
import { CertificatesSection } from "@/components/certificates-section";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { NavBar } from "@/components/nav-bar";
import { ProjectsSection } from "@/components/projects-section";
import { ResumeSection } from "@/components/resume-section";
import { SkillsSection } from "@/components/skills-section";
import { Button } from "@/components/ui/button";

export function HomePage() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-bg text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <NavBar />
      <main id="main">
        <Hero />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 text-xs text-subtle sm:flex-row sm:items-center sm:px-6">
          <p>17 top credentials · updated 2026</p>
          <p className="font-mono">Abd Elrahman Esmat</p>
        </div>
      </footer>
      <Button
        asChild
        variant="outline"
        size="icon"
        className="fixed bottom-5 left-5 z-30 size-12 rounded-full border-border bg-surface/90 shadow-[var(--shadow-border)] backdrop-blur"
      >
        <a href="#top" aria-label="Back to top">
          <ArrowUp className="size-4" />
        </a>
      </Button>
    </div>
  );
}
