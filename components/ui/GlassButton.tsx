import React from "react";
import { cn } from "@/lib/utils";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
}

export const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ children, variant = "primary", size = "md", className, href, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none";

    const variantClasses = {
      primary:
        "bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-200 hover:text-cyan-100 border border-cyan-500/30 hover:border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] active:scale-[0.98]",
      secondary:
        "bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/[0.1] hover:border-white/[0.2] active:scale-[0.98]",
      ghost:
        "text-slate-300 hover:text-white hover:bg-white/[0.05] border border-transparent active:scale-[0.98]",
    };

    const sizeClasses = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3 gap-2.5",
    };

    const combinedClassName = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    if (href) {
      return (
        <a href={href} className={combinedClassName}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

GlassButton.displayName = "GlassButton";

