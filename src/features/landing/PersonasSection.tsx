interface PersonaItem {
  title: string;
  description: string;
}

interface PersonasSectionProps {
  title: string;
  description: string;
  items: PersonaItem[];
}

export function PersonasSection({ title, description, items }: PersonasSectionProps) {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="section-heading">{title}</h2>
          <p className="mt-4 subheading">{description}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/40 p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
