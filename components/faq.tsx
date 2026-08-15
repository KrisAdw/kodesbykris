"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "./section";

const FAQS = [
  {
    q: "What do you build?",
    a: "Websites, web apps, dashboards, and custom software — anything from a company website to a full SaaS product. If it's a digital tool your business needs, it's likely something I can build.",
  },
  {
    q: "How much does a project cost?",
    a: "It depends on scope — a focused landing page is a very different investment from a custom web app. After a quick chat I'll give you a clear, fixed quote before anything starts. No hourly surprises.",
  },
  {
    q: "How long will it take?",
    a: "Landing pages typically take 1–3 weeks; web apps and custom software usually run 3–8+ weeks depending on complexity. You'll get a realistic timeline before we begin.",
  },
  {
    q: "What do you need from me to start?",
    a: "Your goal, a few examples of things you like, and access to any existing systems or accounts. I'll handle the technical side — you just need to know what you want to achieve.",
  },
  {
    q: "Do you work with agencies or designers?",
    a: "Yes — I regularly work as the technical partner for agencies and designers who need reliable development delivered on their timelines.",
  },
  {
    q: "What happens after launch?",
    a: "You get a proper handover, and I stay available for support, fixes, and improvements. Ongoing maintenance and small follow-up projects are always welcome.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      index="07"
      label="FAQ"
      title="Questions, answered straight"
      lead="The things clients usually ask before starting a project."
    >
      <div className="mx-auto max-w-3xl">
        {FAQS.map((faq, i) => {
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
