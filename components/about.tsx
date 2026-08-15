import { Section } from "./section";
import { Reveal } from "./reveal";
import { SITE } from "@/lib/site";

export function About() {
  return (
    <Section
      id="about"
      index="06"
      label="About"
      title="Kris Adiwinata"
      lead="The person behind kodesbykris — why clients hire an individual instead of an agency."
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase">
              Software engineering &amp; web development
            </p>
            <p className="mt-6 font-display text-3xl leading-snug font-medium tracking-tight text-balance">
              “Code crafted by Kris.”
            </p>
            <p className="mt-6 font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase">
              {SITE.tagline}
            </p>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            {/* ⚠️ TODO: replace with your real bio — keep it credibility-focused, not a full CV. */}
            <div className="flex flex-col gap-5 text-base leading-relaxed text-neutral-500">
              <p>
                I&apos;m Kris, a software engineer and web developer based in
                {SITE.location}, working with businesses and founders around
                the world. I build
                websites, web apps, and custom software — and I&apos;ve been
                doing it long enough to know that the best projects are the
                ones that solve a real problem and stay useful long after
                launch.
              </p>
              <p>
                kodesbykris is a one-person studio. That means when you work
                with me, you get one person who owns the whole project: the
                planning, the code, the delivery, and the support after launch.
                No handoffs, no “we&apos;ll get back to you” — just clear
                communication and work that ships.
              </p>
              <p>
                I care about the outcome, not just the output. If a project
                doesn&apos;t serve your business, I&apos;ll tell you before I
                build it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
              <div>
                <dd className="font-display text-3xl font-medium text-foreground">
                  {SITE.stats.yearsExperience}
                </dd>
                <dt className="mt-2 font-mono text-xs tracking-wider text-neutral-500 uppercase">
                  Years experience
                </dt>
              </div>
              <div>
                <dd className="font-display text-3xl font-medium text-foreground">
                  {SITE.stats.projectsShipped}
                </dd>
                <dt className="mt-2 font-mono text-xs tracking-wider text-neutral-500 uppercase">
                  Projects shipped
                </dt>
              </div>
              <div>
                <dd className="font-display text-3xl font-medium text-foreground">
                  {SITE.location}
                </dd>
                <dt className="mt-2 font-mono text-xs tracking-wider text-neutral-500 uppercase">
                  Location
                </dt>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
