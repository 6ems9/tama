"use client";

import React from "react";
import { ArrowRight, Mail, Terminal } from "lucide-react";
import { GlassButton } from "@/components/ui/GlassButton";
import { useCameraNavigation } from "@/components/universe/CameraNavigation";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export function Hero() {
  const { focusOn } = useCameraNavigation();
  const { hero } = PORTFOLIO_DATA;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 sm:px-12 lg:px-20 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Hero Content positioned strictly on the left half to leave right side open for the 3D Sun and planetary orbit */}
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Status pill badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/[0.08] border border-cyan-500/20 text-cyan-300 text-xs font-medium tracking-wider uppercase mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              {hero.roleTag}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            Building digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-cyan-100 to-cyan-400">
              systems beyond
            </span>
            the ordinary.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300/90 leading-relaxed font-normal max-w-xl mb-10">
            {hero.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <GlassButton
              variant="primary"
              size="lg"
              onClick={() => focusOn("mars", "projects")}
              className="group"
            >
              <span>{hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </GlassButton>

            <GlassButton
              variant="secondary"
              size="lg"
              onClick={() => focusOn("uranus", "contact")}
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>{hero.ctaSecondary}</span>
            </GlassButton>
          </div>

          {/* Subtle metrics footnote */}
          <div className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
                7+
              </div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-cyan-300 font-mono">
                99.99%
              </div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
                Reliability Focus
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
                85k+
              </div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
                Events / Sec
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

