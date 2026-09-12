import { useEffect } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

function Icon({ children, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

const POLICIES = [
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    body: "How we collect, use, store and protect your personal information, and your rights in relation to your data.",
    icon: (
      <Icon>
        <path d="M12 3 4 6v6c0 4.5 3.2 7.7 8 9 4.8-1.3 8-4.5 8-9V6l-8-3Z" />
      </Icon>
    ),
  },
  {
    id: "terms-of-use",
    title: "Terms of Use",
    body: "The terms and conditions governing your use of this website and the content available on it.",
    icon: (
      <Icon>
        <path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
        <path d="M14 3v5h5" />
      </Icon>
    ),
  },
  {
    id: "recruitment-privacy",
    title: "Recruitment & Careers Privacy",
    body: "How we collect and manage personal information from job applicants and candidates through our careers process.",
    icon: (
      <Icon>
        <rect x="3" y="7" width="18" height="13" rx="1.5" />
        <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
      </Icon>
    ),
  },
  {
    id: "supplier-terms",
    title: "Supplier & Procurement Terms",
    body: "Our terms and expectations for suppliers, contractors, and business partners who work with Pinnacle Food Group.",
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
    id: "cookie-notice",
    title: "Cookies & Website Tracking",
    body: "Information about cookies and similar technologies used on our website, and how you can manage them.",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="9" />
        <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
        <circle cx="14" cy="14" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="9" r="1" fill="currentColor" stroke="none" />
      </Icon>
    ),
  },
  {
    id: "disclaimer",
    title: "Website Disclaimer",
    body: "Important information about the use of this website and the limitation of liability for its content.",
    icon: (
      <Icon>
        <path d="M12 9v4M12 17h.01" />
        <path d="M10.3 3.9 2.7 17.1a1.5 1.5 0 0 0 1.3 2.2h16a1.5 1.5 0 0 0 1.3-2.2L13.7 3.9a1.5 1.5 0 0 0-2.6 0Z" />
      </Icon>
    ),
  },
  {
    id: "anti-bribery",
    title: "Anti-Bribery & Compliance",
    body: "Our commitment to ethical, lawful business conduct and zero tolerance for bribery or corruption of any kind.",
    icon: (
      <Icon>
        <path d="M12 3v18M5 8h14M7 8l-3.5 6.5a3.5 3.5 0 0 0 7 0L7 8Zm10 0-3.5 6.5a3.5 3.5 0 0 0 7 0L17 8Z" />
      </Icon>
    ),
  },
  {
    id: "accessibility",
    title: "Accessibility",
    body: "Our ongoing work to make this website usable for as many visitors as possible, including those using assistive technology.",
    icon: (
      <Icon>
        <circle cx="12" cy="5" r="2" />
        <path d="M5 9h14M12 9v5m0 0-3 7m3-7 3 7" />
      </Icon>
    ),
  },
];

const DOCUMENTS = [
  "Privacy Policy",
  "Terms of Use",
  "Supplier Code of Conduct",
  "Anti-Bribery & Compliance Policy",
  "Website Disclaimer",
];

