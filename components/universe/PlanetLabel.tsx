"use client";

import React from "react";
import { Html } from "@react-three/drei";

interface PlanetLabelProps {
  label: string;
  visible: boolean;
  distance?: number;
}

export function PlanetLabel({ label, visible, distance = 1.2 }: PlanetLabelProps) {
  if (!visible) return null;

  return (
    <Html
      position={[0, distance, 0]}
      center
      distanceFactor={15}
      zIndexRange={[100, 0]}
      style={{
        pointerEvents: "none",
        userSelect: "none",
        transition: "opacity 0.2s ease, transform 0.2s ease",
      }}
    >
      <div className="flex flex-col items-center pointer-events-none">
        <div className="px-3 py-1 rounded-full bg-[#030712]/90 border border-cyan-400/40 text-cyan-300 text-[11px] font-mono font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.4)] backdrop-blur-md whitespace-nowrap animate-in fade-in zoom-in-95 duration-150">
          {label}
        </div>
        <div className="w-1.5 h-1.5 rotate-45 bg-cyan-400/80 -mt-1" />
      </div>
    </Html>
  );
}

