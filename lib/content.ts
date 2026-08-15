import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "en");

export const reservedSlugs = new Set(["about", "privacy", "contact"]);

export type GuideFrontmatter = {
  title: string;
  description: string;
  keyword?: string;
};

export type Guide = {
  slug: string;
  frontmatter: GuideFrontmatter;
  body: string;
};

function isMdxFile(name: string): boolean {
  return name.endsWith(".mdx");
}

export function getGuideSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  return fs
    .readdirSync(CONTENT_DIR)
    .filter(isMdxFile)
    .map((file) => file.replace(/\.mdx$/, ""))
    .filter((slug) => !reservedSlugs.has(slug))
    .sort();
}

function prepareBody(markdown: string): string {
  return markdown
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/^#\s+[^\n]+\n+/, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function getGuide(slug: string): Guide | null {
  if (reservedSlugs.has(slug) || slug.includes("/") || slug.includes("..")) {
    return null;
  }

  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const title = typeof data.title === "string" ? data.title : "";
  const description =
    typeof data.description === "string" ? data.description : "";

  if (!title || !description) {
    return null;
  }

  return {
    slug,
    frontmatter: {
      title,
      description,
      keyword: typeof data.keyword === "string" ? data.keyword : undefined,
    },
    body: prepareBody(content),
  };
}

export function getAllGuides(): Guide[] {
  return getGuideSlugs()
    .map((slug) => getGuide(slug))
    .filter((guide): guide is Guide => guide !== null);
}
