import { Section } from "./section";
import { Reveal } from "./reveal";
import { projects } from "@/lib/projects";

export function Work() {
  return (
    <Section
      id="work"
      index="03"
      label="Selected work"
      title="A few things I've built"
      lead="Selected projects told from the business side — the problem, the result, and my part in it."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={`${project.name}-${i}`} delay={(i % 2) * 0.1}>
            <article className="group flex h-full flex-col rounded-md border border-line bg-surface p-8 transition-colors duration-300 hover:border-foreground">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-medium tracking-tight">
                  {project.name}
                </h3>
                {project.isPlaceholder ? (
                  <span className="rounded-sm bg-brand-100 px-2 py-1 font-mono text-[0.65rem] tracking-wider text-brand-700 uppercase dark:bg-brand-900 dark:text-brand-300">
                    Placeholder
                  </span>
                ) : null}
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 font-mono text-xs">
                <div>
                  <dt className="text-neutral-400">TYPE</dt>
                  <dd className="mt-1 text-neutral-600 dark:text-neutral-300">
                    {project.type}
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-400">STACK</dt>
                  <dd className="mt-1 text-neutral-600 dark:text-neutral-300">
                    {project.stack}
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-400">STATUS</dt>
                  <dd className="mt-1 flex items-center gap-1.5 text-neutral-600 dark:text-neutral-300">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-success"
                      aria-hidden
                    />
                    {project.status}
                    {project.year !== "—" ? ` · ${project.year}` : ""}
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-400">ROLE</dt>
                  <dd className="mt-1 text-neutral-600 dark:text-neutral-300">
                    {project.role}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-1 flex-col gap-4 border-t border-line pt-6 text-sm">
                <p className="leading-relaxed text-neutral-500">
                  <span className="mr-2 font-mono text-xs tracking-wider text-lime uppercase">
                    Problem
                  </span>
                  {project.problem}
                </p>
                <p className="leading-relaxed text-neutral-500">
                  <span className="mr-2 font-mono text-xs tracking-wider text-lime uppercase">
                    Result
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
