import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing use of the Goldstar Tech website, products and services, including engagement terms, intellectual property, payment and liability.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <Reveal className="mx-auto max-w-3xl px-5 md:px-8 pt-32 md:pt-44 pb-16">
      <span className="gold-rule max-w-[180px] mb-8" />
      <p className="eyebrow gs-reveal mb-4">Legal</p>
      <h1 className="display gs-reveal text-4xl md:text-6xl">
        Terms &amp; conditions
      </h1>
      <p className="gs-reveal mt-5 text-xs font-mono uppercase tracking-widest text-graphite">
        Last updated: 1 June 2026
      </p>

      <div className="prose-gs mt-10 gs-reveal">
        <p>
          These terms and conditions ("Terms") govern your use of the Goldstar
          Tech website at goldstartech.com (the "Site") and, unless superseded
          by a signed agreement, the services and software products we provide
          ("Services"). By using the Site or engaging our Services, you agree
          to these Terms. If you are accepting on behalf of a company, you
          confirm you have authority to bind that company.
        </p>

        <h2>1. About us</h2>
        <p>
          Goldstar Tech Pvt Ltd is a digital marketing and software
          development agency registered in Sri Lanka. We
          provide web design and development, search and AI-visibility
          optimisation, social media marketing, performance advertising,
          mobile app development, software product development, branding and
          AI solutions.
        </p>

        <h2>2. Use of the Site</h2>
        <ul>
          <li>You may use the Site for lawful purposes only and in a way that does not infringe the rights of, or restrict the use of the Site by, anyone else.</li>
          <li>You must not attempt to gain unauthorised access to the Site, its servers or any connected systems, or introduce malicious code.</li>
          <li>Content on the Site is provided for general information and does not constitute professional advice for your specific circumstances.</li>
        </ul>

        <h2>3. Proposals and engagements</h2>
        <p>
          Service engagements are defined in written proposals, statements of
          work or subscription terms ("Engagement Documents"). Where an
          Engagement Document conflicts with these Terms, the Engagement
          Document prevails. Estimates of timelines and outcomes are made in
          good faith based on information available at the time; material
          changes in scope, access or client responsiveness may affect both.
        </p>

        <h2>4. Client responsibilities</h2>
        <ul>
          <li>Provide timely access to accounts, content, brand assets and approvals reasonably required to deliver the Services.</li>
          <li>Ensure that materials you supply do not infringe third-party rights and comply with applicable law and platform policies.</li>
          <li>Review deliverables within agreed review windows; feedback received after a window may be treated as a new revision cycle.</li>
        </ul>

        <h2>5. Fees and payment</h2>
        <ul>
          <li>Fees, billing frequency and payment terms are set out in the relevant Engagement Document. Unless stated otherwise, invoices are payable within 15 days of issue.</li>
          <li>Applicable taxes, including GST, are charged in addition to quoted fees where required by law.</li>
          <li>Third-party costs — such as advertising spend, plugin licences, hosting and stock assets — are payable by the client and are not included in our fees unless expressly stated.</li>
          <li>We may pause Services on accounts with overdue balances after reasonable notice.</li>
        </ul>

        <h2>6. Advertising spend</h2>
        <p>
          Media budgets are paid by the client directly to the advertising
          platforms or, where agreed, advanced through us at cost. Platform
          decisions — including ad disapprovals, account restrictions and
          policy changes — are outside our control; we will use reasonable
          professional efforts to operate within platform policies and to
          resolve issues that arise.
        </p>

        <h2>7. Intellectual property</h2>
        <ul>
          <li>Upon full payment, the client owns the final deliverables created specifically for them under an engagement, except as stated below.</li>
          <li>We retain ownership of our pre-existing materials, internal tools, frameworks, code libraries and know-how, and grant the client a licence to use them as embedded in the deliverables.</li>
          <li>Our software products are licensed, not sold; product subscriptions grant a non-exclusive, non-transferable right to use the product for the subscription term.</li>
          <li>We may reference non-confidential work in our portfolio and marketing unless the client requests otherwise in writing.</li>
        </ul>

        <h2>8. Confidentiality</h2>
        <p>
          Each party will keep the other's non-public business information
          confidential and use it only for the engagement. This obligation
          survives the end of the engagement and does not apply to
          information that is public, independently developed, or required to
          be disclosed by law.
        </p>

        <h2>9. No guarantee of specific results</h2>
        <p>
          Marketing outcomes depend on factors beyond any agency's control,
          including market conditions, competition, platform algorithms and
          client pricing or product decisions. We commit to professional
          skill, honest reporting and continuous optimisation; we do not
          guarantee specific rankings, traffic volumes, lead counts or
          revenue figures, and you should be cautious of anyone who does.
        </p>

        <h2>10. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, our aggregate liability
          arising out of or in connection with the Site or any engagement is
          limited to the fees paid to us for the Services giving rise to the
          claim in the three months preceding the event. We are not liable
          for indirect or consequential losses, loss of profits, loss of data
          or loss of goodwill. Nothing in these Terms limits liability that
          cannot be limited by law.
        </p>

        <h2>11. Termination</h2>
        <ul>
          <li>Either party may terminate an engagement as set out in the Engagement Document, or with 30 days' written notice where no notice period is specified.</li>
          <li>Either party may terminate immediately for material breach that remains uncured 14 days after written notice.</li>
          <li>On termination, the client pays for work performed and committed third-party costs up to the effective date, and we hand over deliverables paid for in full.</li>
        </ul>

        <h2>12. Third-party links and tools</h2>
        <p>
          The Site and our deliverables may reference or integrate third-party
          websites, platforms and tools. We are not responsible for their
          content, availability or policies; your use of them is governed by
          their own terms.
        </p>

        <h2>13. Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time. The version published
          on this page at the time of your use of the Site, or referenced in
          your Engagement Document, applies to you.
        </p>

        <h2>14. Governing law and disputes</h2>
        <p>
          These Terms are governed by the laws of Sri Lanka. The courts of
          Colombo have exclusive jurisdiction over disputes
          arising from these Terms or use of the Site, subject to any
          dispute-resolution process agreed in an Engagement Document.
        </p>

        <h2>15. Contact</h2>
        <p>
          Questions about these Terms can be sent to hello@goldstartech.com or
          posted to Goldstar Tech Pvt Ltd, Level 26, East Tower,
          World Trade Center, Echelon Square, Colombo 00100, Sri Lanka.
        </p>
      </div>
    </Reveal>
  );
}
