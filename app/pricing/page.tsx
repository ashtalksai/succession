import Link from "next/link";
import { CheckCircle, Shield, Lock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PublicNav } from "@/components/succession/Navbar";

const faqs = [
  {
    q: "How long does a session take?",
    a: "Most sessions run 20–40 minutes. There's no minimum or maximum — you can always continue in your next session. The AI organizes everything regardless of how long you talk.",
  },
  {
    q: "What if I miss something?",
    a: "You can edit any section of your document after each session. You can also add to sections in later sessions. Nothing is permanent until you decide it is.",
  },
  {
    q: "Do I need to know technology?",
    a: "You need to be able to click a button and talk. That's it. No typing required. If you can make a phone call, you can use Succession.",
  },
  {
    q: "Who can see my document?",
    a: "Only you, until you choose to share it. The share link gives your broker or buyer read-only access to a specific document. You control sharing at all times.",
  },
  {
    q: "What happens to my recordings?",
    a: "Audio is stored securely and never shared. You can delete your recordings at any time. We use industry-standard encryption at rest and in transit.",
  },
  {
    q: "Can my broker use this too?",
    a: "Yes. The Broker Access plan lets a broker access a specific client's handover document for $200 per deal — a fraction of their commission.",
  },
  {
    q: "What if I'm not ready to sell yet?",
    a: "Many owners start 12–24 months before their planned exit. Having the document ready makes the actual sale process dramatically faster.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PublicNav />

      {/* Header */}
      <section className="bg-cream py-20">
        <div className="max-w-[720px] mx-auto px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-walnut-light mb-4">Pricing</p>
          <h1 className="font-display text-5xl font-semibold text-walnut mb-4">
            Simple, transparent pricing.
          </h1>
          <p className="text-xl text-secondary-foreground">
            No advisor needed. No consultant fee. Just your voice.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-surface-warm py-16">
        <div className="max-w-[960px] mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Transition */}
            <div className="bg-white border border-parchment-dark rounded-lg p-8">
              <h2 className="font-heading font-semibold text-xl text-walnut mb-1">Transition</h2>
              <p className="text-sm text-muted-foreground mb-6">For owners beginning their exit journey</p>
              <div className="mb-6">
                <span className="font-display text-4xl font-semibold text-walnut">$97</span>
                <span className="text-muted-foreground text-sm ml-1">/month</span>
              </div>
              <div className="border-t border-parchment-dark mb-6" />
              <ul className="space-y-3 mb-8">
                {["5 sessions per month", "AI extraction & organization", "Handover document included", "Broker sharing link"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-secondary-foreground">
                    <CheckCircle size={16} className="text-sage flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="outline"
                className="w-full border-walnut text-walnut hover:bg-parchment uppercase tracking-wide text-xs font-semibold py-3 h-auto"
              >
                <Link href="/signup">Start Monthly Plan</Link>
              </Button>
            </div>

            {/* Full Extraction — FEATURED */}
            <div className="bg-walnut border border-walnut rounded-lg p-8 shadow-xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-parchment text-walnut text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full border border-parchment-dark">
                  Most Popular
                </span>
              </div>
              <h2 className="font-heading font-semibold text-xl text-cream mb-1">Full Extraction</h2>
              <p className="text-sm text-cream/70 mb-6">Complete package for your business exit</p>
              <div className="mb-6">
                <span className="font-display text-4xl font-semibold text-cream">$1,500</span>
                <span className="text-cream/70 text-sm ml-1">one-time</span>
              </div>
              <div className="border-t border-white/20 mb-6" />
              <ul className="space-y-3 mb-8">
                {["Complete 5-session package", "Formatted PDF handover doc", "Priority processing", "1 broker distribution included"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-cream/90">
                    <CheckCircle size={16} className="text-parchment flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="w-full bg-cream text-walnut hover:bg-parchment uppercase tracking-wide text-xs font-semibold py-3 h-auto"
              >
                <Link href="/signup">Get Full Extraction</Link>
              </Button>
            </div>

            {/* Broker Access */}
            <div className="bg-white border border-parchment-dark rounded-lg p-8">
              <h2 className="font-heading font-semibold text-xl text-walnut mb-1">Broker Access</h2>
              <p className="text-sm text-muted-foreground mb-6">For brokers representing a listing</p>
              <div className="mb-6">
                <span className="font-display text-4xl font-semibold text-walnut">$200</span>
                <span className="text-muted-foreground text-sm ml-1">/deal</span>
              </div>
              <div className="border-t border-parchment-dark mb-6" />
              <ul className="space-y-3 mb-8">
                {["Access to specific listing", "Buyer-ready format", "Confidential share link", "Print-ready document"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-secondary-foreground">
                    <CheckCircle size={16} className="text-sage flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="outline"
                className="w-full border-walnut text-walnut hover:bg-parchment uppercase tracking-wide text-xs font-semibold py-3 h-auto"
              >
                <Link href="/signup">Request Broker Access</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-24">
        <div className="max-w-[720px] mx-auto px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-walnut-light mb-4">FAQ</p>
          <h2 className="font-display text-3xl font-semibold text-walnut mb-10">Common questions</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white border border-parchment-dark rounded-lg px-6"
              >
                <AccordionTrigger className="font-heading font-medium text-walnut text-left hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-secondary-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-surface-warm py-16">
        <div className="max-w-[960px] mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-parchment rounded-full flex items-center justify-center">
                <Shield size={24} className="text-walnut" />
              </div>
              <h3 className="font-heading font-semibold text-walnut">Secure</h3>
              <p className="text-sm text-secondary-foreground">Industry-standard encryption. Your data is never sold or shared.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-parchment rounded-full flex items-center justify-center">
                <Lock size={24} className="text-walnut" />
              </div>
              <h3 className="font-heading font-semibold text-walnut">Private</h3>
              <p className="text-sm text-secondary-foreground">Only you control access to your document. Share only when you&apos;re ready.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-parchment rounded-full flex items-center justify-center">
                <FileText size={24} className="text-walnut" />
              </div>
              <h3 className="font-heading font-semibold text-walnut">Yours</h3>
              <p className="text-sm text-secondary-foreground">Download your document anytime. It belongs to you, not us.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
