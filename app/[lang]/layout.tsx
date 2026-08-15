import type { Metadata, Viewport } from "next";
import "./../globals.css";
import { fontDisplay, fontMono, fontSans } from "./../fonts";
import { SITE } from "@/lib/site";
import { locales, isLocale } from "@/lib/i18n/config";
import { dictionaries, getDictionary } from "@/lib/i18n/get-dictionary";
import { ScrollTop } from "@/components/scroll-top";
import { WhatsAppChat } from "@/components/whatsapp-chat";
import { SplashScreen } from "@/components/splash-screen";
import { ThemeProvider } from "@/components/theme-provider";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const t = dictionaries[lang];
  const url = `${SITE.url}/${lang}`;

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: t.meta.title,
      template: "%s | kodesbykris",
    },
    description: t.meta.description,
    applicationName: SITE.name,
    creator: SITE.owner,
    keywords: t.meta.keywords,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: `${SITE.url}/en`,
        id: `${SITE.url}/id`,
      },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url,
      siteName: SITE.name,
      locale: lang === "id" ? "id_ID" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F7F5" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  const t = await getDictionary();

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable} antialiased`}
    >
      <body className="bg-background text-foreground flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
        >
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
        <SplashScreen />
        <ScrollTop t={t} />
        <WhatsAppChat t={t} />
      </body>
    </html>
  );
}
