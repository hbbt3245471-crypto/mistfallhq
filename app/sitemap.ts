import type { MetadataRoute } from "next";
import { getGuideSlugs } from "@/lib/content";
import { siteConfig } from "@/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/privacy", "/contact"];
  const now = new Date();

  const pages = [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path || "/"}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.5,
    })),
    ...getGuideSlugs().map((slug) => ({
      url: `${siteConfig.url}/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];

  return pages;
}
