"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-wrap px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="block w-44 sm:w-48 shrink-0"
          aria-label="Goldstar Tech — home"
        >
          <img
            src="/logo-transparent.png"
            alt="Goldstar Tech Logo"
            className="h-auto w-full object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`link-sweep text-sm font-medium ${
                pathname === item.href ? "text-golddeep" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn--gold !py-2.5 !px-5 text-sm">
            Start a project
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="relative z-[10000] md:hidden flex flex-col justify-center items-end gap-1.5 w-10 h-10"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-px bg-ink transition-all duration-300 ${
              open ? "w-6 rotate-45 translate-y-[3.5px]" : "w-6"
            }`}
          />
          <span
            className={`block h-px bg-ink transition-all duration-300 ${
              open ? "w-6 -rotate-45 -translate-y-[3.5px]" : "w-4"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed left-0 top-0 z-[9999] h-screen w-full bg-white transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav
          className="flex flex-col px-6 pt-24 gap-1"
          aria-label="Mobile"
        >
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
              className={`font-display text-3xl font-semibold py-3 border-b border-line transition-all duration-500 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } ${pathname === item.href ? "text-golddeep" : "text-ink"}`}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-4 pt-8 text-xs font-mono uppercase tracking-widest text-graphite">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-and-conditions">Terms</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
