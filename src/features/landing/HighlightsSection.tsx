interface HighlightItem {
  title: string;
  description: string;
}

interface HighlightsSectionProps {
  items: HighlightItem[];
}

export function HighlightsSection({ items }: HighlightsSectionProps) {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto grid gap-6 sm:gap-8 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-transparent p-6 sm:p-8"
          >
            <h3 className="text-xl font-semibold text-zinc-50">{item.title}</h3>
            <p className="mt-4 text-sm text-zinc-400 md:text-base">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
