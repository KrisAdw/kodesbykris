import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale } from "@/lib/i18n/config";

/**
 * Internationalized routing (see Next.js i18n guide): every page lives under
 * `app/[lang]/`, so the bare root `/` redirects to the default locale.
 */
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }
}

export const config = {
  matcher: "/",
};
