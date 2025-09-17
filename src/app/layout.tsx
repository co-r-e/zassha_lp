import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { Inter, Plus_Jakarta_Sans as PlusJakartaSans } from "next/font/google";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = PlusJakartaSans({ subsets: ["latin"], variable: "--font-plus-jakarta" });

const siteName = "ZASSHA";
const siteDescription =
  "ZASSHA is an AI manual creation assistant that records your workflow, extracts steps automatically, and turns them into shareable guides.";

export const metadata: Metadata = {
  title: {
    default: `${siteName} | AI Manual Assistant`,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  metadataBase: new URL("https://co-r-e.net"),
  openGraph: {
    title: `${siteName} | AI Manual Assistant`,
    description: siteDescription,
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "ZASSHA product preview"
      }
    ],
    siteName,
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | AI Manual Assistant`,
    description: siteDescription,
    images: ["/ogp.png"],
    site: "@co_r_e_inc"
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ja: "/ja"
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <body className="bg-slate-950 text-slate-100 antialiased">
        <div className="min-h-screen flex flex-col bg-slate-950">
          <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-slate-950/80">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="flex items-center" aria-label="ZASSHA home">
                <Image src="/logo.svg" alt="ZASSHA" width={148} height={44} priority className="h-10 w-auto" />
              </Link>
              <nav className="flex items-center gap-6 text-sm text-slate-200">
                <Link href="#features" className="hover:text-white transition">
                  Features
                </Link>
                <Link href="#workflow" className="hover:text-white transition">
                  Workflow
                </Link>
                <Link href="#faq" className="hover:text-white transition">
                  FAQ
                </Link>
                <LanguageSwitcher />
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/10 bg-slate-950">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
              <Link href="/" className="flex items-center justify-center md:justify-start" aria-label="ZASSHA">
                <Image src="/logo.svg" alt="ZASSHA" width={160} height={48} className="h-12 w-auto" />
              </Link>
              <div className="flex flex-col items-center gap-2 text-sm text-slate-300 md:items-end">
                <Link href="https://co-r-e.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Company
                </Link>
                <Link
                  href="https://co-r-e.net/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Contact
                </Link>
                <p className="mt-2 text-xs text-slate-500">© 2025 CORe Inc. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
