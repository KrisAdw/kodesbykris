import { Code2, Globe, LayoutDashboard } from "lucide-react";
import { Section } from "./section";
import { Reveal } from "./reveal";

const SERVICES = [
  {
    icon: Globe,
    title: "Websites & Landing Pages",
    description:
      "Websites that work as your best salesperson — clear, fast, and built to turn visitors into customers.",
    points: ["Company profiles", "Landing pages that convert", "Fast, modern redesigns"],
  },
  {
    icon: LayoutDashboard,
    title: "Web Apps & Dashboards",
    description:
      "Tools that run your business — dashboards, admin panels, and internal systems your team will actually use.",
    points: ["Admin panels & dashboards", "Client portals", "Workflow tools"],
  },
  {
    icon: Code2,
    title: "Custom Software & Integrations",
    description:
      "Software built around your workflow — MVPs, SaaS products, automation, and connecting the tools you already use.",
    points: ["MVPs & SaaS products", "Automation & integrations", "Custom internal tools"],
  },
];

export function Services() {
  return (
    <Section
      id="services"
      index="01"
      label="Services"
      title={
        <>
          Software isn&apos;t just code. <br className="hidden md:block" />
          It&apos;s a solution to a problem.
        </>
      }
      lead="Every service below exists for one reason: to solve a business problem and deliver something useful. Here's what I can build for you."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {SERVICES.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.1}>
            <article className="group flex h-full flex-col rounded-md border border-line bg-surface p-8 transition-colors duration-300 hover:border-foreground">
              <div className="flex items-start justify-between">
                <service.icon className="h-6 w-6 text-lime" aria-hidden />
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
                    <span className="h-1 w-1 shrink-0 rounded-full bg-lime" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
