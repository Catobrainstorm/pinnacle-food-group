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

const CHAPTERS = [
  {
    title: "Our Beginning",
    image: "/images/photo10.jpg",
    icon: (
      <>
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </>
    ),
    body: "Pinnacle Food Group began with a clear purpose: to build a business that puts people and quality at the centre of everything it does. From a single site and a small, dedicated team, our founders set out to create a food processing and distribution operation built on trust, care, and consistency , values that still guide every decision we make today.",
  },
  {
    title: "Growth",
    image: "/images/photo11.jpg",
    icon: (
      <>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </>
    ),
    body: "As demand for our products grew, so did our capability. Through steady reinvestment in people, equipment, and processes, we expanded our capacity while holding firm to the standards that earned our customers' trust in the first place. Growth, for us, has never been about scale alone , it has always been about growing well.",
  },
  {
    title: "Expanding Operations",
    image: "/images/photo12.jpg",
    icon: (
      <>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </>
    ),
    body: "Today, our operations span livestock sourcing, food processing, packaging, cold storage, warehousing, and refrigerated distribution. Modern facilities and integrated systems connect every stage of our supply chain, allowing us to move from paddock to plate with consistency, traceability, and care.",
  },
  {
    title: "People & Capability",
    image: "/images/photo13.jpg",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    body: "None of this would be possible without our people. We invest in training, safety, and leadership development across every part of the business, because the strength of our operations comes down to the strength , and wellbeing , of the teams who run them.",
  },
  {
    title: "Our Future",
    image: "/images/photo14.jpg",
    icon: (
      <>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </>
    ),
    body: "We continue to look ahead , investing in new capability, strengthening our partnerships, and holding ourselves to a higher standard of sustainability and responsibility. Our story is still being written, and we're committed to building a future that reflects the same values we started with.",
  },
];

export default function OurStory() {
  usePageTitle("Contact Us");
  return (
    <div>
      <PageIntro
        breadcrumb="Our Story"
        eyebrow="Our Story"
        title="A Journey of Growth and Commitment"
        subtitle="Our story is built on hard work, strong relationships, and a long-term view. We continue to grow while staying true to our values."
        image="/images/photo17.jpg"
        imageAlt="Pinnacle Food Group over the years"
      />

      {CHAPTERS.map((c, i) => (
        <section
          key={c.title}
          className={`py-20 sm:py-28 ${i % 2 === 1 ? "bg-paper-tint" : "bg-paper"}`}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
            <Reveal
              className={i % 2 === 1 ? "lg:order-2 relative" : "relative"}
            >
              <div className="absolute -inset-3 border border-mustard/40 -z-10 hidden sm:block" />
              <img
                src={c.image}
                alt={c.title}
                className="w-full aspect-[4/3] object-cover shadow-lg"
              />
            </Reveal>
            <Reveal className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div className="w-12 h-12 rounded-full bg-forest-deep text-mustard-light flex items-center justify-center mb-5">
                <Icon>{c.icon}</Icon>
              </div>
              <p className="eyebrow-dark mb-3">
                Chapter {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-tight mb-5 text-ink">
                {c.title}
              </h2>
              <p className="text-stone leading-relaxed">{c.body}</p>
            </Reveal>
          </div>
        </section>
      ))}

      {/* CLOSING CTA */}
      <section className="py-20 sm:py-24 bg-paper">
        <Reveal className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow-dark mb-4">Continue Exploring</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-ink mb-8">
            The people and values behind our story.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/about/leadership" variant="solid">
              Meet Our Leadership
            </Button>
            <Button to="/about/values" variant="outline">
              Our Values
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
