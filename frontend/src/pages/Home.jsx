import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Zap, Award, ArrowUpRight } from "lucide-react";
import { HeroIllustration, DarkHeroBackdrop } from "../components/illustrations/HeroIllustration";
import ServicesBento from "../components/sections/ServicesBento";
import TechMarquee from "../components/sections/TechMarquee";
import ProcessTimeline from "../components/sections/ProcessTimeline";
import CTASection from "../components/sections/CTASection";
import { Eyebrow, AnimatedCounter, fadeUp } from "../components/sections/Primitives";
import { COMPANY } from "../data/company";
import { WHY_US } from "../data/process";
import { PORTFOLIO } from "../data/portfolio";
import { useSEO } from "../hooks/useSEO";

export default function HomePage() {
  useSEO({
    title: "Kodenzo Labs — Building Future-Ready Software Powered by AI",
    description:
      "Kodenzo Labs is a modern AI and software engineering company building enterprise-grade web, mobile, AI, data annotation and custom software for startups, SMEs and Fortune 500 clients.",
    keywords: "AI software development, enterprise software, web development, mobile apps, AI services, data annotation, game development, custom software, Kodenzo Labs",
    canonical: "https://kodenzolabs.in/",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Kodenzo Labs",
      url: "https://kodenzolabs.in/",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://kodenzolabs.in/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  });

  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink-900 text-white pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden" data-testid="home-hero">
        <DarkHeroBackdrop />
        <div className="relative mx-auto max-w-7xl container-px grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-white/10 bg-white/[0.04] text-[11px] uppercase tracking-[0.22em] text-white/70 mb-7"
              data-testid="hero-badge"
            >
              <Sparkles size={12} className="text-brand-teal" />
              AI-First Engineering · Since {COMPANY.founded}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.97] text-balance"
              data-testid="hero-title"
            >
              Building <span className="gradient-text">Future-Ready</span> Software
              <br className="hidden sm:block" />
              Powered by <span className="gradient-text">AI.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 text-lg sm:text-xl text-white/65 leading-relaxed max-w-xl text-pretty"
              data-testid="hero-sub"
            >
              We help startups and enterprises ship scalable web applications, mobile apps,
              AI products and enterprise platforms — engineered to outlast trends.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-teal to-brand-blue text-white px-7 py-4 rounded-pill text-sm font-semibold shadow-glow-teal hover:scale-[1.02] transition-all"
                data-testid="hero-cta-primary"
              >
                Book a Consultation <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-white/15 bg-white/[0.05] text-white px-7 py-4 rounded-pill text-sm font-semibold hover:bg-white/[0.12] transition-colors"
                data-testid="hero-cta-secondary"
              >
                Explore Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-md"
            >
              {COMPANY.stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white">{s.value}</div>
                  <div className="text-[11px] text-white/45 uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </section>

      <TechMarquee dark />

      {/* INTRODUCTION */}
      <section className="relative py-24 sm:py-32" data-testid="home-intro">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-5">Kodenzo Labs</Eyebrow>
            <motion.h2 {...fadeUp()} className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
              A modern engineering company for the <span className="gradient-text">AI era.</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-[#374151] leading-relaxed text-[17px]">
            <motion.p {...fadeUp(0.05)}>
              Kodenzo Labs is a software engineering company built for the products of the next decade —
              AI-native, deeply integrated, and engineered to operate at scale. We partner with founders,
              product teams and enterprise CIOs to take big bets from concept to production.
            </motion.p>
            <motion.p {...fadeUp(0.12)}>
              Our work spans <strong className="text-ink-900">digital transformation</strong> for incumbents,
              <strong className="text-ink-900"> AI platforms</strong> for innovators, and{" "}
              <strong className="text-ink-900">enterprise systems</strong> for organizations that cannot afford
              to ship slow or break twice.
            </motion.p>
            <motion.div {...fadeUp(0.2)} className="pt-4 flex flex-wrap gap-3">
              {[
                { icon: Award, label: "Engineering Excellence" },
                { icon: Shield, label: "Enterprise Security" },
                { icon: Zap, label: "Fast Delivery" },
                { icon: Sparkles, label: "AI Native" },
              ].map(({ icon: I, label }) => (
                <span key={label} className="inline-flex items-center gap-2 px-4 py-2 rounded-pill border border-black/5 bg-white text-sm font-medium text-ink-900 shadow-premium">
                  <I size={14} className="text-brand-blue" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white border-y border-black/[0.04]" data-testid="home-stats">
        <div className="mx-auto max-w-7xl container-px grid grid-cols-2 md:grid-cols-4 gap-8">
          {COMPANY.stats.map((s, i) => {
            const num = parseFloat(String(s.value).replace(/[^\d.]/g, "")) || 0;
            const suffix = String(s.value).replace(/[\d.]/g, "");
            return (
              <motion.div key={s.label} {...fadeUp(i * 0.05)} className="text-center md:text-left">
                <div className="font-heading text-4xl sm:text-5xl font-extrabold text-ink-900 tracking-tight">
                  <AnimatedCounter to={num} suffix={suffix} />
                </div>
                <div className="text-[#6B7280] text-sm mt-2">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <ServicesBento />

      {/* WHY US */}
      <section className="relative py-24 sm:py-32 bg-white" data-testid="why-us-section">
        <div className="mx-auto max-w-7xl container-px">
          <div className="max-w-3xl mb-14">
            <Eyebrow className="mb-5">Why Kodenzo Labs</Eyebrow>
            <motion.h2 {...fadeUp()} className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
              The kind of partner you keep on speed dial.
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US.map((w, i) => (
              <motion.div
                key={w.title}
                {...fadeUp(i * 0.04)}
                className="group p-7 rounded-card border border-black/[0.05] bg-surface-50 hover:bg-white hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
                data-testid={`why-card-${i}`}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-teal to-brand-blue mb-5 grid place-items-center text-white font-heading font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-heading text-lg font-bold text-ink-900 mb-2">{w.title}</h3>
                <p className="text-[14.5px] text-[#6B7280] leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />

      {/* PORTFOLIO PREVIEW */}
      <section className="relative py-24 sm:py-32" data-testid="home-portfolio">
        <div className="mx-auto max-w-7xl container-px">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <Eyebrow className="mb-5">Selected Work</Eyebrow>
              <motion.h2 {...fadeUp()} className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
                Products live in the hands of <span className="gradient-text">real users.</span>
              </motion.h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:gap-3 transition-all">
              See all work <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PORTFOLIO.slice(0, 4).map((p, i) => (
              <motion.div
                key={p.slug}
                {...fadeUp(i * 0.05)}
                className="group relative rounded-card overflow-hidden border border-black/[0.05] bg-white shadow-premium hover:shadow-[0_20px_60px_-15px_rgba(17,24,39,0.18)] hover:-translate-y-1.5 transition-all duration-500"
                data-testid={`portfolio-card-${p.slug}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-pill bg-ink-900/80 backdrop-blur text-white text-[11px] uppercase tracking-widest">
                    {p.industry}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-heading text-xl font-bold text-ink-900">{p.title}</h3>
                  <p className="text-[#6B7280] mt-2 leading-relaxed line-clamp-2">{p.overview}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="text-[11px] font-medium text-ink-900/70 bg-surface-100 px-2.5 py-1 rounded-md">{t}</span>
                    ))}
                  </div>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:gap-2.5 transition-all">
                    Read case study <ArrowUpRight size={15} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
