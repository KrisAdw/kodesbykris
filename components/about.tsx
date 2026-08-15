import { Section } from "./section";
import { Reveal } from "./reveal";
import { SITE } from "@/lib/site";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function About() {
  const t = await getDictionary();

  const stats = [
    { value: SITE.stats.yearsExperience, label: t.about.stats.years },
    { value: SITE.stats.projectsShipped, label: t.about.stats.projects },
    { value: SITE.location, label: t.about.stats.location },
  ];

  return (
    <Section
      id="about"
      index="06"
      label={t.about.tag}
      title={t.about.title}
      lead={t.about.lead}
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase">
              {t.about.monoLabel}
            </p>
            <p className="mt-6 font-display text-3xl leading-snug font-medium tracking-tight text-balance">
              “{t.about.quote}”
            </p>
            <p className="mt-6 font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase">
              {SITE.tagline}
            </p>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex flex-col gap-5 text-base leading-relaxed text-neutral-500">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="font-display text-3xl font-medium text-foreground">
                    {stat.value}
                  </dd>
                  <dt className="mt-2 font-mono text-xs tracking-wider text-neutral-500 uppercase">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
