import { Section } from "./section";
import { Reveal } from "./reveal";

const ITEMS = [
  {
    title: "Business websites & company profiles",
    description: "A clean, credible home for your business online — built to make you look as good as you are.",
  },
  {
    title: "Landing pages",
    description: "Focused pages designed to turn visitors into leads and inquiries.",
  },
  {
    title: "Dashboards & admin panels",
    description: "See what's happening in your business and control it — without a wall of spreadsheets.",
  },
  {
    title: "Client portals & internal tools",
    description: "Give clients or your team a simple, reliable way to work with you.",
  },
  {
    title: "MVPs & SaaS products",
    description: "Test an idea quickly with a solid first version you can build on.",
  },
  {
    title: "Automations & integrations",
    description: "Make the tools you already use talk to each other — and stop doing things by hand.",
  },
];

export function CanBuild() {
  return (
    <Section
      id="can-build"
      index="02"
      label="What I can build"
      title={'Plain-English answers to “what can you do for me?”'}
      lead="No jargon. If your problem is on this list, it's something I've built before — or can build for you."
    >
      <div className="grid gap-x-12 md:grid-cols-2">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={(i % 2) * 0.08}>
            <div className="border-t border-line py-8">
              <p className="font-mono text-xs text-lime">0{i + 1}</p>
              <h3 className="mt-3 font-display text-xl font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-500">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
