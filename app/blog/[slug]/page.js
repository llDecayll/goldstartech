import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import StarMark from "@/components/StarMark";
import { posts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Goldstar Tech" },
    publisher: { "@type": "Organization", name: "Goldstar Tech" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Reveal className="mx-auto max-w-3xl px-5 md:px-8 pt-32 md:pt-44 pb-16">
        <nav className="gs-reveal text-xs font-mono uppercase tracking-widest text-graphite mb-8">
          <Link href="/" className="link-sweep">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/blog" className="link-sweep">
            Blog
          </Link>{" "}
          / <span className="text-golddeep">{post.category}</span>
        </nav>

        <span className="gold-rule max-w-[140px] mb-7" />
        <h1 className="display gs-reveal text-3xl md:text-5xl leading-tight">
          {post.title}
        </h1>
        <div className="gs-reveal flex items-center gap-5 mt-6 text-xs font-mono uppercase tracking-widest text-graphite">
          <span>
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span>{post.readTime}</span>
        </div>
        <p className="gs-reveal mt-8 text-lg text-graphite leading-relaxed border-l-2 border-gold pl-5">
          {post.excerpt}
        </p>

        <article className="prose-gs mt-12">
          {post.body.map((section, i) => (
            <Reveal key={i}>
              <h2 className="gs-reveal">{section.h}</h2>
              <p className="gs-reveal">{section.p}</p>
            </Reveal>
          ))}
        </article>

        <div className="mt-14 pt-8 border-t border-line">
          <Link href="/contact" className="btn btn--gold">
            Discuss this with our team <StarMark size={12} />
          </Link>
        </div>
      </Reveal>

      {/* Related */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8 pb-8">
        <span className="gold-rule max-w-[140px] mb-6" />
        <p className="eyebrow gs-reveal mb-8">Keep reading</p>
        <div className="grid md:grid-cols-3 gap-8">
          {others.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="gs-reveal card-hover group border border-line p-7"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-golddeep">
                {p.category}
              </p>
              <h3 className="font-display font-semibold text-lg mt-4 leading-snug group-hover:text-golddeep transition-colors">
                {p.title}
              </h3>
              <p className="mt-4 text-xs font-mono text-graphite">
                {p.readTime}
              </p>
            </Link>
          ))}
        </div>
      </Reveal>
    </>
  );
}
