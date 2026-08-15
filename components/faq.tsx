"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Messages } from "@/lib/i18n/get-dictionary";
import { Section } from "./section";

export function Faq({ t }: { t: Messages }) {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = t.faq.items;

  return (
    <Section
      id="faq"
      index="07"
      label={t.faq.tag}
      title={t.faq.title}
      lead={t.faq.lead}
    >
      <div className="mx-auto max-w-3xl">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.q} className="border-t border-line last:border-b">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg font-medium tracking-tight md:text-xl">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-300 motion-reduce:transition-none ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>
              </h3>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-button-${i}`}
                className={`grid transition-all duration-300 motion-reduce:transition-none ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-2xl pb-6 text-sm leading-relaxed text-neutral-500">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
