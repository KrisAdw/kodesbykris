import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { CanBuild } from "@/components/can-build";
import { Work } from "@/components/work";
import { Why } from "@/components/why";
import { Process } from "@/components/process";
import { About } from "@/components/about";
import { Faq } from "@/components/faq";
import { Cta } from "@/components/cta";
import { SITE } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/#person`,
      name: SITE.owner,
      jobTitle: "Freelance Software Engineer & Web Developer",
      email: `mailto:${SITE.email}`,
      url: SITE.url,
      address: { "@type": "PostalAddress", addressCountry: "ID" },
      worksFor: { "@id": `${SITE.url}/#organization` },
      knowsAbout: [
        "Web development",
        "Software engineering",
        "Web applications",
        "Custom software",
      ],
    },
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      description: SITE.valueProp,
      slogan: SITE.tagline,
      founder: { "@id": `${SITE.url}/#person` },
      address: { "@type": "PostalAddress", addressCountry: "ID" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { "@id": `${SITE.url}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Services />
        <CanBuild />
        <Work />
        <Why />
        <Process />
        <About />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
