import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import SectionHeading from "@/components/SectionHeading";
import Counter from "@/components/Counter";
import StarMark from "@/components/StarMark";
import { posts } from "@/lib/posts";

export const metadata = {
  title:
    "Goldstar Tech | Digital Marketing & Software Development Agency in Sri Lanka",
  description:
    "Goldstar Tech engineers measurable growth: web design & development, SEO, AEO/GEO, social media marketing, performance advertising, mobile apps, software products and AI solutions for businesses across Sri Lanka.",
  alternates: { canonical: "/" },
};

const services = [
  {
    id: "web",
    title: "Web design & development",
    desc: "Conversion-focused websites on WordPress, Shopify and custom stacks — designed to load fast, rank well and turn visitors into enquiries.",
  },
  {
    id: "seo",
    title: "SEO, AEO & GEO",
    desc: "Classic search rankings plus visibility inside AI answers. Technical audits, content strategy, structured data and entity engineering.",
  },
  {
    id: "social",
    title: "Social media marketing",
    desc: "Sector-aware content calendars, reels, carousels and community management that build brands people remember and choose.",
  },
  {
    id: "ads",
    title: "Performance advertising",
    desc: "Meta and Google campaigns run with disciplined creative testing, clean tracking and reporting tied to revenue — not vanity metrics.",
  },
  {
    id: "apps",
    title: "Mobile app development",
    desc: "iOS and Android apps with thoughtful UX, robust APIs and analytics baked in from day one — from MVP to scale.",
  },
  {
    id: "ai",
    title: "AI solutions",
    desc: "Chatbots, automation pipelines and AI-assisted content systems that cut response times and multiply your team's output.",
  },
];

const sectors = [
  {
    name: "Healthcare",
    desc: "Compliant patient-acquisition systems for clinics, dental practices, physiotherapy centres and specialists.",
  },
  {
    name: "Real estate",
    desc: "Qualified-lead funnels, project launch campaigns and CRM-scored pipelines for developers and brokerages.",
  },
  {
    name: "Agri-tech",
    desc: "Marketplace growth, investor education content and trust-building for farmland and agri platforms.",
  },
  {
    name: "Solar & energy",
    desc: "Demand generation for installers and energy brands riding Sri Lanka's renewable transition.",
  },
];

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "We audit your market, competitors, analytics and current channels. Every engagement starts with evidence, not assumptions.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Strategy, creative direction and technical architecture are drafted together so the plan is buildable and measurable from day one.",
  },
  {
    n: "03",
    title: "Build",
    desc: "Websites, campaigns, content and software ship in tight sprints with weekly checkpoints — you always know what is live and why.",
  },
  {
    n: "04",
    title: "Compound",
    desc: "We measure, interpret and reinvest in what works. Reports explain the numbers; the numbers fund the next experiment.",
  },
];

const testimonials = [
  {
    quote:
      "Goldstar rebuilt our website and our patient enquiries doubled within a quarter. Their reports actually explain what the numbers mean.",
    name: "Clinic Director",
    org: "Multi-speciality dental group, Colombo",
  },
  {
    quote:
      "The first agency that pushed back on our brief — and they were right. Lead quality went up even as our cost per site visit fell.",
    name: "VP Marketing",
    org: "Residential developer, Sri Lanka",
  },
  {
    quote:
      "One team handled our store build, SEO and ads. No more coordinating three vendors who blame each other.",
    name: "Founder",
    org: "D2C retail brand, Sri Lanka",
  },
];

