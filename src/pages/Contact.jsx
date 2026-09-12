import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

function Icon({ children, className = "" }) {
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
      className={className}
    >
      {children}
    </svg>
  );
}

const CONNECT_CARDS = [
  {
    title: "Call Us",
    body: "Speak with our team during business hours.",
    action: { label: "+61 2 8067 8000", href: "tel:+61280678000" },
    icon: (
      <Icon>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.8 2.2Z" />
      </Icon>
    ),
  },
  {
    title: "Email Us",
    body: "Send us an email anytime.",
    action: {
      label: "info@pinnaclefoodgroupau.com.au",
      href: "mailto:info@pinnaclefoodgroupau.com.au",
    },
    icon: (
      <Icon>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </Icon>
    ),
  },
  {
    title: "Visit Us",
    body: "We welcome visitors by appointment.",
    action: {
      label: "Get Directions →",
      href: "https://www.google.com/maps/search/?api=1&query=1+Pinnacle+Way+Inverell+NSW+2360+Australia",
    },
    icon: (
      <Icon>
        <path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </Icon>
    ),
  },
  {
    title: "Supplier Enquiries",
    body: "For procurement and supplier-related enquiries.",
    action: { label: "Suppliers & Procurement →", to: "/suppliers" },
    icon: (
      <Icon>
        <path d="M3 7h13l4 5v6h-3" />
        <circle cx="7.5" cy="18" r="1.8" />
        <circle cx="16.5" cy="18" r="1.8" />
        <path d="M3 7v9h2" />
      </Icon>
    ),
  },
  {
    title: "Careers Enquiries",
    body: "Questions about careers and opportunities.",
    action: { label: "Visit Careers →", to: "/careers" },
    icon: (
      <Icon>
        <rect x="3" y="7" width="18" height="13" rx="1.5" />
        <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
      </Icon>
    ),
  },
  {
    title: "Media Enquiries",
    body: "For media, press, and public relations.",
    action: {
      label: "Email Media Team →",
      href: "mailto:info@pinnaclefoodgroupau.com.au?subject=Media%20%26%20Press%20Enquiry",
    },
    icon: (
      <Icon>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 6 10-6" />
      </Icon>
    ),
  },
  {
    title: "Send a Message",
    body: "Use our contact form below.",
    action: { label: "Go to Form ↓", href: "#contact-form" },
    icon: (
      <Icon>
        <path d="M4 4h16v12H7l-3 3V4Z" />
      </Icon>
    ),
  },
];

const DEPARTMENTS = [
  "General Enquiry",
  "Careers",
  "Suppliers & Procurement",
  "Media & Press",
  "Customer Feedback",
];

