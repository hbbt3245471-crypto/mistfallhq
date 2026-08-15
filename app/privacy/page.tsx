import type { Metadata } from "next";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Mistfall HQ does not run ads, analytics IDs, or account sign-in. Read what this unofficial fan site does and does not collect.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl">
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-[var(--heading)]">
        Privacy
      </h1>
      <p className="mt-4 leading-7">
        {siteConfig.name} is a static unofficial fan guide. It does not use
        advertising, analytics product IDs, or account sign-in. Guide pages are
        public text. We do not ask for a name, email, or payment.
      </p>
      <p className="mt-4 leading-7">
        This project ships with no tracking snippets. If you later host it on a
        platform such as Vercel, that host may keep its own server logs. Those
        logs are not controlled by a third-party analytics ID in this codebase.
      </p>
      <p className="mt-4 leading-7">
        External links go to official {siteConfig.game} pages and cited press.
        Those sites have their own privacy policies.
      </p>
      <p className="mt-4 leading-7">{siteConfig.disclaimer}</p>
    </article>
  );
}
