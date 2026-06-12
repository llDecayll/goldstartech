import Link from "next/link";
import StarMark from "@/components/StarMark";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-wrap px-5 md:px-8 pt-40 md:pt-56 pb-24 text-center">
      <StarMark size={36} className="text-gold mx-auto mb-6 spin-slow" />
      <p className="eyebrow mb-4">Error 404</p>
      <h1 className="display text-4xl md:text-6xl">This page doesn't exist.</h1>
      <p className="mt-5 text-graphite max-w-md mx-auto leading-relaxed">
        The link may be outdated or mistyped. Let's get you back on track.
      </p>
      <div className="mt-10">
        <Link href="/" className="btn btn--gold">
          Back to home <StarMark size={12} />
        </Link>
      </div>
    </section>
  );
}
