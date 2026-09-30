"use client";

import React from "react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { ExternalLink, Calendar, UserCheck } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 sm:py-32 px-6 sm:px-12 lg:px-20 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            02 / ANCHOR: MARS
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Selected Work
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl">
            A curated collection of scalable architectures, distributed engines, and production systems.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <GlassPanel
              key={project.id}
              variant="interactive"
              className="p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Meta row: Role & Year */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-white/[0.06]">
                  <span className="flex items-center gap-1.5 text-cyan-300">
                    <UserCheck className="w-3.5 h-3.5" />
                    {project.role}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-200 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.detailedDescription && (
                  <p className="text-slate-400 text-xs leading-relaxed mb-6 font-mono bg-white/[0.02] p-3.5 rounded-xl border border-white/[0.04]">
                    {project.detailedDescription}
                  </p>
                )}

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technology.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-400" />
                    <span>Source Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-cyan-300 hover:text-cyan-200 transition-colors ml-auto"
                  >
                    <span>View Architecture</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}

