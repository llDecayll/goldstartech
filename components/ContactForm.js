"use client";

import { useState } from "react";
import StarMark from "./StarMark";

const SERVICES = [
  "Web design & development",
  "SEO / AEO / GEO",
  "Social media marketing",
  "Performance advertising",
  "Mobile app development",
  "Software product development",
  "AI solutions",
  "Branding & creative",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: SERVICES[0],
    message: "",
  });

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const submit = () => {
    if (!form.name || !form.email || !form.message) return;
    // Hook this up to your backend, CRM webhook or email service.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-gold p-10 text-center">
        <StarMark size={28} className="text-gold mx-auto mb-4" />
        <h3 className="display text-2xl mb-2">Message received</h3>
        <p className="text-graphite">
          Thank you, {form.name.split(" ")[0]}. Our team will reply to{" "}
          {form.email} within one business day.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full bg-transparent border-b border-line py-3 text-ink placeholder:text-graphite/50 focus:outline-none focus:border-gold transition-colors";

  return (
    <div className="space-y-7">
      <div className="grid md:grid-cols-2 gap-7">
        <div>
          <label htmlFor="cf-name" className="eyebrow block mb-1">
            Name *
          </label>
          <input
            id="cf-name"
            className={inputCls}
            placeholder="Your full name"
            value={form.name}
            onChange={update("name")}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="eyebrow block mb-1">
            Email *
          </label>
          <input
            id="cf-email"
            type="email"
            className={inputCls}
            placeholder="you@company.com"
            value={form.email}
            onChange={update("email")}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-7">
        <div>
          <label htmlFor="cf-company" className="eyebrow block mb-1">
            Company
          </label>
          <input
            id="cf-company"
            className={inputCls}
            placeholder="Company or brand name"
            value={form.company}
            onChange={update("company")}
          />
        </div>
        <div>
          <label htmlFor="cf-service" className="eyebrow block mb-1">
            Service
          </label>
          <select
            id="cf-service"
            className={inputCls + " cursor-pointer"}
            value={form.service}
            onChange={update("service")}
          >
            {SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="eyebrow block mb-1">
          Project details *
        </label>
        <textarea
          id="cf-message"
          rows={5}
          className={inputCls + " resize-none"}
          placeholder="Tell us about your goals, timeline and budget range."
          value={form.message}
          onChange={update("message")}
        />
      </div>
      <button onClick={submit} className="btn btn--gold">
        Send message <StarMark size={12} />
      </button>
    </div>
  );
}
