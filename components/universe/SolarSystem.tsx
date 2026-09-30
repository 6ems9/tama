"use client";

import React, { Suspense, useSyncExternalStore } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "./Stars";
import { Sun } from "./Sun";
import { Earth } from "./Earth";
import { NavigationPlanet } from "./NavigationPlanet";
import { Orbit } from "./Orbit";
import { Comet } from "./Comet";
import { CameraController } from "./CameraController";
import { SOLAR_SYSTEM_DATA } from "@/lib/solar-data";

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

function useIsMobile() {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener("resize", callback);
      return () => window.removeEventListener("resize", callback);
    },
    () => window.innerWidth < 768,
    () => false
  );
}

export function SolarSystem() {
  const isClient = useIsClient();
  const isMobile = useIsMobile();

  if (!isClient) {
    return (
      <div className="fixed inset-0 bg-[#030712] pointer-events-none z-0" />
    );
  }

  // Filter out Earth from generic loop since Earth has dedicated realistic component
  const otherPlanets = SOLAR_SYSTEM_DATA.filter((p) => p.id !== "earth");

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      <Canvas
        camera={{ position: [0, 2.5, 23], fov: 45, near: 0.1, far: 200 }}
        dpr={isMobile ? [1, 1.2] : [1, 1.8]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ pointerEvents: "auto", width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          {/* Deep space starfield (reduced count on mobile) */}
          <Stars count={isMobile ? 500 : 1200} />

          {/* Decorative subtle deep space comet */}
          <Comet />

          {/* Solar System Group shifted rightwards and into depth */}
          <group
            position={isMobile ? [0, -1, -6] : [5.5, 0, -2]}
            rotation={[0.22, -0.25, 0.08]}
          >
            {/* Center: Real 3D Sun */}
            <Sun />

            {/* Earth (Dedicated high-fidelity component with day/night texture & clouds) */}
            <Earth orbitRadius={10.5} orbitSpeed={0.12} initialAngle={4.1} />

            {/* Generic Navigation & Astronomical Planets */}
            {otherPlanets.map((planet) => (
              <NavigationPlanet key={planet.id} config={planet} />
            ))}

            {/* Restrained Orbit Rings */}
            {SOLAR_SYSTEM_DATA.map((planet) => (
              <Orbit
                key={`orbit-${planet.id}`}
                radius={planet.orbitRadius}
                color={planet.isNavigational ? "#38bdf8" : "#64748b"}
                opacity={planet.isNavigational ? 0.1 : 0.05}
              />
            ))}
          </group>

          {/* Smooth Camera Controller */}
          <CameraController />
        </Suspense>
      </Canvas>
    </div>
  );
}

