import React from "react";
import { TECH_STACK } from "../../data/tech";

export default function TechMarquee({ dark = true }) {
  const items = [...TECH_STACK, ...TECH_STACK];
  return (
    <section
      className={`relative overflow-hidden py-14 ${dark ? "bg-ink-900 border-y border-white/10" : "bg-white border-y border-black/5"}`}
      data-testid="tech-marquee"
    >
      <div className="mx-auto max-w-7xl container-px mb-8">
        <div className={`text-center text-xs uppercase tracking-[0.22em] font-semibold ${dark ? "text-white/40" : "text-ink-900/40"}`}>
          Modern stack · Built with the tools enterprises trust
        </div>
      </div>
      <div className="relative">
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r ${dark ? "from-ink-900" : "from-white"} to-transparent`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l ${dark ? "from-ink-900" : "from-white"} to-transparent`}
        />
        <div className="flex w-max marquee gap-3">
          {items.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className={`px-5 py-3 rounded-pill border whitespace-nowrap text-sm font-medium ${
                dark
                  ? "border-white/10 bg-white/[0.04] text-white/80 hover:bg-white/[0.08] hover:text-white"
                  : "border-black/5 bg-surface-50 text-ink-900/80"
              } transition-colors`}
            >
              {t.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
