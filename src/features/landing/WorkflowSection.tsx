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
    <section id="workflow" className="bg-slate-900/40 py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="section-heading">{title}</h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="group flex flex-col rounded-3xl border border-white/5 bg-white/5 p-6 transition hover:border-primary/50 hover:bg-slate-900/60"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">{`${index + 1}`.padStart(2, "0")}</span>
              <p className="mt-4 text-lg font-semibold text-white">{step.title}</p>
              <p className="mt-3 text-sm text-slate-300">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
