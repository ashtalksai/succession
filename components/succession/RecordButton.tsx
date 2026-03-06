"use client";

import { useState, useRef, useEffect } from "react";
import { Mic, Square, Loader2 } from "lucide-react";

type RecordState = "idle" | "recording" | "processing";

interface RecordButtonProps {
  onRecordingStart?: () => void;
  onRecordingStop?: (blob: Blob) => void;
  onProcessingComplete?: () => void;
}

export function RecordButton({ onRecordingStart, onRecordingStop, onProcessingComplete }: RecordButtonProps) {
  const [state, setState] = useState<RecordState>("idle");
  const [duration, setDuration] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const formatDuration = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        stream.getTracks().forEach((t) => t.stop());
        setState("processing");
        onRecordingStop?.(blob);
        // Simulate processing for MVP
        setTimeout(() => {
          setState("idle");
          onProcessingComplete?.();
        }, 2000);
      };

      mediaRecorder.start(1000);
      setState("recording");
      setDuration(0);
      timerRef.current = setInterval(() => setDuration((d) => d + 1), 1000);
      onRecordingStart?.();
    } catch {
      alert("Microphone access required. Please allow microphone access and try again.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && state === "recording") {
      mediaRecorderRef.current.stop();
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  const handleClick = () => {
    if (state === "idle") startRecording();
    else if (state === "recording") stopRecording();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={handleClick}
        disabled={state === "processing"}
        aria-label={state === "idle" ? "Start recording" : state === "recording" ? "Stop recording" : "Processing"}
        className={`
          w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-walnut
          ${state === "idle" ? "bg-[#D4C5B5] hover:bg-parchment-dark cursor-pointer" : ""}
          ${state === "recording" ? "bg-record cursor-pointer record-pulse" : ""}
          ${state === "processing" ? "bg-walnut cursor-wait" : ""}
        `}
      >
        {state === "idle" && <Mic size={32} className="text-walnut" />}
        {state === "recording" && <Square size={32} className="text-white fill-white" />}
        {state === "processing" && <Loader2 size={32} className="text-cream animate-spin" />}
      </button>

      <div className="text-center">
        {state === "idle" && (
          <p className="text-sm font-medium text-muted-foreground">Click to start recording</p>
        )}
        {state === "recording" && (
          <p className="text-sm font-semibold text-record">Recording... {formatDuration(duration)}</p>
        )}
        {state === "processing" && (
          <p className="text-sm font-medium text-walnut">Listening carefully... (this takes about 60 seconds)</p>
        )}
      </div>
    </div>
  );
}
