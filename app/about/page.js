import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Counter from "@/components/Counter";
import StarMark from "@/components/StarMark";
import Marquee from "@/components/Marquee";

export const metadata = {
  title: "About Us — Our Story, Values & Team",
  description:
    "Goldstar Tech is a Sri Lanka-based digital marketing and software development agency. Learn about our story, our values, the leadership team and why Sri Lankan businesses trust us with their growth.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Evidence over opinion",
    desc: "Every recommendation we make can point to data, a benchmark or a tested precedent. When we are guessing, we say so — then we design the test.",
  },
  {
    title: "Clarity over cleverness",
    desc: "Jargon hides weak thinking. We write proposals, reports and copy a busy founder can understand on the first read.",
  },
  {
    title: "Craft in the details",
    desc: "The kerning on a heading, the load time of a page, the naming of an ad set — small things compound into the difference between good and great.",
  },
  {
    title: "Partners, not vendors",
    desc: "We take fewer clients and go deeper. Your goals become our sprint board; your wins are the only case studies worth having.",
  },
  {
    title: "Build what we sell",
    desc: "Our own products run on the same strategies we recommend. We never prescribe a medicine we have not taken ourselves.",
  },
  {
    title: "Honest when it costs us",
    desc: "If a channel is not working, the report says so. If your budget is better spent elsewhere, we tell you — even when 'elsewhere' is not us.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "Founded in Sri Lanka",
    desc: "Goldstar Tech opens with three people, two laptops and a conviction: agencies should be accountable to outcomes, not activity.",
  },
  {
    year: "2021",
    title: "Sri Lankan sector playbooks",
    desc: "Word of mouth carries us across Sri Lanka. We build our first sector playbooks for healthcare and real estate.",
  },
  {
    year: "2023",
    title: "Software practice launches",
    desc: "Client demand for custom platforms grows into a full development arm — web apps, mobile apps and integrations.",
  },
  {
    year: "2024",
    title: "Goldstar Workspace ships",
    desc: "Our internal agency OS — projects, CRM, timesheets, invoicing — becomes a product we offer to other service businesses.",
  },
  {
    year: "2025",
    title: "AI-first delivery",
    desc: "AI-assisted content systems, automation pipelines and AEO/GEO services move from experiments to core offerings.",
  },
  {
    year: "2026",
    title: "Sri Lanka focus, six verticals",
    desc: "Today we serve clients across Sri Lanka with a team that still answers its own phone.",
  },
];

