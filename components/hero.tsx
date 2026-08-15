"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowDown, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { waLink, emailLink } from "@/lib/site";
import type { Messages } from "@/lib/i18n/get-dictionary";
import { Button } from "./button";
import { Marquee } from "./marquee";

type OrbitParticle = {
  x: string;
  y: string;
  text: string;
  accent?: boolean;
};

/** Point on a circle of `radius` px, `angleDeg` degrees from the top.
 *  Values are rounded and returned as strings so the SSR HTML and the
 *  hydrated client always serialize identical styles. */
function orbitPoint(radius: number, angleDeg: number) {
  const a = (angleDeg * Math.PI) / 180;
  return {
    x: `${(Math.sin(a) * radius).toFixed(3)}px`,
    y: `${(-Math.cos(a) * radius).toFixed(3)}px`,
  };
}

export function Hero({ t }: { t: Messages }) {
  const quotes = t.hero.quotes;
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Smaller orbits on mobile so particles stay on-screen.
  const RING_1_RADIUS = isMobile ? 180 : 300;
  const RING_2_RADIUS = isMobile ? 250 : 430;

  const ring1 = useMemo<OrbitParticle[]>(
    () =>
      quotes.map((text, i) => ({
        ...orbitPoint(RING_1_RADIUS, i * 72),
        text,
        accent: i === 0,
      })),
    [quotes, RING_1_RADIUS]
  );

  const ring2 = useMemo<OrbitParticle[]>(
    () =>
      quotes.map((text, i) => ({
        ...orbitPoint(RING_2_RADIUS, i * 72 + 36),
        text,
      })),
    [quotes, RING_2_RADIUS]
  );

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

    // Fade the orbiting quote field in behind everything.
    const field = [ring1Ref.current, ring2Ref.current].filter(
      (el): el is HTMLDivElement => Boolean(el)
    );
    if (field.length) {
      gsap.fromTo(field, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.4, delay: 0.4 });
    }

    // Orbit: rotate each ring, counter-rotate the text so it stays readable.
    if (ring1Ref.current) {
      gsap.to(ring1Ref.current, { rotation: 360, duration: 90, repeat: -1, ease: "none" });
      gsap.to(ring1Ref.current.querySelectorAll("[data-counter]"), {
        rotation: -360,
        duration: 90,
        repeat: -1,
        ease: "none",
      });
    }
    if (ring2Ref.current) {
      gsap.to(ring2Ref.current, { rotation: -360, duration: 140, repeat: -1, ease: "none" });
      gsap.to(ring2Ref.current.querySelectorAll("[data-counter]"), {
        rotation: 360,
        duration: 140,
        repeat: -1,
        ease: "none",
      });
    }
  });

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      {/* Engineering grid base */}
      <div className="bg-grid absolute inset-0 opacity-70" aria-hidden />

      {/* Orbiting quote particles — the problems kodesbykris solves */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Ring centers are clamped below the fixed navbar so the orbiting
            text never floats behind it: navbar height + clearance + outer
            ring radius (mobile 64+20+250=334px, desktop 72+20+430=522px). */}
        <div
          ref={ring1Ref}
          className={`absolute left-1/2 ${
            isMobile ? "top-[max(50%,334px)]" : "top-[max(50%,522px)]"
          }`}
        >
          {ring1.map((p, i) => (
            <div
              key={i}
              className="absolute"
              style={{ left: p.x, top: p.y, transform: "translate(-50%, -50%)" }}
            >
              <span
                data-counter
                className={`block whitespace-nowrap font-mono text-xs tracking-wider uppercase ${
                  p.accent
                    ? "text-lime/70"
                    : "text-neutral-500/45 dark:text-neutral-400/40"
                }`}
              >
                {p.text}
              </span>
            </div>
          ))}
        </div>

        <div
          ref={ring2Ref}
          className={`absolute left-1/2 ${
            isMobile ? "top-[max(50%,334px)]" : "top-[max(50%,522px)]"
          }`}
        >
          {ring2.map((p, i) => (
            <div
              key={i}
              className="absolute"
              style={{ left: p.x, top: p.y, transform: "translate(-50%, -50%)" }}
            >
              <span
                data-counter
                className="block whitespace-nowrap font-mono text-xs tracking-wider text-neutral-500/35 uppercase dark:text-neutral-400/30"
              >
                {p.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-28 pb-16 md:px-8">
        <div className="lg:relative lg:flex lg:items-stretch lg:justify-between lg:gap-10">
          <div className="max-w-3xl shrink-0">
            <p
              data-hero
              className="font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase"
            >
              {t.hero.label}
            </p>

            <h1
              data-hero
              className="mt-4 font-display text-5xl leading-[1.04] font-medium tracking-tight text-balance md:text-7xl"
            >
              {t.hero.title.pre}
              <span className="text-lime">{t.hero.title.highlight}</span>
              {t.hero.title.post}
            </h1>

            {/* Mascot — mobile: between title and subtitle */}
            <div
              data-hero
              className="mt-6 flex justify-center lg:hidden"
              aria-hidden
            >
              <Image
                src="/maskot/maskot-kris.png"
                alt=""
                width={1402}
                height={1122}
                priority
                className="h-auto w-72 drop-shadow-xl mask-[linear-gradient(to_bottom,black_72%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_72%,transparent)] sm:w-80"
              />
            </div>

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
          </div>

          {/* Mascot — desktop: absolutely positioned so it fills the
              headline–CTA block's height. Keeping it in flow made the row
              (and the gap above the meta bar) as tall as the mascot's
              intrinsic size whenever the mascot was taller than the text. */}
          <div
            data-hero
            className="hidden items-end justify-end lg:absolute lg:inset-y-0 lg:right-0 lg:translate-x-[30%] lg:flex"
            aria-hidden
          >
            <Image
              src="/maskot/maskot-kris.png"
              alt=""
              width={1402}
              height={1122}
              priority
              className="h-full w-auto max-w-[min(62vw,44rem)] object-contain object-bottom-right drop-shadow-xl mask-[linear-gradient(to_bottom,black_78%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_78%,transparent)]"
            />
          </div>
        </div>

        <dl
          data-hero
          className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-5 font-mono text-xs tracking-wider text-neutral-500 uppercase"
        >
          {t.hero.meta.map((item) => (
            <div key={item}>
              <dt className="sr-only">{item}</dt>
              <dd>{item}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Marquee items={t.hero.marquee} />
    </section>
  );
}
