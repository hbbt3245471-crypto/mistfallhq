import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MdxBody } from "@/components/MdxBody";
import { getGuide, getGuideSlugs } from "@/lib/content";
import { siteConfig } from "@/site.config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) {
    return {};
  }

  const url = `/${guide.slug}`;
  return {
    title: guide.frontmatter.title,
    description: guide.frontmatter.description,
    keywords: guide.frontmatter.keyword
      ? [guide.frontmatter.keyword]
      : undefined,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: guide.frontmatter.title,
      description: guide.frontmatter.description,
      url,
      siteName: siteConfig.name,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) {
    notFound();
  }

  return (
    <article className="max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
        {siteConfig.game} guide
      </p>
      <h1 className="font-serif text-4xl leading-tight font-semibold tracking-tight text-[var(--heading)]">
        {guide.frontmatter.title}
      </h1>
      <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
        {guide.frontmatter.description}
      </p>
      <div className="mt-8">
        <MdxBody source={guide.body} />
      </div>
    </article>
  );
}
