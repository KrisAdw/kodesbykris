import { Section } from "./section";
import { Reveal } from "./reveal";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function CanBuild() {
  const t = await getDictionary();

  return (
    <Section
      id="can-build"
      index="02"
      label={t.canBuild.tag}
      title={t.canBuild.title}
      lead={t.canBuild.lead}
    >
      <div className="grid gap-x-12 md:grid-cols-2">
        {t.canBuild.items.map((item, i) => (
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
