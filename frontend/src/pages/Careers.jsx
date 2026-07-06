import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Briefcase } from "lucide-react";
import PageHero from "../components/sections/PageHero";
import { Eyebrow, fadeUp } from "../components/sections/Primitives";
import { OPEN_POSITIONS, BENEFITS, CULTURE_VALUES } from "../data/careers";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useSEO } from "../hooks/useSEO";
import { toast } from "sonner";

export default function CareersPage() {
  const [form, setForm] = useState({ name: "", email: "", role: "", message: "" });

  useSEO({
    title: "Careers — Kodenzo Labs",
    description: "Join Kodenzo Labs. Open roles across AI, platform, web, mobile, design and data operations. Remote-first, equity-positive, learning-funded.",
    canonical: "https://kodenzolabs.in/careers",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) {
      toast.error("Please fill in name, email and role.");
      return;
    }
    toast.success("Application received. We'll be in touch within five business days.");
    setForm({ name: "", email: "", role: "", message: "" });
  };

  return (
    <>
      <PageHero
        eyebrow="Careers · We're hiring"
        title="Join the revolution. Build software people trust."
        gradientWords={["revolution.", "trust."]}
        sub="We hire senior, pay fairly, ship constantly. If you love engineering craft and care about outcomes, we&apos;d love to talk."
      />

      {/* Benefits */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl container-px">
          <div className="max-w-3xl mb-14">
            <Eyebrow className="mb-5">Benefits</Eyebrow>
            <motion.h2 {...fadeUp()} className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
              Built for engineers who do their best work.
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b, i) => (
              <motion.div key={b.title} {...fadeUp(i * 0.04)} className="p-7 rounded-card border border-black/[0.05] bg-surface-50">
                <div className="font-heading text-lg font-bold text-ink-900">{b.title}</div>
                <p className="mt-3 text-[#6B7280] leading-relaxed text-[14.5px]">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 sm:py-32 bg-surface-100 border-y border-black/[0.04]">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-2 gap-12">
          <div>
            <Eyebrow className="mb-5">Culture</Eyebrow>
            <motion.h2 {...fadeUp()} className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
              How we work, written down.
            </motion.h2>
            <p className="mt-6 text-[#6B7280] leading-relaxed max-w-md">
              We are a small studio of senior engineers. We optimize for autonomy, taste and follow-through.
              We don&apos;t grow for growth&apos;s sake — we grow only when great people want to join.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {CULTURE_VALUES.map((v, i) => (
              <motion.div key={v.title} {...fadeUp(i * 0.05)} className="p-6 rounded-card bg-white border border-black/[0.05]">
                <div className="font-heading text-lg font-bold text-ink-900">{v.title}</div>
                <p className="text-[14px] text-[#6B7280] leading-relaxed mt-2">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl container-px">
          <div className="max-w-3xl mb-12">
            <Eyebrow className="mb-5">Open positions</Eyebrow>
            <motion.h2 {...fadeUp()} className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
              Roles open right now.
            </motion.h2>
          </div>
          <div className="space-y-3">
            {OPEN_POSITIONS.map((p, i) => (
              <motion.button key={p.title} {...fadeUp(i * 0.03)}
                onClick={() => setForm((f) => ({ ...f, role: p.title }))}
                className="group w-full text-left flex flex-col md:flex-row md:items-center justify-between gap-3 p-6 rounded-card border border-black/[0.05] bg-surface-50 hover:bg-white hover:shadow-premium transition-all"
                data-testid={`open-role-${i}`}>
                <div>
                  <div className="font-heading text-lg font-bold text-ink-900">{p.title}</div>
                  <div className="mt-1.5 flex items-center flex-wrap gap-x-4 gap-y-1 text-[13px] text-[#6B7280]">
                    <span className="inline-flex items-center gap-1.5"><MapPin size={12}/> {p.location}</span>
                    <span className="inline-flex items-center gap-1.5"><Briefcase size={12}/> {p.team}</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-brand-teal/10 text-brand-tealDark text-[11px] font-medium">{p.type}</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:gap-2.5 transition-all">
                  Apply <ArrowUpRight size={15} />
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="py-24 sm:py-32 bg-surface-100">
        <div className="mx-auto max-w-3xl container-px">
          <div className="text-center mb-10">
            <Eyebrow className="mb-5 mx-auto justify-center">Apply</Eyebrow>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
              Start a conversation.
            </h2>
            <p className="text-[#6B7280] mt-4">Don&apos;t see your role? Send us a note anyway — we hire generalists.</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white rounded-card border border-black/[0.05] shadow-premium p-8 sm:p-10 space-y-5" data-testid="careers-form">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-[#6B7280] font-semibold">Name</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe" className="mt-2 h-12 rounded-xl" data-testid="careers-name" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-[#6B7280] font-semibold">Email</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com" className="mt-2 h-12 rounded-xl" data-testid="careers-email" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-[#6B7280] font-semibold">Role</label>
              <Input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}
                placeholder="e.g. Senior AI Engineer" className="mt-2 h-12 rounded-xl" data-testid="careers-role" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-[#6B7280] font-semibold">Tell us about yourself</label>
              <Textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="A short note + a link to recent work (GitHub, portfolio, papers)." className="mt-2 rounded-xl" data-testid="careers-message" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-teal to-brand-blue text-white px-7 py-4 rounded-pill text-sm font-semibold shadow-glow-teal hover:scale-[1.01] transition-all" data-testid="careers-submit">
              Send application <ArrowUpRight size={16} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
