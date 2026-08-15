import { Section } from "./section";
import { Reveal } from "./reveal";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function Process() {
  const t = await getDictionary();

  return (
    <Section
      id="process"
      index="04"
      label={t.process.tag}
      title={t.process.title}
      lead={t.process.lead}
    >
      <ol>
        {t.process.items.map((step, i) => (
          <li key={step.title}>
            <Reveal delay={0.04 * i}>
              <div className="group flex flex-col gap-3 border-t border-line py-8 transition-colors duration-300 hover:bg-surface md:flex-row md:items-baseline md:gap-10">
                <span className="font-mono text-sm text-lime">
                  {String(i + 1).padStart(2, "0")}
                </span>
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
