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
