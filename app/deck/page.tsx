"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    type: "title",
    content: {
      title: "Succession",
      subtitle: "Everything you know, captured.",
      tagline: "AI knowledge capture for retiring business owners",
    },
  },
  {
    id: 2,
    type: "problem",
    content: {
      label: "The Problem",
      headline: "10,000 baby boomers retire every day.",
      body: "Most own businesses where 30 years of operational knowledge lives entirely in the owner's head. When they sell, that knowledge walks out the door — killing deals, reducing prices, and setting buyers up to fail.",
      stats: [
        { value: "$14T", label: "in privately owned US businesses" },
        { value: "76%", label: "of owners plan to exit in 10 years" },
        { value: "Only 20-30%", label: "of listed businesses actually sell" },
      ],
    },
  },
  {
    id: 3,
    type: "solution",
    content: {
      label: "The Solution",
      headline: "Five conversations. One complete handover document.",
      steps: [
        { num: "01", title: "Owner talks", body: "Industry-specific voice sessions, 20–40 minutes each. No typing required." },
        { num: "02", title: "AI organizes", body: "Whisper transcribes. GPT-4o structures into 8 buyer-critical sections." },
        { num: "03", title: "Buyer understands", body: "A professional PDF the broker shares. The operational manual the business never had." },
      ],
    },
  },
  {
    id: 4,
    type: "market",
    content: {
      label: "Market",
      headline: "A greenfield niche with generational tailwinds.",
      points: [
        "No dedicated voice-AI succession tool exists",
        "Baby boomer exit wave peaks 2025–2035",
        "Business brokers lose commissions when knowledge gaps kill deals",
        "\"Family business succession planning\" — 4.4K/mo searches, LOW competition, +238% growth",
      ],
      gap: "Trainual is for training employees. Capitaliz is for advisors. Nobody built this for the owner.",
    },
  },
  {
    id: 5,
    type: "product",
    content: {
      label: "Product",
      headline: "Built for the person selling, not the advisor representing them.",
      sections: [
        "Business Overview",
        "Key Customers",
        "Operations",
        "Vendors & Suppliers",
        "Finances",
        "Key Staff",
        "Risks & Gotchas",
        "Transition Guidance",
      ],
    },
  },
  {
    id: 6,
    type: "business",
    content: {
      label: "Business Model",
      headline: "Two customers. Both motivated.",
      tiers: [
        { name: "Transition", price: "$97/mo", who: "Owners", desc: "5 sessions, AI extraction, handover doc" },
        { name: "Full Extraction", price: "$1,500", who: "Owners", desc: "Complete package, PDF, broker distribution" },
        { name: "Broker Access", price: "$200/deal", who: "Brokers", desc: "Access to listing doc, buyer-ready format" },
      ],
      note: "Broker pays $200, earns $10K–$200K commission. No-brainer ROI.",
    },
  },
  {
    id: 7,
    type: "gtm",
    content: {
      label: "Go-To-Market",
      headline: "Brokers are the distribution channel.",
      channels: [
        { channel: "Business Brokers", detail: "3,000+ IBBA members. \"Close more deals.\" 5 pilot brokers → commission = social proof." },
        { channel: "SEO", detail: "Low-competition, high-intent keywords with +238% growth. Owners searching before they're ready to sell." },
        { channel: "Reddit", detail: "r/smallbusiness (1.5M members), r/BuyABusinessForum — helpful content, not ads." },
      ],
    },
  },
  {
    id: 8,
    type: "team",
    content: {
      label: "Team",
      headline: "Built by operators, for operators.",
      body: "We've been in the room when businesses change hands. We know what buyers actually ask and what sellers never write down.",
    },
  },
  {
    id: 9,
    type: "ask",
    content: {
      label: "The Ask",
      headline: "Get early access.",
      body: "Succession is in private beta. We're onboarding 20 business owners and 5 brokers for the first cohort.",
      cta: "succession.ashketing.com",
      subtext: "Or email: hello@succession.ashketing.com",
    },
  },
];

