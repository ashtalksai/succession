"use client";

import { useEffect, useRef } from "react";

interface WaveformProps {
  isRecording: boolean;
  stream?: MediaStream | null;
}

export function Waveform({ isRecording }: WaveformProps) {
  const bars = 15;

  if (!isRecording) {
    return (
      <div className="flex items-center justify-center gap-1 h-10">
        {Array.from({ length: bars }).map((_, i) => (
          <div
            key={i}
            className="w-1.5 rounded-full bg-parchment-dark"
            style={{ height: "4px" }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-1 h-10">
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className="w-1.5 rounded-full"
          style={{
            backgroundColor: "rgba(92, 61, 46, 0.6)",
            height: "4px",
            animation: `waveBar ${0.8 + Math.random() * 0.8}s ease-in-out ${Math.random() * 0.5}s infinite alternate`,
            minHeight: "4px",
            maxHeight: "32px",
          }}
        />
      ))}
    </div>
  );
}
