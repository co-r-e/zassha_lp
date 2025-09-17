import { CtaSection } from "@/features/landing/CtaSection";
import { FaqSection } from "@/features/landing/FaqSection";
import { HeroSection } from "@/features/landing/HeroSection";
import { HighlightsSection } from "@/features/landing/HighlightsSection";
import { PersonasSection } from "@/features/landing/PersonasSection";
import { WorkflowSection } from "@/features/landing/WorkflowSection";
import { enContent } from "@/features/landing/content";

export default function Page() {
  const { hero, highlights, workflow, personas, faq } = enContent;

  return (
    <>
      <HeroSection {...hero} />
      <HighlightsSection items={highlights} />
      <WorkflowSection {...workflow} />
      <PersonasSection {...personas} />
      <FaqSection {...faq} />
      <CtaSection
        title="Ready to turn recordings into living manuals?"
        description="Clone the repository, connect your Gemini API key, and publish your next standard operating procedure in minutes."
        primaryLabel={hero.primaryCta.label}
        ctaHref={hero.primaryCta.href}
      />
    </>
  );
}
