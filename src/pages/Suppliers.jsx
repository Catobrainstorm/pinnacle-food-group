import { useState } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
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

const USERS_ICON = (
  <>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>
);
const SHIELD_ICON = <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />;
const LEAF_ICON = (
  <>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </>
);
const TREND_ICON = (
  <>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </>
);
const EYE_ICON = (
  <>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </>
);
const AWARD_ICON = (
  <>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </>
);
const REFRESH_ICON = (
  <>
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </>
);
const CHECK_ICON = (
  <>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </>
);

const TOP_FEATURES = [
  { title: "Trusted Partnerships", icon: USERS_ICON },
  { title: "Quality Assured", icon: AWARD_ICON },
  { title: "Sustainable Sourcing", icon: LEAF_ICON },
  { title: "Shared Growth", icon: TREND_ICON },
];

const PRINCIPLES = [
  { title: "Integrity", icon: SHIELD_ICON },
  { title: "Transparency", icon: EYE_ICON },
  { title: "Quality", icon: AWARD_ICON },
  { title: "Sustainability", icon: LEAF_ICON },
  { title: "Continuous Improvement", icon: REFRESH_ICON },
];

const SOURCE_CATEGORIES = [
  { title: "Livestock", body: "Cattle, sheep, and livestock services." },
  { title: "Meat & Poultry", body: "Fresh meat, poultry, and by-products." },
  { title: "Packaging", body: "Food-grade packaging and labeling." },
  { title: "Ingredients", body: "Seasonings, additives, and ingredients." },
  {
    title: "Equipment & Machinery",
    body: "Processing, packaging, and farm equipment.",
  },
  {
    title: "Transport & Logistics",
    body: "Cold chain, freight, and transport services.",
  },
  {
    title: "Facilities & Maintenance",
    body: "Utilities, repairs, and facility maintenance.",
  },
  {
    title: "Professional Services",
    body: "Technical, compliance, and IT consulting.",
  },
];

const REQUIREMENTS = [
  "Food Safety & Quality Compliance",
  "Animal Welfare & Ethical Standards",
  "Workplace Health & Safety Standards",
  "Environmental Responsibility",
  "Fair Employment Practices",
  "Business Integrity & Legal Compliance",
];

const STEPS = [
  "Register",
  "Evaluation",
  "Assessment",
  "Approval",
  "Partnership",
];

const CATEGORY_OPTIONS = SOURCE_CATEGORIES.map((c) => c.title);

