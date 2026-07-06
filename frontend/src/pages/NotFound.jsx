import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";
import { DarkHeroBackdrop } from "../components/illustrations/HeroIllustration";
import { useSEO } from "../hooks/useSEO";

export default function NotFoundPage() {
  useSEO({
    title: "404 — Kodenzo Labs",
    description: "The page you're looking for doesn't exist or has moved.",
  });

  return (
    <section className="relative min-h-screen bg-ink-900 text-white grid place-items-center overflow-hidden" data-testid="not-found-page">
      <DarkHeroBackdrop />
      <div className="relative text-center container-px max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-white/10 bg-white/[0.04] text-[11px] uppercase tracking-[0.22em] text-white/70 mb-8">
          <Compass size={12} className="text-brand-teal" /> Lost in the cloud
        </div>
        <h1 className="font-heading text-[120px] sm:text-[180px] font-extrabold tracking-tighter leading-none gradient-text">
          404
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-white/75 font-medium">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <p className="mt-3 text-white/55">
          It may have moved, or you may have followed a broken link. Either way — let&apos;s get you back on course.
        </p>
        <Link to="/" className="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-brand-teal to-brand-blue text-white px-7 py-4 rounded-pill text-sm font-semibold shadow-glow-teal hover:scale-[1.02] transition-all" data-testid="404-home-link">
          <ArrowLeft size={16} /> Back to homepage
        </Link>
      </div>
    </section>
  );
}
