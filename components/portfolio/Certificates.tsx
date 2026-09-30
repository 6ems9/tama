"use client";

import React from "react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { Award, ExternalLink, ShieldCheck, Calendar, Hash } from "lucide-react";

export function Certificates() {
  const { certificates } = PORTFOLIO_DATA;

  return (
    <section
      id="certificates"
      className="relative min-h-screen py-24 sm:py-32 px-6 sm:px-12 lg:px-20 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            05 / ANCHOR: SATURN
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Certifications & Credentials
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl">
            Verified industry qualifications in cloud solutions architecture, distributed systems, and infrastructure automation.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <GlassPanel
              key={cert.id}
              variant="interactive"
              className="p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Header row with icon & date */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Certificate Name */}
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-amber-200 transition-colors">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <div className="text-sm font-medium text-slate-300 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Credential ID */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-6 bg-white/[0.02] px-3 py-2 rounded-lg border border-white/[0.04]">
                  <Hash className="w-3.5 h-3.5 text-slate-500" />
                  <span>ID: {cert.credentialId}</span>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-white/[0.06]">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 hover:text-cyan-200 transition-colors group-hover:translate-x-0.5"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}

