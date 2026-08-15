"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import gsap from "gsap";
import { SITE, waLink } from "@/lib/site";
import type { Messages } from "@/lib/i18n/get-dictionary";

const WHATSAPP_GREEN = "#25D366";
const WHATSAPP_DARK = "#128C7E";

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/**
 * WhatsApp FAB + chat widget, bottom-left. Desktop only (`md:`) so it
 * doesn't block content on small screens.
 * Entrance is pure CSS (`.fab-enter`/`.fab-pulse` — see globals.css) so the
 * button can never get stuck at a small scale; the panel uses GSAP pop in/out.
 */
export function WhatsAppChat({ t }: { t: Messages }) {
  const [open, setOpen] = useState(false);
  // Keeps the panel mounted while it animates out.
  const [closing, setClosing] = useState(false);
  const fabRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Panel pop-in.
  useEffect(() => {
    const panel = panelRef.current;
    if (!open || !panel) return;
    if (reducedMotion()) {
      gsap.set(panel, { autoAlpha: 1, scale: 1, y: 0 });
      return;
    }
    gsap.killTweensOf(panel);
    gsap.fromTo(
      panel,
      { autoAlpha: 0, scale: 0.9, y: 14 },
      { autoAlpha: 1, scale: 1, y: 0, duration: 0.38, ease: "back.out(1.5)" }
    );
  }, [open]);

  // Panel pop-out (instant for reduced-motion users).
  useEffect(() => {
    const panel = panelRef.current;
    if (!closing || !panel) return;
    const tween = gsap.to(panel, {
      autoAlpha: 0,
      scale: 0.9,
      y: 14,
      duration: reducedMotion() ? 0 : 0.24,
      ease: "power2.in",
      onComplete: () => {
        setOpen(false);
        setClosing(false);
      },
    });
    return () => {
      tween.kill();
    };
  }, [closing]);

  // Close on Escape.
  useEffect(() => {
    if (!open && !closing) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setClosing(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closing]);

  const toggle = () => {
    const fab = fabRef.current;
    if (fab && !reducedMotion()) {
      gsap.fromTo(
        fab,
        { scale: 0.82 },
        { scale: 1, duration: 0.3, ease: "back.out(2.5)" }
      );
    }
    if (open) setClosing(true);
    else setOpen(true);
  };

  const showPanel = open || closing;

  return (
    <>
      {showPanel ? (
        <div
          ref={panelRef}
          role="dialog"
          aria-label={t.ui.whatsappOpen}
          className="fixed bottom-24 left-5 z-50 hidden w-80 md:block"
        >
          <div className="overflow-hidden rounded-lg border border-line bg-white shadow-2xl dark:bg-surface">
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ backgroundColor: WHATSAPP_DARK }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 font-display text-sm font-semibold text-lime">
                  K
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{SITE.name}</p>
                  <p className="flex items-center gap-1.5 text-xs text-white/85">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden />
                    {t.ui.whatsappOnline}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setClosing(true)}
                aria-label={t.ui.whatsappClose}
                className="rounded-sm p-1 text-white/80 transition-colors hover:text-white"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            {/* Chat body */}
            <div className="bg-[#e5ddd5] px-4 py-5 dark:bg-neutral-800">
              <div className="max-w-[85%] rounded-md rounded-tl-none bg-white px-3.5 py-2.5 text-sm leading-relaxed text-neutral-700 shadow dark:bg-neutral-100">
                {t.ui.whatsappBubble}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white px-4 py-3 dark:bg-surface">
              <a
                href={waLink(t.contact.whatsappGreeting)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-md text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: WHATSAPP_GREEN }}
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
                {t.ui.whatsappCta}
              </a>
            </div>
          </div>
        </div>
      ) : null}

      {/* FAB — entrance via CSS animation (`.fab-enter`, `.fab-pulse`) */}
      <button
        ref={fabRef}
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-label={t.ui.whatsappOpen}
        className="fab-enter fab-pulse fixed bottom-5 left-5 z-50 hidden h-14 w-14 items-center justify-center rounded-full text-white shadow-lg md:flex"
        style={{ backgroundColor: WHATSAPP_GREEN }}
      >
        {open && !closing ? (
          <X className="h-6 w-6" aria-hidden />
        ) : (
          <WhatsAppIcon className="h-7 w-7" />
        )}
      </button>
    </>
  );
}
