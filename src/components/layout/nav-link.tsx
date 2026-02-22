import Link from "next/link";
import { cn } from "@/lib/utils";

export function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm text-muted transition-colors hover:text-foreground",
        className
      )}
    >
      {children}
    </Link>
  );
}
