"use client";

import React, { useRef, useState } from "react";
import { useFrame, ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";
import { SolarObjectConfig } from "@/lib/solar-data";
import { useCameraNavigation } from "./CameraNavigation";
import { PlanetLabel } from "./PlanetLabel";

interface NavigationPlanetProps {
  config: SolarObjectConfig;
}

export function NavigationPlanet({ config }: NavigationPlanetProps) {
  const planetRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { focusOn, focusedObject, setHoveredPlanet } = useCameraNavigation();

  const isFocused = focusedObject === config.id;
  // Deterministic starting angle based on orbit radius to satisfy React purity rule
  const initialAngle =
    config.initialAngle ?? (config.orbitRadius * 1.61803398875) % (Math.PI * 2);
  const currentAngle = useRef(initialAngle);

  useFrame((_, delta) => {
    // Orbit revolution around Sun
    currentAngle.current += delta * config.orbitSpeed * 0.35;
    if (planetRef.current) {
      const x = Math.cos(currentAngle.current) * config.orbitRadius;
      const z = Math.sin(currentAngle.current) * config.orbitRadius;
      planetRef.current.position.set(x, 0, z);
    }

    // Axial rotation
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * config.rotationSpeed * 5;
    }
  });

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    if (!config.isNavigational || !config.sectionId) return;
    e.stopPropagation();
    focusOn(config.id, config.sectionId);
  };

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    if (!config.isNavigational) return;
    e.stopPropagation();
    setHovered(true);
    setHoveredPlanet(config.id);
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    if (!config.isNavigational) return;
    setHovered(false);
    setHoveredPlanet(null);
    document.body.style.cursor = "auto";
  };

  const scaleMultiplier = config.isNavigational && (hovered || isFocused) ? 1.15 : 1.0;

  return (
    <group
      ref={planetRef}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      scale={[scaleMultiplier, scaleMultiplier, scaleMultiplier]}
    >
      {/* Planetary Body Mesh */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[config.size, 36, 36]} />
        <meshStandardMaterial
          color={config.color}
          roughness={config.roughness ?? 0.7}
          metalness={config.metalness ?? 0.1}
        />
      </mesh>

      {/* Atmospheric Rim Glow (if specified) */}
      {config.atmosphereColor && (
        <mesh>
          <sphereGeometry args={[config.size * 1.05, 24, 24]} />
          <meshBasicMaterial
            color={config.atmosphereColor}
            transparent
            opacity={0.16}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* 3D Ring Geometry (specifically Saturn and Uranus) */}
      {config.hasRings && (
        <mesh rotation={[-Math.PI / 2.6, 0.2, 0]}>
          <ringGeometry
            args={[
              config.ringInnerRadius ?? config.size * 1.4,
              config.ringOuterRadius ?? config.size * 2.3,
              64,
            ]}
          />
          <meshStandardMaterial
            color={config.ringColor || config.color}
            side={THREE.DoubleSide}
            transparent
            opacity={0.7}
            roughness={0.8}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* Navigation Label: ONLY shown on hover or focus for navigational planets */}
      {config.isNavigational && config.sectionLabel && (
        <PlanetLabel
          label={config.sectionLabel}
          visible={hovered || isFocused}
          distance={config.size + 0.6}
        />
      )}
    </group>
  );
}

