"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

interface CameraNavigationContextType {
  focusedObject: string | null;
  hoveredPlanet: string | null;
  activeSection: string;
  focusOn: (planetId: string, sectionId?: string) => void;
  resetCamera: () => void;
  setHoveredPlanet: (planetId: string | null) => void;
  setActiveSection: (sectionId: string) => void;
}

const CameraNavigationContext = createContext<CameraNavigationContextType | null>(null);

export function CameraNavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [focusedObject, setFocusedObject] = useState<string | null>(null);
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("home");

  const resetCamera = useCallback(() => {
    setFocusedObject(null);
  }, []);

  const focusOn = useCallback((planetId: string, sectionId?: string) => {
    setFocusedObject(planetId);

    if (sectionId) {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        // Smoothly scroll to section
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "projects",
        "experience",
        "skills",
        "certificates",
        "contact",
      ];
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <CameraNavigationContext.Provider
      value={{
        focusedObject,
        hoveredPlanet,
        activeSection,
        focusOn,
        resetCamera,
        setHoveredPlanet,
        setActiveSection,
      }}
    >
      {children}
    </CameraNavigationContext.Provider>
  );
}

export function useCameraNavigation() {
  const context = useContext(CameraNavigationContext);
  if (!context) {
    throw new Error(
      "useCameraNavigation must be used within a CameraNavigationProvider"
    );
  }
  return context;
}

