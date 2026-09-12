import { Link } from "react-router-dom";
import { useState } from "react";
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

const CATEGORIES = [
  {
    title: "Company News & Announcements",
    icon: (
      <>
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </>
    ),
    body: "Updates on company milestones, leadership, partnerships, and important announcements.",
  },
  {
    title: "Operations & Project Updates",
    icon: (
      <>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
      </>
    ),
    body: "Stay informed about our operations, expansions, and infrastructure developments.",
  },
  {
    title: "People & Community",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    body: "Celebrating our people and the communities we support through partnerships and initiatives.",
  },
  {
    title: "Food Safety & Quality Stories",
    icon: (
      <>
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </>
    ),
    body: "Our commitment to the highest standards in food safety, quality assurance, and innovation.",
  },
  {
    title: "Sustainability & ESG Updates",
    icon: (
      <>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </>
    ),
    body: "Our progress toward a more sustainable future for our people, planet, and industry.",
  },
];

const GALLERY = [
  { label: "Photos", image: "/images/photo21.jpg" },
  { label: "Facilities", image: "/images/photo22.jpg" },
  { label: "People", image: "/images/photo6.jpg" },
  { label: "Products", image: "/images/photo2.jpg" },
  { label: "Operations", image: "/images/photo23.jpg" },
  { label: "Corporate", image: "/images/hero-banner.jpg" },
];

export default function News() {
  usePageTitle("Contact Us");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // NOTE: UI is ready, but actually collecting subscriptions needs a
    // mailing-list service (e.g. Mailchimp) wired in as a follow-up step.
    setSubscribed(true);
  };

  return (
    <div>
      {/* HEADER */}
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden flex items-end">
        <img
          src="/images/photo20.jpg"
          alt="Pinnacle Food Group"
          className="absolute inset-0 w-full h-full object-cover hero-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/55 to-forest-deep/15" />
        <Reveal className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full pb-14 sm:pb-16 pt-32">
          <p className="text-xs text-cream/60 mb-4">
            <Link to="/" className="hover:text-mustard-light transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-cream/80">News & Media</span>
          </p>
          <p className="text-[11px] tracking-widest uppercase text-mustard-light font-semibold mb-4">
            News & Media
          </p>
          <h1 className="font-display text-4xl sm:text-6xl leading-tight text-cream max-w-2xl">
            Stay Informed. Stay Connected.
          </h1>
          <p className="mt-5 text-cream/75 max-w-xl leading-relaxed">
            The latest news, stories, and announcements from Pinnacle Food Group
            — from our operations and people to our communities and
            sustainability journey.
          </p>
        </Reveal>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="What We Cover"
            title="Stories From Across Our Business"
            align="center"
          />
          <Reveal
            stagger={0.08}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {CATEGORIES.map((c) => (
              <div key={c.title} className="bg-white border border-ink/10 p-7">
                <div className="w-11 h-11 rounded-full bg-forest/10 text-forest flex items-center justify-center mb-4">
                  <Icon>{c.icon}</Icon>
                </div>
                <h3 className="font-display text-lg text-ink mb-2">
                  {c.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* LATEST STORIES — honest empty state */}
      <section className="py-20 sm:py-28 bg-paper-tint">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal className="bg-white border border-ink/10 p-12 sm:p-16 text-center">
            <div className="w-14 h-14 rounded-full bg-forest/10 text-forest flex items-center justify-center mx-auto mb-6">
              <Icon>
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </Icon>
            </div>
            <p className="eyebrow-dark mb-3">Latest Stories</p>
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-4">
              Our first stories are on the way.
            </h2>
            <p className="text-stone leading-relaxed">
              We're preparing news, updates, and stories to share here soon.
              Check back, or subscribe below to be the first to know.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MEDIA GALLERY */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="Media Gallery"
            title="A Look Inside Pinnacle Food Group"
            align="center"
          />
          <Reveal
            stagger={0.06}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {GALLERY.map((g) => (
              <div
                key={g.label}
                className="relative aspect-square overflow-hidden group"
              >
                <img
                  src={g.image}
                  alt={g.label}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-cream text-sm font-semibold tracking-wide uppercase">
                    {g.label}
                  </span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* PRESS & MEDIA ENQUIRIES */}
      <section className="py-16 bg-navy">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="text-center sm:text-left">
            <p className="text-[11px] tracking-widest uppercase text-mustard-light font-semibold mb-2">
              Press / Media Enquiries
            </p>
            <p className="text-cream/75 text-sm max-w-md">
              For media requests, interview opportunities, or more information
              about Pinnacle Food Group, please get in touch.
            </p>
          </div>
          <a
            href="mailto:info@pinnaclefoodgroupau.com.au"
            className="shrink-0 px-6 py-3.5 bg-mustard text-forest-deep text-sm font-bold tracking-widest uppercase hover:bg-mustard-light transition-colors"
          >
            info@pinnaclefoodgroupau.com.au
          </a>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16 sm:py-20 bg-forest-deep">
        <Reveal className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-[11px] tracking-widest uppercase text-mustard-light font-semibold mb-3">
            Stay Up to Date
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-cream mb-6">
            Get the latest news and stories from Pinnacle Food Group.
          </h2>
          {subscribed ? (
            <p className="text-cream/80">Thanks — you're on the list.</p>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-transparent border border-cream/25 px-4 py-3 text-cream placeholder:text-cream/40 focus:border-mustard outline-none transition-colors"
              />
              <Button>Subscribe</Button>
            </form>
          )}
          <p className="mt-4 text-cream/40 text-xs">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
