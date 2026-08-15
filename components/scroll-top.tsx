"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import type { Messages } from "@/lib/i18n/get-dictionary";

export function ScrollTop({ t }: { t: Messages }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label={t.ui.scrollToTop}
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
      className={`fixed right-5 bottom-5 z-50 flex h-11 w-11 items-center justify-center rounded-md border border-line bg-surface text-foreground shadow-lg transition-all duration-300 hover:bg-lime hover:text-ink motion-reduce:transition-none md:right-6 md:bottom-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" aria-hidden />
    </button>
  );
}