const leadership = [
  {
    name: "Arjun Mehta",
    role: "Founder & Head of Strategy",
    desc: "Sets the growth thesis for every engagement. Fifteen years across performance marketing and product, allergic to vanity metrics.",
  },
  {
    name: "Priya Raghavan",
    role: "Head of Technology",
    desc: "Leads engineering across web, mobile and the Goldstar product line. Believes the best architecture is the one a junior dev can maintain.",
  },
  {
    name: "Karan Shetty",
    role: "Head of Client Partnerships",
    desc: "Owns the client experience from first call to renewal. Measures himself on one number: how many clients refer us unprompted.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8 pt-32 md:pt-44 pb-16 md:pb-24">
        <span className="gold-rule max-w-[180px] mb-8" />
        <p className="eyebrow gs-reveal mb-4">About Goldstar Tech</p>
        <h1 className="display gs-reveal text-4xl md:text-6xl lg:text-7xl max-w-4xl">
          The agency we wished existed — so we built it.
        </h1>
        <p className="gs-reveal mt-7 text-graphite text-lg leading-relaxed max-w-2xl">
          Goldstar Tech began with a frustration every founder knows: agencies
          that promise the world in the pitch and disappear into jargon after
          the invoice. We started in 2019 to do the opposite — show the work,
          explain the numbers, and stay accountable to outcomes.
        </p>
      </Reveal>

      <Marquee
        items={[
          "Founded 2019",
          "Sri Lanka HQ",
          "Sri Lanka-wide",
          "6 verticals",
          "One accountable team",
        ]}
      />

      {/* Story */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <span className="gold-rule mb-6 max-w-[140px]" />
            <p className="eyebrow gs-reveal">Our story</p>
            <h2 className="display gs-reveal text-3xl md:text-4xl mt-3">
              From two laptops to a Sri Lanka-wide practice.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-graphite leading-relaxed">
            <p className="gs-reveal">
              Our first clients were local: a dental clinic that needed
              patients, a builder who needed buyers. We learned early that
              regulated, high-trust industries punish generic marketing — and
              reward agencies who do the homework. So we did the homework, over
              and over, until the homework became playbooks.
            </p>
            <p className="gs-reveal">
              As the marketing practice grew, clients kept asking the same
              question: can you also build the thing? The booking system, the
              marketplace, the app. Rather than hand them to outside
              developers and pray, we hired engineers and built a software
              practice that holds itself to the same standard as our
              campaigns: shipped, measured, improved.
            </p>
            <p className="gs-reveal">
              Today Goldstar Tech is one team across strategy, design,
              engineering and media — small enough that you know everyone on
              your account, senior enough that nobody is learning on your
              budget.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Stats */}
      <section className="bg-ink text-paper py-20 md:py-24">
        <Reveal className="mx-auto max-w-wrap px-5 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            <Counter value={1} suffix="" label="Country focus: Sri Lanka" />
            <Counter value={120} suffix="+" label="Websites, apps and campaigns shipped" />
            <Counter value={18} suffix="" label="Specialists across strategy, design & engineering" />
            <Counter value={93} suffix="%" label="Client retention beyond the first year" />
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8 py-20 md:py-28">
        <SectionHeading
          eyebrow="What we believe"
          title="Six values that survive contact with deadlines."
          lead="Values are only real if they cost something. These have cost us pitches, shortcuts and the occasional comfortable silence — and they are why clients stay."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {values.map((v) => (
            <div
              key={v.title}
              className="gs-reveal card-hover bg-paper p-8 border border-transparent"
            >
              <StarMark size={13} className="card-star text-graphite mb-5" />
              <h3 className="font-display font-semibold text-lg">{v.title}</h3>
              <p className="mt-3 text-sm text-graphite leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Timeline */}
      <section className="border-y border-line py-20 md:py-28">
        <Reveal className="mx-auto max-w-wrap px-5 md:px-8">
          <SectionHeading eyebrow="Milestones" title="The road so far." />
          <div className="space-y-0">
            {timeline.map((t) => (
              <div
                key={t.year}
                className="gs-reveal group grid md:grid-cols-12 gap-4 py-7 border-b border-line hover:bg-ink hover:text-paper transition-colors duration-300 px-4 -mx-4"
              >
                <p className="md:col-span-2 font-mono text-gold text-sm pt-1">
                  {t.year}
                </p>
                <h3 className="md:col-span-4 font-display font-semibold text-xl">
                  {t.title}
                </h3>
                <p className="md:col-span-6 text-sm leading-relaxed text-graphite group-hover:text-paper/70 transition-colors">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Leadership */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8 py-20 md:py-28">
        <SectionHeading
          eyebrow="Leadership"
          title="The people who answer for the work."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {leadership.map((p) => (
            <div
              key={p.name}
              className="gs-reveal card-hover border border-line p-8"
            >
              <div className="aspect-square bg-line/60 mb-6 flex items-center justify-center">
                <StarMark size={42} className="card-star text-gold/50" />
              </div>
              <h3 className="font-display font-semibold text-xl">{p.name}</h3>
              <p className="font-mono text-xs uppercase tracking-widest text-golddeep mt-1">
                {p.role}
              </p>
              <p className="mt-4 text-sm text-graphite leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8">
        <div className="border border-gold p-10 md:p-16 text-center">
          <p className="eyebrow gs-reveal mb-4">Work with us</p>
          <h2 className="display gs-reveal text-3xl md:text-4xl max-w-2xl mx-auto">
            If this sounds like the partner you have been looking for, let's
            talk.
          </h2>
          <div className="gs-reveal mt-8">
            <Link href="/contact" className="btn btn--gold">
              Get in touch <StarMark size={12} />
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}
