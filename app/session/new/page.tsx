"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, SkipForward, Pause, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppNav } from "@/components/succession/Navbar";
import { RecordButton } from "@/components/succession/RecordButton";
import { Waveform } from "@/components/succession/Waveform";

const questions = [
  {
    id: 1,
    question: "Tell me about your key vendors and suppliers.",
    subPrompt: "Who do you buy from most often? Describe the relationships, terms, and what makes them reliable — or not.",
    tips: ["Mention supplier names and contacts", "Talk about payment terms you've negotiated", "Share any suppliers you'd be concerned about in a transition"],
  },
  {
    id: 2,
    question: "Which suppliers are absolutely critical to your operation?",
    subPrompt: "If you lost one supplier, which would hurt most? What makes them irreplaceable?",
    tips: ["Think about lead times and alternatives", "Mention any exclusive relationships", "Share what a new owner needs to watch for"],
  },
  {
    id: 3,
    question: "How do you manage inventory and ordering cycles?",
    subPrompt: "Walk me through how inventory decisions get made. Any systems, formulas, or gut-feel rules you follow?",
    tips: ["Include seasonal patterns", "Mention any software tools you use", "Share your reorder rules of thumb"],
  },
  {
    id: 4,
    question: "Are there any vendor relationships that depend on you personally?",
    subPrompt: "Relationships where the deal works because of who you are, not just who your company is.",
    tips: ["Think about pricing breaks", "Mention personal guarantees", "Share what a new owner would need to do to maintain these"],
  },
  {
    id: 5,
    question: "What would a new owner need to know about your supply chain in the first 90 days?",
    subPrompt: "If you had 15 minutes to brief a new owner on vendors and supplies, what would you cover?",
    tips: ["Think about the risks", "Mention the opportunities", "Share anything that isn't obvious from the outside"],
  },
];

export default function SessionNewPage() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [sessionStarted, setSessionStarted] = useState(false);
  const [completed, setCompleted] = useState(false);

  const currentQuestion = questions[questionIndex];
  const sessionNum = 4;
  const industry = "Manufacturing";

  const handleNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  if (completed) {
    return (
      <div className="min-h-screen bg-cream">
        <AppNav />
        <div className="max-w-[640px] mx-auto px-8 py-24 text-center">
          <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display text-3xl font-semibold text-walnut mb-3">Session {sessionNum} complete.</h2>
          <p className="text-secondary-foreground mb-2">
            Organizing what you shared...
          </p>
          <p className="text-sm text-muted-foreground mb-10">
            Your handover document is being updated. You can review the extracted sections once processing is complete.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-walnut hover:bg-walnut-hover text-cream uppercase tracking-wide text-xs font-semibold px-8 py-3 h-auto"
            >
              <Link href={`/session/4`}>Review Session <ArrowRight size={14} className="ml-2 inline" /></Link>
            </Button>
            <Button asChild variant="outline" className="border-walnut text-walnut hover:bg-parchment">
              <Link href="/dashboard">Back to Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <AppNav />

      <div className="max-w-[760px] mx-auto px-8 py-12">
        {/* Session header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-walnut">Session {sessionNum} of 5</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-walnut-light bg-parchment border border-parchment-dark px-2 py-0.5 rounded">
              {industry}
            </span>
          </div>
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-walnut">
            <Link href="/dashboard"><X size={16} /></Link>
          </Button>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Question {questionIndex + 1} of {questions.length}</span>
            <span className="text-xs text-muted-foreground">{Math.round(((questionIndex) / questions.length) * 100)}% complete</span>
          </div>
          <div className="h-1 bg-parchment rounded-full">
            <div
              className="h-full bg-walnut rounded-full transition-all"
              style={{ width: `${((questionIndex) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question display */}
        <div className="bg-white border border-parchment-dark rounded-lg p-10 mb-8 text-center shadow-sm">
          <div className="mb-6">
            <p className="font-display italic text-2xl md:text-3xl text-walnut leading-snug mb-3">
              &ldquo;{currentQuestion.question}&rdquo;
            </p>
            <p className="text-secondary-foreground leading-relaxed max-w-[480px] mx-auto">
              {currentQuestion.subPrompt}
            </p>
          </div>

          {/* Recording interface */}
          <div className="flex flex-col items-center py-6">
            <RecordButton
              onRecordingStart={() => { setIsRecording(true); setSessionStarted(true); }}
              onRecordingStop={() => setIsRecording(false)}
              onProcessingComplete={() => {}}
            />
            <div className="mt-6 w-full max-w-[280px]">
              <Waveform isRecording={isRecording} />
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-parchment/50 border border-parchment-dark rounded-lg p-6 mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-walnut-light mb-3">💡 Tips for this question</p>
          <ul className="space-y-2">
            {currentQuestion.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-secondary-foreground">
                <ChevronRight size={14} className="text-walnut-light mt-0.5 flex-shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-walnut gap-2"
              onClick={handleNext}
            >
              <SkipForward size={16} />
              Skip question
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-walnut gap-2"
            >
              <Pause size={16} />
              Pause
            </Button>
          </div>
          {sessionStarted && (
            <Button
              onClick={handleNext}
              className="bg-walnut hover:bg-walnut-hover text-cream uppercase tracking-wide text-xs font-semibold px-6 py-2 h-auto"
            >
              {questionIndex < questions.length - 1 ? "Next Question →" : "End Session →"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