export default function Suppliers() {
  usePageTitle("Contact Us");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    category: CATEGORY_OPTIONS[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: this UI is ready, but actually delivering enquiries by email
    // needs a backend or form service (e.g. Formspree) wired in as a
    // follow-up step — this just confirms submission for now.
    setSubmitted(true);
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[65vh] sm:h-[75vh] overflow-hidden flex items-end">
        <img
          src="/images/photo5.jpg"
          alt="Pinnacle Food Group logistics"
          className="absolute inset-0 w-full h-full object-cover hero-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-forest-deep/20" />
        <Reveal className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full pb-14 sm:pb-16 pt-32">
          <p className="text-[11px] tracking-widest uppercase text-mustard-light font-semibold mb-4">
            Suppliers & Procurement
          </p>
          <h1 className="font-display text-4xl sm:text-6xl leading-tight text-cream max-w-2xl">
            Strong Partnerships. Exceptional Outcomes.
          </h1>
          <p className="mt-5 text-cream/75 max-w-xl leading-relaxed">
            At Pinnacle Food Group, we work with trusted suppliers who share our
            commitment to quality, safety, integrity, and sustainability.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#partner" variant="solid">
              Partner With Us
            </Button>
            <Button href="#expectations" variant="outline" dark>
              Our Standards
            </Button>
          </div>
        </Reveal>
      </section>

      {/* TOP FEATURE STRIP */}
      <section className="bg-navy py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal
            stagger={0.08}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {TOP_FEATURES.map((f) => (
              <div key={f.title} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cream/10 text-mustard-light flex items-center justify-center shrink-0">
                  <Icon>{f.icon}</Icon>
                </div>
                <span className="text-cream text-sm font-medium leading-snug">
                  {f.title}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title="Partnering for a Better Future"
            subtitle="Our procurement approach is built on fairness, transparency, and accountability — working with suppliers to deliver safe, high-quality products and services."
          />
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-center">
            <Reveal
              stagger={0.08}
              className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6"
            >
              {PRINCIPLES.map((p) => (
                <div key={p.title} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-forest/10 text-forest flex items-center justify-center mx-auto mb-3">
                    <Icon>{p.icon}</Icon>
                  </div>
                  <h3 className="font-display text-sm text-ink">{p.title}</h3>
                </div>
              ))}
            </Reveal>
            <Reveal className="relative">
              <img
                src="/images/photo16.jpg"
                alt="Pinnacle Food Group partnership"
                className="w-full aspect-[4/3] object-cover shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-transparent to-transparent flex items-end p-5">
                <p className="text-cream text-xs tracking-widest uppercase font-semibold leading-relaxed">
                  Together, we deliver quality you can trust.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE SOURCE */}
      <section className="py-20 sm:py-28 bg-paper-tint">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="What We Source"
            title="Quality Ingredients. Reliable Supply."
            subtitle="We source a wide range of goods and services that support our operations across farming, processing, logistics, and distribution."
          />
          <Reveal
            stagger={0.06}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SOURCE_CATEGORIES.map((c, i) => (
              <div
                key={c.title}
                className="bg-white border border-ink/10 p-6 hover:border-mustard hover:shadow-md transition-all duration-300"
              >
                <span className="font-display text-2xl text-forest/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base text-ink mt-2 mb-2">
                  {c.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SUPPLIER EXPECTATIONS */}
      <section
        id="expectations"
        className="py-20 sm:py-28 bg-paper scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_340px] gap-12">
          <Reveal>
            <p className="eyebrow-dark mb-4">Supplier Expectations</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight mb-5 text-ink">
              Our Standards. Your Commitment.
            </h2>
            <p className="text-stone leading-relaxed mb-8 max-w-xl">
              All suppliers are expected to comply with our minimum requirements
              and all applicable laws and regulations.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {REQUIREMENTS.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="text-forest mt-0.5 shrink-0">
                    <Icon>{CHECK_ICON}</Icon>
                  </span>
                  <span className="text-ink/80 text-sm sm:text-base">{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="bg-navy text-cream p-8">
            <p className="text-[11px] tracking-widest uppercase text-mustard-light font-semibold mb-4">
              Supplier Code of Conduct
            </p>
            <p className="text-cream/75 text-sm leading-relaxed">
              Our Code outlines the expectations we hold for every supplier
              working with Pinnacle Food Group, covering safety, ethics,
              sustainability, and fair dealing. Full details are shared directly
              with suppliers during onboarding.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BECOME A SUPPLIER */}
      <section className="py-20 sm:py-28 bg-paper-tint">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow-dark mb-4">Become a Supplier</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight mb-6 text-ink">
              We'd Love to Work With You
            </h2>
            <p className="text-stone leading-relaxed mb-10">
              If you share our values and would like to become an approved
              supplier, we invite you to submit your details for evaluation.
            </p>
            <div className="flex items-center flex-wrap gap-2">
              {STEPS.map((s, i) => (
                <span key={s} className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-forest-deep text-mustard-light text-sm font-display flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-ink/80 text-sm font-medium">{s}</span>
                  </span>
                  {i < STEPS.length - 1 && (
                    <span className="text-mustard mx-1">
                      <Icon>
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </Icon>
                    </span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal className="relative">
            <div className="absolute -inset-3 border border-mustard/40 -z-10 hidden sm:block" />
            <img
              src="/images/photo4.jpg"
              alt="Pinnacle Food Group warehouse partnership"
              className="w-full aspect-[4/3] object-cover shadow-lg"
            />
          </Reveal>
        </div>
      </section>

      {/* SUPPLIER PORTAL — COMING SOON */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_340px] gap-12">
          <Reveal>
            <p className="eyebrow-dark mb-4">Supplier Portal — Coming Soon</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight mb-5 text-ink">
              Manage Your Partnership Online
            </h2>
            <p className="text-stone leading-relaxed mb-6 max-w-xl">
              We're building a dedicated Supplier Portal to make it even easier
              to do business with us. Once live, approved suppliers will be able
              to:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                "View purchase orders and contracts",
                "Submit invoices and track payments",
                "Update company and compliance documents",
                "Track deliveries and performance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-forest mt-0.5 shrink-0">
                    <Icon>{CHECK_ICON}</Icon>
                  </span>
                  <span className="text-ink/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Button href="#partner" variant="ghost">
              Register Your Interest →
            </Button>
          </Reveal>
          <Reveal className="bg-navy text-cream p-8">
            <p className="text-[11px] tracking-widest uppercase text-mustard-light font-semibold mb-4">
              Important Information
            </p>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>Supplier Code of Conduct</li>
              <li>Quality & Food Safety Requirements</li>
              <li>Sustainability Requirements</li>
              <li>Payment Terms</li>
              <li>FAQs</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section
        id="partner"
        className="py-20 sm:py-28 bg-forest-deep scroll-mt-24"
      >
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center mb-12">
            <p className="text-[11px] tracking-widest uppercase text-mustard-light font-semibold mb-4">
              Get In Touch
            </p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight text-cream">
              Submit a Supplier Enquiry
            </h2>
          </Reveal>

          <Reveal>
            {submitted ? (
              <div className="bg-cream/10 border border-cream/20 p-8 text-center">
                <p className="text-cream text-lg font-display mb-2">
                  Thank you.
                </p>
                <p className="text-cream/70 text-sm leading-relaxed">
                  Your enquiry has been noted. Our procurement team will be in
                  touch if your offering matches our current needs.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="bg-transparent border border-cream/25 px-4 py-3 text-cream placeholder:text-cream/40 focus:border-mustard outline-none transition-colors"
                  />
                  <input
                    required
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="bg-transparent border border-cream/25 px-4 py-3 text-cream placeholder:text-cream/40 focus:border-mustard outline-none transition-colors"
                  />
                </div>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="bg-transparent border border-cream/25 px-4 py-3 text-cream placeholder:text-cream/40 focus:border-mustard outline-none transition-colors"
                />
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="bg-forest-deep border border-cream/25 px-4 py-3 text-cream focus:border-mustard outline-none transition-colors"
                >
                  {CATEGORY_OPTIONS.map((c) => (
                    <option key={c} value={c} className="text-ink">
                      {c}
                    </option>
                  ))}
                </select>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your business and what you offer"
                  className="bg-transparent border border-cream/25 px-4 py-3 text-cream placeholder:text-cream/40 focus:border-mustard outline-none transition-colors resize-none"
                />
                <Button className="justify-self-start">Submit Enquiry</Button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <img
          src="/images/photo1.jpg"
          alt="Pinnacle Food Group"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/85" />
        <Reveal className="relative max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-cream mb-4">
            Stronger Together.
          </h2>
          <p className="text-cream/75 leading-relaxed mb-8">
            Building a sustainable supply chain for the future.
          </p>
          <Button href="#partner" variant="solid">
            Register as a Supplier
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
