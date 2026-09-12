import PageIntro from "../components/PageIntro";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { usePageTitle } from "../hooks/usePageTitle";

const STORY_STEPS = [
  {
    title: "Our Beginning",
    body: "Pinnacle began with a clear purpose , to build a business that puts people and quality at the centre of everything we do.",
    image: "/images/photo10.jpg",
    icon: (
      <>
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </>
    ),
  },
  {
    title: "Growth",
    body: "Through determination and reinvestment, we expanded our capabilities and strengthened our operational footprint.",
    image: "/images/photo11.jpg",
    icon: (
      <>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </>
    ),
  },
  {
    title: "Expanding Operations",
    body: "We developed modern facilities and systems across the supply chain to improve efficiency and reliability.",
    image: "/images/photo12.jpg",
    icon: (
      <>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </>
    ),
  },
  {
    title: "People & Capability",
    body: "Our people are at the heart of our success. We invest in training, leadership, and a strong safety culture.",
    image: "/images/photo13.jpg",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "Our Future",
    body: "We continue to innovate, improve, and grow responsibly for the generations that follow.",
    image: "/images/photo14.jpg",
    icon: (
      <>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </>
    ),
  },
];

const VALUES = [
  {
    title: "Integrity",
    body: "We act with honesty, respect, and transparency in all that we do.",
    color: "bg-forest",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: "Safety",
    body: "We put safety at the centre of our workplaces, operations, and decisions.",
    color: "bg-mustard",
    icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
  },
  {
    title: "Quality",
    body: "We are committed to quality across our products, processes, and services.",
    color: "bg-navy",
    icon: (
      <>
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </>
    ),
  },
  {
    title: "People",
    body: "We value our people and support their growth, wellbeing, and success.",
    color: "bg-forest",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "Responsibility",
    body: "We take responsibility for our impact on people, communities, and the environment.",
    color: "bg-mustard",
    icon: (
      <>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </>
    ),
  },
  {
    title: "Continuous Improvement",
    body: "We look for better ways to work and continuously improve our performance.",
    color: "bg-navy",
    icon: (
      <>
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </>
    ),
  },
];

const APPROACH = [
  {
    title: "People First",
    body: "We support our people and build a culture of respect and teamwork.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </>
    ),
  },
  {
    title: "Operational Excellence",
    body: "We focus on safe, efficient, and reliable operations.",
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  },
  {
    title: "Strong Partnerships",
    body: "We grow together with our customers and suppliers.",
    icon: (
      <>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </>
    ),
  },
  {
    title: "Responsible Growth",
    body: "We invest in the future, considering our communities and the environment.",
    icon: (
      <>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </>
    ),
  },
];

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

