import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight, MessageSquare, Calendar, Linkedin, Twitter, Instagram } from "lucide-react";
import PageHero from "../components/sections/PageHero";
import { Eyebrow, fadeUp } from "../components/sections/Primitives";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { COMPANY } from "../data/company";
import { SERVICES } from "../data/services";
import { useSEO } from "../hooks/useSEO";
import { toast } from "sonner";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", budget: "", message: "" });

  useSEO({
    title: "Contact — Kodenzo Labs",
    description: "Talk to Kodenzo Labs. Book a consultation, request a proposal or partner with our engineering teams. We respond within 24 hours.",
    canonical: "https://kodenzolabs.in/contact",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill name, email and message.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Message received. A senior engineer will reach out within 24 hours.");
    setForm({ name: "", email: "", company: "", service: "", budget: "", message: "" });
  };

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's talk. We pick up fast."
        gradientWords={["fast."]}
        sub="Tell us about your product. A senior engineering lead — not a sales rep — will respond within 24 hours."
      />

      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div {...fadeUp()} className="lg:col-span-3 bg-white rounded-card border border-black/[0.05] shadow-premium p-8 sm:p-12">
            <Eyebrow className="mb-3">Project brief</Eyebrow>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-900">Send us a note</h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5" data-testid="contact-form">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#6B7280] font-semibold">Full name</label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe" className="mt-2 h-12 rounded-xl" data-testid="contact-name" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#6B7280] font-semibold">Work email</label>
                  <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com" className="mt-2 h-12 rounded-xl" data-testid="contact-email" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#6B7280] font-semibold">Company</label>
                  <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme Inc." className="mt-2 h-12 rounded-xl" data-testid="contact-company" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#6B7280] font-semibold">Service</label>
                  <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                    <SelectTrigger className="mt-2 h-12 rounded-xl" data-testid="contact-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((s) => (
                        <SelectItem key={s.slug} value={s.slug}>{s.title}</SelectItem>
                      ))}
                      <SelectItem value="other">Other / Not sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-[#6B7280] font-semibold">Estimated budget</label>
                <Select value={form.budget} onValueChange={(v) => setForm({ ...form, budget: v })}>
                  <SelectTrigger className="mt-2 h-12 rounded-xl" data-testid="contact-budget">
                    <SelectValue placeholder="Select a range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lt-25k">&lt; $25K</SelectItem>
                    <SelectItem value="25-50k">$25K – $50K</SelectItem>
                    <SelectItem value="50-100k">$50K – $100K</SelectItem>
                    <SelectItem value="100-250k">$100K – $250K</SelectItem>
                    <SelectItem value="gt-250k">$250K+</SelectItem>
                    <SelectItem value="exploring">Just exploring</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-[#6B7280] font-semibold">Tell us about your project</label>
                <Textarea rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What are you building, who is it for, and what's your target timeline?" className="mt-2 rounded-xl" data-testid="contact-message" />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-teal to-brand-blue text-white px-7 py-4 rounded-pill text-sm font-semibold shadow-glow-teal hover:scale-[1.01] transition-all" data-testid="contact-submit">
                Send message <ArrowRight size={16} />
              </button>
              <p className="text-[12px] text-[#6B7280] text-center">By submitting, you agree to our Privacy Policy. We don&apos;t sell or share your data — ever.</p>
            </form>
          </motion.div>

          {/* Info / Sidebar */}
          <motion.aside {...fadeUp(0.1)} className="lg:col-span-2 space-y-5">
            <div className="rounded-card bg-ink-900 text-white p-8 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-brand-teal/20 blur-[100px]" />
              <div className="relative">
                <div className="text-white/50 text-xs uppercase tracking-widest font-semibold">Direct line</div>
                <h3 className="font-heading text-2xl font-bold mt-3">Talk to a human.</h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-white/85 hover:text-brand-teal transition-colors">
                      <span className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center"><Mail size={16}/></span>
                      <span className="text-sm">{COMPANY.email}</span>
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-white/85 hover:text-brand-teal transition-colors">
                      <span className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center"><Phone size={16}/></span>
                      <span className="text-sm">{COMPANY.phone}</span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-white/70">
                    <span className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center shrink-0"><MapPin size={16}/></span>
                    <span className="text-sm leading-relaxed">{COMPANY.address}</span>
                  </li>
                </ul>
                <div className="mt-7 flex items-center gap-2">
                  <a href={COMPANY.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 grid place-items-center rounded-full border border-white/10 bg-white/[0.04] hover:bg-brand-teal hover:text-ink-900 transition-all"><Linkedin size={16}/></a>
                  <a href={COMPANY.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="w-10 h-10 grid place-items-center rounded-full border border-white/10 bg-white/[0.04] hover:bg-brand-teal hover:text-ink-900 transition-all"><Twitter size={16}/></a>
                  <a href={COMPANY.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 grid place-items-center rounded-full border border-white/10 bg-white/[0.04] hover:bg-brand-teal hover:text-ink-900 transition-all"><Instagram size={16}/></a>
                </div>
              </div>
            </div>

            <div className="rounded-card border border-black/[0.05] bg-surface-50 p-7">
              <div className="font-heading text-lg font-bold text-ink-900 flex items-center gap-2">
                <MessageSquare size={18} className="text-brand-blue" /> What happens next
              </div>
              <ol className="mt-5 space-y-3 text-sm text-[#374151]">
                <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-md bg-brand-blue text-white text-[11px] font-bold grid place-items-center">1</span> We read every message ourselves.</li>
                <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-md bg-brand-blue text-white text-[11px] font-bold grid place-items-center">2</span> A senior engineer replies within 24 hours.</li>
                <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-md bg-brand-blue text-white text-[11px] font-bold grid place-items-center">3</span> We scope a 30-minute discovery call.</li>
                <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-md bg-brand-blue text-white text-[11px] font-bold grid place-items-center">4</span> You get a written proposal in five business days.</li>
              </ol>
            </div>

            <div className="rounded-card overflow-hidden border border-black/[0.05] bg-white">
              <div className="aspect-[16/10] relative bg-surface-50">
                {/* Map placeholder: styled SVG */}
                <svg viewBox="0 0 600 360" className="w-full h-full">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M40 0H0V40" fill="none" stroke="#E5E7EB" strokeWidth="0.6" />
                    </pattern>
                    <radialGradient id="pin" cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0%" stopColor="#35b7a1" />
                      <stop offset="100%" stopColor="#335EEA" />
                    </radialGradient>
                  </defs>
                  <rect width="600" height="360" fill="#F8FAFC" />
                  <rect width="600" height="360" fill="url(#grid)" />
                  <path d="M40 240 C 140 200, 220 260, 340 220 S 540 170, 600 200" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeDasharray="6 6" />
                  <circle cx="380" cy="180" r="40" fill="url(#pin)" opacity="0.18" />
                  <circle cx="380" cy="180" r="20" fill="url(#pin)" opacity="0.32" />
                  <circle cx="380" cy="180" r="9" fill="url(#pin)" />
                  <text x="380" y="220" textAnchor="middle" fontFamily="Geist, sans-serif" fontSize="11" fill="#111827" fontWeight="600">New Delhi · HQ</text>
                </svg>
              </div>
              <div className="p-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <Calendar size={14} className="text-brand-blue" />
                  Mon–Fri · 09:30 – 19:00 IST
                </div>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-sm font-semibold text-brand-blue inline-flex items-center gap-1.5">Directions <ArrowRight size={14} /></a>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  );
}
