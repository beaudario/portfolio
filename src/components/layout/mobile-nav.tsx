"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="text-muted hover:text-foreground transition-colors"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <nav id="mobile-nav" className="absolute left-0 right-0 top-full border-b border-border bg-background px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {links.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