export default function HomePage() {
  const latest = posts.slice(0, 3);

  return (
    <>
      <Hero />

      <Marquee
        items={[
          "Web design",
          "SEO & AEO",
          "Social media",
          "Performance ads",
          "Mobile apps",
          "AI solutions",
          "Software products",
          "Branding",
        ]}
      />

      {/* Intro */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <span className="gold-rule mb-6 max-w-[140px]" />
            <p className="eyebrow gs-reveal">Who we are</p>
          </div>
          <div className="md:col-span-7">
            <h2 className="display gs-reveal text-2xl md:text-4xl leading-snug">
              We are Goldstar Tech — a full-stack growth partner for businesses
              that are done with guesswork.
            </h2>
            <p className="gs-reveal mt-6 text-graphite leading-relaxed">
              Based in Sri Lanka, we combine the craft of a design studio,
              the rigour of an engineering team and the accountability of a
              performance agency. Our clients span healthcare, real estate,
              agri-tech, solar energy, hospitality and retail across Sri Lanka.
            </p>
            <p className="gs-reveal mt-4 text-graphite leading-relaxed">
              Everything we ship is built to be measured. If a page, post or
              campaign cannot be tied to a business outcome, we ask why it
              exists.
            </p>
            <Link
              href="/about"
              className="gs-reveal link-sweep inline-flex items-center gap-2 mt-8 font-display font-semibold text-golddeep"
            >
              More about us <StarMark size={11} />
            </Link>
          </div>
        </div>
      </Reveal>

      {/* Services grid */}
      <section className="bg-ink text-paper py-20 md:py-28">
        <Reveal className="mx-auto max-w-wrap px-5 md:px-8">
          <span className="gold-rule mb-6 max-w-[140px]" />
          <p className="eyebrow gs-reveal !text-gold mb-3">What we do</p>
          <h2 className="display gs-reveal text-3xl md:text-5xl max-w-3xl">
            Eight disciplines. One accountable team.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-paper/10 mt-14 border border-paper/10">
            {services.map((s) => (
              <Link
                key={s.id}
                href={`/services#${s.id}`}
                className="gs-reveal group bg-ink p-8 transition-colors duration-400 hover:bg-paper hover:text-ink"
              >
                <StarMark
                  size={16}
                  className="card-star text-paper/30 group-hover:text-gold group-hover:rotate-180 transition-all duration-500"
                />
                <h3 className="font-display font-semibold text-lg mt-6 mb-3">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-paper/60 group-hover:text-graphite transition-colors">
                  {s.desc}
                </p>
                <span className="link-sweep inline-block mt-5 text-xs font-mono uppercase tracking-widest text-gold">
                  Learn more
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Stats */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8 py-20 md:py-28">
        <SectionHeading
          eyebrow="Proof, not promises"
          title="Numbers our clients can verify."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          <Counter value={120} suffix="+" label="Projects delivered across Sri Lanka" />
          <Counter value={40} suffix="+" label="Active client partnerships" />
          <Counter value={6} suffix="" label="Industry verticals with deep playbooks" />
          <Counter value={93} suffix="%" label="Clients who stay beyond year one" />
        </div>
      </Reveal>

      {/* Sectors */}
      <section className="border-y border-line py-20 md:py-28">
        <Reveal className="mx-auto max-w-wrap px-5 md:px-8">
          <SectionHeading
            eyebrow="Sector depth"
            title="Specialists, not generalists."
            lead="Generic marketing dies on contact with a regulated or complex industry. We maintain living playbooks for the verticals we serve — compliance rules, audience insights, creative patterns and benchmarks."
          />
          <div className="grid md:grid-cols-2 gap-px bg-line border border-line">
            {sectors.map((s) => (
              <div
                key={s.name}
                className="gs-reveal card-hover bg-paper p-8 md:p-10 border border-transparent"
              >
                <div className="flex items-center gap-3">
                  <StarMark size={13} className="card-star text-graphite" />
                  <h3 className="font-display font-semibold text-xl">
                    {s.name}
                  </h3>
                </div>
                <p className="mt-4 text-graphite text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Process */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8 py-20 md:py-28">
        <SectionHeading
          eyebrow="How we work"
          title="A process built for momentum."
          lead="Four stages, repeated. Each cycle compounds what the last one learned."
        />
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.n} className="gs-reveal group">
              <p className="font-mono text-sm text-gold">{step.n}</p>
              <span className="gold-rule my-4" />
              <h3 className="font-display font-semibold text-xl group-hover:text-golddeep transition-colors">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-graphite leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <Marquee
        dark
        items={[
          "Healthcare",
          "Real estate",
          "Agri-tech",
          "Solar energy",
          "Hospitality",
          "Retail & D2C",
          "Professional services",
        ]}
      />

      {/* Testimonials */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8 py-20 md:py-28">
        <SectionHeading
          eyebrow="Client voices"
          title="What partners say when we are not in the room."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="gs-reveal card-hover border border-line p-8 flex flex-col"
            >
              <StarMark size={14} className="card-star text-gold mb-6" />
              <blockquote className="text-ink leading-relaxed flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-line">
                <p className="font-display font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-graphite mt-1">{t.org}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      {/* Blog teasers */}
      <section className="border-t border-line py-20 md:py-28">
        <Reveal className="mx-auto max-w-wrap px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="From the journal"
              title="Thinking we publish."
            />
            <Link
              href="/blog"
              className="gs-reveal link-sweep font-display font-semibold text-golddeep mb-16"
            >
              All articles
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="gs-reveal card-hover group border border-line p-7 flex flex-col"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-golddeep">
                  {p.category}
                </p>
                <h3 className="font-display font-semibold text-lg mt-4 leading-snug group-hover:text-golddeep transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-graphite leading-relaxed flex-1">
                  {p.excerpt.slice(0, 130)}…
                </p>
                <p className="mt-5 text-xs font-mono text-graphite">
                  {p.readTime}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8 pt-20 md:pt-28">
        <div className="bg-ink text-paper px-8 py-16 md:px-16 md:py-24 relative overflow-hidden">
          <StarMark
            size={300}
            className="spin-slow absolute -right-24 -bottom-24 text-gold/10 pointer-events-none"
          />
          <p className="eyebrow gs-reveal !text-gold mb-4">
            Ready when you are
          </p>
          <h2 className="display gs-reveal text-3xl md:text-5xl max-w-2xl">
            Tell us where your growth is stuck. We will show you the way
            through.
          </h2>
          <div className="gs-reveal mt-10">
            <Link href="/contact" className="btn btn--invert">
              Start a project <StarMark size={12} />
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}
