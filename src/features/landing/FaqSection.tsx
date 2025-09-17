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
    <section id="faq" className="bg-slate-900/60 py-24">
      <div className="mx-auto w-full max-w-4xl px-6">
        <h2 className="section-heading text-center">{title}</h2>
        <div className="mt-12 space-y-6">
          {items.map((item) => (
            <details key={item.question} className="group rounded-3xl border border-white/10 bg-slate-950/80 p-6">
              <summary className="cursor-pointer text-lg font-semibold text-white">
                {item.question}
              </summary>
              <p className="mt-4 text-sm text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
