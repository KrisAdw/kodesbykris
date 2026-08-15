"use client";

import dynamic from "next/dynamic";
import { ArrowDown, Mail, MessageCircle } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SITE, emailLink } from "@/lib/site";
import { Button } from "./button";
import { Marquee } from "./marquee";

const HeroScene = dynamic(() => import("./hero-scene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => null,
});

export function Hero() {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = gsap.utils.toArray<HTMLElement>("[data-hero]");
    gsap.fromTo(
      els,
      { autoAlpha: 0, y: 28 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.15,
      }
    );
  });

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      {/* Engineering grid base + 3D scene */}
      <div className="bg-grid absolute inset-0 opacity-70" aria-hidden />
      <HeroScene />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-28 pb-16 md:px-8">
        <div className="max-w-3xl">
          <p
            data-hero
            className="inline-flex items-center gap-2.5 rounded-md border border-line bg-surface/70 px-3.5 py-1.5 font-mono text-xs tracking-wider text-neutral-500 uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            {SITE.availability}
          </p>

          <h1
            data-hero
            className="mt-8 font-display text-5xl leading-[1.04] font-medium tracking-tight text-balance md:text-7xl"
          >
            I build software that solves{" "}
            <span className="text-lime">real</span> business problems.
          </h1>

          <p
            data-hero
            className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-500"
          >
            Websites, web apps, dashboards, and custom tools — built by Kris,
            for people who need things that work. Direct collaboration, no
            agency runaround.
          </p>

          <div data-hero className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Start a Project
            </Button>
            <Button href={emailLink} variant="outline" size="lg">
              <Mail className="h-5 w-5" aria-hidden />
              Email me
            </Button>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-foreground"
            >
              View my work
              <ArrowDown
                className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                aria-hidden
              />
            </a>
          </div>

          <dl
            data-hero
            className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 font-mono text-xs tracking-wider text-neutral-500 uppercase"
          >
            <div>
              <dt className="sr-only">Location</dt>
              <dd>Based in {SITE.location}</dd>
            </div>
            {/* ⚠️ TODO: update with your real figures */}
            <div>
              <dt className="sr-only">Experience</dt>
              <dd>{SITE.stats.yearsExperience} years experience</dd>
            </div>
            <div>
              <dt className="sr-only">Projects shipped</dt>
              <dd>{SITE.stats.projectsShipped} projects shipped</dd>
            </div>
          </dl>
        </div>
      </div>

      <Marquee />
    </section>
  );
}
