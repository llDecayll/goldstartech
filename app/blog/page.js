import Link from "next/link";
import Reveal from "@/components/Reveal";
import StarMark from "@/components/StarMark";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Blog — Growth, SEO, AI Search & Marketing Insights",
  description:
    "Practical articles from the Goldstar Tech team on SEO, AEO/GEO, healthcare and real estate marketing, Meta Ads testing frameworks, and building software products.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8 pt-32 md:pt-44 pb-14 md:pb-20">
        <span className="gold-rule max-w-[180px] mb-8" />
        <p className="eyebrow gs-reveal mb-4">The Goldstar journal</p>
        <h1 className="display gs-reveal text-4xl md:text-6xl lg:text-7xl max-w-4xl">
          Notes from the work.
        </h1>
        <p className="gs-reveal mt-7 text-graphite text-lg leading-relaxed max-w-2xl">
          No recycled listicles. These are frameworks, observations and
          opinions from campaigns we actually run and products we actually
          build.
        </p>
      </Reveal>

      {/* Featured */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8 pb-16">
        <Link
          href={`/blog/${featured.slug}`}
          className="gs-reveal group grid md:grid-cols-12 gap-8 border border-line p-8 md:p-12 card-hover"
        >
          <div className="md:col-span-8">
            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-golddeep">
              <span>{featured.category}</span>
              <span className="text-graphite">{featured.readTime}</span>
            </div>
            <h2 className="display text-2xl md:text-4xl mt-5 group-hover:text-golddeep transition-colors leading-tight">
              {featured.title}
            </h2>
            <p className="mt-5 text-graphite leading-relaxed max-w-2xl">
              {featured.excerpt}
            </p>
            <span className="link-sweep inline-flex items-center gap-2 mt-7 font-display font-semibold text-golddeep">
              Read article <StarMark size={11} />
            </span>
          </div>
          <div className="hidden md:flex md:col-span-4 items-center justify-center">
            <StarMark
              size={140}
              className="card-star text-gold/20 group-hover:text-gold/40"
            />
          </div>
        </Link>
      </Reveal>

      {/* Grid */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {rest.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="gs-reveal group bg-paper p-8 flex flex-col hover:bg-ink hover:text-paper transition-colors duration-400"
            >
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest">
                <span className="text-golddeep group-hover:text-gold transition-colors">
                  {p.category}
                </span>
                <span className="text-graphite group-hover:text-paper/50 transition-colors">
                  {p.readTime}
                </span>
              </div>
              <h3 className="font-display font-semibold text-xl mt-5 leading-snug">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-graphite group-hover:text-paper/60 transition-colors flex-1">
                {p.excerpt.slice(0, 150)}…
              </p>
              <p className="mt-6 text-xs font-mono text-graphite group-hover:text-paper/50 transition-colors">
                {new Date(p.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </Link>
          ))}
        </div>
      </Reveal>

      {/* Newsletter CTA */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8">
        <div className="border border-gold p-10 md:p-14 text-center">
          <p className="eyebrow gs-reveal mb-4">Stay sharp</p>
          <h2 className="display gs-reveal text-2xl md:text-3xl max-w-xl mx-auto">
            One useful idea a month — no fluff, unsubscribe anytime.
          </h2>
          <div className="gs-reveal mt-8">
            <Link href="/contact" className="btn btn--gold">
              Subscribe via contact <StarMark size={12} />
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}
