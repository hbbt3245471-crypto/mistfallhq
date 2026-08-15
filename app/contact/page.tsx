import type { Metadata } from "next";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Mistfall HQ is an unofficial fan site with no support inbox. Use official Mistfall Hunter channels for the game itself.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <article className="max-w-3xl">
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-[var(--heading)]">
        Contact
      </h1>
      <p className="mt-4 leading-7">
        This unofficial fan site has no support inbox and no in-game account
        tools. We cannot reset progress, restore extracts, or issue rewards.
      </p>
      <p className="mt-4 leading-7">
        For {siteConfig.game} itself, use the official channels:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-[var(--accent)]">
        <li>
          <a
            href={siteConfig.official.website.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteConfig.official.website.label}
          </a>
        </li>
        <li>
          <a
            href={siteConfig.official.steam.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteConfig.official.steam.label}
          </a>
        </li>
        <li>
          <a
            href={siteConfig.official.steamNews.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteConfig.official.steamNews.label}
          </a>
        </li>
      </ul>
      <p className="mt-4 leading-7">{siteConfig.disclaimer}</p>
    </article>
  );
}
