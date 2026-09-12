import PageIntro from "../components/PageIntro";
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

const PRINCIPLES = [
  {
    title: "People First",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </>
    ),
    body: "We build a culture of respect, safety, and teamwork — investing in the training and development of every person across our operations, because engaged, well-supported people are the foundation of a well-run business.",
  },
  {
    title: "Operational Excellence",
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
    body: "We focus on safe, efficient, and reliable operations at every stage of the supply chain — from livestock sourcing through processing, quality assurance, warehousing, and distribution — supported by modern systems and consistent standards.",
  },
  {
    title: "Strong Partnerships",
    icon: (
      <>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </>
    ),
    body: "We grow together with our customers and suppliers, built on clear communication, reliability, and a shared commitment to quality. Strong partnerships are what keep our supply chain resilient.",
  },
  {
    title: "Responsible Growth",
    icon: (
      <>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </>
    ),
    body: "We invest in the future with our communities and the environment in mind — balancing growth with responsible resource use, workplace safety, and long-term sustainability.",
  },
];

export default function OurApproach() {
  usePageTitle("Contact Us");
  return (
    <div>
      <PageIntro
        breadcrumb="Our Approach"
        eyebrow="Our Approach"
        title="How We Work"
        subtitle="We combine skilled people, modern facilities, and strong systems to deliver consistent results — built on collaboration, accountability, and continuous improvement."
      />

      {/* PRINCIPLES — connected vertical timeline */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Principles"
            title="What Guides Our Operations"
          />
          <div className="relative">
            <div className="absolute left-7 top-2 bottom-2 w-px bg-mustard/30" />
            {PRINCIPLES.map((p) => (
              <Reveal key={p.title}>
                <div className="relative flex gap-6 pb-14 last:pb-0">
                  <div className="relative z-10 w-14 h-14 rounded-full bg-forest-deep text-mustard-light flex items-center justify-center shrink-0 shadow-md">
                    <Icon>{p.icon}</Icon>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display text-xl sm:text-2xl text-ink mb-3">
                      {p.title}
                    </h3>
                    <p className="text-stone leading-relaxed max-w-xl">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES & SYSTEMS */}
      <section className="py-20 sm:py-28 bg-paper-tint">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="relative">
            <div className="absolute -inset-3 border border-mustard/40 -z-10 hidden sm:block" />
            <img
              src="/images/photo18.jpg"
              alt="Pinnacle Food Group facilities"
              className="w-full aspect-[4/3] object-cover shadow-lg"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow-dark mb-4">Facilities & Technology</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight mb-6 text-ink">
              Modern facilities, reliable systems.
            </h2>
            <p className="text-stone leading-relaxed mb-8">
              Our operations are supported by modern processing facilities,
              temperature-controlled storage, and integrated systems that
              connect every stage of the supply chain — helping us maintain
              consistency, traceability, and food safety from paddock to plate.
            </p>
            <Button to="/facilities" variant="ghost">
              Explore Our Facilities →
            </Button>
          </Reveal>
        </div>
      </section>

      {/* PARTNERSHIPS */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="order-2 lg:order-1">
            <p className="eyebrow-dark mb-4">Partnerships</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight mb-6 text-ink">
              Partnerships built to last.
            </h2>
            <p className="text-stone leading-relaxed mb-8">
              We work closely with suppliers and partners who share our
              commitment to quality and reliability — from raw material sourcing
              through to distribution — because a strong supply chain depends on
              strong relationships at every link.
            </p>
            <Button to="/suppliers" variant="ghost">
              Suppliers & Procurement →
            </Button>
          </Reveal>
          <Reveal className="order-1 lg:order-2 relative">
            <div className="absolute -inset-3 border border-mustard/40 -z-10 hidden sm:block" />
            <img
              src="/images/photo19.jpg"
              alt="Pinnacle Food Group partnerships"
              className="w-full aspect-[4/3] object-cover shadow-lg"
            />
          </Reveal>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20 sm:py-24 bg-paper-tint">
        <Reveal className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow-dark mb-4">See It in Action</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-ink mb-8">
            Explore how our approach comes to life.
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
