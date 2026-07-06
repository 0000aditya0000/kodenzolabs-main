import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/sections/PageHero";
import { Eyebrow, AnimatedCounter, fadeUp } from "../components/sections/Primitives";
import { COMPANY } from "../data/company";
import { CULTURE_VALUES } from "../data/careers";
import CTASection from "../components/sections/CTASection";
import TechMarquee from "../components/sections/TechMarquee";
import { useSEO } from "../hooks/useSEO";

export default function AboutPage() {
  useSEO({
    title: "About — Kodenzo Labs",
    description: "Meet the engineers, designers and AI researchers behind Kodenzo Labs. Our story, mission, leadership and the values that ship software people trust.",
    canonical: "https://kodenzolabs.in/about",
  });

  return (
    <>
      <PageHero
        eyebrow="About Kodenzo Labs"
        title="The minds behind the machines."
        gradientWords={["minds", "machines."]}
        sub="We are 180+ engineers, designers and AI researchers who care about the kind of software that quietly carries businesses forward."
      />

      {/* Story */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-5">Our story</Eyebrow>
            <motion.h2 {...fadeUp()} className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] text-ink-900">
              Founded by engineers who got tired of <span className="gradient-text">shipping slowly.</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-[#374151] leading-relaxed text-[17px]">
            <motion.p {...fadeUp(0.05)}>
              Kodenzo Labs was founded in {COMPANY.founded} by senior engineers who had spent years inside large
              companies watching brilliant ideas die in committee. We started Kodenzo to build the
              opposite: a small, sharp team that takes ownership end-to-end and ships software that
              measurably improves businesses.
            </motion.p>
            <motion.p {...fadeUp(0.12)}>
              Five years later, we run a 180-person studio headquartered in New Delhi with remote teams in 14 countries.
              We&apos;ve shipped 240+ products into production, including AI platforms regulated under HIPAA and FDA,
              real-time financial ledgers and large-scale annotation operations.
            </motion.p>
            <motion.p {...fadeUp(0.18)}>
              We are deliberately senior. We charge fairly. We say no to projects we can&apos;t excel at. And we
              partner with companies that share our taste for substance over noise.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-surface-100 border-y border-black/5">
        <div className="mx-auto max-w-7xl container-px grid grid-cols-2 md:grid-cols-4 gap-8">
          {COMPANY.stats.map((s, i) => {
            const num = parseFloat(String(s.value).replace(/[^\d.]/g, "")) || 0;
            const suffix = String(s.value).replace(/[\d.]/g, "");
            return (
              <motion.div key={s.label} {...fadeUp(i * 0.05)} className="text-center md:text-left">
                <div className="font-heading text-5xl font-extrabold text-ink-900 tracking-tight">
                  <AnimatedCounter to={num} suffix={suffix} />
                </div>
                <div className="text-[#6B7280] text-sm mt-2">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl container-px">
          <div className="max-w-3xl mb-14">
            <Eyebrow className="mb-5">What we believe</Eyebrow>
            <motion.h2 {...fadeUp()} className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
              Four values, written down and lived.
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {CULTURE_VALUES.map((v, i) => (
              <motion.div key={v.title} {...fadeUp(i * 0.05)}
                className="p-8 rounded-card border border-black/[0.05] bg-white shadow-premium">
                <div className="font-heading text-2xl font-bold text-ink-900 mb-3">{v.title}</div>
                <p className="text-[#6B7280] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl container-px">
          <div className="max-w-3xl mb-14">
            <Eyebrow className="mb-5">Leadership</Eyebrow>
            <motion.h2 {...fadeUp()} className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
              The team you&apos;ll actually work with.
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY.leadership.map((p, i) => (
              <motion.div key={p.name} {...fadeUp(i * 0.06)}
                className="group rounded-card overflow-hidden border border-black/[0.05] bg-surface-50 hover:shadow-premium hover:-translate-y-1 transition-all duration-500"
                data-testid={`leader-${i}`}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                </div>
                <div className="p-6">
                  <div className="font-heading text-lg font-bold text-ink-900">{p.name}</div>
                  <div className="text-brand-blue text-xs uppercase tracking-widest font-semibold mt-1">{p.role}</div>
                  <p className="text-[14px] text-[#6B7280] leading-relaxed mt-3">{p.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TechMarquee dark={false} />

      <CTASection
        title="Want to build with us?"
        sub="We pick our partners carefully. If our values match yours, we'd love to hear about your roadmap."
      />
    </>
  );
}
