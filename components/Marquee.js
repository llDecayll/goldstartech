import StarMark from "./StarMark";

export default function Marquee({ items, dark = false }) {
  const row = items.map((item, i) => (
    <span
      key={i}
      className={`flex items-center gap-6 px-6 font-display font-semibold text-sm md:text-base tracking-wide uppercase ${
        dark ? "text-paper/70" : "text-graphite"
      }`}
    >
      {item}
      <StarMark size={10} className="text-gold" />
    </span>
  ));

  return (
    <div
      className={`marquee border-y ${
        dark ? "border-paper/10 bg-ink" : "border-line"
      } py-4`}
      aria-hidden="true"
    >
      <div className="marquee__track">
        <div className="flex shrink-0">{row}</div>
        <div className="flex shrink-0">{row}</div>
      </div>
    </div>
  );
}
