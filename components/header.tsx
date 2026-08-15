"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { locales, localeLabels, type Locale } from "@/lib/i18n/config";
import type { Messages } from "@/lib/i18n/get-dictionary";
import { Button } from "./button";
import { ThemeToggle } from "./theme-toggle";

type HeaderProps = {
  t: Messages;
  locale: Locale;
};

export function Header({ t, locale }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when a link is tapped.
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.querySelectorAll("a[href^='#']").forEach((el) =>
      el.addEventListener("click", close)
    );
    return () =>
      document.querySelectorAll("a[href^='#']").forEach((el) =>
        el.removeEventListener("click", close)
      );
  }, [open]);

  const startHref = waLink(t.contact.whatsappGreeting);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:h-18 md:px-8">
        <a
          href="#top"
          aria-label={`${SITE.name} — ${t.header.logoAlt}`}
          className="flex items-center"
        >
          <Image
            src="/brands/Brand Logo.png"
            alt={t.header.logoAlt}
            width={2063}
            height={633}
            loading="eager"
            className="block h-12 w-auto dark:hidden md:h-18"
          />
          <Image
            src="/brands/Brand Logo Dark.png"
            alt={t.header.logoAlt}
            width={2119}
            height={672}
            loading="eager"
            className="hidden h-12 w-auto dark:block md:h-18"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {t.header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-neutral-500 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop only — the theme toggle, language switcher, and CTA never
            render on mobile; on mobile they live in the top bar / menu. */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <LanguageSwitcher t={t} locale={locale} />
          <Button
            href={startHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.header.startProject}
          </Button>
        </div>
        {/* Mobile only — theme toggle next to the hamburger; the rest of the
            navigation lives inside the hamburger menu. */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-foreground"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-line bg-background px-6 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {t.header.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="font-display text-2xl font-medium text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="flex items-center justify-between gap-4 pt-4">
              <LanguageSwitcher t={t} locale={locale} />
            </li>
            <li className="pt-2">
              <Button
                href={startHref}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="w-full"
              >
                {t.header.startProject}
              </Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

/** Compact EN | ID segmented control linking to the other locale(s). */
function LanguageSwitcher({
  t,
  locale,
}: {
  t: Messages;
  locale: Locale;
}) {
  return (
    <div
      role="group"
      aria-label={t.header.languageLabel}
      className="flex items-center rounded-md border border-line p-0.5"
    >
      {locales.map((lang) => {
        const active = lang === locale;
        return (
          <Link
            key={lang}
            href={`/${lang}`}
            aria-current={active ? "page" : undefined}
            className={`rounded-sm px-2.5 py-1 font-mono text-xs tracking-wider transition-colors ${
              active
                ? "bg-ink text-canvas dark:bg-canvas dark:text-ink"
                : "text-neutral-500 hover:text-foreground"
            }`}
          >
            {localeLabels[lang]}
          </Link>
        );
      })}
    </div>
  );
}