export default function Legal() {
  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ block: "start" });
      });
    }
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[46vh] sm:min-h-[54vh] flex items-end overflow-hidden bg-forest-deep">
        <img
          src="/images/photo9.jpg"
          alt=""
          className="hero-kenburns absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/75 to-forest-deep/35" />
        <Reveal className="relative max-w-7xl mx-auto px-5 sm:px-8 pb-16 sm:pb-20 w-full">
          <p className="text-xs text-cream/50 mb-5">
            <Link to="/" className="hover:text-mustard-light transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-cream/80">Legal &amp; Privacy</span>
          </p>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-mustard-light">
              <Icon className="w-7 h-7">
                <path d="M12 3v18M5 6h14M7 6l-3.5 6.5a3.5 3.5 0 0 0 7 0L7 6Zm10 0-3.5 6.5a3.5 3.5 0 0 0 7 0L17 6Z" />
              </Icon>
            </span>
            <p className="eyebrow">Legal &amp; Privacy</p>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-2xl text-cream">
            Our Commitment to Integrity and Transparency
          </h1>
          <p className="mt-5 max-w-xl text-cream/70 text-base sm:text-lg leading-relaxed">
            Pinnacle Food Group is committed to protecting your privacy,
            respecting your personal information, and conducting business in an
            ethical and lawful manner. Please read our legal policies and terms
            below.
          </p>
          <p className="mt-6 text-xs tracking-wide uppercase text-cream/40">
            Last updated: September 2026
          </p>
        </Reveal>
      </section>

      {/* POLICY GRID */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow-dark mb-3">Our Legal Policies</p>
            <h2 className="font-display text-2xl sm:text-3xl text-ink max-w-xl mb-2">
              Select a topic below to read our policies, terms, and important
              information.
            </h2>
          </Reveal>

          <Reveal
            stagger={0.08}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {POLICIES.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="group flex flex-col p-7 bg-white border border-ink/10 hover:border-mustard hover:shadow-md transition-all duration-300"
              >
                <span className="text-forest group-hover:text-mustard transition-colors mb-5">
                  {p.icon}
                </span>
                <h3 className="font-display text-lg text-ink mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed flex-1">
                  {p.body}
                </p>
                <span className="mt-5 text-xs tracking-widest uppercase text-forest group-hover:text-mustard transition-colors inline-flex items-center gap-1.5">
                  Read More
                  <Icon className="w-3.5 h-3.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </Icon>
                </span>
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* LEGAL DOCUMENTS */}
      <section className="pb-20 sm:pb-28 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="bg-paper-tint border border-ink/10 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-10">
              <div className="flex items-start gap-4 sm:w-64 shrink-0">
                <span className="w-12 h-12 rounded-full bg-forest/10 text-forest flex items-center justify-center shrink-0">
                  <Icon>
                    <path d="M3 7h6l2 3h10v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Z" />
                  </Icon>
                </span>
                <div>
                  <h3 className="font-display text-lg text-ink mb-1">
                    Legal Documents
                  </h3>
                  <p className="text-stone text-sm leading-relaxed">
                    Formal copies of our key policies, available on request.
                  </p>
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 flex-1">
                {DOCUMENTS.map((d) => (
                  <li
                    key={d}
                    className="flex items-center justify-between gap-4 py-2 border-b border-ink/10 text-sm"
                  >
                    <span className="text-ink/80">{d}</span>
                    <a
                      href="mailto:info@pinnaclefoodgroupau.com.au?subject=Document Request"
                      className="text-xs tracking-wide uppercase text-forest hover:text-mustard transition-colors shrink-0"
                    >
                      Request Copy
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* POLICY DETAIL SECTIONS */}
      <section className="pb-20 sm:pb-28 bg-paper">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 flex flex-col gap-20">
          <section id="privacy-policy" className="scroll-mt-28">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">
                Privacy Policy
              </h2>
              <div className="flex flex-col gap-4 text-stone leading-relaxed">
                <p>
                  Pinnacle Food Group Pty Ltd ("Pinnacle Food Group", "we",
                  "us", "our") is committed to protecting the privacy of
                  visitors to this website in accordance with the Privacy Act
                  1988 (Cth) and the Australian Privacy Principles.
                </p>
                <p className="font-display text-lg text-ink mt-2">
                  Information We Collect
                </p>
                <p>
                  We may collect personal information you provide directly to
                  us, such as your name, email address, and any details
                  submitted through our contact, careers, or supplier enquiry
                  forms. We may also collect limited technical information
                  automatically, such as browser type and general usage data, to
                  help us understand how our website is used.
                </p>
                <p className="font-display text-lg text-ink mt-2">
                  How We Use Your Information
                </p>
                <p>
                  Information you provide is used to respond to your enquiry,
                  process a job or supplier application, or otherwise fulfil the
                  purpose for which it was submitted. We do not sell your
                  personal information to third parties.
                </p>
                <p className="font-display text-lg text-ink mt-2">
                  Data Security
                </p>
                <p>
                  We take reasonable steps to protect the personal information
                  we hold from misuse, loss, and unauthorised access. However,
                  no method of transmission over the internet is completely
                  secure, and we cannot guarantee absolute security.
                </p>
                <p className="font-display text-lg text-ink mt-2">
                  Your Rights
                </p>
                <p>
                  You may request access to, or correction of, personal
                  information we hold about you at any time by contacting us at{" "}
                  <a
                    href="mailto:info@pinnaclefoodgroupau.com.au"
                    className="text-forest hover:text-mustard transition-colors"
                  >
                    info@pinnaclefoodgroupau.com.au
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </section>

          <section id="terms-of-use" className="scroll-mt-28">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">
                Terms of Use
              </h2>
              <div className="flex flex-col gap-4 text-stone leading-relaxed">
                <p>
                  By accessing and using this website, you agree to be bound by
                  these Terms of Use. If you do not agree with any part of these
                  terms, please do not use this website.
                </p>
                <p className="font-display text-lg text-ink mt-2">
                  Use of Content
                </p>
                <p>
                  All content on this website, including text, images, and
                  branding, is the property of Pinnacle Food Group Pty Ltd
                  unless otherwise stated, and is provided for general
                  informational purposes only. It may not be reproduced,
                  distributed, or used for commercial purposes without our prior
                  written consent.
                </p>
                <p className="font-display text-lg text-ink mt-2">
                  Accuracy of Information
                </p>
                <p>
                  We make reasonable efforts to keep the information on this
                  website accurate and up to date, but we make no warranties or
                  representations as to its completeness or accuracy.
                  Information may be updated or changed without notice.
                </p>
                <p className="font-display text-lg text-ink mt-2">
                  Limitation of Liability
                </p>
                <p>
                  To the extent permitted by law, Pinnacle Food Group Pty Ltd
                  will not be liable for any loss or damage arising from your
                  use of, or reliance on, this website or its content.
                </p>
                <p className="font-display text-lg text-ink mt-2">
                  Changes to These Terms
                </p>
                <p>
                  We may update these Terms of Use from time to time. Continued
                  use of this website following any changes constitutes
                  acceptance of the updated terms.
                </p>
              </div>
            </Reveal>
          </section>

          <section id="recruitment-privacy" className="scroll-mt-28">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">
                Recruitment & Careers Privacy
              </h2>
              <div className="flex flex-col gap-4 text-stone leading-relaxed">
                <p>
                  When you apply for a role with us or register your interest
                  through our Careers page, we collect the personal information
                  you provide as part of that application, such as your name,
                  contact details, and any details you choose to share about
                  your experience or interest in a position.
                </p>
                <p>
                  This information is used solely for the purpose of assessing
                  your application and managing our recruitment process. It is
                  handled by the team involved in that process and is not used
                  for any unrelated purpose.
                </p>
                <p>
                  If you have questions about how your application information
                  is handled, or wish to withdraw your application, please
                  contact us at{" "}
                  <a
                    href="mailto:info@pinnaclefoodgroupau.com.au"
                    className="text-forest hover:text-mustard transition-colors"
                  >
                    info@pinnaclefoodgroupau.com.au
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </section>

          <section id="supplier-terms" className="scroll-mt-28">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">
                Supplier & Procurement Terms
              </h2>
              <div className="flex flex-col gap-4 text-stone leading-relaxed">
                <p>
                  We work with suppliers, contractors, and business partners who
                  share our commitment to quality, food safety, and ethical
                  business practice. Any information submitted through our
                  Suppliers & Procurement enquiry form is used only to evaluate
                  and manage that supplier relationship.
                </p>
                <p>
                  Suppliers are expected to conduct business lawfully and
                  ethically, and to meet the standards outlined on our{" "}
                  <Link
                    to="/suppliers"
                    className="text-forest hover:text-mustard transition-colors"
                  >
                    Suppliers &amp; Procurement page
                  </Link>
                  . Specific contractual terms are agreed directly with
                  individual suppliers as part of onboarding.
                </p>
              </div>
            </Reveal>
          </section>

          <section id="cookie-notice" className="scroll-mt-28">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">
                Cookies & Website Tracking
              </h2>
              <div className="flex flex-col gap-4 text-stone leading-relaxed">
                <p>
                  This website may use cookies and similar technologies to help
                  it function properly and to understand how visitors use it.
                  Cookies are small text files stored on your device by your
                  browser.
                </p>
                <p className="font-display text-lg text-ink mt-2">
                  Types of Cookies We May Use
                </p>
                <p>
                  Essential cookies that are necessary for the website to
                  operate correctly, and analytics cookies that help us
                  understand general site usage patterns so we can improve the
                  experience for visitors.
                </p>
                <p className="font-display text-lg text-ink mt-2">
                  Managing Cookies
                </p>
                <p>
                  Most web browsers allow you to control cookies through their
                  settings, including blocking or deleting them. Please note
                  that disabling cookies may affect the functionality of parts
                  of this website.
                </p>
              </div>
            </Reveal>
          </section>

          <section id="disclaimer" className="scroll-mt-28">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">
                Website Disclaimer
              </h2>
              <div className="flex flex-col gap-4 text-stone leading-relaxed">
                <p>
                  The content on this website is provided in good faith for
                  general informational purposes about Pinnacle Food Group Pty
                  Ltd, its operations, and its opportunities. It does not
                  constitute professional, legal, or financial advice, and
                  should not be relied upon as such.
                </p>
                <p>
                  Links to external websites, where present, are provided for
                  convenience only. We do not control and are not responsible
                  for the content or privacy practices of any external site.
                </p>
              </div>
            </Reveal>
          </section>

          <section id="anti-bribery" className="scroll-mt-28">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">
                Anti-Bribery & Compliance
              </h2>
              <div className="flex flex-col gap-4 text-stone leading-relaxed">
                <p>
                  Pinnacle Food Group is committed to conducting business
                  honestly, ethically, and in compliance with applicable law. We
                  do not tolerate bribery, corruption, or any form of unethical
                  business conduct in our operations or in our dealings with
                  suppliers, partners, and customers.
                </p>
                <p>
                  Anyone with a genuine concern about potential misconduct is
                  encouraged to raise it with us directly at{" "}
                  <a
                    href="mailto:info@pinnaclefoodgroupau.com.au"
                    className="text-forest hover:text-mustard transition-colors"
                  >
                    info@pinnaclefoodgroupau.com.au
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </section>

          <section id="accessibility" className="scroll-mt-28">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">
                Accessibility
              </h2>
              <div className="flex flex-col gap-4 text-stone leading-relaxed">
                <p>
                  We aim to make this website usable and accessible to as many
                  visitors as possible, including people using assistive
                  technologies. We continue to work towards improving
                  accessibility across our pages.
                </p>
                <p>
                  If you experience any difficulty accessing content on this
                  website, please let us know at{" "}
                  <a
                    href="mailto:info@pinnaclefoodgroupau.com.au"
                    className="text-forest hover:text-mustard transition-colors"
                  >
                    info@pinnaclefoodgroupau.com.au
                  </a>{" "}
                  and we will do our best to assist you.
                </p>
              </div>
            </Reveal>
          </section>
        </div>
      </section>

      {/* PRIVACY & LEGAL ENQUIRIES */}
      <section className="py-20 sm:py-28 bg-paper-tint">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="eyebrow-dark mb-4">Privacy &amp; Legal Enquiries</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight mb-6">
              Questions About Our Policies?
            </h2>
            <p className="text-stone leading-relaxed mb-8 max-w-md">
              If you have any questions about our legal policies, privacy
              practices, or how we handle your information, our team is glad to
              help.
            </p>
            <div className="flex flex-col gap-5 mb-8">
              <div className="flex items-start gap-4">
                <span className="text-forest shrink-0 mt-0.5">
                  <Icon>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </Icon>
                </span>
                <div>
                  <p className="text-xs tracking-wide uppercase text-stone/60 mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@pinnaclefoodgroupau.com.au"
                    className="text-ink hover:text-forest transition-colors"
                  >
                    info@pinnaclefoodgroupau.com.au
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-forest shrink-0 mt-0.5">
                  <Icon>
                    <path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </Icon>
                </span>
                <div>
                  <p className="text-xs tracking-wide uppercase text-stone/60 mb-1">
                    Mailing Address
                  </p>
                  <p className="text-ink leading-relaxed">
                    Pinnacle Food Group Pty Ltd
                    <br />
                    123 Innovation Drive
                    <br />
                    Inverell NSW 2360, Australia
                  </p>
                </div>
              </div>
            </div>
            <Button to="/contact" variant="outline">
              Contact Us
            </Button>
          </Reveal>

          <Reveal className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/photo17.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 sm:left-6 bg-forest-deep text-cream p-6 max-w-xs shadow-lg">
              <span className="text-mustard-light block mb-3">
                <Icon>
                  <path d="M12 3 4 6v6c0 4.5 3.2 7.7 8 9 4.8-1.3 8-4.5 8-9V6l-8-3Z" />
                </Icon>
              </span>
              <h3 className="font-display text-lg mb-2">Our Commitment</h3>
              <p className="text-cream/70 text-sm leading-relaxed">
                We are committed to operating with integrity, protecting your
                personal information, and complying with all applicable laws and
                regulations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
