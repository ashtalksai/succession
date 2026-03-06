"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, FileText, BarChart2, Target, Palette, Presentation, TrendingUp, Users, DollarSign, Calendar, MessageSquare, BookOpen, Megaphone, ChevronRight } from "lucide-react";

const navItems = [
  {
    id: "research",
    label: "Research",
    icon: FileText,
    href: "https://docs.google.com/document/d/1KV34kDx9cEOSC0dWRNMkeofdCemPi87kAPQEoL6eINU/edit",
    description: "Market research, competitor analysis, IdeaBrowser data, and community signals.",
    external: true,
  },
  {
    id: "gtm",
    label: "GTM Plan",
    icon: Target,
    href: "https://docs.google.com/document/d/1xG_AMI8h_dkSGYawoDkBMoZSO7O1X_zrbTts5Y5Y0Y8/edit",
    description: "Go-to-market strategy, channel plan, broker acquisition, and launch timeline.",
    external: true,
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    href: "https://docs.google.com/document/d/1fwt9LSIjqb4JT4J2GTqQ5rNBJVE8DrHSM4Dlaj6Bo5o/edit",
    description: "Positioning, brand voice, content strategy, email sequences, and social campaigns.",
    external: true,
  },
  {
    id: "brand",
    label: "Brand",
    icon: Palette,
    href: "https://docs.google.com/document/d/10OQ-q5n6fIM0lbYuPIDHaSUP9Z8aMZsMTJpynnlasas/edit",
    description: "Color palette, typography, component patterns, voice UI spec, and page layouts.",
    external: true,
  },
  {
    id: "pitch",
    label: "Pitch Deck",
    icon: Presentation,
    href: "/pitch",
    description: "10-slide interactive investor pitch deck with Framer Motion animations.",
    external: false,
  },
];

const productSummary = {
  score: "81/100",
  stage: "Stage 8c — Docs Hub",
  deploy: "succession.ashketing.com",
  mrr: "$50K by Month 6",
};

