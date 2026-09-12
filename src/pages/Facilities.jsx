import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Parallax from "../components/Parallax";
import Button from "../components/Button";

function Icon({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

const OVERVIEW = [
  {
    title: "Safety First",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: "Operational Excellence",
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  },
  {
    title: "Modern Infrastructure",
    icon: (
      <>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
      </>
    ),
  },
  {
    title: "Sustainable Design",
    icon: (
      <>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </>
    ),
  },
];

const FACILITIES = [
  {
    title: "Corporate Headquarters",
    image: "/images/hero-banner.jpg",
    body: "Our modern headquarters is the centre for leadership, administration, and business operations.",
  },
  {
    title: "Meat Processing Facility",
    image: "/images/photo2.jpg",
    body: "State-of-the-art processing equipped with advanced technology and strict hygiene controls.",
  },
  {
    title: "Food Safety & Quality Laboratory",
    image: "/images/photo3.jpg",
    body: "On-site testing and monitoring ensures product quality, compliance, and continuous improvement.",
  },
  {
    title: "Warehouse & Distribution Centre",
    image: "/images/photo4.jpg",
    body: "Climate-controlled warehousing and efficient systems for storage and distribution.",
  },
  {
    title: "Engineering Workshop",
    image: "/images/photo18.jpg",
    body: "A fully equipped workshop supporting preventive maintenance, fabrication, and equipment reliability.",
  },
  {
    title: "Staff Training Centre",
    image: "/images/photo6.jpg",
    body: "A dedicated facility for skills development, safety training, and leadership programs.",
  },
  {
    title: "Transport & Fleet Facilities",
    image: "/images/photo5.jpg",
    body: "A modern transport fleet and maintenance facilities that keep our supply chain moving.",
  },
  {
    title: "Staff Amenities & Break Areas",
    image: "/images/photo9.jpg",
    body: "Comfortable amenities and break areas that support our people and their wellbeing.",
  },
];

export default function Facilities() {
  return (
    <div>
      {/* HEADER */}
      <section className="relative h-[65vh] sm:h-[75vh] overflow-hidden flex items-end">
        <img
          src="/images/hero-banner.jpg"
          alt="Pinnacle Food Group facilities"
          className="absolute inset-0 w-full h-full object-cover hero-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/55 to-forest-deep/15" />
        <Reveal className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full pb-14 sm:pb-16 pt-32">
          <p className="text-xs text-cream/60 mb-4">
            <Link to="/" className="hover:text-mustard-light transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-cream/80">Facilities</span>
          </p>
          <p className="text-[11px] tracking-widest uppercase text-mustard-light font-semibold mb-4">
            Facilities
          </p>
          <h1 className="font-display text-4xl sm:text-6xl leading-tight text-cream max-w-2xl">
            Our Facilities
          </h1>
          <p className="mt-5 text-cream/75 max-w-xl leading-relaxed">
            Purpose-built environments, modern infrastructure, and the right
            technology to support our people and our operations.
          </p>
        </Reveal>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow-dark mb-4">Facilities Overview</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight mb-6 text-ink">
              Built to support every part of our business.
            </h2>
            <p className="text-stone leading-relaxed">
              Our facilities are designed to deliver safe, efficient, and
              reliable operations. From processing and warehousing to
              engineering and training, every site plays a vital role in our
              connected supply chain.
            </p>
          </Reveal>
          <Reveal stagger={0.08} className="grid grid-cols-2 gap-5">
            {OVERVIEW.map((o) => (
              <div
                key={o.title}
                className="p-5 bg-white border border-ink/10 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-forest/10 text-forest flex items-center justify-center mb-3">
                  <Icon>{o.icon}</Icon>
                </div>
                <h3 className="font-display text-sm text-ink leading-snug">
                  {o.title}
                </h3>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FACILITY GRID */}
      <section className="py-20 sm:py-28 bg-paper-tint">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal
            stagger={0.06}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {FACILITIES.map((f, i) => (
              <div
                key={f.title}
                className="bg-white border border-ink/10 overflow-hidden hover:border-mustard hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="font-display text-2xl text-forest/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg text-ink mt-2 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-stone text-sm leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FEATURED FACILITY */}
      <section className="relative h-[75vh] sm:h-[85vh] overflow-hidden flex items-end">
        <Parallax
          src="/images/hero-banner.jpg"
          alt="Corporate Headquarters & Processing Complex"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-transparent" />
        <Reveal className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full pb-14 sm:pb-20">
          <p className="text-[11px] tracking-widest uppercase text-mustard-light font-semibold mb-4">
            Featured Facility
          </p>
          <h2 className="font-display text-3xl sm:text-5xl leading-tight text-cream mb-5 max-w-xl">
            Corporate Headquarters & Processing Complex
          </h2>
          <p className="text-cream/80 max-w-lg leading-relaxed mb-6">
            Our integrated headquarters and processing complex brings people,
            technology, and processes together on one connected site —
            purpose-built for efficiency, safety, and quality.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Leadership & Administration",
              "Processing & Production",
              "Quality & Compliance",
              "Engineering & Maintenance",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 border border-cream/25 text-cream/80 text-xs tracking-wide uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PEOPLE & FACILITIES */}
      <section className="py-20 sm:py-28 bg-paper">
        <Reveal className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow-dark mb-4">People & Facilities</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-ink mb-6">
            Great facilities empower great people.
          </h2>
          <p className="text-stone leading-relaxed mb-8">
            Our facilities are more than buildings — they're places where our
            people work, collaborate, learn, and deliver every day. We continue
            to invest in advanced technology and sustainable design to support
            them.
          </p>
          <Button to="/careers" variant="solid">
            See Our Careers
          </Button>
        </Reveal>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20 sm:py-24 bg-paper-tint">
        <Reveal className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow-dark mb-4">Continue Exploring</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-ink mb-8">
            See these facilities in action.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/operations" variant="solid">
              Our Operations
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
