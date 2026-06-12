import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="mx-auto max-w-wrap px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="block w-40">
              <img
                src="/logo.png"
                alt="Goldstar Tech Logo"
                className="h-auto w-full object-contain"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-paper/60 max-w-sm">
              A digital marketing and software development agency in Sri Lanka,
              building measurable growth for businesses across Sri Lanka.
            </p>
            <p className="mt-6 font-mono text-xs tracking-widest uppercase text-gold">
              Growth, engineered.
            </p>
          </div>

          {/* Explore */}
          <nav className="md:col-span-2" aria-label="Footer — Explore">
            <h3 className="font-mono text-xs uppercase tracking-widest text-paper/40 mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link className="link-sweep text-paper/80" href="/">Home</Link></li>
              <li><Link className="link-sweep text-paper/80" href="/about">About us</Link></li>
              <li><Link className="link-sweep text-paper/80" href="/services">Services</Link></li>
              <li><Link className="link-sweep text-paper/80" href="/products">Products</Link></li>
              <li><Link className="link-sweep text-paper/80" href="/blog">Blog</Link></li>
              <li><Link className="link-sweep text-paper/80" href="/contact">Contact us</Link></li>
            </ul>
          </nav>

          {/* Services */}
          <nav className="md:col-span-3" aria-label="Footer — Services">
            <h3 className="font-mono text-xs uppercase tracking-widest text-paper/40 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link className="link-sweep text-paper/80" href="/services#web">Web design &amp; development</Link></li>
              <li><Link className="link-sweep text-paper/80" href="/services#seo">SEO, AEO &amp; GEO</Link></li>
              <li><Link className="link-sweep text-paper/80" href="/services#social">Social media marketing</Link></li>
              <li><Link className="link-sweep text-paper/80" href="/services#ads">Performance advertising</Link></li>
              <li><Link className="link-sweep text-paper/80" href="/services#apps">Mobile app development</Link></li>
              <li><Link className="link-sweep text-paper/80" href="/services#ai">AI solutions</Link></li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-widest text-paper/40 mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm text-paper/80">
              <li>
                <a className="link-sweep" href="mailto:hello@goldstartech.com">
                  hello@goldstartech.com
                </a>
              </li>
              <li>
                <a className="link-sweep" href="tel:+919876543210">
                  +91 98765 43210
                </a>
              </li>
              <li className="text-paper/50 pt-2">
                Level 26, East Tower
                <br />
                World Trade Center
                <br />
                Echelon Square
                <br />
                Colombo 00100, Sri Lanka
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-paper/10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-paper/40">
          <p>© {year} Goldstar Tech Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="link-sweep" href="/privacy-policy">
              Privacy policy
            </Link>
            <Link className="link-sweep" href="/terms-and-conditions">
              Terms &amp; conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
