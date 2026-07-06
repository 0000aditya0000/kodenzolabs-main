import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";
import PageHero from "../components/sections/PageHero";
import CTASection from "../components/sections/CTASection";
import ProcessTimeline from "../components/sections/ProcessTimeline";
import { Eyebrow, fadeUp } from "../components/sections/Primitives";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { SERVICE_BY_SLUG, SERVICES } from "../data/services";
import { useSEO } from "../hooks/useSEO";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICE_BY_SLUG[slug];

  useSEO({
    title: service ? `${service.title} — Kodenzo Labs` : "Service — Kodenzo Labs",
    description: service?.long,
    keywords: service?.keywords,
    canonical: service ? `https://kodenzolabs.in/services/${service.slug}` : undefined,
    jsonLd: service ? {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.long,
      provider: { "@type": "Organization", name: "Kodenzo Labs" },
    } : undefined,
  });

  if (!service) return <Navigate to="/services" replace />;
  const Icon = service.icon;

  return (
    <>
      <PageHero
        eyebrow={service.title}
        title={service.title}
        gradientWords={service.title.split(" ").slice(-1)}
        sub={service.long}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-teal to-brand-blue text-white px-7 py-4 rounded-pill text-sm font-semibold shadow-glow-teal hover:scale-[1.02] transition-all" data-testid="service-hero-cta">
            Book a Consultation <ArrowRight size={16} />
          </Link>
          <Link to="/portfolio" className="inline-flex items-center gap-2 border border-white/15 bg-white/[0.05] text-white px-7 py-4 rounded-pill text-sm font-semibold hover:bg-white/[0.12] transition-colors">
            See related work
          </Link>
        </div>
      </PageHero>

      {/* Overview / Benefits */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-5">Business benefits</Eyebrow>
            <motion.h2 {...fadeUp()} className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
              Outcomes you can put on a board deck.
            </motion.h2>
            <p className="mt-6 text-[#6B7280] leading-relaxed max-w-md">
              We don&apos;t sell hours. We sell measurable outcomes — faster cycle time, lower TCO, higher retention and audit-ready software.
            </p>
            <div className="mt-10 inline-flex items-center gap-3 p-4 pr-6 rounded-card border border-black/[0.05] bg-surface-50">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-brand-blue text-white grid place-items-center">
                <Icon size={20} />
              </div>
              <div>
                <div className="text-[11px] text-[#6B7280] uppercase tracking-widest">Service</div>
                <div className="font-heading text-lg font-bold text-ink-900">{service.title}</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {service.benefits.map((b, i) => (
              <motion.div key={b.title} {...fadeUp(i * 0.05)} className="p-6 rounded-card border border-black/[0.05] bg-surface-50 hover:bg-white hover:shadow-premium transition-all duration-300">
                <div className="font-heading text-lg font-bold text-ink-900 mb-2">{b.title}</div>
                <p className="text-[#6B7280] text-[14.5px] leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 sm:py-32 bg-surface-100 border-y border-black/[0.04]">
        <div className="mx-auto max-w-7xl container-px">
          <div className="max-w-3xl mb-14">
            <Eyebrow className="mb-5">Features</Eyebrow>
            <motion.h2 {...fadeUp()} className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
              Everything we build inside this practice.
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((f, i) => (
              <motion.div key={f} {...fadeUp(i * 0.03)} className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-black/[0.04]">
                <div className="shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-brand-teal to-brand-blue text-white grid place-items-center">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-ink-900 font-medium text-[15px] leading-snug">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline heading="The way we deliver this service." eyebrow="Process" />

      {/* Tech Stack & Industries */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-2 gap-14">
          <div>
            <Eyebrow className="mb-5">Tech stack</Eyebrow>
            <motion.h3 {...fadeUp()} className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
              The tools we reach for first.
            </motion.h3>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {service.stack.map((t) => (
                <span key={t} className="px-4 py-2 rounded-pill border border-black/[0.06] bg-surface-50 text-ink-900 text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow className="mb-5">Industries we serve</Eyebrow>
            <motion.h3 {...fadeUp()} className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
              Where this practice has shipped.
            </motion.h3>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {service.industries.map((ind) => (
                <Link key={ind} to="/industries" className="flex items-center justify-between px-5 py-4 rounded-2xl bg-surface-50 border border-black/[0.04] hover:bg-white hover:shadow-premium transition-all group">
                  <span className="font-medium text-ink-900">{ind}</span>
                  <ArrowUpRight size={16} className="text-[#6B7280] group-hover:text-brand-blue transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Placeholder */}
      <section className="py-24 sm:py-32 bg-ink-900 relative overflow-hidden">
        <div className="absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full bg-brand-blue/15 blur-[140px]" />
        <div className="absolute -bottom-32 -right-20 w-[420px] h-[420px] rounded-full bg-brand-teal/15 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl container-px">
          <div className="max-w-3xl mb-12">
            <div className="text-white/50 text-xs uppercase tracking-[0.22em] font-semibold mb-5">Case Study</div>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.05]">
              A real <span className="gradient-text">{service.industries[0]}</span> engagement, shipped in {service.industries[0] === "FinTech" ? "5" : "4"} months.
            </h2>
          </div>
          <div className="rounded-card border border-white/10 bg-white/[0.04] p-8 sm:p-12">
            <div className="grid sm:grid-cols-3 gap-8 mb-10">
              {[{ k: "37%", v: "Throughput Increase" }, { k: "4 mo", v: "First Production Release" }, { k: "99.99%", v: "Uptime SLA" }].map((m) => (
                <div key={m.v}>
                  <div className="font-heading text-4xl font-extrabold gradient-text">{m.k}</div>
                  <div className="text-white/55 text-sm mt-2">{m.v}</div>
                </div>
              ))}
            </div>
            <p className="text-white/70 leading-relaxed max-w-3xl">
              We replaced a legacy {service.title.toLowerCase()} stack with an event-driven core,
              cutting cycle time by a third while improving observability and audit posture. Full case
              study available on request under NDA.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-white text-ink-900 px-6 py-3.5 rounded-pill text-sm font-semibold hover:bg-brand-teal transition-colors">
              Request the case study <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-4xl container-px">
          <div className="text-center mb-14">
            <Eyebrow className="mb-5 mx-auto justify-center">FAQ</Eyebrow>
            <motion.h2 {...fadeUp()} className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
              Questions we hear often.
            </motion.h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {service.faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-black/[0.06] bg-surface-50 px-6 data-[state=open]:bg-white data-[state=open]:shadow-premium transition-all">
                <AccordionTrigger className="text-left font-heading text-lg font-semibold text-ink-900 hover:no-underline py-5" data-testid={`faq-trigger-${i}`}>
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7280] leading-relaxed text-[15px] pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Other services */}
      <section className="py-20 bg-surface-100 border-t border-black/[0.04]">
        <div className="mx-auto max-w-7xl container-px">
          <Eyebrow className="mb-5">Explore more</Eyebrow>
          <h3 className="font-heading text-3xl font-extrabold text-ink-900 mb-10">Other services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.filter((s) => s.slug !== service.slug).slice(0, 6).map((s) => {
              const I = s.icon;
              return (
                <Link key={s.slug} to={`/services/${s.slug}`}
                  className="group p-6 rounded-card bg-white border border-black/[0.05] hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-ink-900 text-brand-teal grid place-items-center group-hover:bg-brand-teal group-hover:text-ink-900 transition-colors">
                    <I size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="font-heading text-base font-bold text-ink-900">{s.title}</div>
                  </div>
                  <ArrowUpRight size={16} className="text-[#6B7280] group-hover:text-brand-blue transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection title="Let's scope your project." sub={`Tell us about your ${service.title.toLowerCase()} initiative. We'll respond within 24 hours with a senior engineer and a draft scope.`} />
    </>
  );
}
