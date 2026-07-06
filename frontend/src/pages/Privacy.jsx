import React from "react";
import PageHero from "../components/sections/PageHero";
import { useSEO } from "../hooks/useSEO";

export default function PrivacyPage() {
  useSEO({
    title: "Privacy Policy — Kodenzo Labs",
    description: "How Kodenzo Labs collects, uses and safeguards your information.",
    canonical: "https://kodenzolabs.in/privacy-policy",
  });

  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy." gradientWords={["Policy."]}
        sub="Last updated December 2025. We respect your privacy and treat your data the way we'd want ours treated." />

      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-3xl container-px prose prose-neutral max-w-none text-[#374151] leading-relaxed">
          <h2 className="font-heading text-2xl font-bold text-ink-900 mt-0">1. Information we collect</h2>
          <p>We collect information you provide when you contact us, apply for a role or subscribe to our newsletter — typically name, email, company and the message you send. We also collect standard server logs and anonymous analytics to improve our website.</p>

          <h2 className="font-heading text-2xl font-bold text-ink-900 mt-10">2. How we use it</h2>
          <ul>
            <li>To respond to inquiries and proposals.</li>
            <li>To process and evaluate job applications.</li>
            <li>To send the newsletter you subscribed to (one-click unsubscribe in every email).</li>
            <li>To improve product, marketing and analytics — always in aggregate.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-ink-900 mt-10">3. Data sharing</h2>
          <p>We do not sell or rent your data. We share it only with trusted infrastructure providers (e.g., hosting and email vendors) bound by contractual confidentiality, and when required by law.</p>

          <h2 className="font-heading text-2xl font-bold text-ink-900 mt-10">4. Cookies</h2>
          <p>We use a minimal set of first-party cookies for session continuity and privacy-friendly analytics. You can disable cookies in your browser without losing core functionality.</p>

          <h2 className="font-heading text-2xl font-bold text-ink-900 mt-10">5. Security</h2>
          <p>We follow SOC2-aligned controls, encrypt data in transit and at rest, and review access quarterly. No system is perfectly secure, but we work hard to keep yours safe.</p>

          <h2 className="font-heading text-2xl font-bold text-ink-900 mt-10">6. Your rights</h2>
          <p>You may request access to, correction of or deletion of your personal data at any time by emailing <a href="mailto:info@kodenzolabs.in" className="text-brand-blue">info@kodenzolabs.in</a>. We respond within 30 days.</p>

          <h2 className="font-heading text-2xl font-bold text-ink-900 mt-10">7. Contact</h2>
          <p>Questions about this policy? Write to <a href="mailto:info@kodenzolabs.in" className="text-brand-blue">info@kodenzolabs.in</a>.</p>
        </div>
      </section>
    </>
  );
}
