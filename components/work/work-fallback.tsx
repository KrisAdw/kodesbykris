import Image from "next/image";
import type { Project } from "@/lib/i18n/dictionaries/en";
import { ProjectPanel } from "./project-panel";

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

type WorkFallbackProps = {
  projects: Project[];
  labels: WorkLabels;
};

export function WorkFallback({ projects, labels }: WorkFallbackProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project) => (
        <div
          key={project.name}
          className="overflow-hidden rounded-md border border-line bg-surface"
        >
          <div className="relative aspect-video w-full border-b border-line bg-neutral-100 dark:bg-neutral-900">
            <Image
              src={project.screenImage}
              alt={project.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 767px) calc(100vw - 3rem), min(50vw, 33rem)"
            />
          </div>
          <div className="p-8">
            <ProjectPanel project={project} labels={labels} />
          </div>
        </div>
      ))}
    </div>
  );
}