const LOCATIONS = [
  {
    name: "Inverell, New South Wales (Head Office)",
    address: "1 Pinnacle Way, Inverell NSW 2360, Australia",
    phone: "+61 2 8067 8000",
  },
  {
    name: "Tamworth, New South Wales",
    address: "45 Gunnedah Road, Tamworth NSW 2340, Australia",
    phone: "+61 2 6765 2100",
  },
  {
    name: "Brisbane, Queensland",
    address: "12 Logistics Drive, Larapinta QLD 4110, Australia",
    phone: "+61 7 3712 0900",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    department: DEPARTMENTS[0],
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) =>
    setForm((f) => ({
      ...f,
      [field]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: no backend/email service wired up yet — this just confirms
    // client-side. Needs a real submission handler (API route, form
    // service, etc.) before this collects live enquiries.
    setSubmitted(true);
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[48vh] sm:min-h-[54vh] flex items-end overflow-hidden bg-forest-deep">
        <img
          src="/images/photo6.jpg"
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
            <span className="text-cream/80">Contact</span>
          </p>
          <p className="eyebrow mb-4">We're Here to Help</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-2xl text-cream">
            Contact Pinnacle Food Group
          </h1>
          <p className="mt-5 max-w-xl text-cream/70 text-base sm:text-lg leading-relaxed">
            Whether you have a question, a partnership opportunity, or a general
            enquiry, our team is ready to assist you.
          </p>
        </Reveal>
      </section>

      {/* WAYS TO CONNECT */}
      <section className="py-16 sm:py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow-dark mb-10 text-center">
              Ways to Connect With Us
            </p>
          </Reveal>
          <Reveal
            stagger={0.08}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {CONNECT_CARDS.map((c) => (
              <div
                key={c.title}
                className="flex flex-col items-center text-center p-7 bg-white border border-ink/10 hover:border-mustard hover:shadow-md transition-all duration-300"
              >
                <span className="w-12 h-12 rounded-full bg-forest/10 text-forest flex items-center justify-center mb-4">
                  {c.icon}
                </span>
                <h3 className="font-display text-lg text-ink mb-2">
                  {c.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed mb-4">
                  {c.body}
                </p>
                {c.action.to ? (
                  <Link
                    to={c.action.to}
                    className="text-sm text-forest hover:text-mustard transition-colors font-medium"
                  >
                    {c.action.label}
                  </Link>
                ) : (
                  <a
                    href={c.action.href}
                    target={
                      c.action.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      c.action.href.startsWith("http")
                        ? "noreferrer"
                        : undefined
                    }
                    className="text-sm text-forest hover:text-mustard transition-colors font-medium break-all"
                  >
                    {c.action.label}
                  </a>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FORM + HEAD OFFICE */}
      <section
        id="contact-form"
        className="py-16 sm:py-24 bg-paper-tint scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_420px] gap-10 items-start">
          {/* Form */}
          <Reveal>
            {submitted ? (
              <div className="bg-white border border-ink/10 p-10 sm:p-14 text-center">
                <div className="w-14 h-14 rounded-full bg-forest/10 text-forest flex items-center justify-center mx-auto mb-6">
                  <Icon>
                    <path d="M20 6 9 17l-5-5" />
                  </Icon>
                </div>
                <h2 className="font-display text-2xl text-ink mb-3">
                  Message Sent
                </h2>
                <p className="text-stone leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out. A member of our team will get back
                  to you as soon as possible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-ink/10 p-8 sm:p-10"
              >
                <h2 className="font-display text-2xl text-ink mb-2">
                  Send Us a Message
                </h2>
                <p className="text-stone text-sm mb-8">
                  Please fill out the form below and our team will get back to
                  you as soon as possible.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs tracking-wide uppercase text-stone mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={update("name")}
                      className="w-full bg-paper border border-ink/15 px-4 py-3 text-ink focus:border-mustard outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wide uppercase text-stone mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={update("company")}
                      className="w-full bg-paper border border-ink/15 px-4 py-3 text-ink focus:border-mustard outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs tracking-wide uppercase text-stone mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      className="w-full bg-paper border border-ink/15 px-4 py-3 text-ink focus:border-mustard outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wide uppercase text-stone mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      className="w-full bg-paper border border-ink/15 px-4 py-3 text-ink focus:border-mustard outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs tracking-wide uppercase text-stone mb-2">
                    Subject *
                  </label>
                  <select
                    required
                    value={form.department}
                    onChange={update("department")}
                    className="w-full bg-paper border border-ink/15 px-4 py-3 text-ink focus:border-mustard outline-none transition-colors"
                  >
                    {DEPARTMENTS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-xs tracking-wide uppercase text-stone mb-2">
                    How Can We Help You? *
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Type your message here…"
                    value={form.message}
                    onChange={update("message")}
                    className="w-full bg-paper border border-ink/15 px-4 py-3 text-ink placeholder:text-stone/50 focus:border-mustard outline-none transition-colors resize-none"
                  />
                </div>

                <label className="flex items-start gap-3 mb-8 text-sm text-stone leading-relaxed cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={form.consent}
                    onChange={update("consent")}
                    className="mt-1 accent-forest"
                  />
                  I agree to the{" "}
                  <Link
                    to="/legal#privacy-policy"
                    className="text-forest hover:text-mustard transition-colors"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and consent to Pinnacle Food Group collecting my personal
                  information.
                </label>

                <Button variant="solid" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            )}
          </Reveal>

          {/* Head Office panel */}
          <Reveal className="bg-forest-deep text-cream p-8 sm:p-10 flex flex-col gap-8">
            <div>
              <h3 className="font-display text-xl mb-6">Our Head Office</h3>

              <div className="flex items-start gap-4 mb-6">
                <span className="mt-0.5 text-mustard-light shrink-0">
                  <Icon>
                    <path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </Icon>
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1+Pinnacle+Way+Inverell+NSW+2360+Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/85 text-sm leading-relaxed hover:text-mustard-light transition-colors"
                >
                  Pinnacle Food Group Pty Ltd
                  <br />1 Pinnacle Way
                  <br />
                  Inverell NSW 2360, Australia
                </a>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <span className="mt-0.5 text-mustard-light shrink-0">
                  <Icon>
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.8 2.2Z" />
                  </Icon>
                </span>
                <a
                  href="tel:+61280678000"
                  className="text-cream/85 text-sm hover:text-mustard-light transition-colors"
                >
                  +61 2 8067 8000
                </a>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-0.5 text-mustard-light shrink-0">
                  <Icon>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </Icon>
                </span>
                <a
                  href="mailto:info@pinnaclefoodgroupau.com.au"
                  className="text-cream/85 text-sm hover:text-mustard-light transition-colors"
                >
                  info@pinnaclefoodgroupau.com.au
                </a>
              </div>
            </div>

            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/photo6.jpg"
                alt="Pinnacle Food Group head office"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUR LOCATIONS */}
      <section className="py-16 sm:py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1.4fr_1fr] gap-10 items-start">
          <Reveal>
            <p className="eyebrow-dark mb-4">Our Locations</p>
            <h2 className="font-display text-2xl sm:text-3xl text-ink leading-tight">
              Proudly operating across Australia with state-of-the-art
              facilities.
            </h2>
            <ul className="mt-8 flex flex-col gap-6">
              {LOCATIONS.map((loc) => (
                <li key={loc.name} className="flex items-start gap-3">
                  <span className="text-forest mt-0.5 shrink-0">
                    <Icon>
                      <path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </Icon>
                  </span>
                  <div>
                    <p className="text-ink text-sm font-medium">{loc.name}</p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-stone text-sm hover:text-forest hover:underline transition-colors"
                    >
                      {loc.address}
                    </a>
                    <p className="text-stone text-sm">Ph: {loc.phone}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="order-first lg:order-none">
            <img
              src="/images/map.jpg"
              alt="Map showing Pinnacle Food Group's location in Australia"
              className="w-full h-auto"
            />
          </Reveal>

          <Reveal>
            <p className="eyebrow-dark mb-4">Get In Touch</p>
            <p className="text-stone text-sm leading-relaxed mb-6">
              We value your feedback and look forward to hearing from you.
            </p>
            <ul className="flex flex-col gap-5">
              {[
                {
                  title: "Partnership Opportunities",
                  body: "Explore how we can work together.",
                },
                {
                  title: "Supplier Onboarding",
                  body: "Join our network of trusted suppliers.",
                },
                {
                  title: "Community & Sponsorships",
                  body: "Supporting the communities we operate in.",
                },
                {
                  title: "General Enquiries",
                  body: "We're here to assist you.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="text-forest mt-0.5 shrink-0">
                    <Icon>
                      <path d="M20 6 9 17l-5-5" />
                    </Icon>
                  </span>
                  <div>
                    <p className="text-ink text-sm font-medium">{item.title}</p>
                    <p className="text-stone text-sm">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* OFFICIAL SEAL — closing trust signal before the footer */}
      <section className="py-16 bg-paper">
        <Reveal className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col items-center text-center">
          <img
            src="/images/seal.jpg"
            alt="Pinnacle Food Group Pty Ltd — Official Company Seal"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
          />
          <p className="mt-4 text-xs tracking-widest uppercase text-stone">
            Pinnacle Food Group Pty Ltd — Official Company Seal
          </p>
        </Reveal>
      </section>
    </div>
  );
}