export default function DocsPage() {
  const [active, setActive] = useState("research");

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Top bar */}
      <div className="border-b border-parchment-dark bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-display text-xl font-semibold text-walnut">Succession</Link>
          <span className="text-parchment-dark">·</span>
          <span className="text-sm text-secondary-foreground font-medium">Documentation Hub</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://succession.ashketing.com" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary-foreground hover:text-walnut flex items-center gap-1">Live Site <ExternalLink size={12} /></a>
          <span className="text-parchment-dark">·</span>
          <a href="https://github.com/ashtalksai/succession" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary-foreground hover:text-walnut flex items-center gap-1">GitHub <ExternalLink size={12} /></a>
          <span className="text-parchment-dark">·</span>
          <Link href="/dashboard" className="text-sm text-walnut hover:underline font-medium">← App</Link>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-[260px] flex-shrink-0 border-r border-parchment-dark bg-white sticky top-[57px] self-start h-[calc(100vh-57px)] overflow-y-auto">
          <nav className="p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-walnut-light mb-4">Sections</p>
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors
                    ${active === item.id
                      ? "bg-walnut text-cream font-semibold"
                      : "text-secondary-foreground hover:bg-surface-warm hover:text-walnut"
                    }`}
                >
                  <item.icon size={16} className={active === item.id ? "text-cream" : "text-walnut-light"} />
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-parchment-dark">
              <p className="text-xs font-semibold uppercase tracking-widest text-walnut-light mb-3">Status</p>
              <div className="space-y-2 text-xs text-secondary-foreground">
                <div className="flex justify-between"><span>Pipeline</span><span className="text-walnut font-medium">{productSummary.stage}</span></div>
                <div className="flex justify-between"><span>Score</span><span className="text-walnut font-medium">{productSummary.score}</span></div>
                <div className="flex justify-between"><span>MRR Target</span><span className="text-walnut font-medium">{productSummary.mrr}</span></div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-parchment-dark">
              <p className="text-xs font-semibold uppercase tracking-widest text-walnut-light mb-3">Quick Links</p>
              <div className="space-y-1.5">
                <a href="https://succession.ashketing.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-secondary-foreground hover:text-walnut"><ExternalLink size={11} /> Live Site</a>
                <a href="https://github.com/ashtalksai/succession" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-secondary-foreground hover:text-walnut"><ExternalLink size={11} /> GitHub Repo</a>
                <Link href="/pitch" className="flex items-center gap-2 text-xs text-secondary-foreground hover:text-walnut"><Presentation size={11} /> Pitch Deck</Link>
              </div>
            </div>
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-10 overflow-y-auto">
          {active === "research" && <ResearchSection />}
          {active === "gtm" && <GTMSection />}
          {active === "marketing" && <MarketingSection />}
          {active === "brand" && <BrandSection />}
          {active === "pitch" && <PitchSection />}
        </main>
      </div>
    </div>
  );
}

/* ─── Research Section ─── */
function ResearchSection() {
  return (
    <div className="max-w-[860px] space-y-8">
      <SectionHeader
        icon={<FileText size={20} className="text-walnut" />}
        title="Research"
        description="Market validation, competitive analysis, IdeaBrowser scoring, and community signals."
        docUrl="https://docs.google.com/document/d/1KV34kDx9cEOSC0dWRNMkeofdCemPi87kAPQEoL6eINU/edit"
        docLabel="Open Research Brief"
      />

      {/* Hero metrics */}
      <div className="grid grid-cols-3 gap-4">
        <BentoCard accent className="col-span-1">
          <div className="text-xs font-mono text-cream/60 uppercase tracking-widest mb-1">TAM</div>
          <div className="text-3xl font-bold text-cream">$14T</div>
          <div className="text-cream/70 text-sm mt-1">US privately-owned business equity</div>
        </BentoCard>
        <BentoCard className="col-span-1">
          <div className="text-xs font-mono text-walnut-light uppercase tracking-widest mb-1">Daily Exits</div>
          <div className="text-3xl font-bold text-walnut">10K</div>
          <div className="text-secondary-foreground text-sm mt-1">Boomer business owners retire per day</div>
        </BentoCard>
        <BentoCard className="col-span-1">
          <div className="text-xs font-mono text-walnut-light uppercase tracking-widest mb-1">IdeaBrowser</div>
          <div className="text-3xl font-bold text-walnut">81<span className="text-lg font-normal text-secondary-foreground">/100</span></div>
          <div className="text-secondary-foreground text-sm mt-1">Top 15% — strong GO signal</div>
        </BentoCard>
      </div>

      {/* IdeaBrowser breakdown */}
      <BentoCard>
        <h3 className="font-heading font-semibold text-walnut mb-4">IdeaBrowser Score Breakdown</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Opportunity", score: "8/10", note: "Massive boomer retirement wave, underserved" },
            { label: "Problem Severity", score: "8/10", note: "Deal-killing pain — real dollar stakes" },
            { label: "Feasibility", score: "6/10", note: "Voice + AI + doc gen — buildable in weeks" },
            { label: "Why Now", score: "9/10", note: "Peak retirement wave, AI finally good enough" },
            { label: "Problem severity", score: "22/25", note: "Validated via broker interviews" },
            { label: "Clear monetization", score: "18/20", note: "3 revenue tiers + high willingness to pay" },
            { label: "Low competition", score: "14/15", note: "No voice-first, exit-specific tools exist" },
            { label: "Distribution path", score: "13/15", note: "Broker channel = near-zero CAC" },
          ].map((item) => (
            <div key={item.label} className="bg-surface-warm rounded-lg px-4 py-3">
              <div className="flex justify-between items-start mb-0.5">
                <span className="text-sm font-medium text-walnut">{item.label}</span>
                <span className="font-mono text-sm font-bold text-walnut">{item.score}</span>
              </div>
              <div className="text-xs text-muted-foreground">{item.note}</div>
            </div>
          ))}
        </div>
      </BentoCard>

      {/* Competitive landscape */}
      <BentoCard>
        <h3 className="font-heading font-semibold text-walnut mb-4">Competitive Landscape</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-parchment-dark">
                <th className="text-left py-2 pr-4 text-walnut-light font-semibold">Competitor</th>
                <th className="text-left py-2 pr-4 text-walnut-light font-semibold">Voice-First</th>
                <th className="text-left py-2 pr-4 text-walnut-light font-semibold">Exit-Specific</th>
                <th className="text-left py-2 pr-4 text-walnut-light font-semibold">Price</th>
                <th className="text-left py-2 text-walnut-light font-semibold">Weakness</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-parchment/50">
              <tr className="bg-walnut/5">
                <td className="py-2.5 pr-4 font-semibold text-walnut">✨ Succession</td>
                <td className="py-2.5 pr-4 text-green-700">✅</td>
                <td className="py-2.5 pr-4 text-green-700">✅</td>
                <td className="py-2.5 pr-4">$97/mo</td>
                <td className="py-2.5 text-muted-foreground">New entrant</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium text-secondary-foreground">Trainual</td>
                <td className="py-2.5 pr-4 text-red-500">❌</td>
                <td className="py-2.5 pr-4 text-red-500">❌</td>
                <td className="py-2.5 pr-4">$19–700/mo</td>
                <td className="py-2.5 text-muted-foreground">Manual writing, HR-focused</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium text-secondary-foreground">Capitaliz</td>
                <td className="py-2.5 pr-4 text-red-500">❌</td>
                <td className="py-2.5 pr-4 text-green-700">✅</td>
                <td className="py-2.5 pr-4">$3K+/yr</td>
                <td className="py-2.5 text-muted-foreground">Advisor-only, expensive</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium text-secondary-foreground">DIY (Notion + Loom)</td>
                <td className="py-2.5 pr-4 text-yellow-600">~</td>
                <td className="py-2.5 pr-4 text-red-500">❌</td>
                <td className="py-2.5 pr-4">$0</td>
                <td className="py-2.5 text-muted-foreground">Messy pile, not buyer-ready</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 bg-sage/10 border border-sage/30 rounded-lg p-4">
          <p className="text-sm text-walnut font-medium">Our Edge: <span className="font-normal text-secondary-foreground">Only voice-first, exit-specific tool at owner-accessible price. Zero typing. Buyer-ready output. Built for 60-year-olds, not HR managers.</span></p>
        </div>
      </BentoCard>

      {/* Community signals */}
      <BentoCard>
        <h3 className="font-heading font-semibold text-walnut mb-4">Community Validation Signals</h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { platform: "Reddit", community: "r/smallbusiness", signal: "Weekly posts: 'how do I document my business for sale?'", score: "8/10" },
            { platform: "Facebook", community: "Business Broker Network (25K+)", signal: "Brokers complaining about seller documentation gaps", score: "7/10" },
            { platform: "YouTube", community: "Broker channels", signal: "Top comment on every exit video: 'how do I prepare?'", score: "6/10" },
          ].map((s) => (
            <div key={s.platform} className="bg-surface-warm rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-mono font-bold text-walnut uppercase">{s.platform}</span>
                <span className="text-xs font-mono font-bold text-sage">{s.score}</span>
              </div>
              <div className="text-xs text-walnut-light mb-1.5 font-medium">{s.community}</div>
              <div className="text-xs text-muted-foreground">{s.signal}</div>
            </div>
          ))}
        </div>
      </BentoCard>

      <DocLink href="https://docs.google.com/document/d/1KV34kDx9cEOSC0dWRNMkeofdCemPi87kAPQEoL6eINU/edit" label="Read full research brief in Google Docs" />
    </div>
  );
}

/* ─── GTM Section ─── */
function GTMSection() {
  return (
    <div className="max-w-[860px] space-y-8">
      <SectionHeader
        icon={<Target size={20} className="text-walnut" />}
        title="GTM Plan"
        description="Launch channels, 90-day timeline, pricing strategy, and broker acquisition playbook."
        docUrl="https://docs.google.com/document/d/1xG_AMI8h_dkSGYawoDkBMoZSO7O1X_zrbTts5Y5Y0Y8/edit"
        docLabel="Open GTM Plan"
      />

      {/* Tagline + positioning */}
      <div className="bg-walnut rounded-xl p-8">
        <div className="text-cream/60 text-xs font-mono uppercase tracking-widest mb-2">Tagline</div>
        <div className="font-display text-3xl text-cream italic mb-4">"Your 30 years. Documented. In a weekend."</div>
        <p className="text-cream/80 text-sm leading-relaxed">
          Retiring business owners lose 20–40% of their sale price because buyers can&apos;t verify how the business actually runs. Succession captures everything — through natural voice conversations — and produces a buyer-ready operations manual that makes deals close.
        </p>
      </div>

      {/* Revenue targets */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { period: "Month 1", target: "$3K MRR", detail: "5 subscribers + 1 extraction" },
          { period: "Month 3", target: "$15K MRR", detail: "50 monthly + 5 extractions" },
          { period: "Month 6", target: "$50K MRR", detail: "200 monthly + 15 extractions" },
          { period: "Year 1", target: "$500K ARR", detail: "Full broker channel live" },
        ].map((r) => (
          <BentoCard key={r.period}>
            <div className="text-xs font-mono text-walnut-light uppercase tracking-widest mb-1">{r.period}</div>
            <div className="text-xl font-bold text-walnut">{r.target}</div>
            <div className="text-xs text-muted-foreground mt-1">{r.detail}</div>
          </BentoCard>
        ))}
      </div>

      {/* Launch channels */}
      <BentoCard>
        <h3 className="font-heading font-semibold text-walnut mb-4">Launch Channels</h3>
        <div className="space-y-3">
          {[
            {
              priority: "CRITICAL",
              priorityColor: "bg-red-100 text-red-700",
              channel: "Broker Partnerships",
              platform: "LinkedIn + Email",
              cac: "~$0",
              outcome: "5–10 broker deals → 20–50 owner trials",
              note: "Commission-motivated, control deal flow. Best CAC in the mix. Target top 50 brokers in Houston, Phoenix, Denver.",
            },
            {
              priority: "HIGH",
              priorityColor: "bg-orange-100 text-orange-700",
              channel: "Reddit",
              platform: "r/smallbusiness, r/buyabusiness",
              cac: "$5",
              outcome: "50–200 signups from 2–3 viral posts",
              note: "8/10 community signal. Owners asking 'how do I document my business for sale?' every week.",
            },
            {
              priority: "MEDIUM",
              priorityColor: "bg-yellow-100 text-yellow-700",
              channel: "LinkedIn",
              platform: "Feed + DM outreach",
              cac: "$15",
              outcome: "20–50 signups, 3–5 advisor partnerships",
              note: "3 posts/week. Target exit planners, CPAs, M&A advisors — they influence seller clients.",
            },
            {
              priority: "MONTH 2",
              priorityColor: "bg-blue-100 text-blue-700",
              channel: "ProductHunt",
              platform: "Launch day",
              cac: "$2",
              outcome: "200–500 signups on launch day",
              note: "After 10+ testimonials collected. Product of the Day badge drives press.",
            },
            {
              priority: "LONG-TERM",
              priorityColor: "bg-green-100 text-green-700",
              channel: "SEO Content",
              platform: "Blog",
              cac: "$0",
              outcome: "500–2K organic visitors/month by M3",
              note: '"Family business succession planning" — 4.4K/mo, LOW competition, +238% growth.',
            },
          ].map((c) => (
            <div key={c.channel} className="border border-parchment-dark rounded-lg p-4 bg-white">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${c.priorityColor}`}>{c.priority}</span>
                  <span className="font-semibold text-walnut">{c.channel}</span>
                  <span className="text-xs text-muted-foreground">· {c.platform}</span>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">CAC</div>
                  <div className="text-sm font-mono font-bold text-walnut">{c.cac}</div>
                </div>
              </div>
              <div className="text-xs text-secondary-foreground mb-1">{c.note}</div>
              <div className="text-xs font-medium text-sage">→ {c.outcome}</div>
            </div>
          ))}
        </div>
      </BentoCard>

      {/* 90-day timeline */}
      <BentoCard>
        <h3 className="font-heading font-semibold text-walnut mb-5">90-Day Launch Timeline</h3>
        <div className="grid grid-cols-4 gap-3">
          {[
            {
              phase: "Week 1",
              label: "Foundation",
              color: "border-l-walnut",
              items: ["3 Reddit comments", "LinkedIn 2 articles", "20 broker outreach", "SEO blog post 1", "2 Facebook groups"],
            },
            {
              phase: "Weeks 2–4",
              label: "Momentum",
              color: "border-l-sage",
              items: ["LinkedIn 3x/week", "Daily Reddit engagement", "3 broker demo calls", "100 email subscribers", "Reddit AMA"],
            },
            {
              phase: "Month 2",
              label: "Launch",
              color: "border-l-amber-500",
              items: ["ProductHunt launch", "2–3 broker deals close", "LinkedIn paid $500/mo", "YouTube broker partner", "$3K MRR target"],
            },
            {
              phase: "Month 3+",
              label: "Scale",
              color: "border-l-green-600",
              items: ["Double Reddit if >5% CVR", "Broker referral program", "500+ organic/month", "$15K MRR target"],
            },
          ].map((t) => (
            <div key={t.phase} className={`border-l-4 ${t.color} pl-4`}>
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-0.5">{t.phase}</div>
              <div className="font-semibold text-walnut text-sm mb-2">{t.label}</div>
              <ul className="space-y-1">
                {t.items.map((item) => (
                  <li key={item} className="text-xs text-secondary-foreground flex gap-1.5">
                    <ChevronRight size={10} className="mt-0.5 flex-shrink-0 text-walnut-light" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </BentoCard>

      {/* Pricing strategy */}
      <BentoCard>
        <h3 className="font-heading font-semibold text-walnut mb-4">Pricing Strategy</h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            {
              tier: "Transition Plan",
              price: "$97/mo",
              features: ["3 voice sessions", "Basic handover doc", "PDF download"],
              audience: "Owner testing the waters",
            },
            {
              tier: "Full Extraction",
              price: "$1,500 one-time",
              features: ["Unlimited sessions (8 wks)", "Complete operations manual", "Broker share link", "Priority support"],
              audience: "Serious seller",
              featured: true,
            },
            {
              tier: "Broker Access",
              price: "$200/deal",
              features: ["Broker dashboard", "Client session mgmt", "Co-branded docs", "Referral tracking"],
              audience: "Business brokers",
            },
          ].map((tier) => (
            <div key={tier.tier} className={`rounded-lg p-5 ${tier.featured ? "bg-walnut text-cream" : "bg-surface-warm"}`}>
              <div className={`text-xs font-mono uppercase tracking-widest mb-1 ${tier.featured ? "text-cream/60" : "text-walnut-light"}`}>{tier.audience}</div>
              <div className={`font-semibold mb-0.5 ${tier.featured ? "text-cream" : "text-walnut"}`}>{tier.tier}</div>
              <div className={`text-2xl font-bold font-mono mb-3 ${tier.featured ? "text-cream" : "text-walnut"}`}>{tier.price}</div>
              <ul className="space-y-1.5">
                {tier.features.map((f) => (
                  <li key={f} className={`text-xs flex gap-2 ${tier.featured ? "text-cream/80" : "text-secondary-foreground"}`}>
                    <span className={tier.featured ? "text-cream/60" : "text-sage"}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-parchment/40 border border-parchment-dark rounded-lg p-4">
          <p className="text-sm text-walnut font-medium">Free Tier: <span className="font-normal text-secondary-foreground">1 free session (30 min), partial document preview. No credit card. Let owners feel the value before committing.</span></p>
        </div>
      </BentoCard>

      <DocLink href="https://docs.google.com/document/d/1xG_AMI8h_dkSGYawoDkBMoZSO7O1X_zrbTts5Y5Y0Y8/edit" label="Read full GTM plan in Google Docs" />
    </div>
  );
}

/* ─── Marketing Section ─── */
function MarketingSection() {
  return (
    <div className="max-w-[860px] space-y-8">
      <SectionHeader
        icon={<Megaphone size={20} className="text-walnut" />}
        title="Marketing"
        description="Brand voice, positioning, content strategy, email sequences, and ready-to-publish social campaigns."
        docUrl="https://docs.google.com/document/d/1fwt9LSIjqb4JT4J2GTqQ5rNBJVE8DrHSM4Dlaj6Bo5o/edit"
        docLabel="Open Marketing Plan"
      />

      {/* Positioning */}
      <div className="bg-walnut rounded-xl p-8">
        <div className="text-cream/60 text-xs font-mono uppercase tracking-widest mb-4">Positioning Statement</div>
        <div className="space-y-2 font-display text-cream">
          <div><span className="text-cream/50">For</span> small business owners aged 55–68 planning an exit in 6–24 months</div>
          <div><span className="text-cream/50">Who</span> need to document 30 years of operational knowledge for buyers</div>
          <div><span className="text-cream/50">Succession is</span> a voice-powered exit preparation tool</div>
          <div><span className="text-cream/50">That</span> captures business knowledge through conversations and produces buyer-ready documents</div>
          <div><span className="text-cream/50">Unlike</span> Trainual (HR-focused) or DIY (messy pile)</div>
          <div><span className="text-cream/50">We</span> are voice-first, exit-specific, and designed for people who hate writing</div>
        </div>
      </div>

      {/* Brand voice */}
      <BentoCard>
        <h3 className="font-heading font-semibold text-walnut mb-4">Brand Voice</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-xs font-mono font-bold text-green-700 uppercase tracking-widest mb-2">We Sound Like</div>
            <p className="text-sm text-secondary-foreground leading-relaxed">
              A trusted business consultant who has helped hundreds of owners through exits. Has seen every mistake. Never condescending. Always on the owner&apos;s side. Respects 30 years of hard work.
            </p>
            <div className="mt-3 space-y-1.5">
              {["Warm, authoritative, trustworthy", "Heritage + Precision + Personal weight", "Like the most experienced advisor in the room"].map(v => (
                <div key={v} className="text-xs flex gap-2 text-secondary-foreground"><span className="text-green-600">✓</span>{v}</div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-red-700 uppercase tracking-widest mb-2">We Never Sound Like</div>
            <p className="text-sm text-secondary-foreground leading-relaxed">
              SaaS marketing speak. Startup hype. Corporate HR platform. Anything that makes a 60-year-old feel like they&apos;re using HR software.
            </p>
            <div className="mt-3 space-y-1.5">
              {["Supercharge your workflow", "Leverage AI to optimize", "Enterprise-grade SOP documentation", "Scale your knowledge base"].map(v => (
                <div key={v} className="text-xs flex gap-2 text-secondary-foreground"><span className="text-red-500">✗</span>{v}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5 bg-surface-warm rounded-lg p-4">
          <p className="text-xs text-walnut font-semibold mb-2">Brand Voice Test:</p>
          <p className="text-xs text-secondary-foreground italic">"Read the copy out loud. Would Martin, 62, who has run a plumbing supply business for 30 years, trust this? Would it make him feel respected, not talked down to?"</p>
        </div>
      </BentoCard>

      {/* Messaging pillars */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { pillar: "Legacy", message: '"Your 30 years. Documented. In a weekend."', desc: "Respect the life's work. Make it tangible before handover." },
          { pillar: "Safety", message: '"The operations manual buyers ask for."', desc: "Remove deal risk. Give buyers the confidence to close.", featured: true },
          { pillar: "Simplicity", message: '"You just talk. We handle the document."', desc: "No writing required. Built for people who hate software." },
        ].map((p) => (
          <div key={p.pillar} className={`rounded-xl p-6 ${p.featured ? "bg-walnut text-cream" : "bg-white border border-parchment-dark"}`}>
            <div className={`text-xs font-mono uppercase tracking-widest mb-2 ${p.featured ? "text-cream/50" : "text-walnut-light"}`}>{p.pillar}</div>
            <div className={`font-heading font-semibold text-sm mb-2 ${p.featured ? "text-cream" : "text-walnut"}`}>{p.message}</div>
            <div className={`text-xs ${p.featured ? "text-cream/70" : "text-muted-foreground"}`}>{p.desc}</div>
          </div>
        ))}
      </div>

      {/* Content strategy */}
      <BentoCard>
        <h3 className="font-heading font-semibold text-walnut mb-4">Content Strategy</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-xs font-mono font-bold text-walnut-light uppercase tracking-widest mb-3">SEO Blog Articles (Month 1–3)</h4>
            <div className="space-y-2">
              {[
                { n: 1, title: "How to Document Your Business for Sale in 30 Days", keyword: "how to document business for sale" },
                { n: 2, title: "What Buyers Actually Ask During Business Due Diligence", keyword: "what buyers look for when buying a business" },
                { n: 3, title: "The #1 Reason Business Sales Fall Through (It's Not Price)", keyword: "why business sales fall through" },
                { n: 4, title: "Operations Manual Template for Business Sale", keyword: "operations manual template business sale" },
                { n: 5, title: "Family Business Succession Planning: Complete Checklist", keyword: "family business succession planning — 4.4K/mo ↑238%" },
              ].map((a) => (
                <div key={a.n} className="flex gap-3 text-xs">
                  <span className="font-mono text-walnut-light font-bold w-4 flex-shrink-0">{a.n}.</span>
                  <div>
                    <div className="text-walnut font-medium">{a.title}</div>
                    <div className="text-muted-foreground">{a.keyword}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-mono font-bold text-walnut-light uppercase tracking-widest mb-3">Social Cadence</h4>
            <div className="space-y-2">
              {[
                { platform: "LinkedIn", freq: "3x/week (M/W/F)", type: "Short posts + carousels" },
                { platform: "Reddit", freq: "Daily engagement", type: "Comments only first 2 wks, then posts" },
                { platform: "Twitter/X", freq: "5x/week", type: "Short, opinion-driven" },
                { platform: "Facebook Groups", freq: "3x/week", type: "Helpful advice, no promo first 2 wks" },
              ].map((s) => (
                <div key={s.platform} className="bg-surface-warm rounded-lg px-3 py-2.5">
                  <div className="flex justify-between items-start mb-0.5">
                    <span className="text-sm font-semibold text-walnut">{s.platform}</span>
                    <span className="text-xs font-mono text-sage">{s.freq}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{s.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BentoCard>

      {/* Email sequence */}
      <BentoCard>
        <h3 className="font-heading font-semibold text-walnut mb-4">Email Welcome Sequence (21 days · 6 emails)</h3>
        <div className="space-y-2">
          {[
            { day: "Day 0", subject: "Your business knowledge deserves to outlast the handshake", goal: "Welcome + first session prompt" },
            { day: "Day 3", subject: "What buyers actually look for in due diligence", goal: "Education — 8 knowledge areas" },
            { day: "Day 7", subject: "How a plumbing supply owner documented 31 years in 4 conversations", goal: "Social proof — case study" },
            { day: "Day 10", subject: "You don't need to be a writer to do this", goal: "Objection handling — it's voice" },
            { day: "Day 14", subject: "The buyer's question you won't be able to answer (without this)", goal: "Urgency — specific due diligence scenario" },
            { day: "Day 21", subject: "Your full operations manual: $1,500 once. Vs $15,000 consultant fee.", goal: "Upgrade — Full Extraction offer" },
          ].map((e) => (
            <div key={e.day} className="flex gap-4 items-start">
              <div className="font-mono text-xs text-walnut-light font-bold w-14 flex-shrink-0 pt-0.5">{e.day}</div>
              <div className="flex-1 border border-parchment-dark rounded-lg px-4 py-3 bg-white">
                <div className="text-sm font-medium text-walnut mb-0.5">{e.subject}</div>
                <div className="text-xs text-muted-foreground">{e.goal}</div>
              </div>
            </div>
          ))}
        </div>
      </BentoCard>

      {/* Content calendar week 1 */}
      <BentoCard>
        <h3 className="font-heading font-semibold text-walnut mb-4">Week 1 Content Calendar</h3>
        <div className="grid grid-cols-5 gap-2">
          {[
            { day: "Mon", items: ["LinkedIn Post 1 (stats)", "Reddit: engage 2 threads"] },
            { day: "Tue", items: ["Twitter threads 1–3"] },
            { day: "Wed", items: ["LinkedIn Post 2 (story)", "Facebook Group checklist"] },
            { day: "Thu", items: ["Twitter 4–5", "Blog Article 1 published"] },
            { day: "Fri", items: ["LinkedIn Post 3 (carousel)", "Reddit: 2 r/buyabusiness threads"] },
          ].map((d) => (
            <div key={d.day} className="bg-surface-warm rounded-lg p-3">
              <div className="text-xs font-mono font-bold text-walnut uppercase mb-2">{d.day}</div>
              <ul className="space-y-1">
                {d.items.map((item) => (
                  <li key={item} className="text-xs text-secondary-foreground">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </BentoCard>

      <DocLink href="https://docs.google.com/document/d/1fwt9LSIjqb4JT4J2GTqQ5rNBJVE8DrHSM4Dlaj6Bo5o/edit" label="Read full marketing plan in Google Docs" />
    </div>
  );
}

/* ─── Brand Section ─── */
function BrandSection() {
  return (
    <div className="max-w-[860px] space-y-8">
      <SectionHeader
        icon={<Palette size={20} className="text-walnut" />}
        title="Brand"
        description="Color palette, typography, component patterns, voice UI spec, and page layouts."
        docUrl="https://docs.google.com/document/d/10OQ-q5n6fIM0lbYuPIDHaSUP9Z8aMZsMTJpynnlasas/edit"
        docLabel="Open Brand & Design Spec"
      />

      {/* Brand identity */}
      <div className="bg-walnut rounded-xl p-8">
        <div className="text-cream/60 text-xs font-mono uppercase tracking-widest mb-2">Brand Identity</div>
        <div className="font-display text-2xl text-cream mb-3">Succession</div>
        <p className="text-cream/80 text-sm leading-relaxed">
          Warm heritage meets precise documentation. Built to feel like a trusted legal advisor, not a Silicon Valley startup. Every design decision respects the gravity of what retiring owners are doing — handing over 30 years of their life's work.
        </p>
      </div>

      {/* Color palette */}
      <BentoCard>
        <h3 className="font-heading font-semibold text-walnut mb-4">Color Palette</h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { name: "Walnut", hex: "#5C3D2E", rgb: "rgb(92, 61, 46)", role: "Primary — trust, warmth, authority", bg: "bg-[#5C3D2E]", text: "text-[#FAF7F2]" },
            { name: "Parchment", hex: "#E8D5B7", rgb: "rgb(232, 213, 183)", role: "Surface — heritage, document feel", bg: "bg-[#E8D5B7]", text: "text-[#5C3D2E]" },
            { name: "Sage", hex: "#7A8C6E", rgb: "rgb(122, 140, 110)", role: "Accent — growth, trust secondary", bg: "bg-[#7A8C6E]", text: "text-[#FAF7F2]" },
            { name: "Cream", hex: "#FAF7F2", rgb: "rgb(250, 247, 242)", role: "Background — clean warmth", bg: "bg-[#FAF7F2]", text: "text-[#5C3D2E]", border: true },
            { name: "Brick Red", hex: "#B54040", rgb: "rgb(181, 64, 64)", role: "Destructive / alert states", bg: "bg-[#B54040]", text: "text-[#FAF7F2]" },
            { name: "Surface Warm", hex: "#F5EFE4", rgb: "rgb(245, 239, 228)", role: "Card backgrounds / elevated", bg: "bg-[#F5EFE4]", text: "text-[#5C3D2E]", border: true },
          ].map((c) => (
            <div key={c.name} className={`rounded-xl overflow-hidden border ${c.border ? "border-parchment-dark" : "border-transparent"}`}>
              <div className={`h-16 ${c.bg}`} />
              <div className="p-3 bg-white border-t border-parchment/50">
                <div className="font-semibold text-walnut text-sm">{c.name}</div>
                <div className="font-mono text-xs text-walnut-light">{c.hex}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{c.role}</div>
              </div>
            </div>
          ))}
        </div>
      </BentoCard>

      {/* Typography */}
      <BentoCard>
        <h3 className="font-heading font-semibold text-walnut mb-5">Typography</h3>
        <div className="space-y-6">
          <div className="border-b border-parchment/50 pb-6">
            <p className="font-display text-4xl text-walnut leading-tight">Playfair Display</p>
            <p className="text-xs text-muted-foreground mt-2 mb-3">H1–H2 · 600 weight · Used for hero headings and section titles</p>
            <p className="font-display text-lg text-walnut italic">"The exit document you always meant to write."</p>
          </div>
          <div className="border-b border-parchment/50 pb-6">
            <p className="font-heading text-3xl text-walnut">Lora</p>
            <p className="text-xs text-muted-foreground mt-2 mb-3">H3–H5 · 500–600 weight · Used for subheadings and card titles</p>
            <p className="font-heading text-base text-walnut">Voice-powered knowledge capture for retiring business owners.</p>
          </div>
          <div>
            <p className="font-body text-2xl text-secondary-foreground">Inter</p>
            <p className="text-xs text-muted-foreground mt-2 mb-3">Body text · 400–600 weight · UI elements, labels, descriptions</p>
            <p className="text-sm text-secondary-foreground">Buyers need to see how the business actually runs. Succession captures it through voice conversations so you never have to write a word.</p>
          </div>
        </div>
      </BentoCard>

      {/* Component tokens */}
      <BentoCard>
        <h3 className="font-heading font-semibold text-walnut mb-4">Design Tokens</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-xs font-mono font-bold text-walnut-light uppercase tracking-widest mb-3">CSS Variables</h4>
            <div className="bg-walnut rounded-lg p-4 font-mono text-xs text-cream/80 space-y-1">
              <div><span className="text-cream/50">--</span>background: 40 60% 97%</div>
              <div><span className="text-cream/50">--</span>foreground: 20 35% 18%</div>
              <div><span className="text-cream/50">--</span>primary: 20 52% 24%</div>
              <div><span className="text-cream/50">--</span>accent: 97 17% 49%</div>
              <div><span className="text-cream/50">--</span>radius: 0.5rem</div>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-mono font-bold text-walnut-light uppercase tracking-widest mb-3">Tailwind Custom Colors</h4>
            <div className="space-y-1.5">
              {[
                { name: "walnut", value: "#5C3D2E" },
                { name: "parchment", value: "#E8D5B7" },
                { name: "sage", value: "#7A8C6E" },
                { name: "cream", value: "#FAF7F2" },
                { name: "surface-warm", value: "#F5EFE4" },
              ].map((t) => (
                <div key={t.name} className="flex justify-between items-center bg-surface-warm rounded px-3 py-2 text-xs">
                  <span className="font-mono font-medium text-walnut">bg-{t.name}</span>
                  <span className="font-mono text-muted-foreground">{t.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BentoCard>

      <DocLink href="https://docs.google.com/document/d/10OQ-q5n6fIM0lbYuPIDHaSUP9Z8aMZsMTJpynnlasas/edit" label="Read full design spec in Google Docs" />
    </div>
  );
}

/* ─── Pitch Section ─── */
function PitchSection() {
  return (
    <div className="max-w-[860px] space-y-8">
      <SectionHeader
        icon={<Presentation size={20} className="text-walnut" />}
        title="Pitch Deck"
        description="10-slide interactive investor deck with Framer Motion animations. Arrow key navigation."
      />

      {/* CTA card */}
      <div className="bg-walnut rounded-xl p-10 text-center">
        <p className="font-display italic text-4xl text-cream mb-3">Succession</p>
        <p className="text-cream/70 mb-2">AI knowledge capture for retiring business owners</p>
        <p className="text-cream/50 text-sm mb-8">10 slides · Framer Motion · Keyboard navigable · Arrow keys or swipe</p>
        <Link
          href="/pitch"
          className="inline-flex items-center gap-2 bg-cream text-walnut px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-widest hover:bg-parchment transition-colors"
        >
          View Pitch Deck →
        </Link>
      </div>

      {/* Slide overview */}
      <BentoCard>
        <h3 className="font-heading font-semibold text-walnut mb-4">Slide Overview</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            { n: "01", title: "Title", content: "Full-screen walnut, Succession headline with paper texture" },
            { n: "02", title: "Problem", content: "Quote + 4 data stats (bento grid) — 10K retirements/day" },
            { n: "03", title: "Solution", content: "3-step cards: Talk → Extract → Deliver with accent highlight" },
            { n: "04", title: "Market", content: "TAM $14T / SAM $2.3B / SOM $46M + 5 tailwind metrics" },
            { n: "05", title: "How It Works", content: "3-step flow + 8 knowledge areas listed" },
            { n: "06", title: "Traction", content: "Community signals (Reddit/FB/YT) + IdeaBrowser 81/100 score" },
            { n: "07", title: "Business Model", content: "3 pricing tiers + unit economics row" },
            { n: "08", title: "Competition", content: "Comparison table + 5 differentiators" },
            { n: "09", title: "GTM", content: "3 channels + budget timeline" },
            { n: "10", title: "Team & Ask", content: "Builder profile + 3 funding options" },
          ].map((s) => (
            <div key={s.n} className="flex gap-3 bg-surface-warm rounded-lg px-4 py-3">
              <span className="font-mono text-xs font-bold text-walnut-light w-6 flex-shrink-0">{s.n}</span>
              <div>
                <div className="text-sm font-semibold text-walnut">{s.title}</div>
                <div className="text-xs text-muted-foreground">{s.content}</div>
              </div>
            </div>
          ))}
        </div>
      </BentoCard>

      {/* Key metrics */}
      <div className="grid grid-cols-3 gap-4">
        <BentoCard accent>
          <div className="text-xs font-mono text-cream/60 uppercase tracking-widest mb-1">Ask</div>
          <div className="text-2xl font-bold text-cream">$150K</div>
          <div className="text-cream/70 text-sm mt-1">Pre-seed / $600K valuation</div>
        </BentoCard>
        <BentoCard>
          <div className="text-xs font-mono text-walnut-light uppercase tracking-widest mb-1">Use of Funds</div>
          <div className="text-lg font-bold text-walnut">Growth</div>
          <div className="text-secondary-foreground text-sm mt-1">Broker outreach + content + ads</div>
        </BentoCard>
        <BentoCard>
          <div className="text-xs font-mono text-walnut-light uppercase tracking-widest mb-1">Exit Path</div>
          <div className="text-lg font-bold text-walnut">Acquisition</div>
          <div className="text-secondary-foreground text-sm mt-1">BizBuySell, Axial, or strategic acquirer</div>
        </BentoCard>
      </div>

      <div className="flex justify-center">
        <Link
          href="/pitch"
          className="inline-flex items-center gap-2 bg-walnut text-cream px-8 py-4 rounded-lg font-semibold hover:bg-walnut/90 transition-colors"
        >
          <Presentation size={18} />
          Open Pitch Deck
        </Link>
      </div>
    </div>
  );
}

/* ─── Shared Components ─── */
function SectionHeader({ icon, title, description, docUrl, docLabel }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  docUrl?: string;
  docLabel?: string;
}) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2">
          {icon}
          <h1 className="font-display text-3xl font-semibold text-walnut">{title}</h1>
        </div>
        <p className="text-secondary-foreground">{description}</p>
      </div>
      {docUrl && (
        <a
          href={docUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-walnut hover:underline font-medium whitespace-nowrap ml-6 mt-1 flex-shrink-0"
        >
          {docLabel} <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
}

function BentoCard({ children, accent, className = "" }: {
  children: React.ReactNode;
  accent?: boolean;
  className?: string;
}) {
  return (
    <div className={`rounded-xl p-6 ${accent ? "bg-walnut" : "bg-white border border-parchment-dark"} ${className}`}>
      {children}
    </div>
  );
}

function DocLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-walnut font-medium hover:underline text-sm"
    >
      {label} <ExternalLink size={14} />
    </a>
  );
}
