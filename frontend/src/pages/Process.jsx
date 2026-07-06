import React from "react";
import PageHero from "../components/sections/PageHero";
import ProcessTimeline from "../components/sections/ProcessTimeline";
import CTASection from "../components/sections/CTASection";
import { useSEO } from "../hooks/useSEO";

export default function ProcessPage() {
  useSEO({
    title: "Our Process — Kodenzo Labs",
    description: "Discovery, Planning, UI/UX, Development, Testing, Deployment and Support. The seven-step engineering process Kodenzo Labs uses for every engagement.",
    canonical: "https://kodenzolabs.in/process",
  });

  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="How we deliver excellence, deliberately."
        gradientWords={["excellence,"]}
        sub="Seven disciplined steps from idea to operating system — each with clear owners, deliverables and exit criteria."
      />
      <ProcessTimeline heading="The Kodenzo delivery method." eyebrow="Seven steps" />
      <CTASection />
    </>
  );
}
