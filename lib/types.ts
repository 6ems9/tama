export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  technology: string[];
  role: string;
  year: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  period: string;
  location?: string;
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: "Languages" | "Backend" | "Frontend" | "Database" | "DevOps" | "Cloud" | "Tools";
  items: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface CertificateItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  location: string;
  availability: string;
}

export interface PlanetConfig {
  id: string;
  name: string;
  sectionId?: string; // Target section for smooth scroll
  sectionLabel?: string; // Label displayed on hover ("PROJECTS", "ABOUT", etc.)
  color: string;
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
  rotationSpeed: number;
  hasRings?: boolean;
  ringInnerRadius?: number;
  ringOuterRadius?: number;
  ringColor?: string;
  atmosphereColor?: string;
  cameraOffset: [number, number, number];
  isNavigational: boolean;
  roughness?: number;
  metalness?: number;
}

