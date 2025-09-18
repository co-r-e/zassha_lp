import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";
import { structuredData, commonMetadata } from "@/lib/seo";
import { inter, plusJakarta } from "@/lib/fonts";

export const metadata: Metadata = commonMetadata("en");

const jsonLd = structuredData();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <head>
        <Script id="structured-data" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
      </head>
      <body className="bg-neutral-950 text-zinc-100 antialiased">
        <SiteShell locale="en">{children}</SiteShell>
      </body>
    </html>
  );
}
