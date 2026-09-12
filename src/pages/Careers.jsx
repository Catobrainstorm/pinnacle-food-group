import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { JOBS } from "../data/jobs";

function Icon({ children, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

const BENEFITS = [
  {
    title: "Competitive Pay",
    body: "Fair, market-aligned compensation across every role and facility.",
  },
  {
    title: "Career Growth",
    body: "Structured training and internal pathways from entry-level to leadership.",
  },
  {
    title: "Safe Workplaces",
    body: "Rigorous safety standards across all our processing and distribution sites.",
  },
  {
    title: "Team Culture",
    body: "A close-knit, respectful team culture spanning three Australian sites.",
  },
];

export default function Careers() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[52vh] sm:min-h-[58vh] flex items-end overflow-hidden bg-forest-deep">
        <img
          src="/images/photo9.jpg"
          alt=""
          className="hero-kenburns absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/70 to-forest-deep/30" />
        <Reveal className="relative max-w-7xl mx-auto px-5 sm:px-8 pb-16 sm:pb-20 w-full">
          <p className="text-xs text-cream/50 mb-5">
            <Link to="/" className="hover:text-mustard-light transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-cream/80">Careers</span>
          </p>
          <p className="eyebrow mb-4">Careers</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-2xl text-cream">
            Build Your Career With Pinnacle Food Group
          </h1>
          <p className="mt-5 max-w-xl text-cream/70 text-base sm:text-lg leading-relaxed">
            From our production floors to our distribution network, our people
            are the reason Pinnacle Food Group delivers quality Australians
            trust every day.
          </p>
        </Reveal>
      </section>

      {/* BENEFITS */}
      <section className="py-16 sm:py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal
            stagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {BENEFITS.map((b) => (
              <div key={b.title} className="p-6 border border-ink/10 bg-white">
                <h3 className="font-display text-lg text-ink mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-stone leading-relaxed">{b.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-16 sm:py-20 bg-paper-tint">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-10">
            <p className="eyebrow-dark mb-3">Current Openings</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink">
              Available Positions
            </h2>
            <p className="mt-4 text-stone max-w-2xl">
              Browse our current vacancies below. Don't see a role that fits?
              You can still submit a general application and we'll keep your
              details on file.
            </p>
          </Reveal>

          <Reveal stagger className="space-y-4">
            {JOBS.map((job) => (
              <div
                key={job.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white border border-ink/10"
              >
                <div>
                  <h3 className="font-display text-xl text-ink mb-1">
                    {job.title}
                  </h3>
                  <p className="text-sm text-stone leading-relaxed max-w-xl mb-2">
                    {job.summary}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone/80">
                    <span className="inline-flex items-center gap-1.5">
                      <Icon>
                        <path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11Z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </Icon>
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Icon>
                        <rect x="3" y="7" width="18" height="13" rx="1.5" />
                        <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
                      </Icon>
                      {job.department}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Icon>
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 3" />
                      </Icon>
                      {job.type}
                    </span>
                  </div>
                </div>
                <Button to={`/careers/apply/${job.id}`} className="shrink-0">
                  Apply Now
                </Button>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-10 p-6 bg-forest-deep flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-xl text-cream mb-1">
                Don't See the Right Role?
              </h3>
              <p className="text-sm text-cream/70">
                Submit a general application and we'll reach out when a matching
                opportunity opens up.
              </p>
            </div>
            <Button to="/careers/apply/general" dark className="shrink-0">
              General Application
            </Button>
          </Reveal>
        </div>
      </section>

      {/* CHECK STATUS CTA */}
      <section className="py-14 bg-paper border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone text-sm sm:text-base">
            Already applied? Check the status of your application using your
            reference number.
          </p>
          <Button to="/careers/status" variant="outline">
            Check Application Status
          </Button>
        </div>
      </section>
    </div>
  );
}