export default function AboutPinnacle() {
  usePageTitle("Contact Us");
  return (
    <div>
      <PageIntro
        breadcrumb="About Pinnacle"
        eyebrow="About Pinnacle Food Group"
        title="Built on trust, driven by quality."
        subtitle="Pinnacle Food Group Pty Ltd is an Australian food processing and distribution company committed to producing safe, high-quality meat and food products for domestic and international markets."
        image="/images/photo8.jpg"
        imageAlt="Pinnacle Food Group facility"
        buttons={[
          { to: "/operations", label: "Our Operations", variant: "solid" },
          {
            to: "/about/leadership",
            label: "Meet Our Leadership",
            variant: "outline",
          },
        ]}
      />

      {/* WHO WE ARE */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow-dark mb-4">Who We Are</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight mb-6 text-ink">
              An Australian, people-focused food and agricultural business.
            </h2>
            <p className="text-stone leading-relaxed mb-4">
              Pinnacle Food Group is an Australian food and agricultural
              business with a strong focus on people, quality, and responsible
              operations.
            </p>
            <p className="text-stone leading-relaxed mb-8">
              From livestock operations and food processing to engineering,
              warehousing, logistics, and distribution, our teams work together
              across a connected network to deliver quality products and
              services to our customers.
            </p>
            <Button to="/about/approach" variant="ghost">
              Our Approach →
            </Button>
          </Reveal>
          <Reveal className="relative">
            <div className="absolute -inset-3 border border-mustard/40 -z-10 hidden sm:block" />
            <img
              src="/images/photo9.jpg"
              alt="Pinnacle Food Group team"
              className="w-full aspect-[4/3] object-cover shadow-lg"
            />
          </Reveal>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 sm:py-28 bg-paper-tint">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow-dark mb-4">Our Story</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight text-ink mb-4">
              A Journey of Growth and Commitment
            </h2>
            <p className="text-stone leading-relaxed">
              Our story is built on hard work, strong relationships, and a
              long-term view. We continue to grow while staying true to our
              values.
            </p>
          </div>

          <Reveal
            stagger={0.1}
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10"
          >
            {STORY_STEPS.map((step) => (
              <div key={step.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-forest-deep text-mustard-light flex items-center justify-center mx-auto mb-4">
                  <Icon>{step.icon}</Icon>
                </div>
                <h3 className="font-display text-base text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal
            stagger={0.06}
            className="grid grid-cols-2 sm:grid-cols-5 gap-3"
          >
            {STORY_STEPS.map((step) => (
              <img
                key={step.image}
                src={step.image}
                alt={step.title}
                className="w-full aspect-square object-cover"
              />
            ))}
          </Reveal>

          <div className="text-center mt-12">
            <Button to="/about/our-story" variant="outline">
              Read Our Full Story
            </Button>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid sm:grid-cols-2 gap-12">
          <Reveal className="sm:pr-8 sm:border-r sm:border-ink/10">
            <div className="w-12 h-12 rounded-full bg-forest/10 text-forest flex items-center justify-center mb-5">
              <Icon>
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </Icon>
            </div>
            <p className="eyebrow-dark mb-3">Our Mission</p>
            <h3 className="font-display text-2xl text-ink mb-3">Our Mission</h3>
            <p className="text-stone leading-relaxed">
              To safely produce and deliver quality food through efficient
              operations, strong partnerships, and a commitment to our people
              and communities.
            </p>
          </Reveal>
          <Reveal>
            <div className="w-12 h-12 rounded-full bg-mustard/15 text-mustard flex items-center justify-center mb-5">
              <Icon>
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </Icon>
            </div>
            <p className="eyebrow-dark mb-3">Our Vision</p>
            <h3 className="font-display text-2xl text-ink mb-3">Our Vision</h3>
            <p className="text-stone leading-relaxed">
              To be a trusted leader in the food and agricultural industry,
              recognised for our people, performance, and responsible
              operations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 sm:py-28 bg-paper-tint">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow-dark mb-4">Our Values</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight text-ink mb-4">
              The Values That Guide Us
            </h2>
            <p className="text-stone leading-relaxed">
              Our values shape the way we work, make decisions, and treat each
              other every day.
            </p>
          </div>
          <Reveal
            stagger={0.08}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-ink/10 p-7 hover:border-mustard hover:shadow-md transition-all duration-300"
              >
                <div
                  className={`w-11 h-11 ${v.color} text-white flex items-center justify-center mb-5`}
                >
                  <Icon>{v.icon}</Icon>
                </div>
                <h3 className="font-display text-lg text-ink mb-2">
                  {v.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP TEASER */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="order-2 lg:order-1 relative">
            <div className="absolute -inset-3 border border-mustard/40 -z-10 hidden sm:block" />
            <img
              src="/images/photo15.jpg"
              alt="Pinnacle Food Group leadership"
              className="w-full aspect-[4/3] object-cover shadow-lg"
            />
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <p className="eyebrow-dark mb-4">Leadership</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight mb-6 text-ink">
              Experienced Leadership
            </h2>
            <p className="text-stone leading-relaxed mb-8">
              Our leadership team brings deep industry knowledge, experience,
              and a shared commitment to our people and long-term success , from
              the Managing Director and CEO through to every functional lead
              across the business.
            </p>
            <Button to="/about/leadership" variant="solid">
              Meet the Leadership Team
            </Button>
          </Reveal>
        </div>
      </section>

      {/* OUR APPROACH , dark navy band */}
      <section className="py-20 sm:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] tracking-widest uppercase text-mustard-light font-semibold mb-4">
              Our Approach
            </p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight text-cream mb-4">
              How We Work
            </h2>
            <p className="text-cream/70 leading-relaxed">
              We combine skilled people, modern facilities, and strong systems
              to deliver consistent results. Our approach is built on
              collaboration, accountability, and continuous improvement.
            </p>
          </div>
          <Reveal
            stagger={0.1}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {APPROACH.map((a) => (
              <div key={a.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-cream/10 text-mustard-light flex items-center justify-center mx-auto mb-4">
                  <Icon>{a.icon}</Icon>
                </div>
                <h3 className="font-display text-base text-cream mb-2">
                  {a.title}
                </h3>
                <p className="text-cream/65 text-sm leading-relaxed">
                  {a.body}
                </p>
              </div>
            ))}
          </Reveal>
          <div className="text-center mt-14">
            <Button to="/about/approach" variant="outline" dark>
              Learn More About Our Approach
            </Button>
          </div>
        </div>
      </section>

      {/* CONNECTED OPERATIONS CTA */}
      <section className="py-20 sm:py-28 bg-paper-tint">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="relative">
            <img
              src="/images/photo16.jpg"
              alt="Pinnacle Food Group operations"
              className="w-full aspect-[16/10] object-cover shadow-lg"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow-dark mb-4">Connected Operations</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight mb-6 text-ink">
              One Business. Many Connected Operations.
            </h2>
            <p className="text-stone leading-relaxed mb-8">
              From livestock to processing, quality assurance to distribution,
              our connected operations work together to deliver value across the
              entire supply chain.
            </p>
            <Button to="/operations" variant="solid">
              Explore Our Operations
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
