"use client";

import { useEffect, useMemo, useState } from "react";
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

/** Two counter-rotating rings of floating quotes. Rendered inside the
 *  mascot's container so the field orbits around the mascot (right side on
 *  desktop, centered on mobile) instead of floating over the hero copy.
 *  `className` positions the ring centers relative to that container. */
function OrbitRings({
  ring1,
  ring2,
  className,
}: {
  ring1: OrbitParticle[];
  ring2: OrbitParticle[];
  className: string;
}) {
  return (
    <>
      <div data-orbit="1" className={className}>
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
      <div data-orbit="2" className={className}>
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
    </>
  );
}

export function Hero({ t }: { t: Messages }) {
  const quotes = t.hero.quotes;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Ring radii hug the mascot. Desktop outer ring clears the fixed navbar
  // (72px + 20px clearance + 280px radius → center floor of 260px inside the
  // mascot block, whose top sits at the hero's pt-28) and the headline copy;
  // mobile keeps a slightly tighter field around the mascot, which sits
  // between the title and the subtitle.
  const RING_1_RADIUS = isMobile ? 180 : 190;
  const RING_2_RADIUS = isMobile ? 250 : 280;

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
        // Remove the leftover inline transform so the mobile mascot block
        // doesn't keep a stacking context (its orbit field relies on -z-10
        // to stay behind the copy). The desktop mascot's translate-x-[30%]
        // comes from its class, so it re-applies automatically.
        clearProps: "transform",
      }
    );

    // Fade the orbiting quote fields in behind everything.
    const fields = gsap.utils.toArray<HTMLElement>("[data-orbit]");
    if (fields.length) {
      gsap.fromTo(fields, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.4, delay: 0.4 });
    }

    // Orbit: rotate each ring, counter-rotate the text so it stays readable.
    gsap.utils.toArray<HTMLElement>('[data-orbit="1"]').forEach((el) => {
      gsap.to(el, { rotation: 360, duration: 90, repeat: -1, ease: "none" });
      gsap.to(el.querySelectorAll("[data-counter]"), {
        rotation: -360,
        duration: 90,
        repeat: -1,
        ease: "none",
      });
    });
    gsap.utils.toArray<HTMLElement>('[data-orbit="2"]').forEach((el) => {
      gsap.to(el, { rotation: -360, duration: 140, repeat: -1, ease: "none" });
      gsap.to(el.querySelectorAll("[data-counter]"), {
        rotation: 360,
        duration: 140,
        repeat: -1,
        ease: "none",
      });
    });
  });

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      {/* Engineering grid base */}
      <div className="bg-grid absolute inset-0 opacity-70" aria-hidden />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-28 pb-16 md:px-8">
        <div className="lg:relative lg:flex lg:items-stretch lg:justify-between lg:gap-10">
          {/* z-10 keeps the headline, subtitle, and CTAs above the orbiting
              quote field (which lives inside the mascot blocks below). */}
          <div className="relative z-10 max-w-3xl shrink-0">
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

            {/* Mascot — mobile: between title and subtitle, with the orbit
                field centered on it (-z-10 keeps the quotes behind the copy) */}
            <div
              data-hero
              className="relative mt-6 flex justify-center lg:hidden"
              aria-hidden
            >
              <OrbitRings
                ring1={ring1}
                ring2={ring2}
                className="pointer-events-none absolute -z-10 top-1/2 left-1/2"
              />
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
              intrinsic size whenever the mascot was taller than the text.

              The orbit field lives inside this block: the ring centers sit
              at left-4/5 (the character's center after the +30% translate)
              so the quotes circle the mascot on the right side of the hero,
              clear of the headline copy. The top floor (260px) keeps the
              outer ring below the fixed navbar. */}
          <div
            data-hero
            className="hidden items-end justify-end lg:absolute lg:inset-y-0 lg:right-0 lg:translate-x-[30%] lg:flex"
            aria-hidden
          >
            <OrbitRings
              ring1={ring1}
              ring2={ring2}
              className="pointer-events-none absolute top-[max(50%,260px)] left-4/5"
            />
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
