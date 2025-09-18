"use client";

import Image from "next/image";
import { useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  videoSrc: string;
}

export function HeroSection({ eyebrow, title, description, primaryCta, videoSrc }: HeroProps) {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y, active: true });
  };

  const handlePointerLeave = () => {
    setSpotlight((prev) => ({ ...prev, active: false }));
  };

  return (
    <section
      className="relative overflow-hidden bg-neutral-950"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-blinds" aria-hidden />
        <div
          className="absolute h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-white/35 via-zinc-600/10 to-transparent blur-3xl transition-opacity duration-300"
          style={{
            left: `${spotlight.x}%`,
            top: `${spotlight.y}%`,
            opacity: spotlight.active ? 1 : 0,
          }}
        />
      </div>
      <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-10 px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:max-w-6xl lg:flex-row lg:gap-16 lg:pt-24">
        <div className="order-2 w-full space-y-6 text-center lg:order-1 lg:max-w-xl lg:space-y-8 lg:text-left">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-zinc-400">{eyebrow}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="text-base text-zinc-400 sm:text-lg md:text-xl">{description}</p>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button href={primaryCta.href} targetBlank>
              {primaryCta.label}
            </Button>
            <a
              href="https://www.producthunt.com/products/zassha?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-zassha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Image
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1015671&theme=light&t=1758164064047"
                alt="ZASSHA on Product Hunt"
                width={250}
                height={54}
                className="h-12 w-auto"
                loading="lazy"
                unoptimized
              />
            </a>
          </div>
        </div>
        <div className="order-1 w-full lg:order-2 lg:flex-1">
          <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-3xl bg-neutral-900 shadow-[0_25px_60px_-35px_rgba(15,15,15,0.8)] sm:mb-10">
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
