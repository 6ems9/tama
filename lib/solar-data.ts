import { PlanetConfig } from "./types";

export interface SolarObjectConfig extends PlanetConfig {
  id: string;
  name: string;
  sectionId?: string;
  sectionLabel?: string;
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
  initialAngle?: number;
}

export const SOLAR_SYSTEM_DATA: SolarObjectConfig[] = [
  {
    id: "mercury",
    name: "Mercury",
    color: "#8c8c8c",
    size: 0.35,
    orbitRadius: 4.8,
    orbitSpeed: 0.24,
    rotationSpeed: 0.01,
    cameraOffset: [0, 0.4, 2.5],
    isNavigational: false,
    roughness: 0.9,
    metalness: 0.1,
    initialAngle: 0.8,
  },
  {
    id: "venus",
    name: "Venus",
    color: "#e3bb76",
    size: 0.55,
    orbitRadius: 7.2,
    orbitSpeed: 0.18,
    rotationSpeed: -0.008,
    atmosphereColor: "#e6c387",
    cameraOffset: [0, 0.5, 3.2],
    isNavigational: false,
    roughness: 0.6,
    metalness: 0.1,
    initialAngle: 2.2,
  },
  {
    id: "earth",
    name: "Earth",
    sectionId: "about",
    sectionLabel: "ABOUT",
    color: "#2b82c9",
    size: 0.75,
    orbitRadius: 10.5,
    orbitSpeed: 0.12,
    rotationSpeed: 0.015,
    atmosphereColor: "#4fc3f7",
    cameraOffset: [0, 0.6, 4.0],
    isNavigational: true,
    roughness: 0.5,
    metalness: 0.2,
    initialAngle: 4.1,
  },
  {
    id: "mars",
    name: "Mars",
    sectionId: "projects",
    sectionLabel: "PROJECTS",
    color: "#c1440e",
    size: 0.48,
    orbitRadius: 13.8,
    orbitSpeed: 0.09,
    rotationSpeed: 0.012,
    atmosphereColor: "#e27b58",
    cameraOffset: [0, 0.5, 3.5],
    isNavigational: true,
    roughness: 0.8,
    metalness: 0.1,
    initialAngle: 1.1,
  },
  {
    id: "jupiter",
    name: "Jupiter",
    sectionId: "experience",
    sectionLabel: "EXPERIENCE",
    color: "#b07f35",
    size: 1.35,
    orbitRadius: 18.2,
    orbitSpeed: 0.06,
    rotationSpeed: 0.02,
    atmosphereColor: "#d4a373",
    cameraOffset: [0, 0.8, 6.0],
    isNavigational: true,
    roughness: 0.7,
    metalness: 0.05,
    initialAngle: 3.5,
  },
  {
    id: "saturn",
    name: "Saturn",
    sectionId: "certificates",
    sectionLabel: "CERTIFICATES",
    color: "#e2bf7d",
    size: 1.1,
    orbitRadius: 22.8,
    orbitSpeed: 0.045,
    rotationSpeed: 0.018,
    hasRings: true,
    ringInnerRadius: 1.5,
    ringOuterRadius: 2.6,
    ringColor: "#c2a677",
    atmosphereColor: "#eedb9c",
    cameraOffset: [0, 0.9, 5.5],
    isNavigational: true,
    roughness: 0.7,
    metalness: 0.1,
    initialAngle: 5.6,
  },
  {
    id: "uranus",
    name: "Uranus",
    sectionId: "contact",
    sectionLabel: "CONTACT",
    color: "#4b70dd",
    size: 0.85,
    orbitRadius: 27.5,
    orbitSpeed: 0.03,
    rotationSpeed: 0.014,
    hasRings: true,
    ringInnerRadius: 1.1,
    ringOuterRadius: 1.4,
    ringColor: "#6ee7b7",
    atmosphereColor: "#38bdf8",
    cameraOffset: [0, 0.6, 4.5],
    isNavigational: true,
    roughness: 0.5,
    metalness: 0.1,
    initialAngle: 0.4,
  },
  {
    id: "neptune",
    name: "Neptune",
    color: "#274687",
    size: 0.82,
    orbitRadius: 31.8,
    orbitSpeed: 0.022,
    rotationSpeed: 0.013,
    atmosphereColor: "#3b82f6",
    cameraOffset: [0, 0.6, 4.5],
    isNavigational: false,
    roughness: 0.5,
    metalness: 0.1,
    initialAngle: 2.8,
  },
];

