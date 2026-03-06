import { CheckCircle, Circle } from "lucide-react";

interface SessionProgressProps {
  currentSession: number;
  totalSessions: number;
  sections: { name: string; progress: number; status: "complete" | "in-progress" | "pending" }[];
}

export function SessionProgress({ currentSession, totalSessions, sections }: SessionProgressProps) {
  return (
    <div className="space-y-6">
      {/* Session bubbles */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-walnut-light mb-3">Your Progress</p>
        <div className="flex items-center gap-3">
          {Array.from({ length: totalSessions }).map((_, i) => {
            const sessionNum = i + 1;
            const isComplete = sessionNum < currentSession;
            const isActive = sessionNum === currentSession;
            return (
              <div key={i} className="flex flex-col items-center gap-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all
                    ${isComplete ? "bg-sage text-white" : ""}
                    ${isActive ? "bg-walnut text-cream" : ""}
                    ${!isComplete && !isActive ? "bg-parchment border-2 border-walnut text-walnut" : ""}
                  `}
                >
                  {isComplete ? <CheckCircle size={16} /> : sessionNum}
                </div>
                <span className="text-xs text-muted-foreground">S{sessionNum}</span>
              </div>
            );
          })}
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          {currentSession - 1} of {totalSessions} sessions complete
          {currentSession <= totalSessions && ` — Document ready in ~${totalSessions - currentSession + 1} more session${totalSessions - currentSession !== 0 ? "s" : ""}`}
        </p>
      </div>

      {/* Section extraction */}
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-walnut-light mb-3">Document Sections</p>
        {sections.map((section, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-5 flex-shrink-0">
              {section.status === "complete" && <CheckCircle size={16} className="text-sage" />}
              {section.status === "in-progress" && <Circle size={16} className="text-walnut fill-walnut" />}
              {section.status === "pending" && <Circle size={16} className="text-parchment-dark" />}
            </div>
            <span className="text-sm w-44 flex-shrink-0 text-secondary-foreground">{section.name}</span>
            <div className="flex-1 h-1.5 bg-parchment rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${section.status === "complete" ? "bg-sage" : section.status === "in-progress" ? "bg-walnut" : "bg-transparent"}`}
                style={{ width: `${section.progress}%` }}
              />
            </div>
            <span className="text-xs text-muted-foreground w-8 text-right">{section.progress}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
