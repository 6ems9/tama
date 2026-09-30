"use client";

import React, { useState, useEffect } from "react";
import { useCameraNavigation } from "@/components/universe/CameraNavigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Skills", href: "skills" },
  { label: "Certificates", href: "certificates" },
  { label: "Contact", href: "contact" },
];

export function Navigation() {
  const { resetCamera, activeSection } = useCameraNavigation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // As required: when navbar is used, camera returns to normal state
    resetCamera();

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    resetCamera();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 pb-2 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <nav
          className={cn(
            "flex items-center justify-between px-6 py-3.5 rounded-2xl transition-all duration-300",
            scrolled
              ? "bg-[#050814]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
              : "bg-[#050814]/40 backdrop-blur-md border border-white/[0.05]"
          )}
        >
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={handleBrandClick}
            className="text-base font-bold tracking-wider text-white hover:text-cyan-300 transition-colors flex items-center gap-2 group font-mono"
          >
            <span className="text-cyan-400 group-hover:rotate-90 transition-transform duration-300 inline-block">
              {"//"}
            </span>
            <span>KIKI.DEV</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 sm:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all relative",
                    isActive
                      ? "text-cyan-300 bg-cyan-500/[0.08] border border-cyan-500/20"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.03] border border-white/[0.06]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-[#070b18]/95 backdrop-blur-2xl border border-white/[0.1] shadow-2xl space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                    isActive
                      ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/20"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}

