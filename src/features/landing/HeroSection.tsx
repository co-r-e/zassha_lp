import { Button } from "@/components/ui/Button";

interface HeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  videoSrc: string;
}

export function HeroSection({ eyebrow, title, description, primaryCta, secondaryCta, videoSrc }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(78,70,229,0.2),transparent_60%)]" aria-hidden />
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-6 pb-20 pt-16 lg:flex-row lg:gap-16 lg:pt-24">
        <div className="w-full lg:max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 text-lg text-slate-300 md:text-xl">{description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={primaryCta.href} targetBlank>
              {primaryCta.label}
            </Button>
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="secondary" targetBlank>
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
        <div className="w-full lg:flex-1">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-slate-900">
            <video
              className="h-full w-full object-cover"
              src={videoSrc}
              controls
              preload="metadata"
              playsInline
              loop
              muted
              autoPlay
            />
          </div>
        </div>
      </div>
    </section>
  );
}
