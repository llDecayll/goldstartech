import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StarMark from "@/components/StarMark";
import Marquee from "@/components/Marquee";

export const metadata = {
  title: "Products — Software Built by Goldstar Tech",
  description:
    "Explore Goldstar Tech's product line: Goldstar Workspace (agency OS), LeadLens CRM, RankPilot SEO & AI-visibility suite, and PulseBoard social publishing. Software we built for ourselves, now available to you.",
  alternates: { canonical: "/products" },
};

const products = [
  {
    n: "01",
    name: "Goldstar Workspace",
    tag: "Agency operating system",
    desc: "The platform our own agency runs on: projects, tasks, CRM, timesheets, content calendars and GST-compliant invoicing in one place. When a lead converts, the project, deliverables and billing schedule are created in a single motion.",
    features: [
      "Projects & tasks with client portals",
      "Built-in CRM with lead scoring",
      "Timesheets, utilisation & profitability",
      "GST-compliant estimates & invoices",
      "Social publishing calendar",
      "Role-based access control",
    ],
    audience: "For agencies and service businesses tired of twelve disconnected tools.",
  },
  {
    n: "02",
    name: "LeadLens CRM",
    tag: "Lead intelligence & follow-up",
    desc: "A CRM built for high-velocity lead businesses — real estate, healthcare, education. Leads arrive scored across six dimensions, sales teams start each day with a ranked list, and AI drafts the first WhatsApp and email touch in your brand voice.",
    features: [
      "Direct Meta & Google lead form sync",
      "Six-dimension lead scoring model",
      "AI-drafted WhatsApp & email outreach",
      "Pipeline views with stage automation",
      "Call and site-visit tracking",
      "Source-level ROI reporting",
    ],
    audience: "For sales teams drowning in unqualified form fills.",
  },
  {
    n: "03",
    name: "RankPilot",
    tag: "SEO & AI-visibility suite",
    desc: "Track classic rankings and AI-answer visibility side by side. RankPilot monitors how assistants describe your brand, audits your site's machine readability, and turns the gaps into a prioritised action plan your team can execute.",
    features: [
      "Keyword rank tracking across markets",
      "AI-assistant mention & citation monitoring",
      "Technical and schema audits",
      "AEO/GEO readiness scoring",
      "Competitor visibility benchmarks",
      "White-label client reports",
    ],
    audience: "For brands and agencies who need to win both search battlegrounds.",
  },
  {
    n: "04",
    name: "PulseBoard",
    tag: "Social publishing & approval",
    desc: "Plan a month of content in an afternoon. PulseBoard pairs a visual calendar with client-approval flows, AI caption assistance and direct publishing to Meta platforms — so the plan you approve is the plan that ships.",
    features: [
      "Visual monthly content calendar",
      "Client review & approval workflows",
      "AI caption and hashtag assistance",
      "Direct publishing via Meta Graph API",
      "Asset library with brand kits",
      "Engagement analytics per pillar",
    ],
    audience: "For marketing teams managing multiple brands and approvals.",
  },
];

