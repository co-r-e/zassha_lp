import type { Metadata } from "next";
import { metadataBase, siteUrl, withSiteUrl } from "@/lib/url";

interface PageSeo {
  en: {
    title: string;
    description: string;
  };
  ja: {
    title: string;
    description: string;
  };
}

export const defaultSeo: PageSeo = {
  en: {
    title: "AI Manual Assistant | ZASSHA",
    description:
      "ZASSHA turns screen recordings into shareable SOPs. Analyze videos with Gemini, capture steps automatically, and export polished manuals in minutes."
  },
  ja: {
    title: "ZASSHA | AIマニュアル生成アシスタント",
    description:
      "ZASSHAは画面録画をAIが解析し、手順書を数分で自動生成。Gemini API連携で操作ステップやスクリーンショットを抽出し、Word・PowerPoint・Excel形式で出力できます。"
  }
};

export const commonMetadata = (locale: "en" | "ja"): Metadata => {
  const { title, description } = locale === "ja" ? defaultSeo.ja : defaultSeo.en;
 const ogpImage = withSiteUrl("/ogp.png");
  const favicon = withSiteUrl("/favicon.svg");

  return {
    title,
    description,
    metadataBase,
    openGraph: {
      title,
      description,
      url: withSiteUrl(locale === "ja" ? "/ja/" : "/"),
      siteName: "ZASSHA",
      images: [
        {
          url: ogpImage,
          width: 1200,
          height: 630,
          alt: "ZASSHA product preview"
        }
      ],
      locale: locale === "ja" ? "ja_JP" : "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      site: "@co_r_e_inc",
      title,
      description,
      images: [ogpImage]
    },
    alternates: {
      canonical: withSiteUrl(locale === "ja" ? "/ja/" : "/"),
      languages: {
        en: withSiteUrl("/"),
        ja: withSiteUrl("/ja/")
      }
    },
    icons: {
      icon: favicon,
      shortcut: favicon,
      apple: favicon
    }
  };
};

export const structuredData = () => {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://co-r-e.net/#organization",
    name: "CORe Inc.",
    url: siteUrl,
    logo: withSiteUrl("/logo.svg"),
    sameAs: ["https://github.com/co-r-e", "https://co-r-e.net"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@co-r-e.net",
        availableLanguage: ["en", "ja"]
      }
    ]
  };

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ZASSHA",
    operatingSystem: "any",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    url: withSiteUrl("/"),
    image: withSiteUrl("/ogp.png"),
    description: defaultSeo.en.description,
    inLanguage: ["en", "ja"]
  };

  return [organization, softwareApplication];
};
