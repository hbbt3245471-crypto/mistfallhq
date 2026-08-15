export const siteConfig = {
  name: "Mistfall HQ",
  game: "Mistfall Hunter",
  tagline: "Unofficial English fan guides for Mistfall Hunter",
  url: "https://mistfallhq.wiki",
  locale: "en",
  developers: ["Bellring Games", "Skystone Games"],
  disclaimer:
    "Unofficial fan site. Not affiliated with Bellring Games or Skystone Games.",
  official: {
    website: {
      label: "Official site",
      href: "https://mistfallhunter.com/",
    },
    steam: {
      label: "Steam store",
      href: "https://store.steampowered.com/app/3282300/Mistfall_Hunter/",
    },
    steamNews: {
      label: "Steam news",
      href: "https://steamcommunity.com/app/3282300/allnews/",
    },
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/beginner-guide", label: "Beginner" },
    { href: "/how-to-extract", label: "Extract" },
    { href: "/best-class", label: "Classes" },
    { href: "/hallowgrove", label: "Hallowgrove" },
    { href: "/soul-harvest", label: "Soul Harvest" },
    { href: "/about", label: "About" },
  ],
  footerNav: [
    { href: "/about", label: "About" },
    { href: "/privacy", label: "Privacy" },
    { href: "/contact", label: "Contact" },
  ],
  guides: [
    {
      slug: "beginner-guide",
      title: "Beginner Guide",
      blurb: "First safe hunt: pick Mercenary, learn the extract loop, leave with loot.",
    },
    {
      slug: "how-to-extract",
      title: "How to Extract",
      blurb: "Returner Woodling, Soul of Return, Soul Tree, then the portal.",
    },
    {
      slug: "best-class",
      title: "Best Class",
      blurb: "Press consensus starter is Mercenary. All six official classes, no fake tiers.",
    },
    {
      slug: "hallowgrove",
      title: "Hallowgrove",
      blurb: "The bleached forest map: mist, Returning Chime, and Soul Harvest.",
    },
    {
      slug: "soul-harvest",
      title: "Soul Harvest",
      blurb: "Live as of 12 Aug 2026. Ritual, cocoons, Fate Altar — not a separate queue.",
    },
  ],
  theme: {
    background: "#0c1016",
    surface: "#141a22",
    surfaceRaised: "#1b2330",
    border: "#2a3444",
    text: "#e8eef6",
    textMuted: "#9aa8ba",
    accent: "#d4a24c",
    accentHover: "#e8bc6a",
    link: "#8ec5d8",
    linkHover: "#b7dce8",
    heading: "#f3efe6",
    codeBg: "#0a0e13",
  },
  seo: {
    defaultTitle: "Mistfall Hunter Fan Guides | Mistfall HQ",
    titleTemplate: "%s | Mistfall HQ",
    defaultDescription:
      "Unofficial English fan guides for Mistfall Hunter: extract loop, beginner path, classes, Hallowgrove, and Soul Harvest. Not affiliated with Bellring Games or Skystone Games.",
    keywords: [
      "mistfall hunter",
      "mistfall hunter guide",
      "mistfall hunter extract",
      "mistfall hunter beginner",
      "soul harvest",
      "hallowgrove",
    ],
  },
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
export type GuideCard = (typeof siteConfig.guides)[number];

export function themeStyle(): string {
  const t = siteConfig.theme;
  return [
    `--background:${t.background}`,
    `--surface:${t.surface}`,
    `--surface-raised:${t.surfaceRaised}`,
    `--border:${t.border}`,
    `--text:${t.text}`,
    `--text-muted:${t.textMuted}`,
    `--accent:${t.accent}`,
    `--accent-hover:${t.accentHover}`,
    `--link:${t.link}`,
    `--link-hover:${t.linkHover}`,
    `--heading:${t.heading}`,
    `--code-bg:${t.codeBg}`,
  ].join(";");
}
