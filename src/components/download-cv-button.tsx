import { Download } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function DownloadCvButton({
  className,
  size = "default",
}: {
  className?: string;
  size?: "default" | "lg";
}) {
  return (
    <a
      href={PROFILE.cvPath}
      download={PROFILE.cvFilename}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-accent font-medium text-accent-fg shadow-[0_14px_32px_-14px_color-mix(in_oklab,var(--color-accent)_80%,transparent)] transition-[transform,box-shadow] duration-200 ease-[var(--ease-out-smooth)] hover:shadow-[0_18px_40px_-12px_color-mix(in_oklab,var(--color-accent)_90%,transparent)] active:scale-[0.98]",
        size === "lg" ? "h-14 px-7 text-base" : "h-11 px-5 text-sm",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent-fg/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
      <Download className={size === "lg" ? "size-5" : "size-4"} />
      Download CV
    </a>
  );
}
