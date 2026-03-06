"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, FileText, BarChart2, Target, Palette, Presentation } from "lucide-react";

const navItems = [
  {
    id: "research",
    label: "Research Brief",
    icon: FileText,
    href: "https://docs.google.com/document/d/1KV34kDx9cEOSC0dWRNMkeofdCemPi87kAPQEoL6eINU/edit",
    description: "Market research, competitor analysis, IdeaBrowser data, and community signals.",
    external: true,
  },
  {
    id: "mvp",
    label: "MVP Plan",
    icon: BarChart2,
    href: "https://docs.google.com/document/d/1u2WvJbSeXKVdvOZKHlP_EFE9SZot9kx-xBlWecQb54I/edit",
    description: "Technical stack, pages spec, data model, AI processing flow, and build estimate.",
    external: true,
  },
  {
    id: "brand",
    label: "Brand & Design Spec",
    icon: Palette,
    href: "https://docs.google.com/document/d/10OQ-q5n6fIM0lbYuPIDHaSUP9Z8aMZsMTJpynnlasas/edit",
    description: "Color palette, typography, component patterns, voice UI spec, and page layouts.",
    external: true,
  },
  {
    id: "gtm",
    label: "GTM Plan",
    icon: Target,
    href: "#",
    description: "Go-to-market strategy, channel plan, broker acquisition, and launch timeline.",
    external: false,
    status: "Coming in Stage 8",
  },
  {
    id: "marketing",
    label: "Marketing Plan",
    icon: BarChart2,
    href: "#",
    description: "Content strategy, SEO targets, distribution playbook, and growth motions.",
    external: false,
    status: "Coming in Stage 8",
  },
  {
    id: "pitch",
    label: "Pitch Deck",
    icon: Presentation,
    href: "/deck",
    description: "Investor-ready pitch deck with all 9 slides.",
    external: false,
  },
];

const productSummary = {
  what: "Voice-powered knowledge capture SaaS for retiring business owners. Owners talk, AI structures it into a professional handover document for buyers.",
  score: "81/100",
  stage: "4 — Create MVP",
  revenue: "$97/mo + $1,500 extraction + $200/broker deal",
  market: "$14T in US privately-owned business equity, 10K retirements/day",
  tech: "Next.js 15 + Prisma + Whisper API + GPT-4o + Stripe",
  deploy: "succession.ashketing.com",
};

