import Link from "next/link";
import { Mic, Waves, FileText, CheckCircle, ArrowRight, Shield, Lock, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PublicNav } from "@/components/succession/Navbar";

const howItWorksSteps = [
  {
    icon: Mic,
    step: "01",
    title: "You talk.",
    description: "Five structured voice sessions, 20–40 minutes each. We ask the right questions for your industry. You tell the story of how your business actually runs.",
  },
  {
    icon: Waves,
    step: "02",
    title: "AI listens.",
    description: "Every word is transcribed and structured by AI trained on business exits. Customers, operations, vendors, finances — organized automatically.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Buyers understand.",
    description: "A professional handover document your broker can share and your buyer can trust. The operational manual your business never had.",
  },
];

const documentSections = [
  "Business Overview",
  "Key Customers",
  "Operations",
  "Vendors & Suppliers",
  "Finances",
  "Key Staff",
  "Risks & Gotchas",
  "Transition Guidance",
];

const pricingTiers = [
  {
    name: "Transition",
    price: "$97",
    period: "/month",
    description: "For owners beginning their exit journey",
    features: [
      "5 sessions per month",
      "AI extraction & organization",
      "Handover document",
      "Broker sharing link",
    ],
    cta: "Start Monthly Plan",
    featured: false,
    href: "/signup",
  },
  {
    name: "Full Extraction",
    price: "$1,500",
    period: "one-time",
    description: "Complete package for your business exit",
    features: [
      "Complete 5-session package",
      "Formatted PDF handover doc",
      "Priority processing",
      "1 broker distribution",
    ],
    cta: "Get Full Extraction",
    featured: true,
    href: "/signup",
  },
  {
    name: "Broker Access",
    price: "$200",
    period: "per deal",
    description: "For brokers representing a listing",
    features: [
      "Access to specific listing",
      "Buyer-ready format",
      "Confidential share link",
      "Print-ready document",
    ],
    cta: "Request Broker Access",
    featured: false,
    href: "/signup",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <PublicNav />

      {/* Hero */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[720px]">
            <p className="text-xs font-semibold uppercase tracking-widest text-walnut-light mb-6">
              Built for retiring business owners
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-walnut leading-[1.1] mb-6">
              Everything you know,<br />captured.
            </h1>
            <p className="text-xl text-secondary-foreground leading-relaxed mb-10 max-w-[560px]">
              Succession turns 5 voice conversations into the complete handover document your business deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-walnut hover:bg-walnut-hover text-cream uppercase tracking-wide text-xs font-semibold px-8 py-4 h-auto"
              >
                <Link href="/signup">Get Started <ArrowRight size={16} className="ml-2 inline" /></Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-walnut text-walnut hover:bg-parchment uppercase tracking-wide text-xs font-semibold px-8 py-4 h-auto"
              >
                <Link href="/about">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-surface-warm py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-walnut-light mb-4">Process</p>
            <h2 className="font-display text-4xl font-semibold text-walnut">
              Three conversations.<br />One complete handover document.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorksSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-parchment-dark rounded-lg p-8 shadow-sm hover:shadow-md hover:border-walnut-light transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-xs font-semibold text-walnut-light uppercase tracking-widest">{step.step}</span>
                </div>
                <div className="w-10 h-10 flex items-center justify-center mb-4">
                  <step.icon size={32} className="text-walnut" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-semibold text-xl text-walnut mb-3">{step.title}</h3>
                <p className="text-secondary-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Sections */}
      <section className="bg-cream py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-walnut-light mb-4">Output</p>
            <h2 className="font-display text-4xl font-semibold text-walnut mb-4">
              The 8 things every buyer needs to know
            </h2>
            <p className="text-lg text-secondary-foreground max-w-[560px]">
              Your handover document covers every area a serious buyer will ask about during diligence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {documentSections.map((section) => (
              <div key={section} className="flex items-center gap-3 bg-white border border-parchment-dark rounded-lg p-4">
                <CheckCircle size={18} className="text-sage flex-shrink-0" />
                <span className="text-sm font-medium text-secondary-foreground">{section}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-surface-warm py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="bg-white border border-parchment-dark rounded-lg p-8 border-l-4 border-l-walnut">
              <p className="font-display italic text-xl text-walnut leading-relaxed mb-4">
                "The seller has all the knowledge in his head. That&apos;s the real risk in this deal."
              </p>
              <footer className="text-sm text-muted-foreground">— Business buyer, r/BuyABusinessForum</footer>
            </blockquote>
            <blockquote className="bg-white border border-parchment-dark rounded-lg p-8 border-l-4 border-l-walnut">
              <p className="font-display italic text-xl text-walnut leading-relaxed mb-4">
                "Diligence fell apart when we couldn&apos;t get answers about operations. Deal died in week 3."
              </p>
              <footer className="text-sm text-muted-foreground">— Business broker, IBBA member</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="bg-cream py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-walnut-light mb-4">Pricing</p>
            <h2 className="font-display text-4xl font-semibold text-walnut mb-4">Simple, transparent pricing</h2>
            <p className="text-lg text-secondary-foreground">No advisor needed. No consultant fee. Just your voice.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-lg p-8 border transition-all ${
                  tier.featured
                    ? "bg-walnut border-walnut text-cream shadow-lg"
                    : "bg-white border-parchment-dark hover:border-walnut-light hover:shadow-md"
                }`}
              >
                <h3 className={`font-heading font-semibold text-lg mb-1 ${tier.featured ? "text-cream" : "text-walnut"}`}>{tier.name}</h3>
                <p className={`text-sm mb-4 ${tier.featured ? "text-cream/70" : "text-muted-foreground"}`}>{tier.description}</p>
                <div className={`text-4xl font-display font-semibold mb-1 ${tier.featured ? "text-cream" : "text-walnut"}`}>
                  {tier.price}
                  <span className={`text-base font-body font-normal ml-1 ${tier.featured ? "text-cream/70" : "text-muted-foreground"}`}>{tier.period}</span>
                </div>
                <div className={`border-t my-6 ${tier.featured ? "border-white/20" : "border-parchment-dark"}`} />
                <ul className="space-y-2 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${tier.featured ? "text-cream/90" : "text-secondary-foreground"}`}>
                      <CheckCircle size={14} className={tier.featured ? "text-parchment" : "text-sage"} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full uppercase tracking-wide text-xs font-semibold ${
                    tier.featured
                      ? "bg-cream text-walnut hover:bg-parchment"
                      : "bg-walnut hover:bg-walnut-hover text-cream"
                  }`}
                >
                  <Link href={tier.href}>{tier.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/pricing" className="text-sm text-walnut font-medium hover:underline">
              See full pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-walnut py-24">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h2 className="font-display text-4xl font-semibold text-cream mb-4">
            30 years of knowledge shouldn&apos;t walk out the door.
          </h2>
          <p className="text-cream/70 text-lg mb-8 max-w-[480px] mx-auto">
            Start when you&apos;re ready. Your first session is free.
          </p>
          <Button
            asChild
            className="bg-cream text-walnut hover:bg-parchment uppercase tracking-wide text-xs font-semibold px-10 py-4 h-auto"
          >
            <Link href="/signup">Start Your Handover Document <ArrowRight size={16} className="ml-2 inline" /></Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cream border-t border-parchment-dark py-12">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <span className="font-display text-xl font-semibold text-walnut">Succession</span>
              <p className="text-sm text-muted-foreground mt-1">Everything you know, captured.</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex gap-3 text-sm text-muted-foreground">
                <Shield size={16} className="text-sage" />
                <span>Secure</span>
                <Lock size={16} className="text-sage ml-2" />
                <span>Private</span>
                <File size={16} className="text-sage ml-2" />
                <span>Yours</span>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-secondary-foreground">
              <Link href="/about" className="hover:text-walnut transition-colors">About</Link>
              <Link href="/pricing" className="hover:text-walnut transition-colors">Pricing</Link>
              <Link href="/docs" className="hover:text-walnut transition-colors">Docs</Link>
            </div>
          </div>
          <div className="border-t border-parchment-dark mt-8 pt-6 text-center text-xs text-muted-foreground">
            © 2026 Succession. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
