import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PageHero from "../components/sections/PageHero";
import CTASection from "../components/sections/CTASection";
import { Eyebrow, fadeUp } from "../components/sections/Primitives";
import { PORTFOLIO } from "../data/portfolio";
import { useSEO } from "../hooks/useSEO";

const FILTERS = ["All", "FinTech", "Healthcare", "Manufacturing", "Logistics", "Education", "Gaming", "Agritech", "Hospitality"];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.industry === filter);

  useSEO({
    title: "Portfolio — Kodenzo Labs",
    description: "Selected case studies: AI radiology, real-time fintech ledgers, manufacturing ERP, multiplayer games, last-mile logistics OS and more.",
    canonical: "https://kodenzolabs.in/portfolio",
  });

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected work, recently shipped."
        gradientWords={["shipped."]}
        sub="A snapshot of products our teams have built. Detailed case studies available under NDA."
      />

      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl container-px">
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-pill text-sm font-medium transition-colors border ${
                  filter === f
                    ? "bg-ink-900 text-white border-ink-900"
                    : "bg-white border-black/[0.06] text-ink-900 hover:bg-surface-50"
                }`}
                data-testid={`portfolio-filter-${f.toLowerCase()}`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {items.map((p, i) => (
              <motion.div
                key={p.slug}
                {...fadeUp(i * 0.04)}
                className="group rounded-card overflow-hidden border border-black/[0.05] bg-white shadow-premium hover:shadow-[0_20px_60px_-15px_rgba(17,24,39,0.18)] hover:-translate-y-1.5 transition-all duration-500"
                data-testid={`portfolio-${p.slug}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-pill bg-ink-900/85 backdrop-blur text-white text-[11px] uppercase tracking-widest">
                    {p.industry}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-heading text-2xl font-bold text-ink-900">{p.title}</h3>
                  <p className="text-[#6B7280] mt-3 leading-relaxed">{p.overview}</p>
                  <div className="mt-5 grid grid-cols-3 gap-4">
                    {p.metrics.map((m) => (
                      <div key={m.v}>
                        <div className="font-heading text-lg font-extrabold gradient-text">{m.k}</div>
                        <div className="text-[11px] text-[#6B7280] mt-0.5">{m.v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[11px] font-medium text-ink-900/70 bg-surface-100 px-2.5 py-1 rounded-md">{t}</span>
                    ))}
                  </div>
                  <button type="button" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:gap-2.5 transition-all" data-testid={`portfolio-cta-${p.slug}`}>
                    View case study <ArrowUpRight size={15} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {items.length === 0 && (
            <div className="text-center text-[#6B7280] py-20">No projects in this category yet — check back soon.</div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
