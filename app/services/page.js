import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StarMark from "@/components/StarMark";
import Marquee from "@/components/Marquee";

export const metadata = {
  title: "Services — Web, SEO, Social, Ads, Apps & AI",
  description:
    "Explore Goldstar Tech services: web design & development, e-commerce, SEO with AEO/GEO, social media marketing, performance advertising, mobile app development, software product development, branding and AI solutions.",
  alternates: { canonical: "/services" },
};

const SERVICES = [
  {
    id: "web",
    n: "01",
    title: "Web design & development",
    intro:
      "Your website is the only salesperson that works every hour of every day. We design and build sites that load in moments, read beautifully on a phone, and walk visitors toward one clear action.",
    body: "Every build starts with information architecture, not mood boards: who lands on this page, what do they need to believe, what should they do next? From there our designers and engineers work in the same sprint — so the design is never something engineering has to 'interpret'. We build on WordPress for content-heavy marketing sites, Shopify for commerce, and Next.js or custom stacks where performance and product features demand it. Accessibility, Core Web Vitals and on-page SEO are part of the definition of done, not an upsell.",
    deliverables: [
      "Conversion-focused UI/UX design and prototyping",
      "WordPress, Shopify and custom Next.js builds",
      "E-commerce stores with payment and logistics integrations",
      "Landing pages engineered for paid traffic",
      "Speed optimisation and Core Web Vitals remediation",
      "Ongoing maintenance, security and content updates",
    ],
  },
  {
    id: "seo",
    n: "02",
    title: "SEO, AEO & GEO",
    intro:
      "Being found has two battlegrounds now: classic search results and AI-generated answers. We make sure your brand wins on both.",
    body: "Our SEO engagements begin with a technical audit — crawlability, indexation, site architecture, structured data — because content strategy on a broken foundation is wasted money. We then build topical authority around the queries that drive revenue, not just traffic. Answer Engine Optimization (AEO) structures your content so assistants can cite you directly; Generative Engine Optimization (GEO) builds the entity signals, third-party authority and machine-readable infrastructure that make AI systems recommend you by name. Monthly reports interpret movements and set next priorities — never just a wall of ranking positions.",
    deliverables: [
      "Technical SEO audits and remediation roadmaps",
      "Keyword and topical-authority strategy",
      "AI-visibility audits across major assistants",
      "Schema markup, llms.txt and entity engineering",
      "Local SEO for clinics, showrooms and offices",
      "Multilingual and international SEO",
    ],
  },
  {
    id: "social",
    n: "03",
    title: "Social media marketing",
    intro:
      "Feeds are crowded; attention is earned. We build content systems that make your brand worth following — and keep it consistent month after month.",
    body: "We do not believe in posting for the algorithm's sake. Each client gets a sector-aware content strategy: healthcare content earns trust through education, real estate sells the life around the property, food brands win on craving and story. Calendars are planned monthly, produced in batches, and reviewed against engagement and enquiry data — so the content plan evolves from evidence, not habit. Reels, carousels, stories and community management are handled end to end by one pod that knows your brand voice.",
    deliverables: [
      "Monthly content calendars and creative production",
      "Reels scripting, editing and publishing",
      "Brand voice and visual identity systems for social",
      "Community management and reputation monitoring",
      "Influencer and collaboration coordination",
      "Performance reviews tied to enquiries, not just likes",
    ],
  },
  {
    id: "ads",
    n: "04",
    title: "Performance advertising",
    intro:
      "Paid media is a compounding machine when run with discipline — and a money shredder when run on instinct. We run it with discipline.",
    body: "Goldstar manages Meta and Google campaigns with a testing framework that treats every rupee of spend as research: one variable per test, structured naming, written kill criteria, and a creative library that grows smarter each month. Tracking is engineered properly — conversion APIs, server-side events, offline conversion imports — so optimisation decisions rest on real data. For regulated verticals like healthcare we build campaigns inside platform policy from day one, avoiding the rejection-and-appeal spiral that stalls most accounts.",
    deliverables: [
      "Meta (Facebook & Instagram) campaign management",
      "Google Search, Display, and YouTube campaigns",
      "Conversion tracking, CAPI and server-side events",
      "Creative strategy, production and structured testing",
      "Lead form, CRM and WhatsApp automation integration",
      "Weekly optimisation and revenue-linked reporting",
    ],
  },
  {
    id: "apps",
    n: "05",
    title: "Mobile app development",
    intro:
      "An app earns its place on a home screen by being useful daily — not by existing. We build apps people keep.",
    body: "Our mobile practice covers native and cross-platform builds for iOS and Android. We start with the smallest version that proves the core value, instrument it with analytics from the first release, and grow features based on observed behaviour. APIs are documented, backends are scalable, and app-store optimisation is handled alongside launch so the product meets its audience.",
    deliverables: [
      "iOS and Android app development",
      "Cross-platform builds (React Native / Flutter)",
      "UX research, wireframing and interactive prototypes",
      "Backend, API and third-party integrations",
      "App Store and Play Store launch & ASO",
      "Post-launch analytics, iteration and support",
    ],
  },
  {
    id: "software",
    n: "06",
    title: "Software product development",
    intro:
      "From internal platforms to client-facing SaaS, we build software the way we build campaigns: shipped fast, measured honestly, improved relentlessly.",
    body: "We design and engineer web applications, dashboards, marketplaces and automation platforms — including the agency OS we run our own business on. Engagements range from MVP sprints for funded startups to multi-year platform builds for established businesses. Architecture choices favour maintainability: clean codebases, CI/CD pipelines, documentation that survives team changes.",
    deliverables: [
      "Web application and SaaS development",
      "Marketplace and booking platforms",
      "CRM, ERP and internal tool development",
      "API design and systems integration",
      "DevOps, CI/CD and cloud deployment",
      "Product strategy and roadmap consulting",
    ],
  },
  {
    id: "ai",
    n: "07",
    title: "AI solutions",
    intro:
      "AI is only useful when it removes real friction. We build practical AI systems that answer customers faster, automate the repetitive, and multiply your team's output.",
    body: "Our AI practice is grounded in production work, not demos: customer-service chatbots trained on your actual knowledge base, content pipelines that draft in your brand voice for human review, lead-qualification agents that score and route enquiries, and n8n automation workflows that connect your marketing stack end to end. Every system ships with guardrails, human oversight points, and measurement of the hours it actually saves.",
    deliverables: [
      "Custom chatbots and customer-service automation",
      "AI-assisted content generation pipelines",
      "Lead scoring and qualification agents",
      "Workflow automation (n8n and custom)",
      "AI readiness audits and adoption roadmaps",
      "Integration with CRM, WhatsApp and ad platforms",
    ],
  },
  {
    id: "brand",
    n: "08",
    title: "Branding & creative production",
    intro:
      "A strong brand makes every other channel cheaper. We build identities with a point of view — and the production systems to keep them consistent.",
    body: "From naming and logo systems to full visual identities, brochures, pitch decks and packaging, our creative team designs assets that work as hard in a WhatsApp forward as on a billboard. Brand guidelines ship as practical toolkits — templates, components and rules your team can actually follow — so consistency survives beyond the launch month.",
    deliverables: [
      "Brand strategy, naming and positioning",
      "Logo and visual identity systems",
      "Brand guidelines and template toolkits",
      "Brochures, decks, packaging and print",
      "Ad creative and campaign key visuals",
      "Motion graphics and video editing",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8 pt-32 md:pt-44 pb-16 md:pb-20">
        <span className="gold-rule max-w-[180px] mb-8" />
        <p className="eyebrow gs-reveal mb-4">Services</p>
        <h1 className="display gs-reveal text-4xl md:text-6xl lg:text-7xl max-w-4xl">
          Everything growth needs, under one roof.
        </h1>
        <p className="gs-reveal mt-7 text-graphite text-lg leading-relaxed max-w-2xl">
          Eight disciplines that usually live at three different vendors — here
          they share one strategy, one sprint board and one accountable team.
          Jump to any service below.
        </p>
        <nav
          className="gs-reveal flex flex-wrap gap-3 mt-10"
          aria-label="Services on this page"
        >
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="border border-line px-4 py-2 text-xs font-mono uppercase tracking-wider hover:border-gold hover:text-golddeep transition-colors"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </Reveal>

      <Marquee
        items={[
          "Strategy",
          "Design",
          "Engineering",
          "Media",
          "Content",
          "Automation",
        ]}
      />

      {/* Service sections */}
      {SERVICES.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`scroll-mt-24 py-20 md:py-28 ${
            idx % 2 === 1 ? "bg-ink text-paper" : ""
          }`}
        >
          <Reveal className="mx-auto max-w-wrap px-5 md:px-8">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-5">
                <p className="font-mono text-sm text-gold gs-reveal">{s.n}</p>
                <span className="gold-rule my-5 max-w-[140px]" />
                <h2 className="display gs-reveal text-3xl md:text-4xl">
                  {s.title}
                </h2>
                <p
                  className={`gs-reveal mt-5 text-lg leading-relaxed ${
                    idx % 2 === 1 ? "text-paper/70" : "text-graphite"
                  }`}
                >
                  {s.intro}
                </p>
                <Link
                  href="/contact"
                  className={`gs-reveal mt-8 inline-flex ${
                    idx % 2 === 1 ? "btn btn--invert" : "btn btn--gold"
                  }`}
                >
                  Discuss this service <StarMark size={12} />
                </Link>
              </div>
              <div className="md:col-span-7">
                <p
                  className={`gs-reveal leading-relaxed ${
                    idx % 2 === 1 ? "text-paper/70" : "text-graphite"
                  }`}
                >
                  {s.body}
                </p>
                <h3 className="gs-reveal eyebrow !text-gold mt-10 mb-5">
                  What's included
                </h3>
                <ul
                  className={`grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm ${
                    idx % 2 === 1 ? "text-paper/80" : "text-ink"
                  }`}
                >
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="gs-reveal flex items-start gap-3 leading-relaxed"
                    >
                      <StarMark
                        size={10}
                        className="text-gold mt-1.5 shrink-0"
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>
      ))}

      {/* CTA */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8 pt-8">
        <div className="border border-gold p-10 md:p-16 text-center">
          <p className="eyebrow gs-reveal mb-4">Not sure where to start?</p>
          <h2 className="display gs-reveal text-3xl md:text-4xl max-w-2xl mx-auto">
            Book a free strategy call and we'll map the highest-leverage move
            for your business.
          </h2>
          <div className="gs-reveal mt-8">
            <Link href="/contact" className="btn btn--gold">
              Book a call <StarMark size={12} />
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}
