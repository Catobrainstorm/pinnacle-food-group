import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { usePageTitle } from "../hooks/usePageTitle";

const AT_A_GLANCE = [
  "Modern Processing Facilities",
  "Cold Storage & Distribution",
  "Advanced Quality Assurance Systems",
  "National & International Supply Chain",
  "Skilled and Diverse Workforce",
  "Sustainability-Focused Operations",
  "Food Safety-Driven Culture",
  "Continuous Innovation",
];

const OPERATIONS = [
  {
    title: "Food Processing",
    image: "/images/photo2.jpg",
    body: "Our processing facilities combine advanced technology with highly trained teams to produce premium meat and food products while maintaining strict hygiene and quality standards.",
  },
  {
    title: "Quality Assurance",
    image: "/images/photo3.jpg",
    body: "Every product undergoes comprehensive inspection and monitoring to ensure compliance with food safety requirements and customer expectations.",
  },
  {
    title: "Cold Storage & Warehousing",
    image: "/images/photo4.jpg",
    body: "Temperature-controlled storage and efficient inventory management help maintain product integrity from processing through to distribution.",
  },
  {
    title: "Logistics & Distribution",
    image: "/images/photo5.jpg",
    body: "Our refrigerated fleet and coordinated logistics network support reliable delivery across domestic and export supply chains.",
  },
];

const WHY_US = [
  {
    title: "Food Safety",
    body: "We maintain rigorous quality management systems designed to support product integrity throughout every stage of production.",
  },
  {
    title: "Experienced Workforce",
    body: "Our people bring expertise across processing, engineering, logistics, quality assurance, administration, and customer service.",
  },
  {
    title: "Modern Facilities",
    body: "Purpose-built processing and distribution infrastructure enables efficient operations while supporting high standards of workplace safety.",
  },
  {
    title: "Sustainable Practices",
    body: "We continually work to improve operational efficiency, responsible resource use, and environmental performance.",
  },
];

export default function Home() {
  usePageTitle("Contact Us");
  return (
    <div>
      {/* HERO , untouched */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-forest-deep">
        <div className="absolute inset-0">
          <img
            src="/images/hero-banner.jpg"
            alt="Pinnacle Food Group facility"
            className="w-full h-full object-cover hero-kenburns"
          />
          <div className="absolute inset-0 bg-forest-deep/60 lg:hidden" />
          <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-forest-deep/10 via-forest-deep/55 to-forest-deep/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-transparent" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 pt-20">
          <Reveal className="max-w-2xl mx-auto lg:mx-0 lg:ml-auto text-center lg:text-right">
            <p className="text-[11px] tracking-widest uppercase text-mustard-light font-semibold mb-5">
              Pinnacle Food Group Pty Ltd
            </p>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] text-cream">
              From Farm to Table,
              <br /> Quality You Can Trust.
            </h1>
            <p className="mt-6 text-cream/75 text-base sm:text-lg leading-relaxed">
              Delivering premium meat and food products through world-class
              processing, rigorous quality assurance, and a commitment to
              sustainable practices.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-end">
              <Button to="/operations" variant="solid">
                Explore Our Operations
              </Button>
              <Button to="/careers" variant="outline" dark>
                Careers
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/40 text-xs tracking-widest uppercase animate-bounce">
          Scroll
        </div>
      </section>

      {/* WELCOME */}
      <section className="py-24 sm:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <p className="eyebrow-dark mb-4">
                Welcome to Pinnacle Food Group
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-tight mb-6 text-ink">
                An Australian food processing and distribution company built on
                trust.
              </h2>
              <p className="text-stone leading-relaxed mb-4">
                Pinnacle Food Group Pty Ltd is an Australian food processing and
                distribution company dedicated to producing safe, high-quality
                meat and food products for domestic and international markets.
              </p>
              <p className="text-stone leading-relaxed mb-8">
                Our integrated operations cover livestock sourcing, food
                processing, packaging, cold storage, warehousing, and
                refrigerated distribution. Every stage of our supply chain is
                guided by strict food safety standards, modern technology, and a
                culture of continuous improvement.
              </p>
              <Button to="/about" variant="ghost">
                Read Our Story →
              </Button>
            </Reveal>

            <Reveal className="relative">
              <div className="absolute -inset-3 border border-mustard/40 -z-10 hidden sm:block" />
              <img
                src="/images/photo1.jpg"
                alt="Pinnacle Food Group team at work"
                className="w-full aspect-[4/3] object-cover shadow-lg"
              />
            </Reveal>
          </div>

          <Reveal stagger={0.06} className="mt-16 flex flex-wrap gap-3">
            {AT_A_GLANCE.map((item) => (
              <span
                key={item}
                className="px-4 py-2 border border-ink/10 bg-white text-xs sm:text-sm text-ink/80 leading-snug shadow-sm"
              >
                {item}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* OPERATIONS */}
      <section className="py-24 sm:py-32 bg-paper-tint">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Operations"
            subtitle="Purpose-built processes across every stage of the supply chain, from sourcing to delivery."
          />
          <Reveal
            stagger={0.1}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {OPERATIONS.map((op, i) => (
              <div
                key={op.title}
                className="group bg-white border border-ink/10 hover:border-mustard hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={op.image}
                    alt={op.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 font-display text-lg bg-forest-deep/85 text-mustard-light px-2.5 py-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl mb-3 text-ink">
                    {op.title}
                  </h3>
                  <p className="text-stone text-sm leading-relaxed">
                    {op.body}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 sm:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <Reveal className="order-2 lg:order-1">
              <img
                src="/images/photo6.jpg"
                alt="Pinnacle Food Group people on site"
                className="w-full aspect-[4/3] object-cover shadow-lg"
              />
            </Reveal>
            <div className="order-1 lg:order-2">
              <SectionHeading
                eyebrow="Why Choose Pinnacle Food Group"
                title="Quality, safety, and reliability at every stage."
              />
            </div>
          </div>
          <Reveal
            stagger={0.1}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {WHY_US.map((w) => (
              <div key={w.title} className="border-l-2 border-navy pl-5">
                <h3 className="font-display text-lg text-forest mb-3">
                  {w.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed">{w.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CAREERS CTA , dark forest band with real facility photography */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/photo7.jpg"
            alt="Pinnacle Food Group team"
            className="w-full h-full object-cover hero-kenburns"
          />
          <div className="absolute inset-0 bg-forest-deep/90" />
          <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_30%_20%,#c99a2e,transparent_60%)]" />
        </div>
        <Reveal className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-[11px] tracking-widest uppercase text-mustard-light font-semibold mb-4">
            Careers
          </p>
          <h2 className="font-display text-3xl sm:text-5xl leading-tight mb-6 text-cream">
            Build your future with Pinnacle Food Group.
          </h2>
          <p className="text-cream/70 leading-relaxed mb-10 max-w-xl mx-auto">
            We are committed to creating a safe, inclusive, and rewarding
            workplace where people can develop their skills and contribute to
            the success of our operations.
          </p>
          <Button to="/careers" variant="solid">
            View Current Opportunities
          </Button>
        </Reveal>
      </section>

      {/* OFFICIAL SEAL , closing trust signal before the footer */}
      <section className="py-16 bg-paper">
        <Reveal className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col items-center text-center">
          <img
            src="/images/seal.jpg"
            alt="Pinnacle Food Group Pty Ltd , Official Company Seal"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
          />
          <p className="mt-4 text-xs tracking-widest uppercase text-stone">
            Pinnacle Food Group Pty Ltd , Official Company Seal
          </p>
        </Reveal>
      </section>
    </div>
  );
}
