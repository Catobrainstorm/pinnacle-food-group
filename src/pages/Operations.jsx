import { Link } from "react-router-dom";
import Parallax from "../components/Parallax";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

const AREAS = [
  {
    title: "Livestock Operations",
    image: "/images/hero-banner.jpg",
    body: "We work closely with trusted livestock partners to ensure responsible sourcing, animal welfare, and consistent supply — the foundation everything downstream depends on.",
  },
  {
    title: "Food Processing",
    image: "/images/photo2.jpg",
    body: "Our processing facilities combine advanced technology with highly trained teams to produce premium meat and food products while maintaining strict hygiene and quality standards.",
  },
  {
    title: "Quality Assurance",
    image: "/images/photo3.jpg",
    body: "Every product undergoes comprehensive inspection and monitoring to ensure compliance with food safety requirements and customer expectations, at every stage of production.",
  },
  {
    title: "Cold Storage & Warehousing",
    image: "/images/photo4.jpg",
    body: "Temperature-controlled storage and efficient inventory management help maintain product integrity from processing through to distribution.",
  },
  {
    title: "Logistics & Distribution",
    image: "/images/photo7.jpg",
    body: "Our refrigerated fleet and coordinated logistics network support reliable delivery across domestic and export supply chains.",
  },
];

export default function Operations() {
  return (
    <div>
      {/* PARALLAX HEADER */}
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden flex items-end">
        <Parallax
          src="/images/photo7.jpg"
          alt="Pinnacle Food Group operations"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/55 to-forest-deep/20" />
        <Reveal className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full pb-14 sm:pb-16 pt-32">
          <p className="text-xs text-cream/60 mb-4">
            <Link to="/" className="hover:text-mustard-light transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-cream/80">Operations</span>
          </p>
          <p className="text-[11px] tracking-widest uppercase text-mustard-light font-semibold mb-4">
            Operations
          </p>
          <h1 className="font-display text-4xl sm:text-6xl leading-tight text-cream max-w-2xl">
            Purpose-built processes, at every stage.
          </h1>
          <p className="mt-5 text-cream/75 max-w-xl leading-relaxed">
            From livestock sourcing to final delivery, every stage of our supply
            chain is guided by strict standards, modern technology, and a
            culture of continuous improvement.
          </p>
        </Reveal>
      </section>

      {/* OPERATIONAL AREAS — full-bleed parallax bands */}
      {AREAS.map((op, i) => (
        <section
          key={op.title}
          className="relative h-[70vh] sm:h-[85vh] overflow-hidden flex items-end"
        >
          <Parallax
            src={op.image}
            alt={op.title}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/50 to-transparent" />
          <Reveal className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full pb-12 sm:pb-16">
            <span className="font-display text-5xl sm:text-6xl text-mustard-light/40 block mb-2">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-cream mb-4 max-w-xl">
              {op.title}
            </h2>
            <p className="text-cream/80 max-w-lg leading-relaxed text-sm sm:text-base">
              {op.body}
            </p>
          </Reveal>
        </section>
      ))}

      {/* CLOSING CTA */}
      <section className="py-20 sm:py-28 bg-paper">
        <Reveal className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow-dark mb-4">Continue Exploring</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-ink mb-8">
            See where these operations happen.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/facilities" variant="solid">
              Our Facilities
            </Button>
            <Button to="/sustainability" variant="outline">
              Sustainability
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
