import { Link } from "react-router-dom";

function SocialIcon({ children }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      {children}
    </svg>
  );
}

// TODO: replace these "#" placeholders with the client's real social page
// URLs once they're provided — the icons are wired up and ready to go.
const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <SocialIcon>
        <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.3-1.5 1.6-1.5H16.5V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V10.5H8v3h2.3V21h3.2Z" />
      </SocialIcon>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <SocialIcon>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle
          cx="12"
          cy="12"
          r="4.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="17.2" cy="6.8" r="1.1" />
      </SocialIcon>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <SocialIcon>
        <rect x="3" y="9" width="3.2" height="11" />
        <circle cx="4.6" cy="4.8" r="2" />
        <path d="M10.2 9h3.1v1.6h.05c.43-.8 1.5-1.65 3.1-1.65 3.3 0 3.9 2.2 3.9 5V20h-3.2v-5.4c0-1.3 0-2.9-1.8-2.9s-2.05 1.4-2.05 2.8V20h-3.2Z" />
      </SocialIcon>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <SocialIcon>
        <rect
          x="2.5"
          y="6"
          width="19"
          height="12"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M10.5 9.5v5l4.5-2.5Z" />
      </SocialIcon>
    ),
  },
];

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

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-cream pt-16 pb-8">
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
              <a
                href="https://www.google.com/maps/search/?api=1&query=1+Pinnacle+Way+Inverell+NSW+2360+Australia"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-mustard-light transition-colors"
              >
                <p>1 Pinnacle Way</p>
                <p>Inverell NSW 2360</p>
                <p>Australia</p>
              </a>
              <p className="mt-2">
                <a
                  href="tel:+61280678000"
                  className="hover:text-mustard-light transition-colors"
                >
                  +61 2 8067 8000
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@pinnaclefoodgroupau.com.au"
                  className="hover:text-mustard-light transition-colors"
                >
                  info@pinnaclefoodgroupau.com.au
                </a>
              </p>
            </div>

            <div className="flex gap-4 mt-5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-cream/65 hover:text-mustard-light transition-colors"
                >
                  {s.icon}
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
                      className="text-sm text-cream/70 hover:text-mustard-light transition-colors"
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
