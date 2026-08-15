import Link from "next/link";
import { siteConfig } from "@/site.config";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="group flex items-baseline gap-2 no-underline">
          <span className="font-serif text-lg font-semibold tracking-tight text-[var(--heading)] group-hover:text-[var(--accent-hover)]">
            {siteConfig.name}
          </span>
          <span className="hidden text-xs uppercase tracking-[0.16em] text-[var(--text-muted)] sm:inline">
            {siteConfig.game}
          </span>
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[var(--text-muted)] no-underline hover:text-[var(--heading)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
