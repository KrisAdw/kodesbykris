"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Marquee({ items }: { items: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tween = gsap.to(trackRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 30,
      ease: "none",
    });
    return () => {
      tween.kill();
    };
  });

  const row = (
    <div className="flex shrink-0 items-center" aria-hidden>
      {items.map((item) => (
        <span
          key={item}
          className="flex items-center gap-10 pr-10 font-mono text-xs tracking-[0.3em] text-neutral-500 uppercase"
        >
          {item}
          <span className="text-lime">/</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="relative overflow-hidden border-y border-line py-5"
      aria-hidden
    >
      <div ref={trackRef} className="flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
