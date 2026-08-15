import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mistfall HQ is an unofficial English fan guide site for Mistfall Hunter. Not affiliated with Bellring Games or Skystone Games.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="max-w-3xl">
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-[var(--heading)]">
        About Mistfall HQ
      </h1>
      <p className="mt-4 leading-7">
        Mistfall HQ publishes unofficial English fan guides for{" "}
        {siteConfig.game}. It is a reading of public official pages: the
        developer site, the Steam store and news posts, Xbox Wire, and
        publisher launch notes. Community claims that those pages do not
        support are marked unconfirmed.
      </p>
      <p className="mt-4 leading-7">{siteConfig.disclaimer}</p>
      <p className="mt-4 leading-7">
        This site has no Codes page, no ads, and no analytics IDs. There are no
        official redeem codes. Always confirm details in the latest official
        Steam news and the in-game tutorial before you queue.
      </p>
      <p className="mt-4 leading-7">
        Official links:{" "}
        <a
          href={siteConfig.official.website.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteConfig.official.website.label}
        </a>{" "}
        and the{" "}
        <a
          href={siteConfig.official.steam.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteConfig.official.steam.label}
        </a>
        .
      </p>
      <p className="mt-4 leading-7">
        Start with the <Link href="/beginner-guide">Beginner Guide</Link> or
        return <Link href="/">home</Link>.
      </p>
    </article>
  );
}