export default function DeckPage() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  return (
    <div className="min-h-screen bg-walnut flex flex-col" style={{ fontFamily: "var(--font-body)" }}>
      {/* Slide area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-[900px]">

          {/* TITLE SLIDE */}
          {slide.type === "title" && (
            <div className="text-center">
              <span className="text-parchment-dark text-xs font-semibold uppercase tracking-widest block mb-8">Succession</span>
              <h1 className="font-display text-6xl md:text-8xl font-semibold text-cream leading-none mb-6">
                Succession
              </h1>
              <p className="font-display italic text-2xl text-parchment mb-4">{slide.content.subtitle}</p>
              <p className="text-cream/60 text-lg">{slide.content.tagline}</p>
            </div>
          )}

          {/* PROBLEM SLIDE */}
          {slide.type === "problem" && (
            <div>
              <span className="text-sage text-xs font-semibold uppercase tracking-widest block mb-6">{slide.content.label}</span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream mb-8 leading-tight">
                {slide.content.headline}
              </h2>
              <p className="text-cream/80 text-xl leading-relaxed mb-12 max-w-[600px]">{slide.content.body}</p>
              <div className="grid grid-cols-3 gap-6">
                {slide.content.stats?.map((stat) => (
                  <div key={stat.value} className="border border-white/10 rounded-lg p-6 bg-white/5">
                    <div className="font-display text-3xl font-semibold text-parchment mb-2">{stat.value}</div>
                    <div className="text-cream/60 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SOLUTION SLIDE */}
          {slide.type === "solution" && (
            <div>
              <span className="text-sage text-xs font-semibold uppercase tracking-widest block mb-6">{slide.content.label}</span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream mb-12 leading-tight">
                {slide.content.headline}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {slide.content.steps?.map((step) => (
                  <div key={step.num} className="border border-white/10 rounded-lg p-6 bg-white/5">
                    <span className="text-sage text-xs font-semibold uppercase tracking-widest block mb-3">{step.num}</span>
                    <h3 className="font-heading font-semibold text-cream text-lg mb-2">{step.title}</h3>
                    <p className="text-cream/70 text-sm leading-relaxed">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MARKET SLIDE */}
          {slide.type === "market" && (
            <div>
              <span className="text-sage text-xs font-semibold uppercase tracking-widest block mb-6">{slide.content.label}</span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream mb-10 leading-tight max-w-[700px]">
                {slide.content.headline}
              </h2>
              <div className="space-y-4 mb-10">
                {slide.content.points?.map((point, i) => (
                  <div key={i} className="flex items-start gap-4 text-cream/80 text-lg">
                    <span className="text-sage mt-1">→</span>
                    {point}
                  </div>
                ))}
              </div>
              {slide.content.gap && (
                <div className="border-l-4 border-sage pl-6 italic text-cream/60 text-lg">
                  {slide.content.gap}
                </div>
              )}
            </div>
          )}

          {/* PRODUCT SLIDE */}
          {slide.type === "product" && (
            <div>
              <span className="text-sage text-xs font-semibold uppercase tracking-widest block mb-6">{slide.content.label}</span>
              <h2 className="font-display text-4xl font-semibold text-cream mb-10 leading-tight max-w-[600px]">
                {slide.content.headline}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {slide.content.sections?.map((section, i) => (
                  <div key={i} className="border border-white/10 rounded-lg p-4 bg-white/5 flex items-center gap-2">
                    <span className="text-sage text-xs">✓</span>
                    <span className="text-cream/80 text-sm">{section}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BUSINESS MODEL SLIDE */}
          {slide.type === "business" && (
            <div>
              <span className="text-sage text-xs font-semibold uppercase tracking-widest block mb-6">{slide.content.label}</span>
              <h2 className="font-display text-4xl font-semibold text-cream mb-10 leading-tight">
                {slide.content.headline}
              </h2>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {slide.content.tiers?.map((tier) => (
                  <div key={tier.name} className="border border-white/10 rounded-lg p-6 bg-white/5">
                    <div className="text-parchment font-display text-2xl font-semibold mb-1">{tier.price}</div>
                    <div className="text-cream/80 font-heading font-semibold mb-1">{tier.name}</div>
                    <div className="text-cream/50 text-xs mb-3">For: {tier.who}</div>
                    <div className="text-cream/70 text-sm">{tier.desc}</div>
                  </div>
                ))}
              </div>
              {slide.content.note && (
                <div className="border-l-4 border-sage pl-6 italic text-cream/60">
                  {slide.content.note}
                </div>
              )}
            </div>
          )}

          {/* GTM SLIDE */}
          {slide.type === "gtm" && (
            <div>
              <span className="text-sage text-xs font-semibold uppercase tracking-widest block mb-6">{slide.content.label}</span>
              <h2 className="font-display text-4xl font-semibold text-cream mb-10 leading-tight">
                {slide.content.headline}
              </h2>
              <div className="space-y-4">
                {slide.content.channels?.map((item) => (
                  <div key={item.channel} className="border border-white/10 rounded-lg p-6 bg-white/5">
                    <div className="text-cream font-heading font-semibold mb-1">{item.channel}</div>
                    <div className="text-cream/70 text-sm">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TEAM SLIDE */}
          {slide.type === "team" && (
            <div className="text-center max-w-[600px] mx-auto">
              <span className="text-sage text-xs font-semibold uppercase tracking-widest block mb-6">{slide.content.label}</span>
              <h2 className="font-display text-4xl font-semibold text-cream mb-8 leading-tight">
                {slide.content.headline}
              </h2>
              <p className="text-cream/70 text-xl leading-relaxed">{slide.content.body}</p>
            </div>
          )}

          {/* ASK SLIDE */}
          {slide.type === "ask" && (
            <div className="text-center max-w-[700px] mx-auto">
              <span className="text-sage text-xs font-semibold uppercase tracking-widest block mb-6">{slide.content.label}</span>
              <h2 className="font-display text-5xl font-semibold text-cream mb-6 leading-tight">
                {slide.content.headline}
              </h2>
              <p className="text-cream/70 text-xl leading-relaxed mb-10">{slide.content.body}</p>
              <div className="font-display text-3xl font-semibold text-parchment mb-3">{slide.content.cta}</div>
              <div className="text-cream/50 text-sm">{slide.content.subtext}</div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-white/10 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-parchment w-4" : "bg-white/30 hover:bg-white/50"}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-cream/40 text-xs mr-4">{current + 1} / {slides.length}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={prev}
            disabled={current === 0}
            className="text-cream/60 hover:text-cream hover:bg-white/10 disabled:opacity-30"
          >
            <ArrowLeft size={16} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={next}
            disabled={current === slides.length - 1}
            className="text-cream/60 hover:text-cream hover:bg-white/10 disabled:opacity-30"
          >
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
