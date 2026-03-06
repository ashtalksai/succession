import Link from "next/link";
import { Download, CheckCircle, ArrowLeft, ArrowRight, AlertCircle, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppNav } from "@/components/succession/Navbar";

const mockTranscript = [
  {
    time: "00:00",
    speaker: "Question",
    text: "Tell me about your key vendors and suppliers.",
  },
  {
    time: "00:08",
    speaker: "Martin",
    text: "So our main supplier for parts is Hendricks Industrial out of Cleveland. We've been working with them for about 15 years now. The pricing we get is based on volume commitments we made back in 2018. That relationship is mostly with their regional sales manager, a guy named Tom Calloway.",
  },
  {
    time: "01:14",
    speaker: "Martin",
    text: "For raw materials — steel primarily — we go through Midwest Metal Supply. Lead times right now are about 6 weeks, which has been consistent for the past couple years since things stabilized after COVID. We keep about 8 weeks of inventory on hand as a buffer.",
  },
  {
    time: "02:30",
    speaker: "Martin",
    text: "The one relationship a new owner absolutely needs to protect is with Calloway at Hendricks. We get pricing that's about 12% below their standard list because of our history. That's not guaranteed — it's relationship-based. New ownership might need to make a trip to Cleveland in the first month.",
  },
];

const extractedSections = [
  {
    id: "vendors",
    title: "Vendors & Suppliers",
    status: "reviewed" as const,
    points: [
      "Primary supplier: Hendricks Industrial (Cleveland) — 15-year relationship",
      "Key contact: Tom Calloway, Regional Sales Manager at Hendricks",
      "Pricing is 12% below standard list, relationship-dependent",
      "Steel/raw materials: Midwest Metal Supply, 6-week lead times",
      "Current inventory buffer: 8 weeks of raw material",
      "Volume commitments established 2018 with Hendricks",
    ],
  },
  {
    id: "relationships",
    title: "Key Relationships",
    status: "pending" as const,
    points: [
      "Tom Calloway at Hendricks — critical to pricing advantage",
      "New owner should visit Calloway in Cleveland within first month",
    ],
  },
  {
    id: "risks",
    title: "Risks & Gotchas",
    status: "pending" as const,
    points: [
      "Hendricks pricing may not transfer automatically to new ownership",
      "No formal contract for pricing discount — verbal understanding",
    ],
  },
];

export default async function SessionReviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-cream">
      <AppNav />

      <div className="max-w-[1200px] mx-auto px-8 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-walnut -ml-2">
              <Link href="/dashboard"><ArrowLeft size={16} className="mr-1" /> Dashboard</Link>
            </Button>
          </div>
          <Button variant="outline" size="sm" className="border-parchment-dark text-secondary-foreground hover:border-walnut-light gap-2">
            <Download size={14} />
            Download Transcript
          </Button>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="font-display text-2xl font-semibold text-walnut">Session {id} Review</h1>
            <Badge className="bg-sage/20 text-sage border-sage/30 flex items-center gap-1">
              <CheckCircle size={12} />
              Complete
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">March 5, 2026 · 28 minutes · Vendors & Suppliers</p>
        </div>

        {/* 2-column layout */}
        <div className="grid grid-cols-[1fr_380px] gap-8">
          {/* LEFT: Transcript */}
          <div>
            <div className="bg-[#F9F5EF] border border-parchment-dark rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-parchment-dark flex items-center justify-between">
                <h2 className="font-heading font-semibold text-walnut">Transcript</h2>
                <span className="text-xs text-muted-foreground">28:14</span>
              </div>
              <div className="p-6 space-y-5 max-h-[600px] overflow-y-auto">
                {mockTranscript.map((entry, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-xs text-muted-foreground font-mono mt-0.5 w-10 flex-shrink-0">{entry.time}</span>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-walnut-light block mb-1">{entry.speaker}</span>
                      <p className="text-sm text-secondary-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                        {entry.text}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="flex gap-4">
                  <span className="text-xs text-muted-foreground font-mono mt-0.5 w-10 flex-shrink-0">04:12</span>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-walnut-light block mb-1">Martin</span>
                    <p className="text-sm text-secondary-foreground leading-relaxed italic">
                      [Session continued for 24 more minutes. Full transcript available for download.]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Extracted Sections (sticky) */}
          <div className="sticky top-20 self-start">
            <div className="bg-white border border-parchment-dark rounded-lg overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-parchment-dark">
                <h2 className="font-heading font-semibold text-walnut">Extracted Sections</h2>
                <p className="text-xs text-muted-foreground mt-0.5">Review and confirm what the AI extracted</p>
              </div>

              <Tabs defaultValue="vendors" className="w-full">
                <div className="px-4 pt-4 pb-0">
                  <TabsList className="w-full bg-parchment/50 border border-parchment-dark">
                    {extractedSections.map((section) => (
                      <TabsTrigger
                        key={section.id}
                        value={section.id}
                        className="text-xs flex-1 data-[state=active]:bg-walnut data-[state=active]:text-cream"
                      >
                        {section.id === "vendors" ? "Vendors" : section.id === "relationships" ? "Relations" : "Risks"}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                {extractedSections.map((section) => (
                  <TabsContent key={section.id} value={section.id} className="p-6 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-heading font-semibold text-walnut text-sm">{section.title}</h3>
                      <div className="flex items-center gap-2">
                        {section.status === "reviewed" ? (
                          <Badge className="bg-sage/20 text-sage border-sage/30 text-xs flex items-center gap-1">
                            <CheckCircle size={10} />
                            Reviewed
                          </Badge>
                        ) : (
                          <Badge className="bg-amber-50 text-amber-700 border-amber-200 text-xs flex items-center gap-1">
                            <AlertCircle size={10} />
                            Review needed
                          </Badge>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {section.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-secondary-foreground">
                          <span className="w-1 h-1 rounded-full bg-walnut-light mt-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 border-parchment-dark text-secondary-foreground hover:border-walnut text-xs gap-1">
                        <Edit2 size={12} />
                        Edit
                      </Button>
                      {section.status !== "reviewed" && (
                        <Button size="sm" className="flex-1 bg-sage hover:bg-sage/90 text-white text-xs gap-1">
                          <CheckCircle size={12} />
                          Confirm
                        </Button>
                      )}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="mt-8 pt-6 border-t border-parchment-dark flex items-center justify-between">
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-walnut gap-2">
            <Link href="/session/3"><ArrowLeft size={16} /> Previous Session</Link>
          </Button>
          <Button asChild className="bg-walnut hover:bg-walnut-hover text-cream uppercase tracking-wide text-xs font-semibold px-6 py-2 h-auto gap-2">
            <Link href="/session/new">Continue to Session 5 <ArrowRight size={14} /></Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
