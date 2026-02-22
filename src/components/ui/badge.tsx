import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "rounded-full bg-background px-2.5 py-0.5 font-mono text-xs text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
