import { AppNav } from "@/components/succession/Navbar";
import { DocumentViewer } from "@/components/succession/DocumentViewer";

const documentSections = [
  {
    id: "overview",
    title: "Business Overview",
    complete: true,
    content: `Kowalski Auto Parts has operated as a family-owned business in Cleveland, Ohio since 1994. Founded by Martin Kowalski after 8 years as a parts manager at a regional dealership, the business specializes in aftermarket and OEM replacement parts for commercial and light-duty vehicles.

The business generates approximately $2.8M in annual revenue across three core channels: walk-in retail (35%), trade accounts with local repair shops (45%), and a small but growing online catalog (20%). The trade account business is particularly stable — 22 of the top 25 trade accounts have been customers for over 10 years.

The business operates from a single 12,000 sq ft facility on Brookpark Road, which is owned outright. No mortgage. The building is a significant component of the overall business value and would typically be sold with the business.`,
  },
  {
    id: "customers",
    title: "Key Customers",
    complete: true,
    content: `The trade account segment is the backbone of this business. The top 5 accounts represent 58% of total trade revenue:

1. Hendricks Auto Service (28 years) — fleet maintenance for a regional logistics company. Relationship is with Dave Hendricks personally. Monthly order volume: ~$18,000. They have never shopped competitively; price sensitivity is low.

2. Bauer Brothers Garage (22 years) — general repair shop, 4 bays. Relationship is with both brothers. They call daily. Volume: ~$12,000/month.

3. City Transit (14 years) — municipal bus fleet. This is a bid account — renews every 3 years. Next bid is due October 2027. Martin is on a first-name basis with their fleet manager, but this relationship would likely transfer with the business.

The walk-in retail business is transactional and customer-retention is low. The business should be valued primarily on its trade account stability, not walk-in traffic.`,
  },
  {
    id: "operations",
    title: "Operations",
    complete: true,
    content: `The business runs on a daily rhythm that's been stable for 15 years. Store opens at 7:30 AM to catch early trade accounts. Inventory orders go out on Monday and Thursday mornings. The back warehouse is organized by part category, not by brand — this is intentional and the staff knows the system.

There are 4 full-time employees: 2 counter staff, 1 warehouse/delivery, 1 part-time bookkeeper (Tuesdays and Thursdays). Martin works daily but has intentionally reduced his floor time over the past 3 years to demonstrate that the business can run without him.

The POS and inventory system is AutoFluent (cloud-based). Logins and training documentation are in the manager's office. The system is current as of this year.

The delivery van (2022 Ford Transit) is leased — lease expires April 2027. Monthly payment: $680.`,
  },
  {
    id: "vendors",
    title: "Vendors & Suppliers",
    complete: false,
    content: `Primary supplier: Hendricks Industrial (Cleveland) — 15-year relationship. Key contact: Tom Calloway, Regional Sales Manager. Current pricing is approximately 12% below standard list due to volume commitments established in 2018. This pricing is relationship-dependent and a new owner should visit Calloway in person within the first month of ownership.

Steel and raw materials: Midwest Metal Supply. Lead times are currently 6 weeks. We maintain 8 weeks of inventory on hand as a buffer. This relationship is purely transactional — no personal component.

Full vendor list with contacts and terms is available in the AutoFluent system under Vendor Management.`,
  },
  {
    id: "finances",
    title: "Finances",
    complete: false,
    content: `[This section will be completed in Session 5. Financial information including margin analysis, seasonal patterns, and pricing logic will be captured here.]`,
  },
  {
    id: "staff",
    title: "Key Staff",
    complete: false,
    content: `[This section will be completed in Session 5. Information about key employees, their roles, tenure, and what a new owner needs to know about the team will be captured here.]`,
  },
  {
    id: "risks",
    title: "Risks & Gotchas",
    complete: false,
    content: `[This section will be completed after Sessions 4 and 5. Known risks, institutional knowledge, and transition warnings will be captured here.]`,
  },
  {
    id: "transition",
    title: "Transition Guidance",
    complete: false,
    content: `[This section will be completed in the final session. Martin's direct guidance to the new owner — the things he'd say if he had 30 minutes with them — will be captured here.]`,
  },
];

export default function DocumentPage() {
  return (
    <div className="min-h-screen bg-cream">
      <AppNav />

      <div className="max-w-[1200px] mx-auto px-8 py-10">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-walnut-light">Document</span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-amber-600 font-medium">3 of 8 sections complete</span>
            </div>
            <h1 className="font-display text-2xl font-semibold text-walnut">Kowalski Auto Parts — Handover Document</h1>
          </div>
        </div>

        <DocumentViewer
          businessName="Kowalski Auto Parts"
          generatedDate="March 2026"
          sections={documentSections}
          showShareButton={true}
          readOnly={false}
        />
      </div>
    </div>
  );
}
