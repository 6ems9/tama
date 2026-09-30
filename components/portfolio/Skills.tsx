"use client";

import React from "react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { Code2, Server, Layout, Database, Terminal, Cloud, Wrench, LucideIcon } from "lucide-react";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Languages: Code2,
  Backend: Server,
  Frontend: Layout,
  Database: Database,
  DevOps: Terminal,
  Cloud: Cloud,
  Tools: Wrench,
};

export function Skills() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 sm:py-32 px-6 sm:px-12 lg:px-20 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            04 / TECHNICAL ARSENAL
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Skills & Expertise
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl">
            A comprehensive taxonomy of programming languages, runtimes, databases, and operational tooling.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.category] ?? Code2;
            return (
              <GlassPanel
                key={cat.category}
                variant="interactive"
                className="p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/[0.06]">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-wide">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] hover:bg-white/[0.07] text-slate-200 border border-white/[0.06] hover:border-cyan-500/30 transition-all cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassPanel>
            );
          })}
        </div>
      </div>
    </section>
  );
}