export default function DocsPage() {
  const [active, setActive] = useState("research");

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Top bar */}
      <div className="border-b border-parchment-dark bg-white px-8 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-display text-xl font-semibold text-walnut">Succession</Link>
          <span className="text-parchment-dark">·</span>
          <span className="text-sm text-secondary-foreground font-medium">Documentation</span>
        </div>
        <Link href="/dashboard" className="text-sm text-walnut hover:underline">← App</Link>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-[260px] flex-shrink-0 border-r border-parchment-dark bg-white sticky top-[57px] self-start h-[calc(100vh-57px)] overflow-y-auto">
          <nav className="p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-walnut-light mb-4">Succession Docs</p>
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
              <p className="text-xs font-semibold uppercase tracking-widest text-walnut-light mb-3">Quick Links</p>
              <div className="space-y-1.5 text-xs text-secondary-foreground">
                <div>Stage: <span className="text-walnut font-medium">{productSummary.stage}</span></div>
                <div>Score: <span className="text-walnut font-medium">{productSummary.score}</span></div>
                <div>Deploy: <span className="text-walnut font-medium break-all">{productSummary.deploy}</span></div>
              </div>
            </div>
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-10">
          {navItems.map((item) => {
            if (item.id !== active) return null;
            return (
              <div key={item.id} className="max-w-[720px]">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <item.icon size={20} className="text-walnut" />
                    <h1 className="font-display text-3xl font-semibold text-walnut">{item.label}</h1>
                  </div>
                  {item.external && item.href !== "#" && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-walnut hover:underline font-medium"
                    >
                      Open in Google Docs <ExternalLink size={14} />
                    </a>
                  )}
                  {!item.external && item.href !== "#" && (
                    <Link
                      href={item.href}
                      className="flex items-center gap-1.5 text-sm text-walnut hover:underline font-medium"
                    >
                      View Deck →
                    </Link>
                  )}
                </div>
                <p className="text-secondary-foreground mb-8">{item.description}</p>

                {item.status && (
                  <div className="bg-parchment/50 border border-parchment-dark rounded-lg p-6 text-center">
                    <p className="text-muted-foreground text-sm">{item.status}</p>
                    <p className="text-xs text-muted-foreground mt-1">This document will be created during the marketing stage of the pipeline.</p>
                  </div>
                )}

                {!item.status && item.id === "research" && (
                  <div className="space-y-6">
                    <div className="bg-white border border-parchment-dark rounded-lg p-6">
                      <h3 className="font-heading font-semibold text-walnut mb-3">IdeaBrowser Score: 31/40 (top 15%)</h3>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        {[
                          { label: "Opportunity", score: "8/10" },
                          { label: "Problem", score: "8/10" },
                          { label: "Feasibility", score: "6/10" },
                          { label: "Why Now", score: "9/10" },
                        ].map((item) => (
                          <div key={item.label} className="flex justify-between bg-surface-warm rounded px-3 py-2">
                            <span className="text-secondary-foreground">{item.label}</span>
                            <span className="font-semibold text-walnut">{item.score}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white border border-parchment-dark rounded-lg p-6">
                      <h3 className="font-heading font-semibold text-walnut mb-3">Total Score: 81/100 ✅</h3>
                      <div className="space-y-2 text-sm text-secondary-foreground">
                        <div className="flex justify-between"><span>Problem severity</span><span className="font-semibold text-walnut">22/25</span></div>
                        <div className="flex justify-between"><span>Buildable in timeframe</span><span className="font-semibold text-walnut">14/25</span></div>
                        <div className="flex justify-between"><span>Clear monetization</span><span className="font-semibold text-walnut">18/20</span></div>
                        <div className="flex justify-between"><span>Low competition</span><span className="font-semibold text-walnut">14/15</span></div>
                        <div className="flex justify-between"><span>Distribution path</span><span className="font-semibold text-walnut">13/15</span></div>
                      </div>
                    </div>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-walnut font-medium hover:underline"
                    >
                      Read full research brief in Google Docs <ExternalLink size={14} />
                    </a>
                  </div>
                )}

                {!item.status && item.id === "mvp" && (
                  <div className="space-y-6">
                    <div className="bg-white border border-parchment-dark rounded-lg p-6">
                      <h3 className="font-heading font-semibold text-walnut mb-3">Tech Stack</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {[
                          { layer: "Framework", choice: "Next.js 15 (App Router)" },
                          { layer: "UI", choice: "shadcn/ui + Tailwind" },
                          { layer: "Auth", choice: "NextAuth.js (magic link)" },
                          { layer: "Database", choice: "Postgres + Prisma" },
                          { layer: "Voice", choice: "Web Speech + Whisper API" },
                          { layer: "AI", choice: "GPT-4o" },
                          { layer: "Payments", choice: "Stripe" },
                          { layer: "Storage", choice: "Cloudflare R2" },
                        ].map((row) => (
                          <div key={row.layer} className="flex justify-between bg-surface-warm rounded px-3 py-2">
                            <span className="text-secondary-foreground">{row.layer}</span>
                            <span className="font-medium text-walnut text-xs">{row.choice}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white border border-parchment-dark rounded-lg p-6">
                      <h3 className="font-heading font-semibold text-walnut mb-3">13 Pages Built</h3>
                      <div className="grid grid-cols-2 gap-1.5 text-sm text-secondary-foreground">
                        {["/", "/about", "/pricing", "/signup", "/login", "/onboarding", "/dashboard", "/session/new", "/session/[id]", "/document", "/share/[token]", "/deck", "/docs"].map((page) => (
                          <code key={page} className="bg-surface-warm px-2 py-1 rounded text-xs font-mono text-walnut">{page}</code>
                        ))}
                      </div>
                    </div>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-walnut font-medium hover:underline"
                    >
                      Read full MVP plan in Google Docs <ExternalLink size={14} />
                    </a>
                  </div>
                )}

                {!item.status && item.id === "brand" && (
                  <div className="space-y-6">
                    <div className="bg-white border border-parchment-dark rounded-lg p-6">
                      <h3 className="font-heading font-semibold text-walnut mb-4">Color Palette</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { name: "Walnut", hex: "#5C3D2E", bg: "bg-[#5C3D2E]", text: "text-cream" },
                          { name: "Parchment", hex: "#E8D5B7", bg: "bg-[#E8D5B7]", text: "text-walnut" },
                          { name: "Sage", hex: "#7A8C6E", bg: "bg-[#7A8C6E]", text: "text-cream" },
                          { name: "Cream", hex: "#FAF7F2", bg: "bg-[#FAF7F2]", text: "text-walnut" },
                          { name: "Brick Red", hex: "#B54040", bg: "bg-[#B54040]", text: "text-cream" },
                          { name: "Surface Warm", hex: "#F5EFE4", bg: "bg-[#F5EFE4]", text: "text-walnut" },
                        ].map((c) => (
                          <div key={c.name} className={`${c.bg} ${c.text} rounded p-3 flex justify-between items-center`}>
                            <span className="text-sm font-semibold">{c.name}</span>
                            <code className="text-xs opacity-80">{c.hex}</code>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white border border-parchment-dark rounded-lg p-6">
                      <h3 className="font-heading font-semibold text-walnut mb-3">Typography</h3>
                      <div className="space-y-3">
                        <div><p className="font-display text-2xl text-walnut">Playfair Display</p><p className="text-xs text-muted-foreground">H1–H2 · 600 weight</p></div>
                        <div><p className="font-heading text-xl text-walnut">Lora</p><p className="text-xs text-muted-foreground">H3–H5 · 500–600 weight</p></div>
                        <div><p className="font-body text-base text-secondary-foreground">Inter</p><p className="text-xs text-muted-foreground">Body · 400–600 weight</p></div>
                      </div>
                    </div>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-walnut font-medium hover:underline"
                    >
                      Read full design spec in Google Docs <ExternalLink size={14} />
                    </a>
                  </div>
                )}

                {!item.status && item.id === "pitch" && (
                  <div>
                    <div className="bg-walnut rounded-lg p-8 text-center mb-6">
                      <p className="font-display italic text-2xl text-cream mb-4">Succession</p>
                      <p className="text-cream/70 mb-6">9 slides · Keyboard navigable</p>
                      <Link
                        href="/deck"
                        className="inline-flex items-center gap-2 bg-cream text-walnut px-6 py-3 rounded font-semibold text-sm uppercase tracking-wide hover:bg-parchment transition-colors"
                      >
                        View Pitch Deck →
                      </Link>
                    </div>
                    <p className="text-sm text-muted-foreground">Use ← → arrows to navigate. Includes: Title, Problem, Solution, Market, Product, Business Model, GTM, Team, Ask.</p>
                  </div>
                )}
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
}
