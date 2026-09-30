"use client";

import React from "react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { Server, Zap, Compass, Cpu } from "lucide-react";

const STRENGTH_ICONS = [Server, Zap, Compass, Cpu];

export function About() {
  const { about } = PORTFOLIO_DATA;

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 sm:py-32 px-6 sm:px-12 lg:px-20 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            01 / ANCHOR: EARTH
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            {about.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl">
            {about.subtitle}
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative & Technical Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <GlassPanel className="p-8 sm:p-10 space-y-5">
              <h3 className="text-xl font-semibold text-white tracking-tight flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Engineering Philosophy
              </h3>
              {about.bio.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-slate-300/90 text-sm sm:text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </GlassPanel>
          </div>

          {/* Right Column: Architectural Strengths */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.strengths.map((item, idx) => {
              const Icon = STRENGTH_ICONS[idx % STRENGTH_ICONS.length];
              return (
                <GlassPanel
                  key={item.title}
                  variant="interactive"
                  className="p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-semibold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </GlassPanel>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

