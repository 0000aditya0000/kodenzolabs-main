import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { LogoLockup, LogoMark } from "../brand/Logo";
import { SERVICES } from "../../data/services";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", hasMenu: true },
  { to: "/industries", label: "Industries" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-5" data-testid="navbar-wrapper">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-[1180px] flex items-center justify-between gap-4 rounded-pill border transition-all duration-500 px-3 sm:px-4 py-2.5
            ${scrolled
              ? "bg-ink-900/85 border-white/10 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)]"
              : "bg-ink-900/60 border-white/10 backdrop-blur-md"
            }`}
          data-testid="navbar"
        >
          <Link to="/" className="flex items-center gap-2 pl-2" data-testid="navbar-logo">
            <LogoMark size={32} />
            <span className="font-heading font-extrabold text-[16px] tracking-tight text-white hidden sm:inline">
              Kodenzo<span className="text-brand-teal">.</span>
            </span>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((item) =>
              item.hasMenu ? (
                <li key={item.to} className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-3.5 py-2 rounded-full text-[13.5px] font-medium transition-colors ${
                        isActive ? "text-white bg-white/10" : "text-white/75 hover:text-white hover:bg-white/5"
                      }`
                    }
                    data-testid={`nav-link-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </NavLink>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[640px] grid grid-cols-2 gap-1 p-3 rounded-3xl bg-ink-900/95 border border-white/10 backdrop-blur-xl shadow-2xl"
                        data-testid="services-mega-menu"
                      >
                        {SERVICES.map((s) => {
                          const Icon = s.icon;
                          return (
                            <Link
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-white/5 transition-colors"
                              data-testid={`mega-${s.slug}`}
                            >
                              <div className="shrink-0 mt-0.5 w-9 h-9 rounded-xl bg-gradient-to-br from-brand-teal/20 to-brand-blue/20 grid place-items-center text-brand-teal group-hover:scale-110 transition-transform">
                                <Icon size={18} />
                              </div>
                              <div className="min-w-0">
                                <div className="text-white text-[14px] font-semibold leading-tight">{s.title}</div>
                                <div className="text-white/55 text-[12.5px] mt-0.5 line-clamp-2">{s.short}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `px-3.5 py-2 rounded-full text-[13.5px] font-medium transition-colors ${
                        isActive ? "text-white bg-white/10" : "text-white/75 hover:text-white hover:bg-white/5"
                      }`
                    }
                    data-testid={`nav-link-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-1.5 bg-gradient-to-r from-brand-teal to-brand-blue text-white px-4 py-2 rounded-full text-[13px] font-semibold shadow-[0_0_30px_-8px_rgba(53,183,161,0.6)] hover:shadow-[0_0_40px_-6px_rgba(53,183,161,0.9)] hover:scale-[1.02] transition-all"
              data-testid="navbar-cta"
            >
              Book a Consultation
              <ArrowRight size={14} />
            </Link>
            <button
              type="button"
              className="lg:hidden text-white p-2 rounded-full hover:bg-white/10"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu"
              data-testid="mobile-menu-toggle"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-ink-900/95 backdrop-blur-xl pt-28 px-6 pb-10 overflow-y-auto"
            data-testid="mobile-menu"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `block px-4 py-4 rounded-2xl text-lg font-medium ${
                        isActive ? "text-white bg-white/10" : "text-white/80 hover:bg-white/5"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="text-white/40 text-xs uppercase tracking-widest mb-3">Services</div>
              <div className="grid grid-cols-1 gap-1">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="px-4 py-3 rounded-xl text-white/80 hover:bg-white/5 text-[15px]"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-gradient-to-r from-brand-teal to-brand-blue text-white px-6 py-4 rounded-full text-base font-semibold"
            >
              Book a Consultation <ArrowRight size={16} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
