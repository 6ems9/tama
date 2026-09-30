"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { useCameraNavigation } from "@/components/universe/CameraNavigation";

export function Footer() {
  const { resetCamera } = useCameraNavigation();

  const handleBackToTop = () => {
    resetCamera();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 sm:px-12 lg:px-20 border-t border-white/[0.06] z-10 bg-[#030712]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-slate-400 tracking-wider uppercase">
            System Operational // Solar Navigation Active
          </span>
        </div>

        <div className="text-xs text-slate-500 font-mono text-center sm:text-left">
          © {new Date().getFullYear()} TAMA.DEV. Engineered with Next.js & Three.js.
        </div>

        <button
          onClick={handleBackToTop}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors p-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05]"
          aria-label="Back to top"
        >
          <span>ORBIT TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}

