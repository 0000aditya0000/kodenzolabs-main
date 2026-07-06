# Kodenzo Labs — PRD

## Original Problem Statement
Premium, production-ready, multi-page corporate website for Kodenzo Labs (modern AI & Software Engineering company). Design inspired by Stripe, Linear, Vercel, Framer, OpenAI, Apple, Raycast, Notion. Minimal, premium, future-ready aesthetic with lots of whitespace, excellent typography, smooth animations, premium illustrations, micro interactions, subtle gradients, glassmorphism in selected components.

## User Choices (gathered 1st session)
1. Contact/Careers/Newsletter forms — **frontend only** (sonner toast, no backend)
2. Blog — **static** curated content
3. Portfolio — **static** curated content
4. Logo — **user uploaded** (teal "K" on black, "KODENZO LABS" wordmark)
5. Scope — **complete site, all 19 pages**

## Tech Stack
- React 19 + Create React App (NOT Vite — environment uses CRA + craco)
- React Router v7 (`react-router-dom@7.15.0`)
- Tailwind CSS 3.4 + tailwindcss-animate
- Framer Motion 11
- Lucide React icons
- Shadcn UI components (`/app/frontend/src/components/ui/`)
- Sonner for toasts
- Fonts: Bricolage Grotesque (headings) + Geist (body) + Geist Mono (code) via Google Fonts

## Architecture
- Single `Layout` wrapper (Navbar + Outlet + Footer + Toaster + ScrollToTop) for 13 routes (+ catch-all 404 outside layout).
- Single `ServiceDetail` page handles all 7 service detail routes via `:slug` param + `SERVICE_BY_SLUG` lookup.
- Static data lives in `/app/frontend/src/data/` (services, industries, portfolio, blog, careers, company, process, tech).
- `useSEO` hook sets document.title + meta description + canonical + JSON-LD per page.
- Reusable section components: `PageHero`, `CTASection`, `ProcessTimeline`, `ServicesBento`, `TechMarquee`, `HeroIllustration`, `Primitives` (Eyebrow, SectionHeading, AnimatedCounter, fadeUp).

## Design System
- **Theme**: Dual-tone hybrid. Dark `#0A0A0A` (navbar/hero/footer/CTA) + light `#F8FAFC`/`#FFFFFF` (content sections).
- **Brand gradient**: `linear-gradient(135deg, #35b7a1 0%, #335EEA 100%)` — used for highlighted hero words, primary CTAs, icon backgrounds, accent tints.
- **Radii**: 24px cards (`rounded-card`), 999px pills (`rounded-pill`).
- **Effects**: `glass-dark`, `glass-light`, `shadow-premium`, `shadow-glow-teal`, `shadow-glow-blue`, blob keyframe animation, float-slow keyframe.

## What's Been Implemented (Dec 2025)
- **All 13 routes** + 404 catch-all (Home, About, Services hub, 7 Service detail pages, Industries, Portfolio, Process, Blog, Careers, Contact, Privacy Policy, Terms, NotFound)
- **Premium glassmorphism navbar** with scroll-blur intensification, services mega menu (hover), mobile drawer (hamburger), gradient "Book a Consultation" CTA
- **Home hero** with dual CTAs, animated floating dashboard / code / AI / cloud cards on the right, blob backdrop, hero badge, hero stats
- **Tech stack marquee** (32 technologies, dark theme on home, light theme on About/Services)
- **Services Bento** (12 services — 7 detailed + 5 extended) with hero card bigger and gradient
- **Why Kodenzo Labs** (8 cards)
- **Process Timeline** (7 animated steps with gradient circles)
- **Portfolio preview** + full Portfolio page with category filter (8 case studies + metrics + tech badges)
- **About**: story two-column, animated stats counters, 4 values, 4 leadership cards
- **Service detail anatomy**: hero, business benefits (4), features grid (8-12), process timeline, tech pills, industries grid, dark case study placeholder, FAQ accordion (4 per service), other services grid, CTA
- **Industries**: 12 industry cards with icons + 'Talk to us' deep link
- **Blog**: search (title/excerpt/category/author) + category filter + featured article + grid (8 hand-written posts)
- **Careers**: benefits (6), culture (4), open positions (8 with click-to-prefill), application form
- **Contact**: split layout — form (name, email, company, service select, budget select, message) + sidebar (direct line card, what-happens-next, map placeholder SVG)
- **Footer**: brand + newsletter (with validation) + Services links + Company links + Contact info + 3 social icons + legal links + copyright
- **Premium SVG hero illustration** (dashboard + chart + floating cards + cloud node — pure SVG, no stock)
- **Animated counters** with intersection observer
- **SEO**: per-page title, meta description, canonical, JSON-LD (Service / WebSite / Organization schemas), robots.txt, sitemap.xml
- **Responsive** at 375 / 768 / 1440px; no horizontal overflow
- **Accessibility**: alt text on all images, ARIA labels on icon buttons, semantic HTML, `prefers-reduced-motion` support, keyboard navigable
- **data-testid** coverage across navbar, hero, forms, bento, mega menu, mobile menu, FAQ, portfolio, blog, industries, careers, 404

## Verified by testing_agent_v3 (iteration_1)
- ~98% pass; zero critical issues, zero console errors across all 19 routes
- One minor UX fix applied: blog search now also matches category + author (so "AI" surfaces AI Engineering posts)

## Backlog (Next Phase)
- **P1** Blog detail pages (currently a single grid + featured; click-through to article page not yet implemented)
- **P1** Portfolio case-study detail pages
- **P1** Backend wiring (if user later wants to capture leads / careers applications in MongoDB)
- **P2** Email integration (Resend / SendGrid) to actually send contact form submissions
- **P2** CMS integration for blog (Sanity / Contentful)
- **P2** Animated tech stack logos (currently text pills — could be SVG marks per technology)
- **P2** Reduced-motion testing pass
- **P3** Multi-language i18n (en / hi for India presence)
- **P3** Dark mode for content sections (currently dark only on hero/footer/CTA bands)

## Next Tasks
1. Wire blog article detail route + content if user wants full article pages
2. Wire backend if user later wants to store form submissions or CMS-driven blog
3. Optimize images (responsive srcSet + WebP) if Core Web Vitals scoring becomes a priority
