"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface LanguageOption {
  code: "EN" | "JA";
  label: string;
  href: string;
}

const options: LanguageOption[] = [
  { code: "EN", label: "English", href: "/" },
  { code: "JA", label: "日本語", href: "/ja" }
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const current = useMemo(() => (pathname?.startsWith("/ja") ? options[1] : options[0]), [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!open) return;
      const target = event.target as Node;
      if (triggerRef.current?.contains(target) || menuRef.current?.contains(target)) {
        return;
      }
      setOpen(false);
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const selectLanguage = (option: LanguageOption) => {
    setOpen(false);
    if (pathname !== option.href) {
      router.push(option.href);
    }
  };

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-100 transition hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <GlobeIcon className="h-3 w-3 text-zinc-200 sm:h-4 sm:w-4" />
        <span className="tracking-[0.08em] sm:tracking-[0.12em]">{current.code}</span>
        <ChevronDownIcon className={`h-3 w-3 text-zinc-300 transition sm:h-4 sm:w-4 ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-40 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/95 backdrop-blur shadow-xl"
        >
          {options.map((option) => (
            <button
              key={option.code}
              type="button"
              className={`flex w-full items-center justify-between px-4 py-3 text-sm transition hover:bg-white/10 ${
                option.code === current.code ? "text-white" : "text-zinc-300"
              }`}
              onClick={() => selectLanguage(option)}
            >
              <span>{option.label}</span>
              <span className="text-xs uppercase text-zinc-400">{option.code}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.584l3.71-3.353a.75.75 0 1 1 1.02 1.1l-4.24 3.834a.75.75 0 0 1-1.02 0L5.25 8.33a.75.75 0 0 1-.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}
