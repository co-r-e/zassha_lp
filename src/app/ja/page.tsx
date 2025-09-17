import type { Metadata } from "next";
import { CtaSection } from "@/features/landing/CtaSection";
import { FaqSection } from "@/features/landing/FaqSection";
import { HeroSection } from "@/features/landing/HeroSection";
import { HighlightsSection } from "@/features/landing/HighlightsSection";
import { PersonasSection } from "@/features/landing/PersonasSection";
import { WorkflowSection } from "@/features/landing/WorkflowSection";
import { jaContent } from "@/features/landing/content";

const { hero, highlights, workflow, personas, faq } = jaContent;

export const metadata: Metadata = {
  title: "ZASSHA | AIマニュアル作成アシスタント",
  description:
    "画面録画をアップロードするだけで、ZASSHAがAIで操作手順を抽出し、Word・PowerPoint・Excel形式の手順書を自動生成します。",
  alternates: {
    canonical: "/ja",
    languages: {
      en: "/",
      ja: "/ja"
    }
  },
  openGraph: {
    title: "ZASSHA | AIマニュアル作成アシスタント",
    description:
      "録画するだけで手順書をAIが作成。ZASSHAはスクリーンショットや業務推測まで自動で整理し、DOCX/PPTX/XLSXに書き出します。",
    locale: "ja_JP",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "ZASSHA プロダクトプレビュー"
      }
    ]
  }
};

export default function Page() {
  return (
    <div lang="ja">
      <HeroSection {...hero} />
      <HighlightsSection items={highlights} />
      <WorkflowSection {...workflow} />
      <PersonasSection {...personas} />
      <FaqSection {...faq} />
      <CtaSection
        title="ZASSHAでマニュアル作成を自動化"
        description="リポジトリをクローンし、Gemini APIキーを設定するだけで、最新の手順書をいつでも生成できます。"
        primaryLabel={hero.primaryCta.label}
        ctaHref={hero.primaryCta.href}
      />
    </div>
  );
}
