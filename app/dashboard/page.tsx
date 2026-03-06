import Link from "next/link";
import { ArrowRight, FileText, Download, Share2, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AppNav } from "@/components/succession/Navbar";
import { SessionProgress } from "@/components/succession/SessionProgress";

const recentSessions = [
  { id: "1", num: 1, date: "Feb 28, 2026", duration: "34 min", status: "complete", topic: "Business Overview" },
  { id: "2", num: 2, date: "Mar 2, 2026", duration: "41 min", status: "complete", topic: "Key Customers" },
  { id: "3", num: 3, date: "Mar 5, 2026", duration: "28 min", status: "complete", topic: "Operations" },
  { id: "4", num: 4, date: "—", duration: "—", status: "pending", topic: "Vendors & Suppliers" },
  { id: "5", num: 5, date: "—", duration: "—", status: "pending", topic: "Finances & Staff" },
];

const documentSections = [
  { name: "Business Overview", progress: 100, status: "complete" as const },
  { name: "Key Customers", progress: 68, status: "complete" as const },
  { name: "Operations", progress: 34, status: "in-progress" as const },
  { name: "Vendors & Suppliers", progress: 0, status: "pending" as const },
  { name: "Finances", progress: 0, status: "pending" as const },
  { name: "Key Staff", progress: 0, status: "pending" as const },
  { name: "Risks & Gotchas", progress: 0, status: "pending" as const },
  { name: "Transition Guidance", progress: 0, status: "pending" as const },
];

export default function DashboardPage() {
  const currentSession = 4;
  const businessName = "Kowalski Auto Parts";
  const industry = "Manufacturing";

  return (
    <div className="min-h-screen bg-cream">
      <AppNav />

      <div className="max-w-[1200px] mx-auto px-8 py-12">
        {/* Top bar */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="font-display text-3xl font-semibold text-walnut">Good morning, Martin.</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-secondary-foreground">{businessName}</span>
            <Badge className="bg-parchment text-walnut border border-parchment-dark text-xs uppercase tracking-wide">
              {industry}
            </Badge>
            <span className="text-muted-foreground text-sm">·</span>
            <span className="text-sm text-muted-foreground">{currentSession - 1} of 5 sessions complete</span>
          </div>
        </div>

        {/* Progress Card */}
        <div className="bg-white border border-parchment-dark rounded-lg p-8 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading font-semibold text-walnut text-lg">Your Progress</h2>
            <span className="text-sm text-muted-foreground">65% complete</span>
          </div>
          <SessionProgress
            currentSession={currentSession}
            totalSessions={5}
            sections={documentSections}
          />
          <div className="mt-8 pt-6 border-t border-parchment-dark">
            <Button
              asChild
              className="bg-walnut hover:bg-walnut-hover text-cream uppercase tracking-wide text-xs font-semibold px-8 py-3 h-auto"
            >
              <Link href="/session/new">
                Start Session {currentSession} <ArrowRight size={16} className="ml-2 inline" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Document + Next Session */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Document Card */}
          <div className="bg-white border border-parchment-dark rounded-lg p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <FileText size={20} className="text-walnut" />
              <h3 className="font-heading font-semibold text-walnut">Handover Document</h3>
            </div>
            <div className="text-sm text-muted-foreground mb-6 space-y-1">
              <div className="flex justify-between">
                <span>Sections filled</span>
                <span className="font-semibold text-walnut">3 / 8</span>
              </div>
              <div className="flex justify-between">
                <span>Last updated</span>
                <span className="text-secondary-foreground">March 5, 2026</span>
              </div>
            </div>
            <div className="h-1.5 bg-parchment rounded-full mb-6">
              <div className="h-full bg-walnut rounded-full" style={{ width: "37.5%" }} />
            </div>
            <div className="flex gap-3">
              <Button
                asChild
                size="sm"
                className="bg-walnut hover:bg-walnut-hover text-cream text-xs uppercase tracking-wide"
              >
                <Link href="/document">View Document</Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-walnut text-walnut hover:bg-parchment text-xs"
              >
                <Download size={14} className="mr-1" />
                PDF
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-walnut text-walnut hover:bg-parchment text-xs"
              >
                <Share2 size={14} className="mr-1" />
                Share
              </Button>
            </div>
          </div>

          {/* Next Session Card */}
          <div className="bg-surface-warm border border-parchment-dark rounded-lg p-8 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-semibold text-walnut">Session {currentSession}</h3>
              <Badge className="bg-parchment-dark/30 text-walnut-light text-xs">Up next</Badge>
            </div>
            <div className="mb-4">
              <p className="font-display italic text-xl text-walnut leading-snug mb-2">
                &ldquo;Tell me about your key vendors and suppliers.&rdquo;
              </p>
              <p className="text-sm text-secondary-foreground">Vendors & Suppliers — 5 questions</p>
            </div>
            <div className="text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2 mb-1">
                <Clock size={14} />
                <span>Estimated: 25–40 minutes</span>
              </div>
              <p className="text-xs mt-2 text-secondary-foreground">
                Covers: supplier relationships, terms, contacts, what a new owner needs to know about key vendors.
              </p>
            </div>
            <Button
              asChild
              className="w-full bg-walnut hover:bg-walnut-hover text-cream uppercase tracking-wide text-xs font-semibold py-3 h-auto"
            >
              <Link href="/session/new">
                Start Now <ArrowRight size={14} className="ml-2 inline" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Session History */}
        <div className="bg-white border border-parchment-dark rounded-lg shadow-sm">
          <div className="px-8 py-5 border-b border-parchment-dark">
            <h3 className="font-heading font-semibold text-walnut">Session History</h3>
          </div>
          <div className="divide-y divide-parchment-dark">
            {recentSessions.map((session) => (
              <div key={session.id} className="flex items-center gap-4 px-8 py-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0
                    ${session.status === "complete" ? "bg-sage text-white" : "bg-parchment border border-parchment-dark text-walnut"}
                  `}
                >
                  {session.status === "complete" ? <CheckCircle size={14} /> : session.num}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-walnut">Session {session.num}</span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-sm text-secondary-foreground">{session.topic}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="text-xs text-muted-foreground">{session.date}</span>
                    {session.duration !== "—" && (
                      <>
                        <span className="text-xs text-muted-foreground">·</span>
                        <span className="text-xs text-muted-foreground">{session.duration}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {session.status === "complete" ? (
                    <Badge className="bg-sage/20 text-sage border-sage/30 text-xs">Complete</Badge>
                  ) : session.num === currentSession ? (
                    <Badge className="bg-amber-50 text-amber-700 border-amber-200 text-xs flex items-center gap-1">
                      <AlertCircle size={10} />
                      Up next
                    </Badge>
                  ) : (
                    <Badge className="bg-parchment text-walnut-light border-parchment-dark text-xs">Upcoming</Badge>
                  )}
                  {session.status === "complete" && (
                    <Button asChild variant="ghost" size="sm" className="text-walnut text-xs h-auto py-1">
                      <Link href={`/session/${session.id}`}>Review</Link>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
