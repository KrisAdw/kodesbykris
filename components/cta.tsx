import { Mail, MessageCircle } from "lucide-react";
import { Reveal } from "./reveal";
import { Button } from "./button";
import { SITE, waLink, emailLink } from "@/lib/site";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function Cta() {
  const t = await getDictionary();

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-y border-line bg-ink py-24 text-canvas dark:bg-surface md:py-32"
    >
      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-8">
        <Reveal className="text-center">
          <p className="font-mono text-xs tracking-[0.25em] text-lime uppercase">
            {SITE.tagline}
          </p>
          <h2
            id="contact-title"
            className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight font-medium tracking-tight text-balance md:text-6xl"
          >
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-canvas/70">
            {t.cta.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              href={waLink(t.contact.whatsappGreeting)}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              {t.cta.startWhatsApp}
            </Button>
            <Button href={emailLink(t.contact.emailSubject)} variant="outline-light" size="lg">
              <Mail className="h-5 w-5" aria-hidden />
              {t.cta.emailLabel} {SITE.email}
            </Button>
          </div>
          <p className="mt-8 font-mono text-xs tracking-wider text-canvas/50">
            {SITE.whatsappDisplay} · {t.cta.meta}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
