import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PublicNav } from "@/components/succession/Navbar";

const documentSections = [
  { title: "Business Overview", desc: "What the business does, its history, and what makes it work." },
  { title: "Key Customers", desc: "Who buys, the relationships behind those accounts, and retention patterns." },
  { title: "Operations", desc: "How the business runs day-to-day — the routines, systems, and handoffs that keep things moving." },
  { title: "Vendors & Suppliers", desc: "Who you buy from, the terms, the relationships, and what a new owner needs to know." },
  { title: "Finances", desc: "Pricing logic, margin drivers, seasonal patterns, and where the money actually comes from." },
  { title: "Key Staff", desc: "Who's essential, who knows what, and how to keep the right people through a transition." },
  { title: "Risks & Gotchas", desc: "What could go wrong, what the owner has learned to watch for, the institutional knowledge." },
  { title: "Transition Guidance", desc: "The honest list of what a new owner must know in the first 90 days." },
];

const industries = [
  {
    name: "Manufacturing",
    questions: "Production processes, quality control, equipment schedules, supplier relationships, inventory management",
  },
  {
    name: "Retail",
    questions: "Inventory systems, supplier terms, seasonal patterns, customer loyalty, loss prevention",
  },
  {
    name: "Service",
    questions: "Client relationships, delivery processes, pricing logic, subcontractor management, tools & systems",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PublicNav />

      {/* Hero */}
      <section className="bg-cream py-24">
        <div className="max-w-[720px] mx-auto px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-walnut-light mb-6">About</p>
          <h1 className="font-display text-5xl font-semibold text-walnut leading-[1.1] mb-6">
            Built for the conversation you&apos;ve been putting off.
          </h1>
          <p className="text-xl text-secondary-foreground leading-relaxed">
            Every year, thousands of retiring business owners sell for less than their business is worth — 
            not because of bad numbers, but because buyers can&apos;t figure out how the business actually runs.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-surface-warm py-16">
        <div className="max-w-[720px] mx-auto px-8">
          <div className="prose prose-stone max-w-none" style={{ fontFamily: "var(--font-body)", fontSize: "1.125rem", lineHeight: "1.7", color: "#5A4A3C" }}>
            <p>
              There&apos;s a $14 trillion problem sitting in privately owned American businesses. The owners who built them 
              are retiring at the fastest rate in history — 10,000 baby boomers every single day. Most of them have never 
              written down how their business works.
            </p>
            <p>
              They know it. The knowledge lives in their head. In the relationships they&apos;ve built over 30 years. 
              In the judgment calls they make without thinking. In the deals they&apos;ve learned to avoid and the customers 
              they&apos;ve learned to keep.
            </p>
            <p>
              When they sell, that knowledge walks out with them. The buyer is left running a business they don&apos;t fully 
              understand. Deals fall through during diligence. Prices get discounted for &quot;operational risk.&quot; Businesses that 
              should thrive collapse under new ownership.
            </p>
          </div>

          <blockquote className="my-8 pl-6 border-l-4 border-walnut bg-parchment/50 py-4 pr-4 rounded-r">
            <p className="font-display italic text-xl text-walnut leading-relaxed">
              &quot;This is about what you built. Not what you&apos;re leaving.&quot;
            </p>
          </blockquote>

          <div className="prose prose-stone max-w-none" style={{ fontFamily: "var(--font-body)", fontSize: "1.125rem", lineHeight: "1.7", color: "#5A4A3C" }}>
            <p>
              Succession was built to fix this. We ask the right questions — different ones for manufacturing, retail, 
              and service businesses — and we organize everything you share into a document a buyer can actually use.
            </p>
            <p>
              Five sessions. Twenty to forty minutes each. At the end, you have the operational manual your business 
              never had. The kind of document that closes deals instead of killing them.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works — Detail */}
      <section className="bg-cream py-24">
        <div className="max-w-[720px] mx-auto px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-walnut-light mb-4">Process</p>
          <h2 className="font-display text-3xl font-semibold text-walnut mb-12">
            Five conversations. In your own words.
          </h2>
          <div className="space-y-8">
            {[
              {
                num: "01",
                title: "You start a session",
                body: "Log in and click Start Recording. We ask you one question at a time, specific to your industry. There's no typing required — just talk.",
              },
              {
                num: "02",
                title: "AI organizes everything",
                body: "Your voice is transcribed immediately. GPT-4o structures the content into the 8 sections a buyer needs. You can review and edit anything.",
              },
              {
                num: "03",
                title: "Your document builds over 3–5 sessions",
                body: "Each session fills in more of the document. By session 5, you have complete coverage across all 8 sections.",
              },
              {
                num: "04",
                title: "Share with your broker",
                body: "One click generates a professional PDF and a shareable link. Your broker can share it with buyers before they even ask for it.",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-6">
                <span className="text-xs font-semibold text-walnut-light uppercase tracking-widest mt-1 w-8 flex-shrink-0">{step.num}</span>
                <div>
                  <h3 className="font-heading font-semibold text-walnut mb-2">{step.title}</h3>
                  <p className="text-secondary-foreground leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Handover Document */}
      <section className="bg-surface-warm py-24">
        <div className="max-w-[720px] mx-auto px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-walnut-light mb-4">Output</p>
          <h2 className="font-display text-3xl font-semibold text-walnut mb-4">
            The handover document
          </h2>
          <p className="text-secondary-foreground mb-10 text-lg">
            Everything a buyer needs to understand your business, in a format they can actually use.
          </p>
          <div className="space-y-4">
            {documentSections.map((s) => (
              <div key={s.title} className="flex gap-4 bg-white border border-parchment-dark rounded-lg p-5">
                <CheckCircle size={18} className="text-sage flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-semibold text-walnut mb-1">{s.title}</h4>
                  <p className="text-sm text-secondary-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Flows */}
      <section className="bg-cream py-24">
        <div className="max-w-[720px] mx-auto px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-walnut-light mb-4">Industries</p>
          <h2 className="font-display text-3xl font-semibold text-walnut mb-8">
            Questions built for your business type
          </h2>
          <div className="grid gap-4">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-white border border-parchment-dark rounded-lg p-6">
                <h3 className="font-heading font-semibold text-walnut mb-2">{ind.name}</h3>
                <p className="text-sm text-secondary-foreground">{ind.questions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-walnut py-20">
        <div className="max-w-[720px] mx-auto px-8 text-center">
          <h2 className="font-display text-3xl font-semibold text-cream mb-4">
            Start capturing your business knowledge
          </h2>
          <p className="text-cream/70 mb-8">Your first session is free. No credit card required.</p>
          <Button
            asChild
            className="bg-cream text-walnut hover:bg-parchment uppercase tracking-wide text-xs font-semibold px-10 py-4 h-auto"
          >
            <Link href="/signup">Get Started <ArrowRight size={16} className="ml-2 inline" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
