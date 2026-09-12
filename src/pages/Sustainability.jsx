import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { usePageTitle } from "../hooks/usePageTitle";

function Icon({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
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

const LEAF = (
  <>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </>
);
const GLOBE = (
  <>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </>
);
const HEART = (
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
);
const USERS = (
  <>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>
);
const DROPLET = <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />;
const REFRESH = (
  <>
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </>
);
const TREND = (
  <>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </>
);
const SHIELD = <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />;
const EYE = (
  <>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </>
);

const PILLARS = [
  { title: "Responsibly Sourced", icon: LEAF },
  { title: "Environmentally Responsible", icon: GLOBE },
  { title: "People Focused", icon: HEART },
  { title: "Community Committed", icon: USERS },
];

const COMMITMENT_TILES = [
  { title: "Sustainable Practices", body: "Embedded in everything we do" },
  { title: "Continuous Improvement", body: "Every day, across our operations" },
  { title: "Our People", body: "The heart of our sustainability journey" },
  {
    title: "Stronger Together",
    body: "Building a better future for our communities",
  },
];

const ENVIRONMENTAL = [
  {
    title: "Energy Efficiency",
    image: "/images/photo18.jpg",
    icon: GLOBE,
    body: "We invest in energy-efficient technology and renewable energy to reduce our greenhouse gas emissions.",
  },
  {
    title: "Water Management",
    image: "/images/photo17.jpg",
    icon: DROPLET,
    body: "We use water responsibly and continuously improve our water efficiency and treatment processes.",
  },
  {
    title: "Waste Reduction",
    image: "/images/photo19.jpg",
    icon: REFRESH,
    body: "We minimise waste through recycling, reprocessing, and innovation to work toward a circular economy.",
  },
  {
    title: "Responsible Resource Use",
    image: "/images/photo16.jpg",
    icon: LEAF,
    body: "We source and use natural resources responsibly to help protect biodiversity and ecosystems.",
  },
];

const PILLARS_2 = [
  {
    title: "Animal Welfare",
    image: "/images/hero-banner.jpg",
    icon: HEART,
    body: "We are committed to the highest standards of animal welfare and work with our producers to ensure humane care at every stage.",
  },
  {
    title: "Responsible Sourcing & Supply Chain",
    image: "/images/photo5.jpg",
    icon: LEAF,
    body: "We partner with suppliers who share our values and meet our standards for sustainability, ethics, and quality.",
  },
  {
    title: "People & Workplace",
    image: "/images/photo6.jpg",
    icon: USERS,
    body: "We value our people and promote a safe, inclusive, and rewarding workplace where everyone can grow and succeed.",
  },
  {
    title: "Community Engagement",
    image: "/images/photo9.jpg",
    icon: HEART,
    body: "We support our local communities through partnerships, education, sponsorships, and initiatives that create lasting impact.",
  },
];

const ESG = [
  {
    title: "Governance",
    icon: SHIELD,
    body: "We maintain strong corporate governance, ethics, and compliance in everything we do.",
  },
  {
    title: "Transparency",
    icon: EYE,
    body: "We report openly and engage with our stakeholders through clear and honest communication.",
  },
  {
    title: "Risk Management",
    icon: SHIELD,
    body: "We identify and manage sustainability risks to build resilience and long-term value.",
  },
  {
    title: "Continuous Improvement",
    icon: REFRESH,
    body: "We set measurable goals and track our progress to continuously raise the bar.",
  },
];

const PRIORITIES = [
  {
    title: "Climate Action",
    body: "Reduce emissions and transition to a low-carbon future.",
    icon: GLOBE,
  },
  {
    title: "Water Stewardship",
    body: "Use water wisely and protect this vital resource.",
    icon: DROPLET,
  },
  {
    title: "Circular Economy",
    body: "Reduce waste and maximise resource efficiency.",
    icon: REFRESH,
  },
  {
    title: "People & Culture",
    body: "Invest in our people and create a positive, inclusive culture.",
    icon: USERS,
  },
  {
    title: "Sustainable Supply Chain",
    body: "Work with responsible suppliers and strengthen our supply chain.",
    icon: LEAF,
  },
  {
    title: "Community Impact",
    body: "Support our communities and contribute to shared prosperity.",
    icon: HEART,
  },
];

export default function Sustainability() {
  usePageTitle("Contact Us");
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-end">
        <img
          src="/images/photo1.jpg"
          alt="Pinnacle Food Group"
          className="absolute inset-0 w-full h-full object-cover hero-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-forest-deep/20" />
        <Reveal className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full pb-14 sm:pb-16 pt-32">
          <p className="text-[11px] tracking-widest uppercase text-mustard-light font-semibold mb-4">
            Sustainability & ESG
          </p>
          <h1 className="font-display text-4xl sm:text-6xl leading-tight text-cream max-w-2xl">
            Sustainability at Pinnacle
          </h1>
          <p className="mt-3 text-mustard-light text-lg sm:text-xl font-display">
            A better future. From farm to table.
          </p>
          <p className="mt-5 text-cream/75 max-w-xl leading-relaxed">
            At Pinnacle Food Group, sustainability is integrated into everything
            we do. We are committed to protecting our planet, supporting our
            people, and creating shared value for future generations.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-cream/15">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="flex flex-col items-center sm:items-start gap-3 text-center sm:text-left"
              >
                <div className="w-11 h-11 rounded-full border border-cream/30 text-cream flex items-center justify-center">
                  <Icon>{p.icon}</Icon>
                </div>
                <span className="text-cream text-xs sm:text-sm font-medium leading-snug">
                  {p.title}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* OUR COMMITMENT */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow-dark mb-4">Our Commitment</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight mb-6 text-ink">
              Sustainable by choice. Responsible by nature.
            </h2>
            <p className="text-stone leading-relaxed">
              We believe that a sustainable food system is essential for the
              long-term success of our business, our industry, and our world.
              Our Environmental, Social and Governance (ESG) approach guides our
              decisions and drives continuous improvement across our operations.
            </p>
          </Reveal>
          <Reveal stagger={0.08} className="grid grid-cols-2 gap-5">
            {COMMITMENT_TILES.map((t) => (
              <div
                key={t.title}
                className="p-6 bg-paper-tint border border-ink/10"
              >
                <h3 className="font-display text-base text-forest mb-1">
                  {t.title}
                </h3>
                <p className="text-stone text-xs leading-snug">{t.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ENVIRONMENTAL RESPONSIBILITY */}
      <section className="py-20 sm:py-28 bg-paper-tint">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="Environmental Responsibility"
            title="Protecting the planet for future generations."
            subtitle="We are committed to reducing our environmental impact and building a more resilient, low-carbon future."
          />
          <Reveal
            stagger={0.08}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {ENVIRONMENTAL.map((e) => (
              <div
                key={e.title}
                className="bg-white border border-ink/10 overflow-hidden hover:border-mustard hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 rounded-full bg-forest/10 text-forest flex items-center justify-center mb-4">
                    <Icon>{e.icon}</Icon>
                  </div>
                  <h3 className="font-display text-lg text-ink mb-2">
                    {e.title}
                  </h3>
                  <p className="text-stone text-sm leading-relaxed">{e.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal
            stagger={0.1}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {PILLARS_2.map((p) => (
              <div key={p.title}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-forest">
                    <Icon>{p.icon}</Icon>
                  </span>
                  <h3 className="font-display text-sm text-forest uppercase tracking-wide">
                    {p.title}
                  </h3>
                </div>
                <p className="text-stone text-sm leading-relaxed mb-4">
                  {p.body}
                </p>
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ESG APPROACH */}
      <section className="py-20 sm:py-28 bg-paper-tint">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our ESG Approach"
            title="Strong governance. Transparent and accountable."
            subtitle="We operate with integrity and accountability, ensuring that sustainability is embedded in our governance, strategy, and daily operations."
          />
          <Reveal
            stagger={0.08}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {ESG.map((e) => (
              <div key={e.title} className="bg-white border border-ink/10 p-6">
                <div className="w-11 h-11 rounded-full bg-forest/10 text-forest flex items-center justify-center mb-4">
                  <Icon>{e.icon}</Icon>
                </div>
                <h3 className="font-display text-lg text-ink mb-2">
                  {e.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed">{e.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SUSTAINABILITY PRIORITIES */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Sustainability Priorities"
            title="Where We Focus"
            align="center"
          />
          <Reveal
            stagger={0.06}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PRIORITIES.map((p) => (
              <div key={p.title} className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-forest/10 text-forest flex items-center justify-center mx-auto mb-4">
                  <Icon>{p.icon}</Icon>
                </div>
                <h3 className="font-display text-base text-ink mb-2">
                  {p.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* PROGRESS & CONTINUOUS IMPROVEMENT */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <img
          src="/images/photo22.jpg"
          alt="Pinnacle Food Group"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/85" />
        <Reveal className="relative max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-[11px] tracking-widest uppercase text-mustard-light font-semibold mb-4">
            Progress & Continuous Improvement
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-cream mb-6">
            Our journey continues.
          </h2>
          <p className="text-cream/75 leading-relaxed mb-8">
            We are proud of our progress, but we know there is always more to
            do. We are committed to setting ambitious goals and driving real,
            measurable change across our operations.
          </p>
          <Button to="/contact" variant="solid">
            Contact Us
          </Button>
        </Reveal>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20 sm:py-24 bg-paper-tint">
        <Reveal className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-ink mb-4">
            Together, we can build a sustainable future.
          </h2>
          <p className="text-stone leading-relaxed mb-8">
            Sustainability is a shared responsibility. We invite our customers,
            suppliers, partners, and communities to join us on this journey.
          </p>
          <Button to="/contact" variant="solid">
            Contact Us
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
