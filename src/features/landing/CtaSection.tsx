import { Button } from "@/components/ui/Button";

interface CtaSectionProps {
  title: string;
  description: string;
  primaryLabel: string;
  ctaHref: string;
}

export function CtaSection({ title, description, primaryLabel, ctaHref }: CtaSectionProps) {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-4xl rounded-[2.5rem] border border-primary/40 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent px-8 py-16 text-center">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
        <p className="mt-4 text-base text-slate-200 md:text-lg">{description}</p>
        <div className="mt-8 flex items-center justify-center">
          <Button href={ctaHref} targetBlank>
            {primaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
