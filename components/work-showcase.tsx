"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/i18n/dictionaries/en";
import { ProjectPanel } from "./work/project-panel";
import { WorkFallback } from "./work/work-fallback";
import { Button } from "./button";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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
  selectProject: string;
};

type WorkShowcaseProps = {
  projects: Project[];
  labels: WorkLabels;
};

function padIndex(i: number) {
  return String(i + 1).padStart(2, "0");
}

/** Subtle slide for the text column — in from the left, out to the right. */
const TEXT_IN = { x: -32, y: 24 };
const TEXT_OUT = { x: 32, y: -24 };

function NameFragment({ project }: { project: Project }) {
  return (
    <div>
      <p className="font-mono text-xs tracking-[0.2em] text-lime uppercase">
        {project.tagline}
      </p>
      <h3 className="mt-3 font-display text-3xl font-medium tracking-tight lg:text-4xl">
        {project.name}
      </h3>
    </div>
  );
}

function MetaFragment({ project, labels }: { project: Project; labels: WorkLabels }) {
  return (
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
  );
}

function StoryFragment({ label, text }: { label: string; text: string }) {
  return (
    <p className="text-sm leading-relaxed text-neutral-500">
      <span className="mr-2 font-mono text-xs tracking-wider text-lime uppercase">
        {label}
      </span>
      {text}
    </p>
  );
}

export function WorkShowcase({ projects, labels }: WorkShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  const setIndex = useCallback((i: number) => {
    setActiveIndex(i);
  }, []);

  useEffect(() => {
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqDesktop = window.matchMedia("(min-width: 1024px)");

    const sync = () => {
      setReducedMotion(mqReduced.matches);
      setIsDesktop(mqDesktop.matches);
    };
    sync();

    mqReduced.addEventListener("change", sync);
    mqDesktop.addEventListener("change", sync);
    return () => {
      mqReduced.removeEventListener("change", sync);
      mqDesktop.removeEventListener("change", sync);
    };
  }, []);

  useGSAP(
    () => {
      if (reducedMotion) return;

      // Desktop: pinned scroll presentation — text left, screenshot right.
      if (isDesktop) {
        if (!containerRef.current || !pinRef.current) return;

        const textPanels = gsap.utils.toArray<HTMLElement>("[data-project-panel]");
        const ssPanels = gsap.utils.toArray<HTMLElement>("[data-ss-panel]");

        gsap.set(textPanels, { autoAlpha: 0, x: 0, y: 0, filter: "blur(6px)" });
        gsap.set(textPanels[0], { autoAlpha: 1, filter: "blur(0px)" });

        gsap.set(ssPanels, { autoAlpha: 0, scale: 1.03 });
        gsap.set(ssPanels[0], { autoAlpha: 1, scale: 1 });

        // Fixed navbar is 72px tall on desktop (md:h-18) — pin the scene below it.
        const NAVBAR_OFFSET = 72;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top ${NAVBAR_OFFSET}px`,
            end: () => `+=${projects.length * 100}%`,
            pin: pinRef.current,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        projects.forEach((_, i) => {
          if (i > 0) {
            textPanels.forEach((p) => {
              const idx = Number(p.dataset.panelIndex);
              if (idx === i - 1) {
                tl.to(
                  p,
                  {
                    autoAlpha: 0,
                    x: TEXT_OUT.x,
                    y: TEXT_OUT.y,
                    filter: "blur(6px)",
                    duration: 0.4,
                    ease: "power2.in",
                  },
                  i
                );
              } else if (idx === i) {
                tl.fromTo(
                  p,
                  { autoAlpha: 0, x: TEXT_IN.x, y: TEXT_IN.y, filter: "blur(6px)" },
                  {
                    autoAlpha: 1,
                    x: 0,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.55,
                    ease: "power3.out",
                  },
                  i
                );
              }
            });

            ssPanels.forEach((p) => {
              const idx = Number(p.dataset.ssIndex);
              if (idx === i - 1) {
                tl.to(
                  p,
                  { autoAlpha: 0, scale: 1.03, duration: 0.4, ease: "power2.in" },
                  i
                );
              } else if (idx === i) {
                tl.fromTo(
                  p,
                  { autoAlpha: 0, scale: 1.03 },
                  { autoAlpha: 1, scale: 1, duration: 0.55, ease: "power3.out" },
                  i
                );
              }
            });
          }

          tl.call(() => setIndex(i), [], i);
        });

        return () => ScrollTrigger.getAll().forEach((st) => st.kill());
      }

      // Mobile: stack every project (text + screenshot) and reveal it on scroll.
      gsap.utils.toArray<HTMLElement>("[data-mobile-block]").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });
    },
    {
      scope: containerRef,
      dependencies: [reducedMotion, isDesktop, projects.length, setIndex],
      revertOnUpdate: true,
    }
  );

  if (reducedMotion) {
    return <WorkFallback projects={projects} labels={labels} />;
  }

  const active = projects[activeIndex];

  return (
    <div ref={containerRef} className="relative overflow-x-clip">
      {/* Mobile: stacked text + screenshot per project */}
      <div className="lg:hidden">
        {projects.map((project) => (
          <div key={project.name} data-mobile-block className="mb-16 last:mb-0">
            <ProjectPanel project={project} labels={labels} />
            <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-lg border border-line bg-surface">
              <Image
                src={project.screenImage}
                alt={project.name}
                fill
                sizes="(min-width: 768px) calc(100vw - 4rem), calc(100vw - 3rem)"
                className="object-cover object-top"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: pinned scene — descriptive text left, screenshot right */}
      <div
        ref={pinRef}
        className="relative hidden h-[calc(100svh-4.5rem)] min-h-150 lg:block"
      >
        <div className="grid h-full items-center gap-10 py-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* Text column — one stacked panel per project, crossfaded on scroll */}
          <div className="relative min-h-120">
            {projects.map((p, i) => (
              <div
                key={p.name}
                data-project-panel
                data-panel-index={i}
                className="absolute inset-0"
                aria-hidden={i !== activeIndex}
              >
                <NameFragment project={p} />
                <MetaFragment project={p} labels={labels} />
                <div className="mt-6 flex flex-col gap-4 border-t border-line pt-6">
                  <StoryFragment label={labels.problem} text={p.problem} />
                  <StoryFragment label={labels.result} text={p.outcome} />
                </div>
                {p.href ? (
                  <div className="mt-8">
                    <Button
                      href={p.href}
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
              </div>
            ))}
          </div>

          {/* Screenshot column — stacked images, crossfaded on scroll */}
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-line bg-surface">
            {projects.map((p, i) => (
              <div
                key={p.name}
                data-ss-panel
                data-ss-index={i}
                className="absolute inset-0"
                aria-hidden={i !== activeIndex}
              >
                <Image
                  src={p.screenImage}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) min(50vw, 35rem), 1px"
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Counter + step dots, bottom center */}
        <div className="absolute bottom-[3%] left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
          <p
            className="font-mono text-xs tracking-[0.25em] text-neutral-400"
            aria-live="polite"
          >
            <span className="text-lime">{padIndex(activeIndex)}</span>
            {" / "}
            {String(projects.length).padStart(2, "0")}
            {" — "}
            {active.name}
          </p>
          <div className="flex gap-2" aria-hidden>
            {projects.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-8 bg-lime" : "w-1.5 bg-line"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
