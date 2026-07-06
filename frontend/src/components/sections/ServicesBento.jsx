import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SERVICES, EXTENDED_SERVICES } from "../../data/services";
import { Eyebrow } from "./Primitives";

function ServiceCard({ icon: Icon, title, short, slug, large = false, gradient = false }) {
  const content = (
    <>
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 rounded-full blur-3xl group-hover:from-brand-teal/20 group-hover:to-brand-blue/20 transition-all duration-500 pointer-events-none" />
      <div className="relative flex flex-col h-full">
        <div className={`w-12 h-12 rounded-2xl grid place-items-center mb-6 transition-all duration-300 group-hover:scale-110 ${gradient ? "bg-gradient-to-br from-brand-teal to-brand-blue text-white" : "bg-ink-900 text-brand-teal group-hover:bg-brand-teal group-hover:text-ink-900"}`}>
          <Icon size={22} strokeWidth={1.8} />
        </div>
        <h3 className={`font-heading text-xl font-bold tracking-tight ${large ? "text-2xl" : ""} text-ink-900`}>{title}</h3>
        <p className="text-[15px] text-[#6B7280] leading-relaxed mt-3 flex-1">{short}</p>
        {slug && (
          <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:gap-2.5 transition-all">
            Explore <ArrowUpRight size={15} />
          </div>
        )}
      </div>
    </>
  );

  const cls = `group relative bg-white rounded-card border border-black/[0.05] p-7 lg:p-8 shadow-premium hover:shadow-[0_20px_60px_-15px_rgba(17,24,39,0.15)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden ${large ? "lg:col-span-2 lg:row-span-2" : ""}`;

  if (!slug) return <div className={cls} data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, "-")}`}>{content}</div>;
  return (
    <Link to={`/services/${slug}`} className={cls} data-testid={`service-card-${slug}`}>
      {content}
    </Link>
  );
}

export default function ServicesBento({ compact = false }) {
  const list = compact ? SERVICES.slice(0, 6) : SERVICES;

  return (
    <section className="relative py-24 sm:py-32" data-testid="services-bento">
      <div className="mx-auto max-w-7xl container-px">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <Eyebrow className="mb-5">What we do</Eyebrow>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] text-ink-900"
            >
              A complete <span className="gradient-text">engineering partner</span> — from idea to operating system.
            </motion.h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:gap-3 transition-all" data-testid="services-bento-view-all">
            View all services <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {list.map((s, i) => (
            <ServiceCard
              key={s.slug}
              icon={s.icon}
              title={s.title}
              short={s.short}
              slug={s.slug}
              large={i === 0 && !compact}
              gradient={i === 0 && !compact}
            />
          ))}
          {!compact && EXTENDED_SERVICES.map((s) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} short={s.short} />
          ))}
        </div>
      </div>
    </section>
  );
}
