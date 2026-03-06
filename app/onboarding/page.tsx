"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";

const steps = ["Your Business", "Business Details", "About You"];

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    revenue: "",
    yearsInBusiness: "",
    description: "",
    ownerName: "",
    role: "",
    exitTimeline: "",
  });
  const router = useRouter();

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="border-b border-parchment-dark bg-white px-8 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-xl font-semibold text-walnut">Succession</Link>
        <span className="text-sm text-muted-foreground">Step {step} of {steps.length}</span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-parchment">
        <div
          className="h-full bg-walnut transition-all duration-500"
          style={{ width: `${(step / steps.length) * 100}%` }}
        />
      </div>

      <div className="max-w-[960px] mx-auto px-8 py-16">
        <div className="grid md:grid-cols-[1fr_360px] gap-12">
          {/* Main form */}
          <div>
            {/* Step indicators */}
            <div className="flex gap-2 mb-8">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold
                      ${i + 1 < step ? "bg-sage text-white" : i + 1 === step ? "bg-walnut text-cream" : "bg-parchment text-walnut border border-parchment-dark"}
                    `}
                  >
                    {i + 1 < step ? <CheckCircle size={12} /> : i + 1}
                  </div>
                  <span className={`text-sm ${i + 1 === step ? "text-walnut font-semibold" : "text-muted-foreground"}`}>{s}</span>
                  {i < steps.length - 1 && <span className="text-parchment-dark mx-1">—</span>}
                </div>
              ))}
            </div>

            {step === 1 && (
              <div>
                <h2 className="font-display text-3xl font-semibold text-walnut mb-2">Tell us about your business</h2>
                <p className="text-muted-foreground mb-8">This helps us ask the right questions during your sessions.</p>
                <div className="space-y-6">
                  <div>
                    <Label className="text-sm font-semibold text-walnut mb-2 block">Business name</Label>
                    <Input
                      placeholder="e.g., Kowalski Auto Parts"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="border-parchment-dark focus:border-walnut bg-cream"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-walnut mb-2 block">Industry</Label>
                    <Select
                      value={formData.industry}
                      onValueChange={(v) => setFormData({ ...formData, industry: v })}
                    >
                      <SelectTrigger className="border-parchment-dark bg-cream">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="service">Service</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="font-display text-3xl font-semibold text-walnut mb-2">Business details</h2>
                <p className="text-muted-foreground mb-8">Optional — helps us tailor your question flow.</p>
                <div className="space-y-6">
                  <div>
                    <Label className="text-sm font-semibold text-walnut mb-2 block">Annual revenue range</Label>
                    <Select
                      value={formData.revenue}
                      onValueChange={(v) => setFormData({ ...formData, revenue: v })}
                    >
                      <SelectTrigger className="border-parchment-dark bg-cream">
                        <SelectValue placeholder="Select revenue range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-500k">Under $500K</SelectItem>
                        <SelectItem value="500k-1m">$500K – $1M</SelectItem>
                        <SelectItem value="1m-5m">$1M – $5M</SelectItem>
                        <SelectItem value="5m-10m">$5M – $10M</SelectItem>
                        <SelectItem value="over-10m">Over $10M</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-walnut mb-2 block">Years in business</Label>
                    <Input
                      type="number"
                      placeholder="e.g., 22"
                      value={formData.yearsInBusiness}
                      onChange={(e) => setFormData({ ...formData, yearsInBusiness: e.target.value })}
                      className="border-parchment-dark focus:border-walnut bg-cream"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-walnut mb-2 block">Brief description (optional)</Label>
                    <Textarea
                      placeholder="What does your business do? Feel free to describe it in your own words."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="border-parchment-dark focus:border-walnut bg-cream resize-none"
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="font-display text-3xl font-semibold text-walnut mb-2">And a bit about you</h2>
                <p className="text-muted-foreground mb-8">So your document feels personal, not generic.</p>
                <div className="space-y-6">
                  <div>
                    <Label className="text-sm font-semibold text-walnut mb-2 block">Your name</Label>
                    <Input
                      placeholder="Martin Kowalski"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      className="border-parchment-dark focus:border-walnut bg-cream"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-walnut mb-2 block">Your role</Label>
                    <Input
                      placeholder="Owner / Founder / CEO"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="border-parchment-dark focus:border-walnut bg-cream"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-walnut mb-2 block">Planned exit timeline</Label>
                    <Select
                      value={formData.exitTimeline}
                      onValueChange={(v) => setFormData({ ...formData, exitTimeline: v })}
                    >
                      <SelectTrigger className="border-parchment-dark bg-cream">
                        <SelectValue placeholder="When are you planning to exit?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6-months">Within 6 months</SelectItem>
                        <SelectItem value="1-year">Within 1 year</SelectItem>
                        <SelectItem value="2-years">1–2 years</SelectItem>
                        <SelectItem value="exploring">Just exploring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-10 flex gap-4">
              {step > 1 && (
                <Button
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  className="border-walnut text-walnut hover:bg-parchment"
                >
                  ← Back
                </Button>
              )}
              <Button
                onClick={handleNext}
                className="bg-walnut hover:bg-walnut-hover text-cream uppercase tracking-wide text-xs font-semibold px-8 py-3 h-auto"
              >
                {step < 3 ? "Continue →" : "Start My Sessions →"}
              </Button>
            </div>
          </div>

          {/* Side panel */}
          <div className="hidden md:block">
            <div className="bg-surface-warm border border-parchment-dark rounded-lg p-8 sticky top-8">
              <h3 className="font-heading font-semibold text-walnut mb-6">What happens next</h3>
              <div className="space-y-4">
                {[
                  { num: "1", text: "We tailor your session questions to your industry and business size." },
                  { num: "2", text: "You record 5 sessions at your own pace. Each one takes 20–40 minutes." },
                  { num: "3", text: "After each session, your handover document gets more complete." },
                  { num: "4", text: "When you're ready, share a professional PDF with your broker." },
                ].map((item) => (
                  <div key={item.num} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-parchment border border-parchment-dark text-walnut text-xs flex items-center justify-center flex-shrink-0 font-semibold">{item.num}</span>
                    <p className="text-sm text-secondary-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-parchment-dark pt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-walnut-light mb-3">Example section</p>
                <div className="bg-white rounded border border-parchment-dark p-4 text-sm text-secondary-foreground italic">
                  &ldquo;Our best customer, Hendricks Manufacturing, has been with us for 18 years. They account for about 30% of revenue. The relationship is with their plant manager, Dave Rowe — not with procurement...&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
