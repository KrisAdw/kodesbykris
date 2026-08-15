import { Section } from "./section";
import { Reveal } from "./reveal";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function Why() {
  const t = await getDictionary();

  return (
    <Section
      id="why"
      index="04"
      label={t.why.tag}
      title={t.why.title}
      lead={t.why.lead}
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="font-display text-3xl leading-snug font-medium tracking-tight text-balance">
              {t.why.sticky}
            </p>
            <p className="mt-5 font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase">
              Build • Solve • Deliver
            </p>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          {t.why.items.map((reason, i) => (
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
