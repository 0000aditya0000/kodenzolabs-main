import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  };
}

export function Eyebrow({ children, className = "", dark = false }) {
  return (
    <div className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold ${dark ? "text-white/60" : "text-brand-blue"} ${className}`}>
      <span className={`block w-6 h-px ${dark ? "bg-white/30" : "bg-brand-blue/60"}`} />
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, sub, align = "left", dark = false, gradientWords = [] }) {
  const renderTitle = () => {
    if (!gradientWords?.length) return title;
    let result = title;
    return (
      <>
        {result.split(" ").map((w, i) => {
          const clean = w.replace(/[.,!?]/g, "");
          const isGrad = gradientWords.some((gw) => gw.toLowerCase() === clean.toLowerCase());
          return (
            <React.Fragment key={i}>
              {isGrad ? <span className="gradient-text">{w}</span> : w}{" "}
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow dark={dark} className="mb-5">{eyebrow}</Eyebrow>}
      <motion.h2
        {...fadeUp(0)}
        className={`font-heading text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] text-balance ${dark ? "text-white" : "text-ink-900"}`}
      >
        {renderTitle()}
      </motion.h2>
      {sub && (
        <motion.p
          {...fadeUp(0.1)}
          className={`mt-5 text-base sm:text-lg leading-relaxed text-pretty ${dark ? "text-white/60" : "text-[#6B7280]"} ${align === "center" ? "mx-auto" : ""} max-w-2xl`}
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}

export function AnimatedCounter({ to, suffix = "", duration = 1.6, decimals = 0, prefix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const target = parseFloat(to);
    const tick = (now) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const format = (n) => {
    if (decimals > 0) return n.toFixed(decimals);
    return Math.round(n).toLocaleString();
  };

  return <span ref={ref}>{prefix}{format(val)}{suffix}</span>;
}
