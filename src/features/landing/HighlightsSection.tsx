interface HighlightItem {
  title: string;
  description: string;
}

interface HighlightsSectionProps {
  items: HighlightItem[];
}

export function HighlightsSection({ items }: HighlightsSectionProps) {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mx-auto grid gap-8 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-transparent p-8"
          >
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-sm text-slate-300 md:text-base">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
