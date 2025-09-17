import { Button } from "@/components/ui/Button";

interface CtaSectionProps {
  title: string;
  description: string;
  primaryLabel: string;
  ctaHref: string;
}

export function CtaSection({ title, description, primaryLabel, ctaHref }: CtaSectionProps) {
  return (
    <section className="pb-20 pt-16 sm:pb-24 sm:pt-20">
      <div className="mx-auto w-full max-w-4xl rounded-[2.5rem] border border-white/15 bg-gradient-to-r from-zinc-100/10 via-zinc-300/5 to-transparent px-6 py-14 text-center sm:px-8 sm:py-16">
        <h2 className="text-3xl font-semibold text-zinc-50 sm:text-4xl">{title}</h2>
        <p className="mt-4 text-base text-zinc-400 sm:text-lg">{description}</p>
        <div className="mt-8 flex items-center justify-center">
          <Button href={ctaHref} targetBlank>
            {primaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
