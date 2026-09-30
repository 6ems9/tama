import { CameraNavigationProvider } from "@/components/universe/CameraNavigation";
import { SolarSystem } from "@/components/universe/SolarSystem";
import { Navigation } from "@/components/ui/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Certificates } from "@/components/portfolio/Certificates";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export default function HomePage() {
  return (
    <CameraNavigationProvider>
      <main className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
        {/* Background 3D Solar System Universe Layer */}
        <SolarSystem />

        {/* Floating Glass Navigation Header */}
        <Navigation />

        {/* Portfolio Content Sections (Single Page Architecture) */}
        <div className="relative z-10 space-y-12">
          {/* HOME */}
          <Hero />

          {/* ABOUT */}
          <About />

          {/* PROJECTS */}
          <Projects />

          {/* EXPERIENCE */}
          <Experience />

          {/* SKILLS */}
          <Skills />

          {/* CERTIFICATES */}
          <Certificates />

          {/* CONTACT */}
          <Contact />
        </div>

        {/* System Telemetry & Footer */}
        <Footer />
      </main>
    </CameraNavigationProvider>
  );
}

