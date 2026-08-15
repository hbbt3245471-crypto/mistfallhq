import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: { absolute: siteConfig.seo.defaultTitle },
  description: siteConfig.seo.defaultDescription,
  alternates: { canonical: "/" },
};

const extractSteps = [
  "Find and defeat a Returner Woodling.",
  "Claim a Soul of Return.",
  "Summon an extraction point at a Soul Tree. That summon consumes the soul.",
  "Step into the portal and leave. Die before you extract and you lose the spoils you are carrying.",
];

const classes = [
  "Mercenary",
  "Blackarrow",
  "Shadowstrix",
  "Sorcerer",
  "Seer",
  "Withered Knight",
];

export default function HomePage() {
  return (
    <article className="max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
        Unofficial English fan guides
      </p>
      <h1 className="font-serif text-4xl leading-tight font-semibold tracking-tight text-[var(--heading)]">
        {siteConfig.game}
      </h1>
      <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
        A dark fantasy third-person PvPvE extraction ARPG from Bellring Games,
        published with Skystone Games. You drop into Gyldenmist-choked ruins as
        a Gyldhunter, fight Corroded creatures and rival hunters, and try to
        leave with Gyldenblood.
      </p>
      <p className="mt-4 leading-7">
        The gods have fallen; their blood became the Gyldenmist. A fragment of
        the Fate Goddess endures as Dew, who revives fallen heroes as
        Gyldhunters to harvest Gyldenblood and mend the Web of Fate. Play solo
        or in a three-player squad. Official copy promises no pay-to-win and no
        paid stat boosts.
      </p>

      <section className="mt-10">
        <h2 className="border-b border-[var(--border)] pb-2 text-xl font-semibold text-[var(--heading)]">
          The extract loop
        </h2>
        <p className="mt-4 leading-7">
          You earn a way home. You do not walk to a fixed door. Official
          materials describe four steps:
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-6 marker:text-[var(--accent)]">
          {extractSteps.map((step) => (
            <li key={step} className="leading-7">
              {step}
            </li>
          ))}
        </ol>
        <p className="mt-4 leading-7">
          Read the full sourced walkthrough in{" "}
          <Link href="/how-to-extract">How to Extract</Link>.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="border-b border-[var(--border)] pb-2 text-xl font-semibold text-[var(--heading)]">
          Six classes, two maps
        </h2>
        <p className="mt-4 leading-7">
          Six official classes, each with two weapon stances you can swap in a
          fight:
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {classes.map((name) => (
            <li
              key={name}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-sm text-[var(--heading)]"
            >
              {name}
            </li>
          ))}
        </ul>
        <p className="mt-4 leading-7">
          Press consensus for a first character is Mercenary. That is not an
          official Bellring tier list. Compare kits in{" "}
          <Link href="/best-class">Best Class</Link>.
        </p>
        <p className="mt-4 leading-7">
          Two live extraction maps sit in Weavereach: the bleached forest of{" "}
          <Link href="/hallowgrove">Hallowgrove</Link> and the fortress of
          Brandrgarde. Soul Harvest can trigger on both.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="border-b border-[var(--border)] pb-2 text-xl font-semibold text-[var(--heading)]">
          Soul Harvest is live
        </h2>
        <p className="mt-4 leading-7">
          Soul Harvest is live as of 12 August 2026. It is not a future August
          14 event and it is not a separate queue. When it triggers in ordinary
          Hallowgrove or Brandrgarde matches, Soul Incubators, Soul Cocoons, and
          a Fate Altar appear. You still need a Soul of Return if you want to
          extract with your haul.{" "}
          <Link href="/soul-harvest">Soul Harvest guide</Link>.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="border-b border-[var(--border)] pb-2 text-xl font-semibold text-[var(--heading)]">
          Guides
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {siteConfig.guides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/${guide.slug}`}
                className="block h-full rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 no-underline transition-colors hover:border-[var(--accent)] hover:bg-[var(--surface-raised)]"
              >
                <span className="font-semibold text-[var(--heading)]">
                  {guide.title}
                </span>
                <span className="mt-2 block text-sm leading-6 text-[var(--text-muted)]">
                  {guide.blurb}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-6 text-[var(--text-muted)]">
          New here? Start with the{" "}
          <Link href="/beginner-guide">Beginner Guide</Link>. Official pages:{" "}
          <a
            href={siteConfig.official.website.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            mistfallhunter.com
          </a>{" "}
          and the{" "}
          <a
            href={siteConfig.official.steam.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Steam store
          </a>
          .
        </p>
      </section>
    </article>
  );
}
