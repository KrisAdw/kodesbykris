import { Section } from "./section";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { WorkShowcase } from "./work-showcase";

export async function Work() {
  const t = await getDictionary();

  return (
    <Section
      id="work"
      index="02"
      label={t.work.tag}
      title={t.work.title}
      lead={t.work.lead}
      className="overflow-x-clip"
    >
      <WorkShowcase projects={t.work.projects} labels={t.work.labels} />
    </Section>
  );
}
