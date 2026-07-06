import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { DarkHeroBackdrop } from "../illustrations/HeroIllustration";

export default function CTASection({
  eyebrow = "Ready when you are",
  title = "Let's build something the market remembers.",
  sub = "Tell us about your product. We'll come back within 24 hours with a discovery plan and a senior engineering lead on the call.",
  ctaLabel = "Book a Consultation",
  ctaHref = "/contact",
  secondaryLabel = "See our work",
  secondaryHref = "/portfolio",
}) {
  return (
    <section className="relative py-24 sm:py-32 bg-ink-900 overflow-hidden" data-testid="cta-section">
      <DarkHeroBackdrop />
      <div className="relative mx-auto max-w-5xl container-px text-center">
        <div className="text-white/50 text-xs uppercase tracking-[0.22em] font-semibold mb-6">{eyebrow}</div>
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05] text-balance">
          {title.split(" ").map((w, i) => {
            const isAccent = ["build", "remembers.", "remembers"].includes(w.toLowerCase().replace(/[.,]/g, ""));
            return <span key={i}>{isAccent ? <span className="gradient-text">{w}</span> : w} </span>;
          })}
        </h2>
        <p className="mt-6 text-lg text-white/65 leading-relaxed max-w-2xl mx-auto text-pretty">{sub}</p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to={ctaHref}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-teal to-brand-blue text-white px-7 py-4 rounded-pill text-sm font-semibold shadow-glow-teal hover:scale-[1.02] transition-all"
            data-testid="cta-primary-button"
          >
            {ctaLabel} <ArrowRight size={16} />
          </Link>
          <Link
            to={secondaryHref}
            className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 text-white px-7 py-4 rounded-pill text-sm font-semibold hover:bg-white/[0.12] transition-colors"
            data-testid="cta-secondary-button"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
