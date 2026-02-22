import { cn } from "@/lib/utils";

export function Heading({
  label,
  title,
  description,
  className,
}: {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      {label && (
        <p className="mb-2 font-mono text-sm text-accent">{label}</p>
      )}
      <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
      {description && <p className="mt-4 text-muted">{description}</p>}
    </div>
  );
}
