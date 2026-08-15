import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { locales } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((lang) => ({
    url: `${SITE.url}/${lang}`,
    lastModified,
    changeFrequency: "monthly",
    priority: lang === "id" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${SITE.url}/${l}`])
      ) as Record<string, string>,
    },
  }));
}
