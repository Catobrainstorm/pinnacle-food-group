import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const ABOUT_LINKS = [
  { to: "/about", label: "About Pinnacle" },
  { to: "/about/our-story", label: "Our Story" },
  { to: "/about/leadership", label: "Our Leadership" },
  { to: "/about/values", label: "Our Values" },
  { to: "/about/approach", label: "Our Approach" },
];

const LINKS = [
  { to: "/operations", label: "Operations" },
  { to: "/facilities", label: "Facilities" },
  { to: "/suppliers", label: "Suppliers" },
  { to: "/news", label: "News" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/faq", label: "FAQ" },
  { to: "/careers", label: "Careers" },
  { to: "/legal", label: "Legal" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu automatically whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Transparent + light text only over the homepage's dark hero, and only
  // before scrolling , every other page (and any scrolled state) is solid.
  const solid = scrolled || open || pathname !== "/";
  const linkColor = solid
    ? "text-ink/80 hover:text-forest"
    : "text-cream/90 hover:text-mustard-light";
  const linkActive = solid ? "text-forest" : "text-mustard-light";
  const underline =
    "relative after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 hover:after:w-full";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-paper/95 backdrop-blur border-b border-ink/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0 group">
          <img
            src="/images/logo.png"
            alt="Pinnacle Food Group"
            className={`h-10 sm:h-11 w-auto transition-transform duration-300 group-hover:scale-105 ${
              solid ? "" : "drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
            }`}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-5 shrink-0">
          <div className="relative group py-8 -my-8">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-[11px] tracking-widest uppercase font-semibold transition-colors ${underline} ${
                  isActive ? linkActive : linkColor
                }`
              }
            >
              About
            </NavLink>
            <div className="absolute left-0 top-full pt-3 hidden group-hover:block">
              <div className="w-56 bg-paper border border-ink/10 shadow-xl py-2">
                {ABOUT_LINKS.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === "/about"}
                    className={({ isActive }) =>
                      `block px-5 py-2.5 text-xs tracking-wide uppercase transition-colors ${
                        isActive
                          ? "text-forest bg-forest/5 font-semibold"
                          : "text-ink/70 hover:text-forest hover:bg-forest/5"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[11px] tracking-widest uppercase font-semibold transition-colors whitespace-nowrap ${underline} ${
                  isActive ? linkActive : linkColor
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="ml-1 px-4 py-2.5 bg-mustard text-forest-deep text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-mustard-light hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap"
          >
            Contact
          </Link>
        </nav>

        <button
          className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 shrink-0 -mr-2 ${solid ? "text-ink" : "text-cream"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      <nav
        className={`lg:hidden bg-paper overflow-y-auto px-5 flex flex-col gap-1 transition-all duration-300 ease-in-out ${
          open
            ? "max-h-[75vh] opacity-100 pt-2 pb-6 border-t border-ink/10"
            : "max-h-0 opacity-0 pointer-events-none border-t border-transparent"
        }`}
      >
        <p className="pt-3 pb-1 text-[10px] tracking-widest uppercase text-mustard font-bold">
          About
        </p>
        {ABOUT_LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === "/about"}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `py-2.5 pl-3 text-sm tracking-wide uppercase border-b border-ink/5 ${
                isActive ? "text-forest font-semibold" : "text-ink/80"
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
        <div className="h-2" />
        {LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `py-3 text-sm tracking-widest uppercase border-b border-ink/5 ${
                isActive ? "text-forest font-semibold" : "text-ink/80"
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className="mt-4 text-center px-5 py-3.5 bg-mustard text-forest-deep text-xs font-bold tracking-widest uppercase"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
