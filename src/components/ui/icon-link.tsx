import { cn } from "@/lib/utils";

export function IconLink({
  href,
  label,
  children,
  className,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "rounded-lg border border-border p-2.5 text-muted transition-colors hover:border-accent hover:text-accent",
        className
      )}
    >
      {children}
    </a>
  );
}
