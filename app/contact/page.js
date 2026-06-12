import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import StarMark from "@/components/StarMark";

export const metadata = {
  title: "Contact Us — Start a Project",
  description:
    "Talk to Goldstar Tech about web design, SEO, social media, performance ads, app development or AI solutions in Sri Lanka.",
  alternates: { canonical: "/contact" },
};

const faqs = [
  {
    q: "How quickly do you respond?",
    a: "Within one business day, always. If your enquiry is urgent, call us directly — a human picks up.",
  },
  {
    q: "Do you work with businesses across Sri Lanka?",
    a: "Yes. We support Sri Lankan businesses across sectors and schedule calls around Sri Lanka Standard Time.",
  },
  {
    q: "What budgets do you work with?",
    a: "Marketing retainers and project builds vary widely by scope. On the first call we will tell you honestly whether your budget can achieve your goal — and what we would do with it.",
  },
  {
    q: "Can we start with something small?",
    a: "Absolutely. Many partnerships begin with an audit, a landing page or a single campaign. Earning the bigger engagement is our job, not your risk.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8 pt-32 md:pt-44 pb-16">
        <span className="gold-rule max-w-[180px] mb-8" />
        <p className="eyebrow gs-reveal mb-4">Contact us</p>
        <h1 className="display gs-reveal text-4xl md:text-6xl lg:text-7xl max-w-4xl">
          Tell us what you're building.
        </h1>
        <p className="gs-reveal mt-7 text-graphite text-lg leading-relaxed max-w-2xl">
          Whether it's a website, a campaign, an app or a problem you can't
          quite name yet — start here. A strategist (not a salesperson) reads
          every message.
        </p>
      </Reveal>

      <Reveal className="mx-auto max-w-wrap px-5 md:px-8 pb-20 md:pb-28">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7 gs-reveal">
            <ContactForm />
          </div>
          <aside className="md:col-span-5 space-y-10">
            <div className="gs-reveal border border-line p-8">
              <h2 className="eyebrow mb-5">Direct lines</h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    className="link-sweep font-display font-semibold text-lg"
                    href="mailto:hello@goldstartech.com"
                  >
                    hello@goldstartech.com
                  </a>
                </li>
                <li>
                  <a
                    className="link-sweep font-display font-semibold text-lg"
                    href="tel:+919876543210"
                  >
                    +91 98765 43210
                  </a>
                </li>
              </ul>
            </div>
            <div className="gs-reveal border border-line p-8">
              <h2 className="eyebrow mb-5">Headquarters</h2>
              <p className="text-graphite text-sm leading-relaxed">
                Goldstar Tech Pvt Ltd
                <br />
                Level 26, East Tower
                <br />
                World Trade Center
                <br />
                Echelon Square
                <br />
                Colombo 00100, Sri Lanka
              </p>
              <p className="mt-4 text-xs font-mono uppercase tracking-widest text-golddeep">
                Mon–Fri · 9:30–18:30 SLST
              </p>
            </div>
            <div className="gs-reveal bg-ink text-paper p-8 relative overflow-hidden">
              <StarMark
                size={120}
                className="spin-slow absolute -right-8 -bottom-8 text-gold/10"
              />
              <h2 className="eyebrow !text-gold mb-4">Prefer a call?</h2>
              <p className="text-sm text-paper/70 leading-relaxed">
                Book a free 30-minute strategy call. We'll review your current
                presence before we dial in, so the conversation starts at
                useful.
              </p>
            </div>
          </aside>
        </div>
      </Reveal>

      {/* FAQ */}
      <Reveal className="mx-auto max-w-wrap px-5 md:px-8 pb-8">
        <span className="gold-rule max-w-[140px] mb-6" />
        <p className="eyebrow gs-reveal mb-8">Before you ask</p>
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
    </>
  );
}
