/**
 * dark: true when this heading sits on a dark (forest) section like the
 * hero or the Careers CTA band , false (default) is for the light/paper
 * sections that make up most of the site.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = false,
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass} mb-12`}>
      {eyebrow && (
        <p className={dark ? "eyebrow mb-3" : "eyebrow-dark mb-3"}>{eyebrow}</p>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl leading-tight ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-stone text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
