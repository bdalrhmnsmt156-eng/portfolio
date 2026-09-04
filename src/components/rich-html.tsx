import { cn } from "@/lib/utils";

const ALLOWED = /<\/?(strong|em|b|i)>/gi;

export function RichHtml({
  html,
  className,
  as: Tag = "span",
}: {
  html: string;
  className?: string;
  as?: "span" | "p" | "div" | "li";
}) {
  const safe = html.replace(/<(?!\/?(strong|em|b|i)\b)[^>]*>/gi, "").replace(ALLOWED, (m) => m.toLowerCase());
  return <Tag className={cn("[&_strong]:text-fg [&_strong]:font-semibold", className)} dangerouslySetInnerHTML={{ __html: safe }} />;
}
