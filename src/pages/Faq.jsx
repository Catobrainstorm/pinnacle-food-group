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

const CATEGORY_ICONS = {
  General: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 16v-4M12 8h.01" />
    </Icon>
  ),
  Careers: (
    <Icon>
      <rect x="3" y="7" width="18" height="13" rx="1.5" />
      <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
    </Icon>
  ),
  "Suppliers & Procurement": (
    <Icon>
      <path d="M3 7h13l4 5v6h-3" />
      <circle cx="7.5" cy="18" r="1.8" />
      <circle cx="16.5" cy="18" r="1.8" />
      <path d="M3 7v9h2" />
    </Icon>
  ),
  Sustainability: (
    <Icon>
      <path d="M12 3c4 3 6 6 6 9.5A6 6 0 0 1 6 12.5C6 9 8 6 12 3Z" />
      <path d="M12 22v-8" />
    </Icon>
  ),
  "Quality & Food Safety": (
    <Icon>
      <path d="M12 3 4 6v6c0 4.5 3.2 7.7 8 9 4.8-1.3 8-4.5 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </Icon>
  ),
};

const FAQ_ITEMS = [
  {
    category: "General",
    q: "What does Pinnacle Food Group do?",
    a: "Pinnacle Food Group Pty Ltd is an Australian food processing and distribution company producing safe, high-quality meat and food products for domestic and international markets.",
  },
  {
    category: "General",
    q: "Where is Pinnacle Food Group located?",
    a: "Our headquarters is located at 123 Innovation Drive, Inverell NSW 2360, Australia.",
  },
  {
    category: "General",
    q: "How can I get in touch with Pinnacle Food Group?",
    a: "You can reach us through our Contact page or by emailing info@pinnaclefoodgroupau.com.au.",
  },
  {
    category: "Careers",
    q: "How do I apply for a job at Pinnacle Food Group?",
    a: "Visit our Careers page to explore current opportunities by department and register your interest.",
  },
  {
    category: "Careers",
    q: "Do you accept applications from international candidates?",
    a: "Where business needs and Australian immigration requirements allow, we may consider suitably qualified international candidates for selected positions.",
  },
  {
    category: "Careers",
    q: "How can I check the status of my application?",
    a: "You can check your application status through our Careers page.",
  },
  {
    category: "Suppliers & Procurement",
    q: "How do I become a supplier?",
    a: "Visit our Suppliers & Procurement page and submit a supplier enquiry with details about your business.",
  },
  {
    category: "Suppliers & Procurement",
    q: "What do you look for in a supplier?",
    a: "We look for suppliers who meet our standards for quality, food safety, ethical practices, and reliable supply capacity.",
  },
  {
    category: "Suppliers & Procurement",
    q: "What categories does Pinnacle Food Group procure?",
    a: "We source across livestock, packaging, ingredients, equipment, transport, logistics, and professional services.",
  },
  {
    category: "Sustainability",
    q: "What is Pinnacle Food Group's approach to sustainability?",
    a: "We take an integrated Environmental, Social and Governance (ESG) approach, focused on responsible sourcing, environmental responsibility, and community impact.",
  },
  {
    category: "Sustainability",
    q: "Does Pinnacle Food Group have an animal welfare policy?",
    a: "Yes — we are committed to the highest standards of animal welfare and work closely with our producers to ensure humane care at every stage.",
  },
  {
    category: "Sustainability",
    q: "How can I learn more about your sustainability initiatives?",
    a: "Visit our Sustainability & ESG page for more detail, or contact us directly.",
  },
  {
    category: "Quality & Food Safety",
    q: "How does Pinnacle Food Group ensure food safety?",
    a: "Every product undergoes comprehensive inspection and monitoring through our quality assurance processes at every stage of production.",
  },
  {
    category: "Quality & Food Safety",
    q: "Where do your products come from?",
    a: "We source from trusted Australian suppliers and partners who share our commitment to quality and traceability.",
  },
  {
    category: "Quality & Food Safety",
    q: "Who can I contact with a product or quality concern?",
    a: "Please reach out through our Contact page and our team will assist you.",
  },
];

const CATEGORIES = Array.from(new Set(FAQ_ITEMS.map((f) => f.category)));

const POPULAR_TOPICS = [
  { label: "Current Career Opportunities", to: "/careers" },
  { label: "Become a Supplier", to: "/suppliers" },
  { label: "Our Sustainability Approach", to: "/sustainability" },
  { label: "Our Operations", to: "/operations" },
  { label: "Our Facilities", to: "/facilities" },
];

