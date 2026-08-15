import { Section } from "./section";
import { Reveal } from "./reveal";

const STEPS = [
  {
    step: "01",
    title: "Discover",
    description:
      "We talk through your goal, your users, and what success looks like. No sales pressure — just a real conversation.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "A clear scope, a realistic timeline, and a fixed quote. You know exactly what gets built before anything starts.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Focused iterations with regular updates. You always know where things stand — and you see progress, not promises.",
  },
  {
    step: "04",
    title: "Test",
    description:
      "Real devices, real browsers, real scenarios — so what you receive actually works, not just looks like it does.",
  },
  {
    step: "05",
    title: "Launch & support",
    description:
      "Deployment, handover, and help after launch whenever you need it. Your project doesn't end on launch day.",
  },
];

export function Process() {
  return (
    <Section
      id="process"
      index="05"
      label="Process"
      title="A simple, transparent way to work"
      lead="Five steps, no jargon, no surprises. You'll always know what's happening and what comes next."
    >
      <ol>
        {STEPS.map((step, i) => (
          <li key={step.step}>
            <Reveal delay={0.04 * i}>
              <div className="group flex flex-col gap-3 border-t border-line py-8 transition-colors duration-300 hover:bg-surface md:flex-row md:items-baseline md:gap-10">
                <span className="font-mono text-sm text-lime">{step.step}</span>
                <h3 className="w-48 shrink-0 font-display text-2xl font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-neutral-500 md:mt-0">
                  {step.description}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
