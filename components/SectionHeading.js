export default function SectionHeading({ eyebrow, title, lead }) {
  return (
    <div className="mb-12 md:mb-16">
      <span className="gold-rule mb-6 max-w-[140px]" />
      {eyebrow && <p className="eyebrow gs-reveal mb-3">{eyebrow}</p>}
      <h2 className="display gs-reveal text-3xl md:text-5xl max-w-3xl">
        {title}
      </h2>
      {lead && (
        <p className="gs-reveal mt-5 text-graphite leading-relaxed max-w-2xl">
          {lead}
        </p>
      )}
    </div>
  );
}