export default function Faq() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [openQ, setOpenQ] = useState(null);

  const filtered = FAQ_ITEMS.filter((f) => {
    const matchesCategory = category === "All" || f.category === category;
    const matchesSearch = f.q.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* HERO — dark Ken Burns photo band, consistent with Operations /
          Facilities / Suppliers / News / Sustainability headers */}
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
            <span className="text-cream/80">FAQ</span>
          </p>
          <p className="eyebrow mb-4">Support</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-2xl text-cream">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 max-w-xl text-cream/70 text-base sm:text-lg leading-relaxed">
            Answers to common questions about Pinnacle Food Group, our careers,
            suppliers, and sustainability commitments.
          </p>
        </Reveal>
      </section>

      {/* SEARCH + CATEGORY TILES */}
      <section className="pt-14 sm:pt-20 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="relative max-w-2xl mx-auto lg:mx-0 mb-10">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-stone/50">
                <Icon>
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3" />
                </Icon>
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions…"
                className="w-full bg-white border border-ink/15 pl-12 pr-5 py-4 text-ink placeholder:text-stone/50 focus:border-mustard outline-none transition-colors shadow-sm"
              />
            </div>
          </Reveal>

          <Reveal
            stagger={0.06}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-16 sm:mb-20"
          >
            <button
              onClick={() => setCategory("All")}
              className={`flex flex-col items-center gap-3 p-5 border transition-all duration-300 ${
                category === "All"
                  ? "bg-forest-deep border-forest-deep text-cream"
                  : "bg-white border-ink/10 text-ink/70 hover:border-forest hover:text-forest"
              }`}
            >
              <Icon>
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </Icon>
              <span className="text-xs tracking-wide uppercase text-center leading-tight">
                All Topics
              </span>
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`flex flex-col items-center gap-3 p-5 border transition-all duration-300 ${
                  category === c
                    ? "bg-forest-deep border-forest-deep text-cream"
                    : "bg-white border-ink/10 text-ink/70 hover:border-forest hover:text-forest"
                }`}
              >
                {CATEGORY_ICONS[c]}
                <span className="text-xs tracking-wide uppercase text-center leading-tight">
                  {c}
                </span>
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      {/* QUESTIONS + SIDEBAR */}
      <section className="pb-24 sm:pb-32 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_320px] gap-14 items-start">
          {/* Accordion */}
          <Reveal>
            {filtered.length === 0 ? (
              <p className="text-stone text-center py-16 border border-ink/10 bg-white">
                No questions match your search.
              </p>
            ) : (
              <div className="border-t border-ink/10">
                {filtered.map((f, i) => {
                  const open = openQ === f.q;
                  return (
                    <div key={f.q} className="border-b border-ink/10">
                      <button
                        onClick={() => setOpenQ(open ? null : f.q)}
                        className="w-full flex items-start gap-5 py-6 text-left group"
                      >
                        <span
                          className={`font-display text-lg shrink-0 transition-colors ${
                            open
                              ? "text-mustard"
                              : "text-forest/30 group-hover:text-mustard"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-base sm:text-lg text-ink flex-1">
                          {f.q}
                        </span>
                        <span
                          className={`shrink-0 mt-1 text-forest transition-transform duration-300 ${
                            open ? "rotate-45" : ""
                          }`}
                        >
                          <Icon>
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </Icon>
                        </span>
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          open
                            ? "grid-rows-[1fr] opacity-100 pb-7"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                        style={{ display: "grid" }}
                      >
                        <div className="overflow-hidden">
                          <p className="text-stone leading-relaxed max-w-xl pl-[2.6rem]">
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </Reveal>

          {/* Sidebar */}
          <Reveal className="flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="bg-forest-deep p-8 text-cream">
              <h3 className="font-display text-xl mb-3">
                Can't Find What You Need?
              </h3>
              <p className="text-cream/70 text-sm leading-relaxed mb-6">
                Our team is happy to help with any question that isn't answered
                here.
              </p>
              <Button to="/contact" variant="solid" className="w-full">
                Contact Us
              </Button>
            </div>

            <div className="bg-white border border-ink/10 p-8">
              <h3 className="font-display text-lg text-ink mb-5">
                Popular Topics
              </h3>
              <ul className="flex flex-col gap-3">
                {POPULAR_TOPICS.map((t) => (
                  <li key={t.to}>
                    <Link
                      to={t.to}
                      className="flex items-center justify-between gap-3 text-sm text-stone hover:text-forest transition-colors group"
                    >
                      <span>{t.label}</span>
                      <span className="text-forest/40 group-hover:text-mustard group-hover:translate-x-0.5 transition-all">
                        <Icon>
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </Icon>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STILL HAVE QUESTIONS — closing contact strip */}
      <section className="relative py-20 bg-forest-deep overflow-hidden">
        <div className="absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle_at_70%_30%,#c99a2e,transparent_60%)]" />
        <Reveal className="relative max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-cream mb-2">
              Still Have Questions?
            </h2>
            <p className="text-cream/70 text-sm sm:text-base">
              Reach our team directly at{" "}
              <a
                href="mailto:info@pinnaclefoodgroupau.com.au"
                className="text-mustard-light hover:text-mustard transition-colors"
              >
                info@pinnaclefoodgroupau.com.au
              </a>
            </p>
          </div>
          <Button to="/contact" variant="outline" dark>
            Get in Touch
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
