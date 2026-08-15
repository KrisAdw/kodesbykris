import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { Why } from "@/components/why";
import { Process } from "@/components/process";
import { Faq } from "@/components/faq";
import { Cta } from "@/components/cta";
import { SITE } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const t = await getDictionary();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE.url}/${lang}/#person`,
        name: SITE.owner,
        jobTitle: "Freelance Software Engineer & Web Developer",
        email: `mailto:${SITE.email}`,
        url: `${SITE.url}/${lang}`,
        address: { "@type": "PostalAddress", addressCountry: "ID" },
        worksFor: { "@id": `${SITE.url}/${lang}/#organization` },
        knowsAbout: [
          "Web development",
          "Software engineering",
          "Web applications",
          "Custom software",
        ],
      },
      {
        "@type": "Organization",
        "@id": `${SITE.url}/${lang}/#organization`,
        name: SITE.name,
        url: `${SITE.url}/${lang}`,
        email: SITE.email,
        description: SITE.valueProp,
        slogan: SITE.tagline,
        founder: { "@id": `${SITE.url}/${lang}/#person` },
        address: { "@type": "PostalAddress", addressCountry: "ID" },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/${lang}/#website`,
        url: `${SITE.url}/${lang}`,
        name: SITE.name,
        publisher: { "@id": `${SITE.url}/${lang}/#organization` },
        inLanguage: lang,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header t={t} locale={lang as Locale} />
      <main id="main" className="flex-1">
        <Hero t={t} />
        <Services />
        <Work />
        <Why />
        <Process />
        <Faq t={t} />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
