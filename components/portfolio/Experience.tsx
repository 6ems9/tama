"use client";

import React from "react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { Briefcase, MapPin, CheckCircle2 } from "lucide-react";

export function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section
      id="experience"
      className="relative min-h-screen py-24 sm:py-32 px-6 sm:px-12 lg:px-20 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            03 / ANCHOR: JUPITER
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Work Experience
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl">
            A chronological timeline of engineering leadership, system migrations, and architectural contributions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/[0.1] space-y-12 ml-2 sm:ml-4">
          {experience.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#030712] border-2 border-cyan-400/80 group-hover:border-cyan-300 group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 m-auto mt-0.5" />
              </div>

              {/* Card */}
              <GlassPanel className="p-8 group-hover:border-white/[0.16] transition-all">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-white/[0.06]">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {item.position}
                    </h3>
                    <div className="text-sm font-medium text-cyan-300 flex items-center gap-2 mt-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{item.company}</span>
                      {item.location && (
                        <>
                          <span className="text-slate-600">•</span>
                          <span className="text-slate-400 flex items-center gap-1 text-xs">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-slate-400 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] self-start sm:self-auto">
                    {item.period}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-6">
                  {item.description.map((bullet, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="text-slate-300/90 text-sm leading-relaxed flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400/70 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-slate-400 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassPanel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

