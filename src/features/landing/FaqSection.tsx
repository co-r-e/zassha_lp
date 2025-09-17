interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  items: FaqItem[];
}

export function FaqSection({ title, items }: FaqSectionProps) {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <h2 className="section-heading text-center">{title}</h2>
        <div className="mt-10 space-y-4 sm:mt-12 sm:space-y-6">
          {items.map((item) => (
            <details key={item.question} className="group rounded-3xl border border-white/10 bg-neutral-950/80 p-6">
              <summary className="cursor-pointer text-lg font-semibold text-zinc-50">
                {item.question}
              </summary>
              <p className="mt-4 text-sm text-zinc-400">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
