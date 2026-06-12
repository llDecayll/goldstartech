"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Wrap any block in <Reveal> to fade-up its `.gs-reveal` children on scroll,
 * and draw in any `.gold-rule` hairlines.
 */
export default function Reveal({ children, className = "", stagger = 0.12 }) {
  const scope = useRef(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) {
        gsap.set(".gs-reveal", { opacity: 1, y: 0 });
        gsap.set(".gold-rule", { scaleX: 1 });
        return;
      }

      const items = scope.current.querySelectorAll(".gs-reveal");
      if (items.length) {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: scope.current,
            start: "top 82%",
            once: true,
          },
        });
      }

      const rules = scope.current.querySelectorAll(".gold-rule");
      rules.forEach((rule) => {
        gsap.to(rule, {
          scaleX: 1,
          duration: 1.1,
          ease: "power3.inOut",
          scrollTrigger: { trigger: rule, start: "top 88%", once: true },
        });
      });
    },
    { scope }
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
