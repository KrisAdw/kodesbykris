import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { SITE, waLink, emailLink } from "@/lib/site";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function Footer() {
  const t = await getDictionary();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src="/brands/Brand Logo.png"
              alt={t.header.logoAlt}
              width={2063}
              height={633}
              className="h-16 w-auto dark:hidden"
            />
            <Image
              src="/brands/Brand Logo Dark.png"
              alt={t.header.logoAlt}
              width={2119}
              height={672}
              className="hidden h-16 w-auto dark:block"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-neutral-500">
              {t.footer.description}
            </p>
            <p className="mt-6 font-mono text-xs tracking-[0.25em] text-neutral-500">
              {SITE.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
              {t.footer.sections}
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {t.header.nav.map((item) => (
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
              {t.footer.contact}
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href={waLink(t.contact.whatsappGreeting)}
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
                  href={emailLink(t.contact.emailSubject)}
                  className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-lime" aria-hidden />
                  {SITE.email}
                </a>
              </li>
              <li className="text-sm text-neutral-500">
                {t.footer.basedIn} {SITE.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500">
            © {year} {SITE.name}. {t.footer.copyright}
          </p>
          <p className="font-mono text-xs tracking-[0.2em] text-neutral-500">
            {t.footer.codeCraftedBy}
          </p>
        </div>
      </div>
    </footer>
  );
}
