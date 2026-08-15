import { Code2, Globe, LayoutDashboard } from "lucide-react";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { getDictionary } from "@/lib/i18n/get-dictionary";

const ICONS = [Globe, LayoutDashboard, Code2];

export async function Services() {
  const t = await getDictionary();

  return (
    <Section
      id="services"
      index="01"
      label={t.services.tag}
      title={t.services.title}
      lead={t.services.lead}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {t.services.items.map((service, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <Reveal key={service.title} delay={i * 0.1}>
              <article className="group flex h-full flex-col rounded-md border border-line bg-surface p-8 transition-colors duration-300 hover:border-foreground">
                <div className="flex items-start justify-between">
                  <Icon className="h-6 w-6 text-lime" aria-hidden />
                  <span className="font-mono text-xs text-neutral-400">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  {service.description}
                </p>
                <ul className="mt-6 flex flex-col gap-2.5 border-t border-line pt-6 text-sm text-neutral-500">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5">
                      <span
                        className="h-1 w-1 shrink-0 rounded-full bg-lime"
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
