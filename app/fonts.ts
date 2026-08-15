import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

/**
 * Brand typography (see docs/kodesbykris-brand-guidelines-v1.md §5):
 * - Display:  Space Grotesk — hero/section headings
 * - Body:     Inter — paragraphs, nav, buttons, forms
 * - Mono:     JetBrains Mono — technical metadata, status labels
 */
export const fontDisplay = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const fontSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const fontMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});
