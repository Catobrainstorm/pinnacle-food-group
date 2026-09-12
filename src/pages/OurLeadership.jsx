import PageIntro from "../components/PageIntro";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { usePageTitle } from "../hooks/usePageTitle";

const TEAM = [
  { title: "Chief Operating Officer", image: "/images/leadership/coo.jpg" },
  { title: "Chief Financial Officer", image: "/images/leadership/cfo.jpg" },
  { title: "Human Resources Director", image: "/images/leadership/hrd.jpg" },
  { title: "Operations Director", image: "/images/leadership/od.jpg" },
  { title: "Quality Assurance Manager", image: "/images/leadership/qam.jpg" },
  {
    title: "Engineering & Maintenance Manager",
    image: "/images/leadership/emm.jpg",
  },
  {
    title: "Supply Chain & Logistics Director",
    image: "/images/leadership/scld.jpg",
  },
  {
    title: "Health, Safety & Environment",
    image: "/images/leadership/hse.jpg",
  },
  {
    title: "Sales & Business Development Director",
    image: "/images/leadership/sbdd.jpg",
  },
];

export default function OurLeadership() {
  usePageTitle("Contact Us");
  return (
    <div>
      <PageIntro
        breadcrumb="Our Leadership"
        eyebrow="Leadership"
        title="Meet Our Leadership Team"
        subtitle="Experienced leaders bringing deep industry knowledge and a shared commitment to our people, quality, and long-term success."
      />

      {/* FEATURED , Managing Director & CEO */}
      <section className="relative py-24 sm:py-32 bg-forest-deep overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_70%_30%,#c99a2e,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[minmax(0,320px)_1fr] gap-12 lg:gap-20 items-center">
          <Reveal className="mx-auto lg:mx-0 w-56 sm:w-72 lg:w-full relative">
            <div className="absolute -inset-3 border border-mustard/40 -z-10" />
            <img
              src="/images/leadership/ceo.jpg"
              alt="Managing Director & CEO"
              className="w-full aspect-[4/5] object-cover shadow-2xl"
            />
          </Reveal>
          <Reveal>
            <p className="text-[11px] tracking-widest uppercase text-mustard-light font-semibold mb-4">
              Featured
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-cream mb-6">
              Managing Director &amp; CEO
            </h2>
            <p className="text-cream/75 text-base sm:text-lg leading-relaxed max-w-2xl">
              Our Managing Director &amp; CEO leads Pinnacle Food Group with a
              hands-on commitment to quality, safety, and long-term growth ,
              combining strong governance with a genuine focus on the people and
              partnerships that keep our operations running well.
            </p>
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP TEAM GRID */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="The Team"
            title="Leadership Team"
            subtitle="The functional leaders guiding our operations, people, and growth across the business."
          />
          <Reveal
            stagger={0.08}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          >
            {TEAM.map((m) => (
              <div key={m.title} className="group text-center">
                <div className="relative overflow-hidden mb-5 shadow-sm">
                  <img
                    src={m.image}
                    alt={m.title}
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
                <h3 className="font-display text-lg text-ink mb-2">
                  {m.title}
                </h3>
                <span className="inline-block w-8 h-0.5 bg-mustard" />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20 sm:py-24 bg-paper-tint">
        <Reveal className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow-dark mb-4">Join Our Team</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-ink mb-8">
            Interested in building your future with our team?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/careers" variant="solid">
              View Careers
            </Button>
            <Button to="/about" variant="outline">
              Back to About
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
