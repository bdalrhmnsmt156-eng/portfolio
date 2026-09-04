"use client";

import { FormEvent, useState } from "react";
import { Check, Copy, Github, Linkedin, Mail, Send } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function copyEmail() {
    const mark = () => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    };
    if (navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(PROFILE.email).then(mark).catch(() => {
        mark();
      });
    } else {
      mark();
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [
      name ? `Name: ${name}` : "",
      from ? `From: ${from}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    const href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject || "Hello from your portfolio")}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <section id="contact" className="overflow-x-hidden py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Easy contact</p>
        <h2 className="mt-2 font-display text-3xl uppercase sm:text-4xl">Get in touch</h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Write a message in the box — it opens your email client, addressed to me. Or jump straight to GitHub and LinkedIn.
        </p>

        <div className="mt-10 grid min-w-0 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <form
            onSubmit={onSubmit}
            className="min-w-0 rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8"
          >
            <h3 className="font-display text-lg uppercase">Send a message</h3>
            <p className="mt-1 text-sm text-muted">Opens a ready-to-send email. Nothing is stored here.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Your email</Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <Label htmlFor="contact-subject">Subject</Label>
              <Input
                id="contact-subject"
                name="subject"
                placeholder="Internship / collaboration / hello"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="mt-4 space-y-2">
              <Label htmlFor="contact-message">Message</Label>
              <Textarea
                id="contact-message"
                name="message"
                required
                placeholder="Write a short note…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
              <Send className="size-4" />
              Open in email
            </Button>
          </form>

          <div className="flex min-w-0 flex-col gap-3">
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-20 min-w-0 items-center gap-4 overflow-hidden rounded-3xl bg-github px-5 py-4 text-github-fg shadow-[var(--shadow-border)] transition-[transform,filter] duration-200 hover:-translate-y-0.5 hover:brightness-125"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-github-fg/10">
                <Github className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-[0.16em] text-github-fg/55">GitHub</span>
                <span className="block truncate text-sm font-medium">{PROFILE.githubLabel}</span>
              </span>
            </a>

            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-20 min-w-0 items-center gap-4 overflow-hidden rounded-3xl bg-linkedin px-5 py-4 text-linkedin-fg transition-[transform,filter] duration-200 hover:-translate-y-0.5 hover:brightness-110"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-linkedin-fg/15">
                <Linkedin className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-[0.16em] text-linkedin-fg/70">LinkedIn</span>
                <span className="block truncate text-sm font-medium">{PROFILE.linkedinLabel}</span>
              </span>
            </a>

            <div className="flex min-h-20 min-w-0 items-center gap-4 overflow-hidden rounded-3xl bg-mail px-5 py-4 text-mail-fg">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-bg/20">
                <Mail className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs uppercase tracking-[0.16em] text-mail-fg/70">Email</span>
                <a href={`mailto:${PROFILE.email}`} className="block truncate text-sm font-medium text-mail-fg">
                  {PROFILE.email}
                </a>
              </span>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex size-11 items-center justify-center rounded-full bg-bg/20 text-mail-fg transition-colors hover:bg-bg/30"
                aria-label={copied ? "Copied" : "Copy email"}
              >
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              </button>
            </div>

            <p className="mt-2 px-1 font-mono text-[11px] leading-relaxed text-subtle">
              Prefer a direct mail client? The red card copies the address, or tap it to compose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
