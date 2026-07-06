import React from "react";
import PageHero from "../components/sections/PageHero";
import { useSEO } from "../hooks/useSEO";

export default function TermsPage() {
  useSEO({
    title: "Terms & Conditions — Kodenzo Labs",
    description: "Terms governing your use of Kodenzo Labs' website and services.",
    canonical: "https://kodenzolabs.in/terms",
  });

  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions." gradientWords={["Conditions."]}
        sub="The rules that govern your use of our website and services. Plain language, no fine print games." />

      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-3xl container-px prose prose-neutral max-w-none text-[#374151] leading-relaxed">
          <h2 className="font-heading text-2xl font-bold text-ink-900 mt-0">1. Acceptance of terms</h2>
          <p>By accessing kodenzolabs.in you agree to these terms. If you disagree, please do not use the website.</p>

          <h2 className="font-heading text-2xl font-bold text-ink-900 mt-10">2. Services</h2>
          <p>Kodenzo Labs provides software engineering, design and AI consulting services. Specific engagements are governed by a separate Master Services Agreement (MSA) and Statement of Work (SOW).</p>

          <h2 className="font-heading text-2xl font-bold text-ink-900 mt-10">3. Intellectual property</h2>
          <p>All website content (text, code samples, illustrations) is © Kodenzo Labs unless otherwise noted. Client deliverables under an SOW are transferred to the client per the MSA.</p>

          <h2 className="font-heading text-2xl font-bold text-ink-900 mt-10">4. Acceptable use</h2>
          <p>You agree not to misuse the site — no scraping at scale, no attempted intrusion, no unlawful conduct.</p>

          <h2 className="font-heading text-2xl font-bold text-ink-900 mt-10">5. Disclaimers</h2>
          <p>The website is provided &ldquo;as is.&rdquo; We make no warranties about uptime or fitness for a particular purpose for the public website. Engagement-level SLAs are set in the MSA.</p>

          <h2 className="font-heading text-2xl font-bold text-ink-900 mt-10">6. Liability</h2>
          <p>To the maximum extent permitted by law, Kodenzo Labs is not liable for indirect or consequential losses arising from website use.</p>

          <h2 className="font-heading text-2xl font-bold text-ink-900 mt-10">7. Governing law</h2>
          <p>These terms are governed by the laws of India. Disputes will be resolved in the courts of New Delhi.</p>

          <h2 className="font-heading text-2xl font-bold text-ink-900 mt-10">8. Changes</h2>
          <p>We may update these terms. Material changes will be announced on this page.</p>
        </div>
      </section>
    </>
  );
}
