import React from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "subtle" | "interactive";
}

export const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ children, className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl transition-all duration-300",
          // Default glass panel
          variant === "default" &&
            "bg-[#090d19]/60 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]",
          // Subtle lighter glass
          variant === "subtle" &&
            "bg-white/[0.02] backdrop-blur-md border border-white/[0.05]",
          // Interactive card with hover effect
          variant === "interactive" &&
            "bg-[#090d19]/60 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/30 hover:bg-[#0c1322]/80 hover:shadow-[0_12px_40px_-10px_rgba(6,182,212,0.12)] hover:-translate-y-0.5",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassPanel.displayName = "GlassPanel";

