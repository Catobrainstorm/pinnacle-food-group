import { Link } from "react-router-dom";

const COLS = [
  {
    heading: "Company",
    links: [
      ["About Pinnacle", "/about"],
      ["Our Story", "/about/our-story"],
      ["Our Leadership", "/about/leadership"],
      ["Operations", "/operations"],
      ["Facilities", "/facilities"],
      ["Sustainability", "/sustainability"],
    ],
  },
  {
    heading: "Careers & Suppliers",
    links: [
      ["Careers", "/careers"],
      ["Application Status", "/careers/status"],
      ["Suppliers & Procurement", "/suppliers"],
      ["News & Media", "/news"],
    ],
  },
  {
    heading: "Support",
    links: [
      ["FAQ", "/faq"],
      ["Contact Us", "/contact"],
      ["Legal", "/legal"],
      ["Privacy Policy", "/legal#privacy-policy"],
      ["Terms of Use", "/legal#terms-of-use"],
    ],
  },
];

// Placeholder links (#) until the client provides real social media URLs.
const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    path: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    label: "Instagram",
    href: "#",
    path: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    path: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    path: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-cream pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-12">
          <div className="col-span-2">
            <img
              src="/images/logo.png"
              alt="Pinnacle Food Group"
              className="h-9 w-auto mb-4"
            />
            <p className="text-cream/65 text-sm leading-relaxed max-w-xs">
              From farm to table, quality you can trust. Pinnacle Food Group Pty
              Ltd is an Australian food processing and distribution company.
            </p>
            <div className="mt-5 text-sm text-cream/65 leading-relaxed">
              <p>123 Innovation Drive</p>
              <p>Inverell NSW 2360</p>
              <p>Australia</p>
              <p className="mt-2">info@pinnaclefoodgroupau.com.au</p>
            </div>

            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center border border-cream/20 text-cream/70 hover:text-forest-deep hover:bg-mustard hover:border-mustard transition-all duration-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.path}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.heading}>
              <p className="text-[11px] tracking-widest uppercase text-mustard-light font-semibold mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map(([label, to]) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="relative text-sm text-cream/70 hover:text-mustard-light transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-mustard-light after:transition-[width] after:duration-300 hover:after:w-full"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-cream/15 flex flex-col sm:flex-row justify-between gap-4 text-xs text-cream/50">
          <p>
            &copy; {new Date().getFullYear()} Pinnacle Food Group Pty Ltd. All
            rights reserved.
          </p>
          <div className="flex gap-5">
            <Link
              to="/legal#privacy-policy"
              className="hover:text-mustard-light"
            >
              Privacy
            </Link>
            <Link to="/legal#terms-of-use" className="hover:text-mustard-light">
              Terms
            </Link>
            <Link
              to="/legal#cookie-notice"
              className="hover:text-mustard-light"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
