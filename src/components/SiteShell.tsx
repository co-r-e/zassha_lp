import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { withBasePath } from "@/lib/basePath";

interface SiteShellProps {
  locale: "en" | "ja";
  children: ReactNode;
}

const FOOTER_COPY = {
  en: {
    homeHref: "/",
    companyLabel: "Company",
    contactLabel: "Contact"
  },
  ja: {
    homeHref: "/ja",
    companyLabel: "企業情報",
    contactLabel: "お問い合わせ"
  }
};

export function SiteShell({ locale, children }: SiteShellProps) {
  const logoSrc = withBasePath("/logo.svg");
  const footerCopy = FOOTER_COPY[locale];

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950">
      <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-neutral-950/80">
        <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between px-4 py-4 sm:px-6">
          <Link href={footerCopy.homeHref} className="flex items-center" aria-label="ZASSHA home">
            <Image src={logoSrc} alt="ZASSHA" width={148} height={44} priority className="h-10 w-auto" />
          </Link>
          <nav className="flex items-center gap-4 text-sm text-zinc-300">
            <LanguageSwitcher />
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
          <Link href={footerCopy.homeHref} className="flex items-center justify-center md:justify-start" aria-label="ZASSHA">
            <Image src={logoSrc} alt="ZASSHA" width={160} height={48} className="h-12 w-auto" />
          </Link>
          <div className="flex flex-col items-center gap-2 text-sm text-zinc-400 md:items-end">
            <Link href="https://co-r-e.net" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
              {footerCopy.companyLabel}
            </Link>
            <Link
              href="https://co-r-e.net/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              {footerCopy.contactLabel}
            </Link>
            <p className="mt-2 text-xs text-zinc-500">© 2025 CORe Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
