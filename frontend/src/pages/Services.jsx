import React from "react";
import PageHero from "../components/sections/PageHero";
import ServicesBento from "../components/sections/ServicesBento";
import CTASection from "../components/sections/CTASection";
import TechMarquee from "../components/sections/TechMarquee";
import ProcessTimeline from "../components/sections/ProcessTimeline";
import { useSEO } from "../hooks/useSEO";

export default function ServicesPage() {
  useSEO({
    title: "Services — Kodenzo Labs",
    description:
      "Enterprise software, web, mobile, AI, data annotation, game and custom software development services for startups and Fortune 500 teams.",
    canonical: "https://kodenzolabs.in/services",
  });

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Enterprise-grade capabilities, end to end."
        gradientWords={["Enterprise-grade", "end"]}
        sub="From the first product spec to 24/7 support — one team, one set of standards, every engineering discipline you need under one roof."
      />
      <ServicesBento />
      <ProcessTimeline />
      <TechMarquee dark={false} />
      <CTASection />
    </>
  );
}
