"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import StarMark from "./StarMark";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const scope = useRef(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) {
        gsap.set(".hero-el", { opacity: 1, y: 0 });
        gsap.set(".hero-rule", { scaleX: 1 });
        return;
      }
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(".hero-rule", { scaleX: 1, duration: 1, ease: "power3.inOut" })
        .to(
          ".hero-el",
          { opacity: 1, y: 0, duration: 1, stagger: 0.14 },
          "-=0.5"
        );
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      className="relative pt-32 md:pt-44 pb-20 md:pb-28 overflow-hidden"
    >
      {/* Ambient star */}
      <StarMark
        size={420}
        className="spin-slow pointer-events-none absolute -right-40 -top-24 text-gold/[0.07] hidden md:block"
      />
      <div className="mx-auto max-w-wrap px-5 md:px-8 relative">
        <span className="hero-rule gold-rule max-w-[180px] mb-8" />
        <p className="hero-el eyebrow mb-5 opacity-0 translate-y-7">
          Digital marketing &amp; software agency — Sri Lanka
        </p>
        <h1 className="hero-el display opacity-0 translate-y-7 text-[2.6rem] leading-[1.02] md:text-7xl lg:text-8xl max-w-5xl">
          Growth, engineered
          <br />
          with <span className="text-gold">precision.</span>
        </h1>
        <p className="hero-el opacity-0 translate-y-7 mt-7 text-graphite text-lg leading-relaxed max-w-2xl">
          Goldstar Tech builds the websites, campaigns and software products
          that turn attention into revenue. One team for design, development,
          SEO, paid media and AI — focused exclusively on Sri Lanka.
        </p>
        <div className="hero-el opacity-0 translate-y-7 mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="btn btn--gold">
            Start a project <StarMark size={12} />
          </Link>
          <Link href="/services" className="btn">
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
