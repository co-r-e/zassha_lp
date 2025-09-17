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
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const variantClasses =
    variant === "primary"
      ? "bg-zinc-100 text-neutral-900 hover:bg-white focus-visible:outline-zinc-100"
      : "border border-white/15 bg-transparent text-zinc-200 hover:border-white/40 focus-visible:outline-white";

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
