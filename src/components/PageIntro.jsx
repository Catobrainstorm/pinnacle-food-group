import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import Button from "./Button";

/**
 * Shared light-mode page header used by every page except Home (which has
 * its own dark hero). `breadcrumb` and `buttons` are optional.
 */
export default function PageIntro({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  buttons,
  breadcrumb,
}) {
  return (
    <section className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {breadcrumb && (
          <p className="text-xs text-stone/70 mb-6">
            <Link to="/" className="hover:text-forest transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink/70">{breadcrumb}</span>
          </p>
        )}
        <div
          className={`grid ${image ? "lg:grid-cols-2 gap-12 items-center" : ""}`}
        >
          <Reveal>
            {eyebrow && <p className="eyebrow-dark mb-4">{eyebrow}</p>}
            <h1 className="font-display text-4xl sm:text-5xl leading-tight text-ink max-w-2xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-5 text-stone text-base sm:text-lg leading-relaxed max-w-xl">
                {subtitle}
              </p>
            )}
            {buttons && buttons.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-4">
                {buttons.map((b) => (
                  <Button key={b.to} to={b.to} variant={b.variant || "solid"}>
                    {b.label}
                  </Button>
                ))}
              </div>
            )}
          </Reveal>
          {image && (
            <Reveal className="relative">
              <div className="absolute -inset-3 border border-mustard/40 -z-10 hidden sm:block" />
              <img
                src={image}
                alt={imageAlt || title}
                className="w-full aspect-[4/3] object-cover shadow-lg"
              />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
