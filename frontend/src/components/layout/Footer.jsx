import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Mail, MapPin, ArrowUpRight, ArrowRight } from "lucide-react";
import { LogoMark } from "../brand/Logo";
import { COMPANY } from "../../data/company";
import { SERVICES } from "../../data/services";
import { toast } from "sonner";

export default function Footer() {
  const [email, setEmail] = useState("");

  const onSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Subscribed. Welcome to the lab.");
    setEmail("");
  };

  return (
    <footer className="relative bg-ink-900 text-white pt-24 pb-10 overflow-hidden" data-testid="site-footer">
      {/* Soft glow */}
      <div className="pointer-events-none absolute -top-32 left-1/4 w-[420px] h-[420px] rounded-full bg-brand-blue/15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 w-[420px] h-[420px] rounded-full bg-brand-teal/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl container-px">
        {/* Top: CTA band */}
        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 sm:p-12 mb-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="text-white/60 text-xs uppercase tracking-[0.18em] mb-3">Let&apos;s build</div>
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.05] max-w-2xl">
              Have a product in mind? We turn ideas into <span className="gradient-text">shipped software.</span>
            </h3>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-teal to-brand-blue text-white px-6 py-3.5 rounded-pill text-sm font-semibold shadow-glow-teal hover:scale-[1.02] transition-all"
            data-testid="footer-cta"
          >
            Book a Consultation <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <LogoMark size={40} />
              <span className="font-heading font-extrabold text-lg tracking-tight">
                Kodenzo<span className="text-brand-teal">.</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mt-5 max-w-sm">
              A modern AI and software engineering company. We design, build and operate enterprise-grade software for startups, SMEs and Fortune 500 teams.
            </p>

            <form onSubmit={onSubscribe} className="mt-8" data-testid="newsletter-form">
              <label className="text-white/50 text-xs uppercase tracking-[0.18em]">Newsletter</label>
              <div className="mt-3 flex items-center gap-2 p-1.5 rounded-pill border border-white/10 bg-white/[0.04] focus-within:border-white/30 transition-colors">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 bg-transparent text-white placeholder-white/40 px-4 py-2 text-sm outline-none"
                  data-testid="newsletter-input"
                />
                <button
                  type="submit"
                  className="bg-white text-ink-900 px-4 py-2 rounded-pill text-sm font-semibold hover:bg-brand-teal transition-colors"
                  data-testid="newsletter-submit"
                >
                  Join
                </button>
              </div>
            </form>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <div className="text-white/50 text-xs uppercase tracking-[0.18em] mb-5">Services</div>
            <ul className="space-y-3">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-white/75 hover:text-brand-teal text-sm transition-colors inline-flex items-center gap-1.5 group">
                    {s.title}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <div className="text-white/50 text-xs uppercase tracking-[0.18em] mb-5">Company</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-white/75 hover:text-brand-teal transition-colors">About</Link></li>
              <li><Link to="/process" className="text-white/75 hover:text-brand-teal transition-colors">Our Process</Link></li>
              <li><Link to="/portfolio" className="text-white/75 hover:text-brand-teal transition-colors">Portfolio</Link></li>
              <li><Link to="/industries" className="text-white/75 hover:text-brand-teal transition-colors">Industries</Link></li>
              <li><Link to="/blog" className="text-white/75 hover:text-brand-teal transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-white/75 hover:text-brand-teal transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-white/75 hover:text-brand-teal transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-3">
            <div className="text-white/50 text-xs uppercase tracking-[0.18em] mb-5">Get in touch</div>
            <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 text-white/80 hover:text-brand-teal transition-colors text-sm">
              <Mail size={16} className="mt-0.5 shrink-0" /> {COMPANY.email}
            </a>
            <div className="flex items-start gap-3 text-white/60 text-sm mt-3">
              <MapPin size={16} className="mt-0.5 shrink-0" /> {COMPANY.address}
            </div>

            <div className="mt-7 flex items-center gap-2">
              <a href={COMPANY.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" data-testid="social-linkedin"
                 className="w-10 h-10 grid place-items-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-brand-teal hover:border-brand-teal hover:text-ink-900 transition-all">
                <Linkedin size={16} />
              </a>
              <a href={COMPANY.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" data-testid="social-twitter"
                 className="w-10 h-10 grid place-items-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-brand-teal hover:border-brand-teal hover:text-ink-900 transition-all">
                <Twitter size={16} />
              </a>
              <a href={COMPANY.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" data-testid="social-instagram"
                 className="w-10 h-10 grid place-items-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-brand-teal hover:border-brand-teal hover:text-ink-900 transition-all">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-white/40 text-xs">© {new Date().getFullYear()} Kodenzo Labs. All rights reserved.</div>
          <div className="flex items-center gap-5 text-xs text-white/50">
            <Link to="/privacy-policy" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white/80 transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
