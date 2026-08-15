import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { SITE, emailLink } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src="/brands/Brand Logo.png"
              alt="kodesbykris logo"
              width={180}
              height={60}
              className="h-7 w-auto dark:hidden"
            />
            <Image
              src="/brands/Brand Logo Dark.png"
              alt="kodesbykris logo"
              width={180}
              height={60}
              className="hidden h-7 w-auto dark:block"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-neutral-500">
              A personal software engineering &amp; web development studio.
              Websites, web apps, and custom software — built by Kris.
            </p>
            <p className="mt-6 font-mono text-xs tracking-[0.25em] text-neutral-500">
              {SITE.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
              Sections
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {SITE.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-neutral-500 transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
              Contact
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href={SITE.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4 text-lime" aria-hidden />
                  {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={emailLink}
                  className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-lime" aria-hidden />
                  {SITE.email}
                </a>
              </li>
              <li className="text-sm text-neutral-500">Based in {SITE.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs tracking-[0.2em] text-neutral-500">
            CODE CRAFTED BY KRIS
          </p>
        </div>
      </div>
    </footer>
  );
}
