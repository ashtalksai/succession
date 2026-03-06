"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Mic, FileText, Users, TrendingUp, DollarSign, Target, Zap, Award, ArrowRight } from "lucide-react";

// ─── SLIDES DATA ──────────────────────────────────────────────────────────────

const TOTAL_SLIDES = 10;

function SlideWrapper({ children, bg = "cream" }: { children: React.ReactNode; bg?: "cream" | "walnut" | "parchment" | "sage" | "warm" }) {
  const bgMap: Record<string, string> = {
    cream: "bg-[#FAF7F2]",
    walnut: "bg-[#5C3D2E]",
    parchment: "bg-[#E8D5B7]",
    sage: "bg-[#7A8C6E]",
    warm: "bg-[#F5EFE4]",
  };
  return (
    <div className={`h-screen w-screen flex items-center justify-center p-8 md:p-16 ${bgMap[bg]} relative overflow-hidden`}>
      {children}
    </div>
  );
}

// ─── SLIDE 1: TITLE ───────────────────────────────────────────────────────────
function Slide1() {
  return (
    <SlideWrapper bg="walnut">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E8D5B7' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      <div className="max-w-5xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <span className="text-[#E8D5B7]/60 text-xs font-semibold uppercase tracking-[0.3em] block mb-10">
            ChimeStream B.V. · 2025
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-7xl md:text-9xl font-semibold text-[#FAF7F2] leading-none mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Succession
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-[#E8D5B7] text-2xl md:text-3xl mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
        >
          Your 30 years. Documented. In a weekend.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-[#E8D5B7]/60 text-lg font-light"
        >
          AI knowledge capture for retiring small business owners
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="w-24 h-px bg-[#7A8C6E] mx-auto mt-12 mb-8"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-[#E8D5B7]/40 text-sm tracking-widest uppercase"
        >
          succession.ashketing.com
        </motion.p>
      </div>
    </SlideWrapper>
  );
}

// ─── SLIDE 2: THE PROBLEM ─────────────────────────────────────────────────────
function Slide2() {
  return (
    <SlideWrapper bg="walnut">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E8D5B7' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      <div className="max-w-5xl w-full relative z-10">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Left: 3/5 */}
          <div className="md:col-span-3">
            <span className="text-[#7A8C6E] text-xs font-semibold uppercase tracking-[0.3em] block mb-6">
              The Problem
            </span>
            <h2
              className="text-3xl md:text-4xl font-semibold text-[#FAF7F2] mb-8 leading-snug"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              "Most business sales fall through in due diligence. Not because of bad numbers — because the buyer doesn't understand how the business runs."
            </h2>
            <div className="border-l-2 border-[#7A8C6E]/50 pl-6 mb-8">
              <p className="text-[#E8D5B7]/70 text-lg leading-relaxed italic">
                Martin runs a plumbing supply business. 30 years. $3M revenue. A buyer signs an LOI. Then due diligence starts. The deal falls through. $3M acquisition. Gone. Because 30 years of knowledge never made it to paper.
              </p>
            </div>
          </div>
          {/* Right: 2/5 — stats */}
          <div className="md:col-span-2 space-y-4">
            {[
              { value: "Only 20–30%", label: "of listed businesses actually close" },
              { value: "10,000/day", label: "baby boomers retire — most own small businesses" },
              { value: "$10 Trillion", label: "tied up in private businesses awaiting transfer" },
              { value: "#1 failure", label: "operational knowledge that lives only in the owner's head" },
            ].map((stat) => (
              <div key={stat.value} className="border border-[#E8D5B7]/10 rounded-xl p-5 bg-white/5">
                <div
                  className="text-[#E8D5B7] text-2xl font-semibold mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-[#E8D5B7]/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

// ─── SLIDE 3: THE SOLUTION ────────────────────────────────────────────────────
function Slide3() {
  return (
    <SlideWrapper bg="cream">
      <div className="max-w-5xl w-full">
        <span className="text-[#7A8C6E] text-xs font-semibold uppercase tracking-[0.3em] block mb-6">
          The Solution
        </span>
        <h2
          className="text-3xl md:text-4xl font-semibold text-[#5C3D2E] mb-4 leading-snug max-w-3xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Succession captures your business knowledge through voice conversations — and turns it into the professional handover document buyers need.
        </h2>
        <p className="text-[#5C3D2E]/60 mb-12 text-lg">3–5 sessions over 2 weeks = the operations manual the business never had.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Mic,
              num: "01",
              title: "TALK",
              body: "Answer industry-specific questions through voice conversations in your browser. No typing. No templates. Just talk about your business.",
              accent: true,
            },
            {
              icon: Zap,
              num: "02",
              title: "EXTRACT",
              body: "AI transcribes, structures, and organizes everything into 8 knowledge areas: customers, operations, vendors, finances, staff, pricing, risks, transition.",
              accent: false,
            },
            {
              icon: FileText,
              num: "03",
              title: "DELIVER",
              body: "A professional handover document, PDF-ready and broker-shareable, that makes buyers confident and deals close.",
              accent: false,
            },
          ].map(({ icon: Icon, num, title, body, accent }) => (
            <div
              key={num}
              className={`rounded-2xl p-7 ${accent ? "bg-[#5C3D2E] text-[#FAF7F2]" : "bg-[#E8D5B7]/40 border border-[#5C3D2E]/10"}`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${accent ? "bg-[#E8D5B7]/20" : "bg-[#5C3D2E]/10"}`}>
                <Icon size={18} className={accent ? "text-[#E8D5B7]" : "text-[#5C3D2E]"} />
              </div>
              <span className={`text-xs font-semibold uppercase tracking-widest block mb-2 ${accent ? "text-[#E8D5B7]/60" : "text-[#7A8C6E]"}`}>{num}</span>
              <h3
                className={`text-xl font-semibold mb-3 ${accent ? "text-[#FAF7F2]" : "text-[#5C3D2E]"}`}
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {title}
              </h3>
              <p className={`text-sm leading-relaxed ${accent ? "text-[#E8D5B7]/80" : "text-[#5C3D2E]/70"}`}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

// ─── SLIDE 4: MARKET SIZE ─────────────────────────────────────────────────────
function Slide4() {
  return (
    <SlideWrapper bg="warm">
      <div className="max-w-5xl w-full">
        <span className="text-[#7A8C6E] text-xs font-semibold uppercase tracking-[0.3em] block mb-6">
          Market Opportunity
        </span>
        <h2
          className="text-3xl md:text-4xl font-semibold text-[#5C3D2E] mb-12 leading-snug"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          The largest business transfer in history is happening right now.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: TAM/SAM/SOM */}
          <div className="space-y-4">
            {[
              { label: "TAM", sublabel: "12M small businesses, owners 55+", value: "$5.8B/yr" },
              { label: "SAM", sublabel: "3.2M owners planning to sell in 5 years", value: "$1.5B/yr" },
              { label: "SOM", sublabel: "50K businesses listed for sale annually", value: "$150M/yr" },
            ].map(({ label, sublabel, value }, i) => (
              <div
                key={label}
                className={`rounded-xl p-6 flex items-center justify-between ${i === 0 ? "bg-[#5C3D2E] text-[#FAF7F2]" : i === 1 ? "bg-[#7A8C6E]/20 border border-[#7A8C6E]/30" : "bg-[#E8D5B7]/50 border border-[#5C3D2E]/10"}`}
              >
                <div>
                  <span className={`text-xs font-bold uppercase tracking-widest ${i === 0 ? "text-[#E8D5B7]" : "text-[#7A8C6E]"}`}>{label}</span>
                  <p className={`text-sm mt-1 ${i === 0 ? "text-[#FAF7F2]/70" : "text-[#5C3D2E]/70"}`}>{sublabel}</p>
                </div>
                <span
                  className={`text-2xl font-bold ${i === 0 ? "text-[#E8D5B7]" : "text-[#5C3D2E]"}`}
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
          {/* Right: Tailwinds */}
          <div className="bg-white/60 border border-[#5C3D2E]/10 rounded-2xl p-7">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp size={18} className="text-[#7A8C6E]" />
              <span className="text-[#7A8C6E] text-xs font-semibold uppercase tracking-widest">Market Tailwinds</span>
            </div>
            <div className="space-y-5">
              {[
                { stat: "10,000/day", desc: "baby boomers retiring — every single day" },
                { stat: "$10T", desc: "in private business value tied up in boomer-owned companies" },
                { stat: "76%", desc: "of small business owners plan to exit in the next 10 years" },
                { stat: "8.2% CAGR", desc: "business broker industry growth" },
                { stat: "+238%", desc: '"family business succession planning" YoY keyword growth' },
              ].map(({ stat, desc }) => (
                <div key={stat} className="flex items-start gap-4">
                  <span
                    className="text-[#5C3D2E] font-bold text-lg shrink-0 w-28"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {stat}
                  </span>
                  <span className="text-[#5C3D2E]/70 text-sm leading-relaxed">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

// ─── SLIDE 5: HOW IT WORKS ────────────────────────────────────────────────────
function Slide5() {
  return (
    <SlideWrapper bg="walnut">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E8D5B7' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      <div className="max-w-5xl w-full relative z-10">
        <span className="text-[#7A8C6E] text-xs font-semibold uppercase tracking-[0.3em] block mb-6">
          How It Works
        </span>
        <h2
          className="text-3xl md:text-4xl font-semibold text-[#FAF7F2] mb-12 leading-snug"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Three sessions. Eight knowledge areas. One buyer-ready document.
        </h2>
        <div className="grid md:grid-cols-5 gap-6 items-start">
          {/* Steps: col 3 */}
          <div className="md:col-span-3 space-y-4">
            {[
              {
                step: "Step 1",
                title: "RECORD",
                body: "Owner opens Succession on any browser. Clicks the large record button. AI guides the conversation with industry-specific questions. Time: 45–90 minutes per session.",
              },
              {
                step: "Step 2",
                title: "EXTRACT",
                body: "AI transcribes, organizes, and structures content into 8 buyer-critical knowledge areas — formatted to impress, not just inform.",
              },
              {
                step: "Step 3",
                title: "DELIVER",
                body: "A professional, printable handover document. Downloadable as PDF. Shareable via secure broker link. Not a messy pile of Loom videos.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex gap-5 border border-[#E8D5B7]/10 rounded-xl p-5 bg-white/5">
                <div className="shrink-0">
                  <span className="text-[#7A8C6E] text-xs uppercase tracking-widest block">{step}</span>
                  <span
                    className="text-[#E8D5B7] font-bold text-lg"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {title}
                  </span>
                </div>
                <p className="text-[#E8D5B7]/70 text-sm leading-relaxed pt-1">{body}</p>
              </div>
            ))}
          </div>
          {/* 8 knowledge areas: col 2 */}
          <div className="md:col-span-2 border border-[#E8D5B7]/10 rounded-xl p-6 bg-white/5">
            <p className="text-[#E8D5B7]/60 text-xs uppercase tracking-widest mb-4">8 Knowledge Areas</p>
            <div className="space-y-2">
              {[
                "Customer relationships & concentration",
                "Operational processes & daily workflows",
                "Vendor / supplier relationships & terms",
                "Financial overview & pricing methodology",
                "Key staff dependencies & org structure",
                "Business risks & mitigation strategies",
                "Transition plan & owner's post-sale role",
                "Business history & competitive advantages",
              ].map((area) => (
                <div key={area} className="flex items-start gap-2">
                  <span className="text-[#7A8C6E] text-xs mt-0.5">✓</span>
                  <span className="text-[#E8D5B7]/70 text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

// ─── SLIDE 6: TRACTION ────────────────────────────────────────────────────────
function Slide6() {
  return (
    <SlideWrapper bg="cream">
      <div className="max-w-5xl w-full">
        <span className="text-[#7A8C6E] text-xs font-semibold uppercase tracking-[0.3em] block mb-6">
          Validation
        </span>
        <h2
          className="text-3xl md:text-4xl font-semibold text-[#5C3D2E] mb-10 leading-snug"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Market validated before we launched.
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {/* Community signals */}
          {[
            {
              icon: "🟠",
              platform: "Reddit",
              score: "8/10",
              detail: "r/smallbusiness (1.5M members) — weekly threads asking 'how do I document my business for sale?'",
            },
            {
              icon: "🔵",
              platform: "Facebook Groups",
              score: "7/10",
              detail: '"Business Broker Network" (25K+), "Buy/Sell a Business" (18K+) — active daily discussions on this exact problem.',
            },
            {
              icon: "🔴",
              platform: "YouTube",
              score: "7/10",
              detail: "Business broker channels generating 100K+ views on exit prep content — demand is proven.",
            },
          ].map(({ icon, platform, score, detail }) => (
            <div key={platform} className="bg-[#E8D5B7]/40 border border-[#5C3D2E]/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{icon}</span>
                <span className="bg-[#7A8C6E]/20 text-[#7A8C6E] text-xs font-bold px-2.5 py-1 rounded-full">{score}</span>
              </div>
              <h3
                className="text-[#5C3D2E] font-semibold mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {platform}
              </h3>
              <p className="text-[#5C3D2E]/70 text-sm leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        {/* Scores + keyword */}
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <div className="bg-[#5C3D2E] rounded-xl p-6 flex items-center gap-6">
            <div className="text-center">
              <div
                className="text-5xl font-bold text-[#E8D5B7]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                81
              </div>
              <div className="text-[#E8D5B7]/60 text-xs uppercase tracking-wide mt-1">/ 100</div>
            </div>
            <div>
              <div className="text-[#FAF7F2] font-semibold">IdeaBrowser Score</div>
              <div className="text-[#E8D5B7]/60 text-sm mt-1">Opportunity 8 · Problem 8 · Why Now 9 · GTM 8</div>
            </div>
          </div>
          <div className="bg-[#7A8C6E]/15 border border-[#7A8C6E]/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={16} className="text-[#7A8C6E]" />
              <span className="text-[#7A8C6E] text-xs uppercase tracking-widest font-semibold">Keyword Validation</span>
            </div>
            <p className="text-[#5C3D2E] font-semibold">"family business succession planning"</p>
            <div className="flex gap-4 mt-2">
              <span className="text-[#5C3D2E]/70 text-sm">4,400 searches/mo</span>
              <span className="text-[#7A8C6E] font-semibold text-sm">+238% YoY</span>
              <span className="text-[#7A8C6E] text-sm">LOW competition</span>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

// ─── SLIDE 7: BUSINESS MODEL ──────────────────────────────────────────────────
function Slide7() {
  return (
    <SlideWrapper bg="warm">
      <div className="max-w-5xl w-full">
        <span className="text-[#7A8C6E] text-xs font-semibold uppercase tracking-[0.3em] block mb-6">
          Business Model
        </span>
        <h2
          className="text-3xl md:text-4xl font-semibold text-[#5C3D2E] mb-10 leading-snug"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Dual-sided revenue: owners pay to create, brokers pay to close.
        </h2>
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {/* Tier 1 */}
          <div className="bg-white/70 border border-[#5C3D2E]/15 rounded-2xl p-6">
            <div className="text-[#7A8C6E] text-xs uppercase tracking-widest font-semibold mb-3">For Owners</div>
            <div
              className="text-3xl font-bold text-[#5C3D2E] mb-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              $97<span className="text-lg font-normal text-[#5C3D2E]/50">/mo</span>
            </div>
            <div className="text-[#5C3D2E] font-semibold mb-4">Transition Plan</div>
            <ul className="space-y-2 text-sm text-[#5C3D2E]/70">
              <li className="flex items-center gap-2"><span className="text-[#7A8C6E]">✓</span> 3 voice sessions</li>
              <li className="flex items-center gap-2"><span className="text-[#7A8C6E]">✓</span> Basic handover document</li>
              <li className="flex items-center gap-2"><span className="text-[#7A8C6E]">✓</span> PDF download</li>
            </ul>
          </div>
          {/* Tier 2 — featured */}
          <div className="bg-[#5C3D2E] rounded-2xl p-6 relative">
            <span className="absolute -top-3 left-6 bg-[#7A8C6E] text-white text-xs font-bold px-3 py-1 rounded-full">BEST VALUE</span>
            <div className="text-[#E8D5B7]/60 text-xs uppercase tracking-widest font-semibold mb-3">For Owners</div>
            <div
              className="text-3xl font-bold text-[#E8D5B7] mb-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              $1,500<span className="text-lg font-normal text-[#E8D5B7]/50"> one-time</span>
            </div>
            <div className="text-[#FAF7F2] font-semibold mb-4">Full Extraction</div>
            <ul className="space-y-2 text-sm text-[#E8D5B7]/80">
              <li className="flex items-center gap-2"><span className="text-[#E8D5B7]">✓</span> Unlimited sessions, 8 weeks</li>
              <li className="flex items-center gap-2"><span className="text-[#E8D5B7]">✓</span> Complete operations manual</li>
              <li className="flex items-center gap-2"><span className="text-[#E8D5B7]">✓</span> Broker share link</li>
              <li className="flex items-center gap-2"><span className="text-[#E8D5B7]">✓</span> Priority support</li>
            </ul>
          </div>
          {/* Tier 3 */}
          <div className="bg-white/70 border border-[#5C3D2E]/15 rounded-2xl p-6">
            <div className="text-[#7A8C6E] text-xs uppercase tracking-widest font-semibold mb-3">For Brokers</div>
            <div
              className="text-3xl font-bold text-[#5C3D2E] mb-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              $200<span className="text-lg font-normal text-[#5C3D2E]/50">/deal</span>
            </div>
            <div className="text-[#5C3D2E] font-semibold mb-4">Broker Access</div>
            <ul className="space-y-2 text-sm text-[#5C3D2E]/70">
              <li className="flex items-center gap-2"><span className="text-[#7A8C6E]">✓</span> Broker dashboard</li>
              <li className="flex items-center gap-2"><span className="text-[#7A8C6E]">✓</span> Client session management</li>
              <li className="flex items-center gap-2"><span className="text-[#7A8C6E]">✓</span> Co-branded documents</li>
            </ul>
          </div>
        </div>
        {/* Unit economics */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: "Gross Margin", value: "~85%" },
            { label: "CAC Target", value: "$50–150" },
            { label: "Full Extraction LTV:CAC", value: "10x+" },
            { label: "Year 1 ARR Target", value: "$200–500K" },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <div
                className="text-2xl font-bold text-[#5C3D2E]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {value}
              </div>
              <div className="text-[#5C3D2E]/55 text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

// ─── SLIDE 8: COMPETITION ─────────────────────────────────────────────────────
function Slide8() {
  return (
    <SlideWrapper bg="cream">
      <div className="max-w-5xl w-full">
        <span className="text-[#7A8C6E] text-xs font-semibold uppercase tracking-[0.3em] block mb-6">
          Competition
        </span>
        <h2
          className="text-3xl md:text-4xl font-semibold text-[#5C3D2E] mb-10 leading-snug"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          No one is doing this for the owner. We own the white space.
        </h2>
        <div className="grid md:grid-cols-5 gap-6">
          {/* Left: table */}
          <div className="md:col-span-3 overflow-hidden rounded-2xl border border-[#5C3D2E]/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#5C3D2E] text-[#E8D5B7]">
                  <th className="text-left px-4 py-3 font-semibold">Product</th>
                  <th className="text-center px-3 py-3 font-semibold">Voice-First</th>
                  <th className="text-center px-3 py-3 font-semibold">Exit-Specific</th>
                  <th className="text-center px-3 py-3 font-semibold">Owner-Direct</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Trainual", voice: false, exit: false, owner: false },
                  { name: "Capitaliz", voice: false, exit: true, owner: false },
                  { name: "DIY (Notion + Loom)", voice: false, exit: false, owner: true },
                  { name: "Succession ✦", voice: true, exit: true, owner: true, us: true },
                ].map(({ name, voice, exit, owner, us }) => (
                  <tr
                    key={name}
                    className={us ? "bg-[#7A8C6E]/15 font-semibold" : "bg-white/50 border-b border-[#5C3D2E]/5"}
                  >
                    <td className={`px-4 py-3 ${us ? "text-[#5C3D2E] font-bold" : "text-[#5C3D2E]/70"}`}>{name}</td>
                    <td className="text-center px-3 py-3">{voice ? "✅" : "❌"}</td>
                    <td className="text-center px-3 py-3">{exit ? "✅" : "❌"}</td>
                    <td className="text-center px-3 py-3">{owner ? "✅" : "❌"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Right: differentiators */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-[#5C3D2E]/60 text-xs uppercase tracking-widest font-semibold mb-4">Key Differentiators</p>
            {[
              "Only voice-first tool built specifically for business exits",
              "Owner-direct (not advisor-facing like Capitaliz)",
              "Industry-specific question flows for each business type",
              "Buyer-ready document output (not employee training)",
              "Warmth and trust design vs cold SaaS aesthetic of all competitors",
            ].map((diff) => (
              <div key={diff} className="flex items-start gap-3 bg-[#E8D5B7]/40 rounded-xl p-4">
                <span className="text-[#7A8C6E] font-bold shrink-0">✦</span>
                <span className="text-[#5C3D2E]/80 text-sm">{diff}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

// ─── SLIDE 9: GO-TO-MARKET ────────────────────────────────────────────────────
function Slide9() {
  return (
    <SlideWrapper bg="walnut">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E8D5B7' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      <div className="max-w-5xl w-full relative z-10">
        <span className="text-[#7A8C6E] text-xs font-semibold uppercase tracking-[0.3em] block mb-6">
          Go-To-Market
        </span>
        <h2
          className="text-3xl md:text-4xl font-semibold text-[#FAF7F2] mb-10 leading-snug"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          First 90 days: broker partnerships, organic communities, SEO.
        </h2>
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {[
            {
              month: "Month 1",
              channel: "Broker Partnerships",
              detail: "Direct outreach to top 50 brokers in Houston, Phoenix, Denver. Free accounts + 50% owner discount. Goal: 5–10 partnerships → 20–50 trials.",
              highlight: true,
            },
            {
              month: "Months 1–3",
              channel: "Reddit + LinkedIn",
              detail: "r/smallbusiness (1.5M), r/buyabusiness + LinkedIn brokers/advisors. Helpful content, no promotion. Goal: 3–5 advisor partnerships, 200+ signups.",
              highlight: false,
            },
            {
              month: "Months 1–6",
              channel: "SEO + ProductHunt",
              detail: '"family business succession planning" — 4.4K/mo, +238%, LOW competition. ProductHunt Month 2: 50+ users, goal 200–500 launch-day signups.',
              highlight: false,
            },
          ].map(({ month, channel, detail, highlight }) => (
            <div
              key={channel}
              className={`rounded-xl p-6 ${highlight ? "bg-[#E8D5B7]/15 border border-[#E8D5B7]/20" : "border border-white/10 bg-white/5"}`}
            >
              <span className={`text-xs uppercase tracking-widest font-semibold block mb-2 ${highlight ? "text-[#E8D5B7]" : "text-[#7A8C6E]"}`}>{month}</span>
              <h3
                className="text-[#FAF7F2] font-semibold text-lg mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {channel}
              </h3>
              <p className="text-[#E8D5B7]/70 text-sm leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        {/* Budget timeline */}
        <div className="border border-[#E8D5B7]/10 rounded-xl p-5 bg-white/5">
          <div className="grid grid-cols-3 divide-x divide-[#E8D5B7]/10 text-center">
            {[
              { phase: "Month 1", budget: "$0", label: "100% organic" },
              { phase: "Month 2", budget: "$1,000", label: "paid test" },
              { phase: "Month 6", budget: "$3–5K/mo", label: "scaled paid" },
            ].map(({ phase, budget, label }) => (
              <div key={phase} className="px-6 py-2">
                <div className="text-[#E8D5B7]/50 text-xs uppercase tracking-widest mb-1">{phase}</div>
                <div
                  className="text-[#E8D5B7] text-xl font-bold"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {budget}
                </div>
                <div className="text-[#E8D5B7]/50 text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

// ─── SLIDE 10: TEAM / ASK ─────────────────────────────────────────────────────
function Slide10() {
  return (
    <SlideWrapper bg="cream">
      <div className="max-w-5xl w-full">
        <span className="text-[#7A8C6E] text-xs font-semibold uppercase tracking-[0.3em] block mb-6">
          Team &amp; The Ask
        </span>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: builder */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-semibold text-[#5C3D2E] mb-8 leading-snug"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Built by ChimeStream — we ship fast and know how to find product-market fit.
            </h2>
            <div className="bg-[#5C3D2E] rounded-2xl p-6 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E8D5B7]/20 flex items-center justify-center mb-4">
                <Users size={20} className="text-[#E8D5B7]" />
              </div>
              <div className="text-[#FAF7F2] font-semibold text-lg">Ash Hatef</div>
              <div className="text-[#E8D5B7]/60 text-sm mb-4">ChimeStream B.V. · Rotterdam, Netherlands</div>
              <ul className="space-y-2 text-sm text-[#E8D5B7]/80">
                <li className="flex items-start gap-2"><span className="text-[#7A8C6E]">→</span> CEO & Co-Founder, Stravix (AI content for SMBs)</li>
                <li className="flex items-start gap-2"><span className="text-[#7A8C6E]">→</span> AI automation specialist, built + sold B2B SaaS</li>
                <li className="flex items-start gap-2"><span className="text-[#7A8C6E]">→</span> Built Succession in under 24 hours (zero to live)</li>
              </ul>
            </div>
            <div className="bg-[#7A8C6E]/15 border border-[#7A8C6E]/30 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Award size={16} className="text-[#7A8C6E]" />
                <span className="text-[#7A8C6E] text-xs uppercase tracking-widest font-semibold">Live in 24 hours</span>
              </div>
              <p className="text-[#5C3D2E]/80 text-sm">13 pages, full voice recording, AI extraction, buyer-ready document output. Live at succession.ashketing.com — fully functional MVP.</p>
            </div>
          </div>
          {/* Right: the ask */}
          <div>
            <h3
              className="text-2xl font-semibold text-[#5C3D2E] mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Three paths forward
            </h3>
            <div className="space-y-4 mb-8">
              {[
                {
                  opt: "A",
                  label: "Bootstrap",
                  desc: "GO on distribution — $0 budget, organic channels, 30-day test. Brokers + Reddit + SEO.",
                },
                {
                  opt: "B",
                  label: "Funded",
                  desc: "$25,000 seed to scale broker partnerships + paid acquisition. Target $50K MRR in 6 months.",
                },
                {
                  opt: "C",
                  label: "Partnership",
                  desc: "Business broker network partnership — revenue share model. One network = 5–25 active clients per broker.",
                },
              ].map(({ opt, label, desc }) => (
                <div key={opt} className="flex gap-4 bg-[#E8D5B7]/40 border border-[#5C3D2E]/10 rounded-xl p-5">
                  <div className="w-8 h-8 rounded-full bg-[#5C3D2E] text-[#FAF7F2] flex items-center justify-center font-bold text-sm shrink-0">
                    {opt}
                  </div>
                  <div>
                    <div className="text-[#5C3D2E] font-semibold mb-1">{label}</div>
                    <div className="text-[#5C3D2E]/70 text-sm">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center border-t border-[#5C3D2E]/10 pt-6">
              <p className="text-[#5C3D2E]/50 text-xs uppercase tracking-widest mb-3">Live now at</p>
              <a
                href="https://succession.ashketing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5C3D2E] font-semibold text-xl hover:text-[#7A8C6E] transition-colors flex items-center justify-center gap-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                succession.ashketing.com
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

// ─── SLIDE COMPONENTS ARRAY ────────────────────────────────────────────────────
const slideComponents = [
  Slide1, Slide2, Slide3, Slide4, Slide5,
  Slide6, Slide7, Slide8, Slide9, Slide10,
];

const slideTitles = [
  "Title", "Problem", "Solution", "Market", "How It Works",
  "Traction", "Business Model", "Competition", "GTM", "Team & Ask",
];

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function PitchDeck() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const prev = useCallback(() => {
    if (current > 0) goTo(current - 1);
  }, [current, goTo]);

  const next = useCallback(() => {
    if (current < TOTAL_SLIDES - 1) goTo(current + 1);
  }, [current, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  // Touch swipe
  useEffect(() => {
    let startX = 0;
    const onTouchStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (dx < -50) next();
      if (dx > 50) prev();
    };
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev]);

  const SlideComponent = slideComponents[current];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ fontFamily: "var(--font-body, Inter, sans-serif)" }}>
      {/* Slide */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Header: slide title + slide counter */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 pointer-events-none">
        <motion.span
          key={`title-${current}`}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-black/25"
        >
          {slideTitles[current]}
        </motion.span>
        <span className="text-xs text-black/20 font-mono">{current + 1} / {TOTAL_SLIDES}</span>
      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
        {/* Dot indicators */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              title={slideTitles[i]}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-[#5C3D2E]"
                  : "w-2 h-2 bg-[#5C3D2E]/25 hover:bg-[#5C3D2E]/50"
              }`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-9 h-9 rounded-full border border-[#5C3D2E]/20 flex items-center justify-center text-[#5C3D2E]/60 hover:text-[#5C3D2E] hover:border-[#5C3D2E]/40 disabled:opacity-20 disabled:cursor-not-allowed transition-all bg-white/60 backdrop-blur-sm"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            disabled={current === TOTAL_SLIDES - 1}
            className="w-9 h-9 rounded-full border border-[#5C3D2E]/20 flex items-center justify-center text-[#5C3D2E]/60 hover:text-[#5C3D2E] hover:border-[#5C3D2E]/40 disabled:opacity-20 disabled:cursor-not-allowed transition-all bg-white/60 backdrop-blur-sm"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Keyboard hint — only on first slide */}
      {current === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.5 }}
          className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 text-[#E8D5B7]/40 text-xs"
        >
          <span className="border border-[#E8D5B7]/20 rounded px-2 py-0.5 font-mono">→</span>
          <span>to navigate</span>
        </motion.div>
      )}
    </div>
  );
}
