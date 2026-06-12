import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Goldstar Tech collects, uses, stores and protects personal information across our website, products and services.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <Reveal className="mx-auto max-w-3xl px-5 md:px-8 pt-32 md:pt-44 pb-16">
      <span className="gold-rule max-w-[180px] mb-8" />
      <p className="eyebrow gs-reveal mb-4">Legal</p>
      <h1 className="display gs-reveal text-4xl md:text-6xl">
        Privacy policy
      </h1>
      <p className="gs-reveal mt-5 text-xs font-mono uppercase tracking-widest text-graphite">
        Last updated: 1 June 2026
      </p>

      <div className="prose-gs mt-10 gs-reveal">
        <p>
          Goldstar Tech Pvt Ltd ("Goldstar Tech", "we", "us", "our") respects
          your privacy and is committed to protecting the personal information
          you share with us. This policy explains what we collect, why we
          collect it, how we use and protect it, and the choices you have. It
          applies to our website (goldstartech.com), our software products,
          and the services we deliver to clients.
        </p>

        <h2>1. Information we collect</h2>
        <h3>Information you provide directly</h3>
        <ul>
          <li>Contact details such as your name, email address, phone number and company name, when you submit a form, request a demo, subscribe to updates or correspond with us.</li>
          <li>Project information you share in proposals, briefs and ongoing engagements.</li>
          <li>Billing details necessary to issue invoices and process payments. We do not store full card numbers on our systems.</li>
          <li>Account information when you register for one of our software products, such as your name, role and login credentials.</li>
        </ul>
        <h3>Information collected automatically</h3>
        <ul>
          <li>Usage data such as pages visited, time on page, referring URLs, approximate location derived from IP address, browser type and device characteristics.</li>
          <li>Cookies and similar technologies used for site functionality, analytics and — with consent where required — advertising measurement.</li>
        </ul>

        <h2>2. How we use information</h2>
        <ul>
          <li>To respond to enquiries and deliver the services or products you request.</li>
          <li>To administer accounts, provide support and send service communications.</li>
          <li>To improve our website, products and services through aggregated analytics.</li>
          <li>To send marketing communications you have opted into, which you can withdraw from at any time using the unsubscribe link or by contacting us.</li>
          <li>To comply with legal obligations, including tax and accounting requirements.</li>
          <li>To protect against fraud, abuse and security threats.</li>
        </ul>

        <h2>3. Legal bases</h2>
        <p>
          Where data-protection law requires a legal basis, we rely on:
          performance of a contract (delivering services you have engaged us
          for), legitimate interests (operating and improving our business in
          ways you would reasonably expect), consent (marketing communications
          and non-essential cookies), and legal obligation (record-keeping and
          compliance).
        </p>

        <h2>4. Sharing of information</h2>
        <p>
          We do not sell personal information. We share it only with:
        </p>
        <ul>
          <li>Service providers who support our operations — hosting, analytics, email delivery, payment processing and CRM — under contracts that restrict their use of your data.</li>
          <li>Advertising and analytics platforms (such as Meta and Google) when you interact with our campaigns, in accordance with their policies and applicable consent requirements.</li>
          <li>Professional advisers and authorities where required by law or to protect our legal rights.</li>
          <li>A successor entity in the event of a merger, acquisition or asset sale, subject to this policy.</li>
        </ul>

        <h2>5. Client campaign data</h2>
        <p>
          When we operate marketing campaigns or software on behalf of
          clients, we process lead and customer data as a processor on the
          client's instructions. That data is used solely to deliver the
          engaged services, is segregated per client, and is governed by the
          agreement between Goldstar Tech and the client.
        </p>

        <h2>6. Data retention</h2>
        <p>
          We keep personal information only as long as needed for the purposes
          described above. Enquiry records are typically retained for 24
          months; contractual and billing records are retained as required by
          Sri Lankan tax and company law; product account data is retained for the
          life of the account plus a short deletion window.
        </p>

        <h2>7. Security</h2>
        <p>
          We apply administrative, technical and physical safeguards
          appropriate to the sensitivity of the data we hold, including
          encryption in transit, role-based access controls, audit logging and
          regular review of vendor security. No method of transmission or
          storage is completely secure, but we work continuously to protect
          your information.
        </p>

        <h2>8. International transfers</h2>
        <p>
          We serve clients in multiple countries, and some service providers
          process data outside your country of residence. Where required, we
          use appropriate safeguards such as contractual protections to govern
          those transfers.
        </p>

        <h2>9. Your rights</h2>
        <p>
          Depending on your jurisdiction, you may have rights to access,
          correct, delete or port your personal information, to object to or
          restrict certain processing, and to withdraw consent. To exercise
          any of these rights, email us at the address below. We will respond
          within the timeframe required by applicable law.
        </p>

        <h2>10. Cookies</h2>
        <p>
          Essential cookies keep the site working. Analytics cookies help us
          understand how visitors use the site. Advertising cookies, where
          used, measure campaign performance. You can control cookies through
          your browser settings; disabling essential cookies may affect site
          functionality.
        </p>

        <h2>11. Children</h2>
        <p>
          Our website and services are intended for business audiences and are
          not directed at children under 18. We do not knowingly collect
          personal information from children.
        </p>

        <h2>12. Changes to this policy</h2>
        <p>
          We may update this policy as our practices or legal requirements
          change. The "last updated" date at the top reflects the current
          version. Material changes will be highlighted on this page.
        </p>

        <h2>13. Contact us</h2>
        <p>
          Questions, requests or concerns about this policy can be sent to
          hello@goldstartech.com or posted to Goldstar Tech Pvt Ltd,
          Level 26, East Tower, World Trade Center, Echelon Square,
          Colombo 00100, Sri Lanka.
        </p>
      </div>
    </Reveal>
  );
}
