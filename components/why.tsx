import { Section } from "./section";
import { Reveal } from "./reveal";

const REASONS = [
  {
    title: "You talk directly to the engineer",
    description:
      "The person you discuss your project with is the person who writes the code. No account managers, no handoffs.",
  },
  {
    title: "Honest scoping, no surprises",
    description:
      "Clear scope, a realistic timeline, and a fixed quote before we start. You always know where things stand.",
  },
  {
    title: "Built to last, not just to launch",
    description:
      "Maintainable, documented code — the kind you won't have to rebuild in six months when it needs to grow.",
  },
  {
    title: "Focused, personal attention",
    description:
      "One project at a time, treated with the care it deserves — because your business depends on it.",
  },
  {
    title: "Here after launch",
    description:
      "I stay available after go-live for fixes, improvements, and whatever comes next as your business grows.",
  },
];

export function Why() {
  return (
    <Section
      id="why"
      index="04"
      label="Why kodesbykris"
      title={
        <>
          A one-person studio,
          <br className="hidden md:block" /> full responsibility.
        </>
      }
      lead="You're not hiring an agency with a rotating cast. You're hiring one engineer who answers for the whole project."
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="font-display text-3xl leading-snug font-medium tracking-tight text-balance">
              Hiring me is like adding a technical partner who actually cares
              about the outcome.
            </p>
            <p className="mt-5 font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase">
              Build • Solve • Deliver
            </p>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={0.05 * i}>
              <div className="flex gap-6 border-t border-line py-8">
                <span className="pt-1 font-mono text-sm text-lime">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-neutral-500">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
