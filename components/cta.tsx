import { Mail, MessageCircle } from "lucide-react";
import { Reveal } from "./reveal";
import { SITE, emailLink } from "@/lib/site";
import { Button } from "./button";

export function Cta() {
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
            Got a project in mind? Let&apos;s build something that works.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-canvas/70">
            Tell me what you&apos;re trying to achieve and I&apos;ll tell you
            honestly how I can help — within a day.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Start a Project on WhatsApp
            </Button>
            <Button href={emailLink} variant="outline-light" size="lg">
              <Mail className="h-5 w-5" aria-hidden />
              Email {SITE.email}
            </Button>
          </div>
          <p className="mt-8 font-mono text-xs tracking-wider text-canvas/50">
            {SITE.whatsappDisplay} · Based in {SITE.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
