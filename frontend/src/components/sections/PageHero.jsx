import React from "react";
import { DarkHeroBackdrop } from "../illustrations/HeroIllustration";

/**
 * Reusable inner-page hero (dark, compact, gradient highlights).
 */
export default function PageHero({
  eyebrow,
  title,
  gradientWords = [],
  sub,
  children,
}) {
  return (
    <section className="relative bg-ink-900 text-white pt-40 pb-20 sm:pt-44 sm:pb-28 overflow-hidden" data-testid="page-hero">
      <DarkHeroBackdrop />
      <div className="relative mx-auto max-w-6xl container-px">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-white/10 bg-white/[0.04] text-[11px] uppercase tracking-[0.22em] text-white/70 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
            {eyebrow}
          </div>
        )}
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.98] text-balance max-w-5xl">
          {title.split(" ").map((w, i) => {
            const clean = w.replace(/[.,!?]/g, "");
            const isGrad = gradientWords.some((gw) => gw.toLowerCase() === clean.toLowerCase());
            return (
              <React.Fragment key={i}>
                {isGrad ? <span className="gradient-text">{w}</span> : w}{" "}
              </React.Fragment>
            );
          })}
        </h1>
        {sub && (
          <p className="mt-8 text-lg sm:text-xl text-white/65 leading-relaxed max-w-2xl text-pretty">{sub}</p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
