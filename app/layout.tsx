import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontDisplay, fontMono, fontSans } from "./fonts";
import { SITE } from "@/lib/site";

const title = "Freelance Web Developer & Software Engineer (Indonesia) | kodesbykris";
const description =
  "Custom websites and software — built by Kris. Business-focused solutions, direct collaboration, and personal attention. Start your project today.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: title,
    template: "%s | kodesbykris",
  },
  description,
  applicationName: SITE.name,
  creator: SITE.owner,
  keywords: [
    "freelance web developer",
    "software engineer",
    "indonesia",
    "custom websites",
    "web applications",
    "mvp development",
    "kodesbykris",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F7F5" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable} antialiased`}
    >
      <body className="bg-background text-foreground flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
