import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight, Clock } from "lucide-react";
import PageHero from "../components/sections/PageHero";
import { Eyebrow, fadeUp } from "../components/sections/Primitives";
import CTASection from "../components/sections/CTASection";
import { BLOG_POSTS, BLOG_CATEGORIES } from "../data/blog";
import { useSEO } from "../hooks/useSEO";

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  useSEO({
    title: "Blog — Kodenzo Labs",
    description: "Engineering essays on AI, production LLM systems, design systems, distributed architecture, mobile and web performance from the Kodenzo Labs team.",
    canonical: "https://kodenzolabs.in/blog",
  });

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((p) => {
      const matchesCat = cat === "All" || p.category === cat;
      const q = query.toLowerCase().trim();
      const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.author.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, cat]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Blog · Insights"
        title="Engineering essays from the lab."
        gradientWords={["essays"]}
        sub="Field notes, decision frameworks and post-mortems from the engineers building Kodenzo Labs' production systems."
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl container-px">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-10">
            <div className="flex items-center gap-2 px-4 py-3 rounded-pill border border-black/[0.06] bg-surface-50 flex-1">
              <Search size={16} className="text-[#6B7280]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles…"
                className="flex-1 bg-transparent outline-none text-sm text-ink-900 placeholder-[#9CA3AF]"
                data-testid="blog-search-input"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {BLOG_CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 rounded-pill text-sm font-medium border transition-colors ${
                    cat === c
                      ? "bg-ink-900 text-white border-ink-900"
                      : "bg-white border-black/[0.06] text-ink-900 hover:bg-surface-50"
                  }`}
                  data-testid={`blog-cat-${c.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Featured */}
          {featured && (
            <motion.article {...fadeUp()}
              className="group grid lg:grid-cols-2 gap-8 mb-16 rounded-card overflow-hidden border border-black/[0.05] bg-white shadow-premium hover:shadow-[0_20px_60px_-15px_rgba(17,24,39,0.18)] transition-all duration-500"
              data-testid="blog-featured">
              <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img src={featured.cover} alt={featured.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-pill bg-ink-900/85 backdrop-blur text-white text-[11px] uppercase tracking-widest">Featured · {featured.category}</div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col">
                <div className="text-[#6B7280] text-xs uppercase tracking-widest font-semibold flex items-center gap-3">
                  {featured.date} <span className="w-1 h-1 rounded-full bg-[#6B7280]" /> <Clock size={12}/> {featured.readTime}
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-900 mt-4 leading-[1.1] text-balance">{featured.title}</h2>
                <p className="text-[#6B7280] leading-relaxed mt-4 text-[16px]">{featured.excerpt}</p>
                <div className="mt-auto pt-8 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-ink-900 text-sm">{featured.author}</div>
                    <div className="text-xs text-[#6B7280]">{featured.role}</div>
                  </div>
                  <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                    Read article <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </motion.article>
          )}

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p, i) => (
              <motion.article key={p.slug} {...fadeUp(i * 0.04)}
                className="group rounded-card overflow-hidden border border-black/[0.05] bg-white hover:shadow-premium hover:-translate-y-1.5 transition-all duration-500"
                data-testid={`blog-post-${p.slug}`}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.cover} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-pill bg-white/95 backdrop-blur text-ink-900 text-[10.5px] uppercase tracking-widest font-semibold">{p.category}</div>
                </div>
                <div className="p-6">
                  <div className="text-[11px] text-[#6B7280] uppercase tracking-widest font-semibold flex items-center gap-2">
                    {p.date} <span className="w-1 h-1 rounded-full bg-[#6B7280]" /> <Clock size={11}/> {p.readTime}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-ink-900 mt-3 leading-snug text-balance">{p.title}</h3>
                  <p className="text-[#6B7280] mt-3 text-[14.5px] leading-relaxed line-clamp-2">{p.excerpt}</p>
                  <div className="mt-5 pt-4 border-t border-black/[0.05] flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-ink-900 text-[13px]">{p.author}</div>
                      <div className="text-[11px] text-[#6B7280]">{p.role}</div>
                    </div>
                    <ArrowUpRight size={16} className="text-[#6B7280] group-hover:text-brand-blue transition-colors" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center text-[#6B7280] py-20">No articles match your search.</div>
          )}
        </div>
      </section>

      <CTASection title="Want our essays in your inbox?" sub="One short, signal-dense article every two weeks. No spam. Unsubscribe in one click." ctaLabel="Subscribe" ctaHref="/contact" />
    </>
  );
}
