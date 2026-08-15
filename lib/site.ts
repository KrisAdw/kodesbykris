/**
 * ─────────────────────────────────────────────────────────────
 *  Site-wide configuration — edit values here and they update
 *  everywhere (header, footer, CTA, SEO, sitemap, robots).
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
  get whatsappLink() {
    const text = encodeURIComponent(
      "Hi Kris, I found kodesbykris and I'd like to talk about a project."
    );
    return `https://wa.me/${this.whatsappNumber}?text=${text}`;
  },

  location: "Indonesia",
  availability: "Available for new projects",

  // ⚠️ TODO: replace with real figures.
  stats: {
    yearsExperience: "5+",
    projectsShipped: "40+",
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;

export const emailLink = `mailto:${SITE.email}?subject=${encodeURIComponent(
  "Project inquiry — kodesbykris"
)}`;

export const MAILTO_SUBJECT = "Project inquiry — kodesbykris";
