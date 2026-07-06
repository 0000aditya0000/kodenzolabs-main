import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PageHero from "../components/sections/PageHero";
import CTASection from "../components/sections/CTASection";
import { Eyebrow, fadeUp } from "../components/sections/Primitives";
import { INDUSTRIES } from "../data/industries";
import { useSEO } from "../hooks/useSEO";
import { Link } from "react-router-dom";

export default function IndustriesPage() {
  useSEO({
    title: "Industries — Kodenzo Labs",
    description: "We build software for Healthcare, FinTech, Education, Retail, Manufacturing, Logistics, Travel, Hospitality, Real Estate, Automotive, Government and Transportation.",
    canonical: "https://kodenzolabs.in/industries",
  });

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Transforming every sector we touch."
        gradientWords={["sector"]}
        sub="Deep domain context across 12 industries. Compliance-aware, integration-friendly, outcome-obsessed."
      />
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl container-px">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.name}
                  {...fadeUp(i * 0.04)}
                  className="group p-7 rounded-card border border-black/[0.05] bg-surface-50 hover:bg-white hover:shadow-premium hover:-translate-y-1.5 transition-all duration-500"
                  data-testid={`industry-card-${ind.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-ink-900 text-brand-teal grid place-items-center group-hover:bg-brand-teal group-hover:text-ink-900 transition-colors mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-ink-900">{ind.name}</h3>
                  <p className="mt-3 text-[#6B7280] leading-relaxed text-[14.5px]">{ind.desc}</p>
                  <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:gap-2.5 transition-all">
                    Talk to us <ArrowUpRight size={15} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <CTASection title="Don't see your industry?" sub="We've shipped software for many more sectors than fit on one page. Tell us about yours." />
    </>
  );
}
