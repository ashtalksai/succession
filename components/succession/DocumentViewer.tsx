"use client";

import { useState } from "react";
import { Download, Share2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DocumentSection {
  id: string;
  title: string;
  content: string;
  complete: boolean;
}

interface DocumentViewerProps {
  businessName: string;
  generatedDate: string;
  sections: DocumentSection[];
  showShareButton?: boolean;
  readOnly?: boolean;
}

export function DocumentViewer({ businessName, generatedDate, sections, showShareButton = true, readOnly = false }: DocumentViewerProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(`section-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex gap-8 min-h-screen">
      {/* Sidebar */}
      <aside className="w-[280px] flex-shrink-0 sticky top-20 self-start">
        <div className="bg-white border border-parchment-dark rounded-lg p-6 shadow-sm">
          <h3 className="font-heading font-semibold text-walnut text-sm mb-1">{businessName}</h3>
          <p className="text-xs text-muted-foreground mb-1">Complete Handover Document</p>
          <p className="text-xs text-muted-foreground mb-4">Generated {generatedDate}</p>

          <div className="border-t border-parchment-dark pt-4 mb-4">
            <nav className="space-y-1">
              {sections.map((section, i) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors
                    ${activeSection === section.id ? "text-walnut font-semibold bg-surface-warm" : "text-secondary-foreground hover:text-walnut hover:bg-surface-warm"}
                  `}
                >
                  {section.complete ? (
                    <CheckCircle size={14} className="text-sage flex-shrink-0" />
                  ) : (
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-parchment-dark flex-shrink-0" />
                  )}
                  <span>{i + 1}. {section.title}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-2">
            <Button
              variant="default"
              size="sm"
              className="w-full bg-walnut hover:bg-walnut-hover text-cream text-xs uppercase tracking-wide"
            >
              <Download size={14} className="mr-2" />
              Download PDF
            </Button>
            {showShareButton && !readOnly && (
              <Button
                variant="outline"
                size="sm"
                className="w-full border-walnut text-walnut hover:bg-parchment text-xs uppercase tracking-wide"
              >
                <Share2 size={14} className="mr-2" />
                Share with Broker
              </Button>
            )}
          </div>
        </div>
      </aside>

      {/* Document content */}
      <div className="flex-1 min-w-0">
        <div className="max-w-[720px]">
          {sections.map((section, i) => (
            <div key={section.id} id={`section-${section.id}`} className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-walnut-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.complete && <CheckCircle size={16} className="text-sage" />}
              </div>
              <h2 className="font-display font-semibold text-2xl text-walnut mb-4">{section.title}</h2>
              <div className="border-t border-parchment-dark mb-6" />
              <div
                className="prose prose-stone max-w-none"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  lineHeight: "1.7",
                  color: "#5A4A3C",
                }}
              >
                <p>{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
