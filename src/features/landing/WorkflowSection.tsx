interface WorkflowStep {
  title: string;
  description: string;
}

interface WorkflowSectionProps {
  title: string;
  steps: WorkflowStep[];
}

export function WorkflowSection({ title, steps }: WorkflowSectionProps) {
  return (
    <section id="workflow" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <h2 className="section-heading text-center lg:text-left">{title}</h2>
        <ol className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="group flex flex-col rounded-3xl border border-white/5 bg-white/5 p-6 transition hover:border-white/40 hover:bg-white/10"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.4em] text-zinc-500">{`${index + 1}`.padStart(2, "0")}</span>
              <p className="mt-4 text-lg font-semibold text-zinc-50">{step.title}</p>
              <p className="mt-3 text-sm text-zinc-400">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