const faqs = [
  {
    q: "Are these products available standalone, or only with agency services?",
    a: "Both. Every product is available as a standalone subscription with onboarding support. Agency clients get them bundled into engagements at preferred pricing.",
  },
  {
    q: "Can products be customised for our workflow?",
    a: "Yes. Because we built and maintain the codebases ourselves, customisation requests go to the same engineers who wrote the platform — not a third-party vendor queue.",
  },
  {
    q: "Where is our data hosted?",
    a: "On secured cloud infrastructure with regional hosting options, encrypted in transit and at rest, with role-based access and audit logs. Details are covered in each product's security documentation.",
  },
  {
    q: "Is there a trial?",
    a: "Every product offers a guided pilot: we set it up with your real data, your team uses it for 14 days, and you decide with evidence rather than screenshots.",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8 pt-32 md:pt-44 pb-16 md:pb-20">
        <span className="gold-rule max-w-[180px] mb-8" />
        <p className="eyebrow gs-reveal mb-4">Products</p>
        <h1 className="display gs-reveal text-4xl md:text-6xl lg:text-7xl max-w-4xl">
          Software we built for ourselves. Now it works for you.
        </h1>
        <p className="gs-reveal mt-7 text-graphite text-lg leading-relaxed max-w-2xl">
          Every Goldstar product began as an internal tool solving a real
          operational pain. They run our agency daily — which means they are
          dog-fooded, battle-tested and improved every single week.
        </p>
      </Reveal>

      <Marquee
        items={[
          "Goldstar Workspace",
          "LeadLens CRM",
          "RankPilot",
          "PulseBoard",
        ]}
      />

      {/* Product sections */}
      {products.map((p, idx) => (
        <section
          key={p.name}
          className={`py-20 md:py-28 ${idx % 2 === 1 ? "bg-ink text-paper" : ""}`}
        >
          <Reveal className="mx-auto max-w-wrap px-5 md:px-8">
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-6">
                <p className="font-mono text-sm text-gold gs-reveal">{p.n}</p>
                <span className="gold-rule my-5 max-w-[140px]" />
                <h2 className="display gs-reveal text-3xl md:text-5xl">
                  {p.name}
                </h2>
                <p className="gs-reveal eyebrow !text-gold mt-3">{p.tag}</p>
                <p
                  className={`gs-reveal mt-6 leading-relaxed ${
                    idx % 2 === 1 ? "text-paper/70" : "text-graphite"
                  }`}
                >
                  {p.desc}
                </p>
                <p
                  className={`gs-reveal mt-4 text-sm italic ${
                    idx % 2 === 1 ? "text-paper/50" : "text-graphite/80"
                  }`}
                >
                  {p.audience}
                </p>
                <Link
                  href="/contact"
                  className={`gs-reveal mt-8 inline-flex ${
                    idx % 2 === 1 ? "btn btn--invert" : "btn btn--gold"
                  }`}
                >
                  Request a demo <StarMark size={12} />
                </Link>
              </div>
              <div className="md:col-span-6">
                <div
                  className={`grid sm:grid-cols-2 gap-px border ${
                    idx % 2 === 1
                      ? "bg-paper/10 border-paper/10"
                      : "bg-line border-line"
                  }`}
                >
                  {p.features.map((f) => (
                    <div
                      key={f}
                      className={`gs-reveal group p-6 text-sm leading-relaxed transition-colors duration-300 ${
                        idx % 2 === 1
                          ? "bg-ink text-paper/80 hover:bg-paper hover:text-ink"
                          : "bg-paper text-ink hover:bg-ink hover:text-paper"
                      }`}
                    >
                      <StarMark
                        size={10}
                        className="text-gold mb-3 transition-transform duration-500 group-hover:rotate-180"
                      />
                      <p>{f}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      ))}

      {/* FAQ */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8 py-20 md:py-28">
        <SectionHeading
          eyebrow="Questions"
          title="What buyers usually ask."
        />
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="gs-reveal group py-6">
              <summary className="flex items-center justify-between cursor-pointer list-none font-display font-semibold text-lg hover:text-golddeep transition-colors">
                {f.q}
                <StarMark
                  size={13}
                  className="text-gold shrink-0 ml-6 transition-transform duration-500 group-open:rotate-180"
                />
              </summary>
              <p className="mt-4 text-graphite leading-relaxed max-w-3xl">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8">
        <div className="bg-ink text-paper px-8 py-16 md:px-16 md:py-20 relative overflow-hidden">
          <StarMark
            size={260}
            className="spin-slow absolute -right-20 -bottom-20 text-gold/10 pointer-events-none"
          />
          <p className="eyebrow gs-reveal !text-gold mb-4">See it live</p>
          <h2 className="display gs-reveal text-3xl md:text-4xl max-w-2xl">
            The best product demo is your own data inside the platform.
          </h2>
          <div className="gs-reveal mt-8">
            <Link href="/contact" className="btn btn--invert">
              Start a guided pilot <StarMark size={12} />
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}
