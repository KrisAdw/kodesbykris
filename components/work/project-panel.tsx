import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/i18n/dictionaries/en";
import { Button } from "../button";

type WorkLabels = {
  type: string;
  stack: string;
  status: string;
  role: string;
  problem: string;
  result: string;
  completed: string;
  inProgress: string;
  viewLive: string;
};

type ProjectPanelProps = {
  project: Project;
  labels: WorkLabels;
  className?: string;
};

export function ProjectPanel({ project, labels, className = "" }: ProjectPanelProps) {
  return (
    <article className={`flex flex-col ${className}`}>
      <p className="font-mono text-xs tracking-[0.2em] text-lime uppercase">
        {project.tagline}
      </p>
      <h3 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
        {project.name}
      </h3>

      <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 font-mono text-xs">
        <div className="min-w-0">
          <dt className="text-neutral-400">{labels.type}</dt>
          <dd className="mt-1 text-neutral-600 dark:text-neutral-300">{project.type}</dd>
        </div>
        <div className="min-w-0">
          <dt className="text-neutral-400">{labels.stack}</dt>
          <dd className="mt-1 text-neutral-600 dark:text-neutral-300">{project.stack}</dd>
        </div>
        <div className="min-w-0">
          <dt className="text-neutral-400">{labels.status}</dt>
          <dd className="mt-1 flex items-center gap-1.5 text-neutral-600 dark:text-neutral-300">
            <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden />
            {project.status === "completed" ? labels.completed : labels.inProgress}
            {project.year !== "—" ? ` · ${project.year}` : ""}
          </dd>
        </div>
        <div className="min-w-0">
          <dt className="text-neutral-400">{labels.role}</dt>
          <dd className="mt-1 text-neutral-600 dark:text-neutral-300">{project.role}</dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-col gap-4 border-t border-line pt-6 text-sm">
        <p className="leading-relaxed text-neutral-500">
          <span className="mr-2 font-mono text-xs tracking-wider text-lime uppercase">
            {labels.problem}
          </span>
          {project.problem}
        </p>
        <p className="leading-relaxed text-neutral-500">
          <span className="mr-2 font-mono text-xs tracking-wider text-lime uppercase">
            {labels.result}
          </span>
          {project.outcome}
        </p>
      </div>

      {project.description.length > 0 ? (
        <div className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-neutral-500">
          {project.description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      ) : null}

      {project.href ? (
        <div className="mt-8">
          <Button
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="md"
          >
            {labels.viewLive}
            <ExternalLink className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      ) : null}
    </article>
  );
}
