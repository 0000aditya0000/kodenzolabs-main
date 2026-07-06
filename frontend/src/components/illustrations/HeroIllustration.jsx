import React from "react";

/** Animated abstract dashboard / code / AI cluster used in hero areas */
export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto aspect-[5/4]" data-testid="hero-illustration">
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 w-[173px] h-[173px] rounded-full bg-[#35b7a1]/30 blur-[60px]" />
        <div className="absolute bottom-8 left-6 w-64 h-64 rounded-full bg-brand-teal/30 blur-[90px]" />
      </div>

      {/* Big dashboard card */}
      <div className="absolute top-2 left-2 right-8 bottom-16 rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-md p-5 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <div className="text-[10px] uppercase tracking-widest text-white/40">kodenzo / analytics</div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[{ k: "1.24M", l: "Requests" }, { k: "98.7%", l: "Uptime" }, { k: "42ms", l: "p99" }].map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
              <div className="font-heading text-xl text-white font-bold">{s.k}</div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
        {/* Chart */}
        <svg viewBox="0 0 320 90" className="w-full h-[110px]">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stopColor="#35b7a1" />
              <stop offset="1" stopColor="#335EEA" />
            </linearGradient>
            <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#335EEA" stopOpacity="0.4" />
              <stop offset="1" stopColor="#335EEA" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,70 C40,60 60,40 90,42 C130,44 150,68 180,55 C210,42 230,18 270,22 C300,25 310,40 320,30 L320,90 L0,90 Z" fill="url(#g2)" />
          <path d="M0,70 C40,60 60,40 90,42 C130,44 150,68 180,55 C210,42 230,18 270,22 C300,25 310,40 320,30" fill="none" stroke="url(#g1)" strokeWidth="2" />
          {[[90, 42], [180, 55], [270, 22]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="4" fill="#0A0A0A" stroke="#35b7a1" strokeWidth="2" />
          ))}
        </svg>
      </div>

      {/* Floating code card */}
      <div className="absolute -bottom-2 -left-2 w-[58%] rounded-2xl border border-white/10 bg-ink-900/90 backdrop-blur-md p-4 shadow-2xl float-slow">
        <div className="flex items-center gap-1.5 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
          <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
          <span className="w-2 h-2 rounded-full bg-[#28C840]" />
          <span className="text-[10px] text-white/40 ml-2">agent.ts</span>
        </div>
        <pre className="font-mono text-[11px] leading-relaxed text-white/80">
{`const reply = await ai.run({
  model: "claude-sonnet-4.6",
  tools: [search, retrieve],
  guardrails: enterprise,
});`}
        </pre>
      </div>

      {/* Floating "AI" pill card */}
      <div className="absolute top-6 -right-2 w-[44%] rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 shadow-2xl float-slow" style={{ animationDelay: "1.2s" }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-teal to-brand-blue grid place-items-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round">
              <path d="M12 2 L14 8 L20 10 L14 12 L12 18 L10 12 L4 10 L10 8 Z" />
            </svg>
          </div>
          <div>
            <div className="text-white text-[12px] font-semibold">AI Agent</div>
            <div className="text-white/50 text-[10px]">Reasoning…</div>
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-brand-teal to-brand-blue rounded-full" />
          </div>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-1/2 bg-gradient-to-r from-brand-teal to-brand-blue rounded-full" />
          </div>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-5/6 bg-gradient-to-r from-brand-teal to-brand-blue rounded-full" />
          </div>
        </div>
      </div>

      {/* Floating cloud node */}
      <div className="absolute bottom-20 -right-4 w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md grid place-items-center float-slow" style={{ animationDelay: "2s" }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#35b7a1" strokeWidth="1.8">
          <path d="M17.5 19a4.5 4.5 0 0 0 0-9c-.2-3.4-3-6-6.5-6a6.5 6.5 0 0 0-6.4 5.4A4 4 0 0 0 5 19h12.5Z" />
        </svg>
      </div>
    </div>
  );
}

/** Subtle background blob constellation for dark heroes */
export function DarkHeroBackdrop() {
  return (
    <>
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[312px] h-[312px] rounded-full bg-[#35b7a1]/20 blur-[84px] pointer-events-none blob" />
      <div className="absolute -bottom-40 -left-40 w-[460px] h-[460px] rounded-full bg-brand-teal/20 blur-[140px] pointer-events-none blob" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-brand-blueLight/10 blur-[120px] pointer-events-none blob" style={{ animationDelay: "8s" }} />
    </>
  );
}
