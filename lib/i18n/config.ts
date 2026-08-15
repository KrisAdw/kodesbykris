/**
 * Supported locales. To add a language:
 *   1. Add it here (e.g. "ja"),
 *   2. Create `lib/i18n/dictionaries/ja.ts` matching the `Messages` type,
 *   3. Add it to the `dictionaries` map in `lib/i18n/get-dictionary.ts`.
 */
export const locales = ["en", "id"] as const;

export type Locale = (typeof locales)[number];

// Target market is Indonesia → default to Bahasa Indonesia.
// (Add Accept-Language negotiation here later if you want automatic
// language detection for international visitors.)
export const defaultLocale: Locale = "id";

/** Short labels shown in the language switcher. */
export const localeLabels: Record<Locale, string> = {
  en: "EN",
  id: "ID",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
