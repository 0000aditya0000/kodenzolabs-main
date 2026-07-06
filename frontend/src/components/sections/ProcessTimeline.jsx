import React from "react";
import { motion } from "framer-motion";
import { PROCESS } from "../../data/process";
import { Eyebrow } from "./Primitives";

export default function ProcessTimeline({ heading = "From whiteboard to production, deliberately.", eyebrow = "How we work" }) {
  return (
    <section className="relative py-24 sm:py-32 bg-white" data-testid="process-timeline">
      <div className="mx-auto max-w-7xl container-px">
        <div className="max-w-3xl mb-16">
          <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] text-ink-900"
          >
            {heading}
          </motion.h2>
        </div>

        <ol className="relative border-l-2 border-dashed border-ink-900/10 pl-8 lg:pl-12 space-y-12">
          {PROCESS.map((step, i) => (
            <motion.li
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
              data-testid={`process-step-${step.id}`}
            >
              <span className="absolute -left-[42px] lg:-left-[58px] top-1 w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-blue text-white grid place-items-center font-heading font-bold shadow-glow-teal">
                {String(step.id).padStart(2, "0")}
              </span>
              <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-2 mb-3">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold tracking-tight text-ink-900">{step.name}</h3>
                <span className="text-xs uppercase tracking-[0.18em] text-[#6B7280] font-semibold">{step.duration}</span>
              </div>
              <p className="text-[#6B7280] leading-relaxed max-w-2xl">{step.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
