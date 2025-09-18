import type { Metadata } from "next";
import Script from "next/script";
import { SiteShell } from "@/components/SiteShell";
import { structuredData, commonMetadata } from "@/lib/seo";
import { inter, plusJakarta } from "@/lib/fonts";

export const metadata: Metadata = commonMetadata("ja");

const jsonLd = structuredData();

export default function JaLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <head>
        <Script id="structured-data-ja" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
      </head>
      <body className="bg-neutral-950 text-zinc-100 antialiased">
        <SiteShell locale="ja">{children}</SiteShell>
      </body>
    </html>
  );
}
