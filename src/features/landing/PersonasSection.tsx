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
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="section-heading">{title}</h2>
          <p className="mt-4 subheading">{description}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-zinc-50">{item.title}</h3>
              <p className="mt-3 text-sm text-zinc-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
