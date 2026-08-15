import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "./config";
import { en, type Messages } from "./dictionaries/en";
import { id } from "./dictionaries/id";

export type { Messages, Project } from "./dictionaries/en";

/** Map of all supported locales → messages. */
export const dictionaries: Record<Locale, Messages> = { en, id };

/**
 * Returns the messages for the current locale (resolved from the `[lang]`
 * route segment). Server Components only — `next/root-params` fails at build
 * time if imported from a Client Component; pass `t` as props instead.
 */
export async function getDictionary(): Promise<Messages> {
  const locale = await lang();
  if (!isLocale(locale)) notFound();
  return dictionaries[locale];
}
