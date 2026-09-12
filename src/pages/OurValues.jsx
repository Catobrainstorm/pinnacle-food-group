import PageIntro from "../components/PageIntro";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { usePageTitle } from "../hooks/usePageTitle";

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

const VALUES = [
  {
    title: "Integrity",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    body: "We act with honesty, respect, and transparency in everything we do , with our people, our customers, and the communities we operate in. Trust is earned through consistency, and we hold ourselves accountable to the standards we set.",
  },
  {
    title: "Safety",
    icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
    body: "The safety of our people comes first, always. We maintain rigorous safety standards across every site and operation, and we work continuously to build a culture where looking out for one another is second nature.",
  },
  {
    title: "Quality",
    icon: (
      <>
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </>
    ),
    body: "From sourcing through to delivery, we hold our products, processes, and services to a high and consistent standard. Quality isn't a final check , it's built into every stage of what we do.",
  },
  {
    title: "People",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    body: "Our people are our greatest asset. We invest in their growth, wellbeing, and development, because a skilled and supported team is what allows us to deliver consistently, day after day.",
  },
  {
    title: "Responsibility",
    icon: (
      <>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </>
    ),
    body: "We take responsibility for the impact of our operations , on our people, our communities, and the environment. Responsible growth means thinking beyond today's results toward the long-term health of our business and the people it touches.",
  },
  {
    title: "Continuous Improvement",
    icon: (
      <>
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </>
    ),
    body: "We are never satisfied with \u201cgood enough.\u201d We look for better ways to work, invest in new capability, and continuously refine our processes so that we keep getting stronger, safer, and more efficient.",
  },
];

export default function OurValues() {
  usePageTitle("Contact Us");
  return (
    <div>
      <PageIntro
        breadcrumb="Our Values"
        eyebrow="Our Values"
        title="The Values That Guide Us"
        subtitle="Our values shape the way we work, make decisions, and treat each other every day , across every site and every level of the business."
      />

      <section className="pb-20 sm:pb-28 bg-paper">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          {VALUES.map((v, i) => (
            <Reveal key={v.title}>
              <div className="group py-10 sm:py-12 border-b border-ink/10">
                <div className="grid lg:grid-cols-[100px_260px_1fr] gap-6 lg:gap-10 items-start">
                  <span className="font-display text-4xl sm:text-5xl text-mustard/25 group-hover:text-mustard transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-forest text-cream flex items-center justify-center shrink-0">
                      <Icon>{v.icon}</Icon>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl text-ink">
                      {v.title}
                    </h3>
                  </div>
                  <p className="text-stone leading-relaxed max-w-2xl">
                    {v.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20 sm:py-24 bg-paper-tint">
        <Reveal className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow-dark mb-4">Continue Exploring</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-ink mb-8">
            See how these values shape the way we work.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/about/approach" variant="solid">
              Our Approach
            </Button>
            <Button to="/about/leadership" variant="outline">
              Meet Our Leadership
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
