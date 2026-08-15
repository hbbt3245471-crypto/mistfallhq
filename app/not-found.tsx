import Link from "next/link";

export default function NotFound() {
  return (
    <article className="max-w-3xl">
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-[var(--heading)]">
        Page not found
      </h1>
      <p className="mt-4 leading-7 text-[var(--text-muted)]">
        That route is not a guide on this fan site. Return{" "}
        <Link href="/">home</Link> or open the{" "}
        <Link href="/beginner-guide">Beginner Guide</Link>.
      </p>
    </article>
  );
}
