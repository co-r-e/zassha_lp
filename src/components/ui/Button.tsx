import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  targetBlank?: boolean;
}

export function Button({ href, children, variant = "primary", targetBlank = false }: ButtonProps) {
  const baseClasses =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:content-['']";
  const variantClasses =
    variant === "primary"
      ? "bg-zinc-100 text-neutral-900 focus-visible:outline-zinc-100 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_28px_48px_-24px_rgba(255,255,255,0.85)] hover:bg-white after:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.55),transparent_65%)] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
      : "border border-white/15 bg-transparent text-zinc-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-white/40 hover:bg-white/10 focus-visible:outline-white";

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses}`}
      target={targetBlank ? "_blank" : undefined}
      rel={targetBlank ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
