"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Counter({ value, suffix = "", label, tone = "light" }) {
  const scope = useRef(null);
  const numRef = useRef(null);
  const isDark = tone === "dark";

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) {
        numRef.current.textContent = value + suffix;
        return;
      }
      const obj = { n: 0 };
      gsap.to(obj, {
        n: value,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: { trigger: scope.current, start: "top 88%", once: true },
        onUpdate: () => {
          numRef.current.textContent = Math.round(obj.n) + suffix;
        },
      });
    },
    { scope }
  );

  return (
    <div ref={scope} className="border-l border-line pl-5">
      <p
        ref={numRef}
        className={`display text-4xl md:text-5xl ${
          isDark ? "text-paper" : "text-ink"
        }`}
      >
        0{suffix}
      </p>
      <p className={`mt-2 text-sm ${isDark ? "text-paper/60" : "text-graphite"}`}>
        {label}
      </p>
    </div>
  );
}
