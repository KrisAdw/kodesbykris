"use client";

import dynamic from "next/dynamic";
import { ArrowDown, Mail, MessageCircle } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { waLink, emailLink } from "@/lib/site";
import type { Messages } from "@/lib/i18n/get-dictionary";
import { Button } from "./button";
import { Marquee } from "./marquee";

const HeroScene = dynamic(() => import("./hero-scene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => null,
});

export function Hero({ t }: { t: Messages }) {
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
            {t.hero.availability}
          </p>

          <h1
            data-hero
            className="mt-8 font-display text-5xl leading-[1.04] font-medium tracking-tight text-balance md:text-7xl"
          >
            {t.hero.title.pre}
            <span className="text-lime">{t.hero.title.highlight}</span>
            {t.hero.title.post}
          </h1>

          <p
            data-hero
            className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-500"
          >
            {t.hero.subtitle}
          </p>

          <div data-hero className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              href={waLink(t.contact.whatsappGreeting)}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              {t.hero.startProject}
            </Button>
            <Button href={emailLink(t.contact.emailSubject)} variant="outline" size="lg">
              <Mail className="h-5 w-5" aria-hidden />
              {t.hero.emailMe}
            </Button>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-foreground"
            >
              {t.hero.viewWork}
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
            {t.hero.meta.map((item) => (
              <div key={item}>
                <dt className="sr-only">{item}</dt>
                <dd>{item}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <Marquee items={t.hero.marquee} />
    </section>
  );
}
