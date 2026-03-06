import Link from "next/link";
import { Download, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const documentSections = [
  { id: "overview", title: "Business Overview", complete: true },
  { id: "customers", title: "Key Customers", complete: true },
  { id: "operations", title: "Operations", complete: true },
  { id: "vendors", title: "Vendors & Suppliers", complete: true },
  { id: "finances", title: "Finances", complete: true },
  { id: "staff", title: "Key Staff", complete: true },
  { id: "risks", title: "Risks & Gotchas", complete: true },
  { id: "transition", title: "Transition Guidance", complete: true },
];

const documentContent = [
  {
    id: "overview",
    title: "Business Overview",
    content: `Kowalski Auto Parts has operated as a family-owned business in Cleveland, Ohio since 1994. Founded by Martin Kowalski after 8 years as a parts manager at a regional dealership, the business specializes in aftermarket and OEM replacement parts for commercial and light-duty vehicles.

The business generates approximately $2.8M in annual revenue across three core channels: walk-in retail (35%), trade accounts with local repair shops (45%), and a small but growing online catalog (20%). The trade account business is particularly stable — 22 of the top 25 trade accounts have been customers for over 10 years.

The business operates from a single 12,000 sq ft facility on Brookpark Road, which is owned outright. The building is a significant component of the overall business value.`,
  },
  {
    id: "customers",
    title: "Key Customers",
    content: `The trade account segment is the backbone of this business. The top 5 accounts represent 58% of total trade revenue.

Hendricks Auto Service (28 years) — fleet maintenance for a regional logistics company. Relationship is with Dave Hendricks personally. Monthly order volume: approximately $18,000.

Bauer Brothers Garage (22 years) — general repair shop, 4 bays. Relationship is with both brothers. Volume: approximately $12,000/month.

City Transit (14 years) — municipal bus fleet. Bid account, renews every 3 years. Next bid due October 2027.`,
  },
  {
    id: "operations",
    title: "Operations",
    content: `Store opens at 7:30 AM to catch early trade accounts. Inventory orders go out Monday and Thursday mornings. The back warehouse is organized by part category, not brand — staff knows the system.

Four full-time employees: 2 counter staff, 1 warehouse/delivery, 1 part-time bookkeeper. Martin works daily but has reduced floor time over the past 3 years.

The POS and inventory system is AutoFluent (cloud-based). The delivery van (2022 Ford Transit) is leased through April 2027.`,
  },
  {
    id: "vendors",
    title: "Vendors & Suppliers",
    content: `Primary supplier: Hendricks Industrial (Cleveland). Key contact: Tom Calloway, Regional Sales Manager. Pricing is approximately 12% below standard list — relationship-dependent. New owner should visit Calloway in person within first month.

Midwest Metal Supply handles steel and raw materials. Lead times: 6 weeks. Inventory buffer maintained at 8 weeks.`,
  },
  {
    id: "finances",
    title: "Finances",
    content: `Gross margin runs approximately 34-38% depending on product mix. Trade accounts typically run at lower margins (30-32%) than walk-in retail (40-44%). Online business is approaching trade account margins as volume grows.

Seasonal pattern: Q1 is slowest (20% of annual revenue). Q3 is strongest, driven by fleet maintenance cycles. Working capital requirement is moderate — approximately $180K in inventory at any time.`,
  },
  {
    id: "staff",
    title: "Key Staff",
    content: `Counter staff: James Petrosian (9 years) and Sandra Kurtz (6 years). Both are trusted with trade account relationships. James handles the Hendricks and City Transit accounts personally.

Warehouse/delivery: Rob Talley (4 years). Handles all deliveries and warehouse organization. Knows the non-standard filing system in the back.

Bookkeeper: Ellen Morrison (12 years, part-time). Does all accounts payable, payroll processing. Only works Tuesdays and Thursdays. Her continued presence through any transition would be important.`,
  },
  {
    id: "risks",
    title: "Risks & Gotchas",
    content: `The Hendricks Industrial pricing advantage is not contractual. It is a relationship. New ownership must establish this relationship directly within the first 60 days.

The City Transit bid account is currently in year 1 of a 3-year term. A new owner will need to rebid this account in October 2027. Having 18 months of service history under new ownership before the rebid is important.

One commercial property lease (the storage unit on State Road) is in Martin's personal name, not the company's. This will need to be renegotiated or transferred at closing.`,
  },
  {
    id: "transition",
    title: "Transition Guidance",
    content: `The most important thing a new owner needs to do in the first 30 days: meet every trade account personally. Don't send email. Call them, then visit. These relationships have been built over decades and they will be evaluating you.

James Petrosian is the person who actually knows where everything is. If you don't know something, ask James before you ask anyone else.

The business does not need you to make major changes. The formula works. Your job in year one is to maintain what exists while you learn how it works. Optimize later.`,
  },
];

export default async function SharePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;

  return (
    <div className="min-h-screen bg-cream print:bg-white">
      {/* Confidential banner */}
      <div className="bg-walnut/10 border-b border-parchment-dark px-8 py-3 print:border-b-2 print:border-walnut">
        <div className="max-w-[960px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertTriangle size={16} className="text-walnut" />
            <span className="text-sm font-semibold text-walnut uppercase tracking-wide">Confidential</span>
            <span className="text-muted-foreground text-sm">·</span>
            <span className="text-sm text-secondary-foreground">Business Handover Document — Shared via Succession</span>
          </div>
          <div className="text-sm text-secondary-foreground hidden md:block">
            Shared by: <span className="font-semibold text-walnut">Martin Kowalski</span>
          </div>
        </div>
      </div>

      <div className="max-w-[960px] mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="font-display text-xl font-semibold text-walnut block mb-8">
            Succession
          </Link>
          <h1 className="font-display text-4xl font-semibold text-walnut mb-2">Business Handover Document</h1>
          <p className="text-xl text-secondary-foreground mb-1">Kowalski Auto Parts</p>
          <p className="text-sm text-muted-foreground">Generated: March 2026</p>
        </div>

        {/* Table of Contents */}
        <div className="bg-surface-warm border border-parchment-dark rounded-lg p-8 mb-12">
          <h2 className="font-heading font-semibold text-walnut mb-6">Table of Contents</h2>
          <div className="space-y-2">
            {documentSections.map((section, i) => (
              <div key={section.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle size={14} className="text-sage flex-shrink-0" />
                  <a
                    href={`#section-${section.id}`}
                    className="text-secondary-foreground hover:text-walnut transition-colors"
                  >
                    {i + 1}. {section.title}
                  </a>
                </div>
                <div className="flex-1 mx-4 border-b border-dotted border-parchment-dark" />
                <span className="text-sm text-muted-foreground">{(i + 1) * 2}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-parchment-dark mt-6 pt-6 flex gap-4">
            <Button
              className="bg-walnut hover:bg-walnut-hover text-cream uppercase tracking-wide text-xs font-semibold gap-2"
            >
              <Download size={14} />
              Download PDF
            </Button>
            <Button variant="outline" className="border-parchment-dark text-secondary-foreground hover:border-walnut text-xs gap-2">
              Contact Owner
            </Button>
          </div>
        </div>

        {/* Document sections */}
        <div className="space-y-16">
          {documentContent.map((section, i) => (
            <div key={section.id} id={`section-${section.id}`} className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-walnut-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="font-display font-semibold text-2xl text-walnut mb-4">{section.title}</h2>
              <div className="border-t border-parchment-dark mb-6" />
              <div
                className="text-secondary-foreground leading-relaxed whitespace-pre-line"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  lineHeight: "1.7",
                  maxWidth: "70ch",
                }}
              >
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-parchment-dark text-center">
          <p className="text-sm text-muted-foreground mb-1">
            Prepared with <Link href="/" className="text-walnut font-medium hover:underline">Succession</Link> · succession.ashketing.com
          </p>
          <p className="text-xs text-muted-foreground">
            This document is confidential. Shared with token: {token}
          </p>
        </div>
      </div>
    </div>
  );
}
