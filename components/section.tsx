import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionProps = {
  /** Mono label, e.g. "01 / SERVICES" */
  index: string;
  label: string;
  title: ReactNode;
  /** Short supporting paragraph under the heading */
  lead?: ReactNode;
  id: string;
  children: ReactNode;
  className?: string;
  /** Flip the label/title layout for alternating sections */
  align?: "left" | "center";
};

/** Editorial section scaffold: index label, display heading, lead, content. */
export function Section({
  index,
  label,
  title,
  lead,
  id,
  children,
  className = "",
  align = "left",
}: SectionProps) {
  const centered = align === "center";

  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-24 md:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <Reveal className={centered ? "text-center" : ""}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
            <span className="text-lime">{index}</span> / {label}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-5 max-w-2xl font-display text-4xl leading-tight font-medium tracking-tight text-balance md:text-5xl"
          >
            {title}
          </h2>
          {lead ? (
            <p
              className={`mt-5 max-w-2xl text-lg leading-relaxed text-neutral-500 ${
                centered ? "mx-auto" : ""
              }`}
            >
              {lead}
            </p>
          ) : null}
        </Reveal>
        <div className="mt-14 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
