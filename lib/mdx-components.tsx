import type { ComponentPropsWithoutRef } from "react";

function headingId(children: unknown): string | undefined {
  if (typeof children === "string") {
    return children
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  }
  return undefined;
}

export const mdxComponents = {
  h1: () => null,
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      id={headingId(props.children)}
      className="mt-10 mb-3 border-b border-[var(--border)] pb-2 text-xl font-semibold tracking-tight text-[var(--heading)]"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      id={headingId(props.children)}
      className="mt-8 mb-2 text-lg font-semibold text-[var(--heading)]"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="my-4 leading-7 text-[var(--text)]" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => {
    const href = props.href ?? "";
    const external = href.startsWith("http");
    return (
      <a
        className="text-[var(--link)] underline decoration-[var(--border)] underline-offset-2 hover:text-[var(--link-hover)] hover:decoration-[var(--link)]"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      />
    );
  },
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="my-4 list-disc space-y-2 pl-6 marker:text-[var(--accent)]" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="my-4 list-decimal space-y-2 pl-6 marker:text-[var(--accent)]" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-7" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-[var(--heading)]" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="italic text-[var(--text)]" {...props} />
  ),
  hr: () => <hr className="my-10 border-[var(--border)]" />,
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="my-6 border-l-2 border-[var(--accent)] pl-4 text-[var(--text-muted)]"
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="rounded bg-[var(--code-bg)] px-1.5 py-0.5 font-mono text-[0.9em] text-[var(--accent-hover)]"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--code-bg)] p-4 text-sm"
      {...props}
    />
  ),
};
