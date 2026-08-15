"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";
import { Button } from "./button";

export function Header() {
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
          aria-label={`${SITE.name} — back to top`}
          className="flex items-center"
        >
          <Image
            src="/brands/Brand Logo.png"
            alt="kodesbykris logo"
            width={180}
            height={60}
            loading="eager"
            className="block h-6 w-auto dark:hidden"
          />
          <Image
            src="/brands/Brand Logo Dark.png"
            alt="kodesbykris logo"
            width={180}
            height={60}
            loading="eager"
            className="hidden h-6 w-auto dark:block"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {SITE.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-500 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href={SITE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex"
          >
            Start a Project
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
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
            {SITE.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-display text-2xl font-medium text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" size="lg" className="w-full">
                Start a Project
              </Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
