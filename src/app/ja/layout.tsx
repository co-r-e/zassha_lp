import type { Metadata } from "next";
import Script from "next/script";
import { commonMetadata, structuredData } from "@/lib/seo";

export const metadata: Metadata = commonMetadata("ja");

const jsonLd = structuredData();

export default function JaLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Language" content="ja" />
        <Script id="structured-data-ja" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
