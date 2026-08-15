import { Section } from "./section";
import { Reveal } from "./reveal";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function Work() {
  const t = await getDictionary();

  return (
    <Section
      id="work"
      index="03"
      label={t.work.tag}
      title={t.work.title}
      lead={t.work.lead}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {t.work.projects.map((project, i) => (
          <Reveal key={`${project.name}-${i}`} delay={(i % 2) * 0.1}>
            <article className="group flex h-full flex-col rounded-md border border-line bg-surface p-8 transition-colors duration-300 hover:border-foreground">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-medium tracking-tight">
                  {project.name}
                </h3>
                {project.isPlaceholder ? (
                  <span className="rounded-sm bg-brand-100 px-2 py-1 font-mono text-[0.65rem] tracking-wider text-brand-700 uppercase dark:bg-brand-900 dark:text-brand-300">
                    {t.work.labels.placeholder}
                  </span>
                ) : null}
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 font-mono text-xs">
                <div>
                  <dt className="text-neutral-400">{t.work.labels.type}</dt>
                  <dd className="mt-1 text-neutral-600 dark:text-neutral-300">
                    {project.type}
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-400">{t.work.labels.stack}</dt>
                  <dd className="mt-1 text-neutral-600 dark:text-neutral-300">
                    {project.stack}
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-400">{t.work.labels.status}</dt>
                  <dd className="mt-1 flex items-center gap-1.5 text-neutral-600 dark:text-neutral-300">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-success"
                      aria-hidden
                    />
                    {project.status === "completed"
                      ? t.work.labels.completed
                      : t.work.labels.inProgress}
                    {project.year !== "—" ? ` · ${project.year}` : ""}
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-400">{t.work.labels.role}</dt>
                  <dd className="mt-1 text-neutral-600 dark:text-neutral-300">
                    {project.role}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-1 flex-col gap-4 border-t border-line pt-6 text-sm">
                <p className="leading-relaxed text-neutral-500">
                  <span className="mr-2 font-mono text-xs tracking-wider text-lime uppercase">
                    {t.work.labels.problem}
                  </span>
                  {project.problem}
                </p>
                <p className="leading-relaxed text-neutral-500">
                  <span className="mr-2 font-mono text-xs tracking-wider text-lime uppercase">
                    {t.work.labels.result}
                  </span>
                  {project.outcome}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
