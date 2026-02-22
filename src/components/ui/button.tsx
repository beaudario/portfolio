import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-hover",
  secondary:
    "border border-border text-foreground hover:bg-surface",
  ghost:
    "text-muted hover:text-foreground hover:bg-surface",
};

interface ButtonProps {
  variant?: keyof typeof variants;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  href,
  external,
  children,
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors",
    variants[variant],
    className
  );

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
