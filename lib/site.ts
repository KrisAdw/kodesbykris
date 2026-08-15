/**
 * ─────────────────────────────────────────────────────────────
 *  Site-wide configuration — edit values here and they update
 *  everywhere (header, footer, CTA, SEO, sitemap, robots).
 *
 *  Translatable copy (nav labels, headlines, section text, …)
 *  lives in `lib/i18n/dictionaries/` — keep this file for
 *  data only (contact details, URLs, stats).
 * ─────────────────────────────────────────────────────────────
 */

export const SITE = {
  name: "kodesbykris",
  owner: "Kris Adiwinata",
  tagline: "BUILD • SOLVE • DELIVER",
  valueProp: "I build software that solves real business problems.",

  // ⚠️ TODO: set your real production URL before launch.
  url: "https://kodesbykris.com",

  email: "kriscareer12@gmail.com",

  whatsappDisplay: "+62 896 3700 4158",
  // Digits only, international format without "+" (628...).
  whatsappNumber: "6289637004158",

  location: "Indonesia",

  // ⚠️ TODO: replace with real figures.
  stats: {
    yearsExperience: "5+",
    projectsShipped: "40+",
  },
} as const;

/** Builds a WhatsApp deep link with a localized greeting message. */
export function waLink(text: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/** Builds a mailto link with a localized subject line. */
export function emailLink(subject: string) {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
}
