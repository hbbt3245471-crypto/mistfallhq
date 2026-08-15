import Link from "next/link";
import { siteConfig } from "@/site.config";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 text-sm text-[var(--text-muted)]">
        <p className="max-w-3xl leading-6">{siteConfig.disclaimer}</p>
        <p className="max-w-3xl leading-6">
          Always confirm details in the latest official Steam news and the
          in-game tutorial before you queue. There are no official redeem codes
          on this site.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {siteConfig.footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[var(--link)] no-underline hover:text-[var(--link-hover)]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.official.website.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--link)] no-underline hover:text-[var(--link-hover)]"
          >
            {siteConfig.official.website.label}
          </a>
          <a
            href={siteConfig.official.steam.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--link)] no-underline hover:text-[var(--link-hover)]"
          >
            {siteConfig.official.steam.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
