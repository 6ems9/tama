"use client";

import React, { useRef, useState, useMemo } from "react";
import { useFrame, ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";
import { useCameraNavigation } from "./CameraNavigation";
import { PlanetLabel } from "./PlanetLabel";

interface EarthProps {
  orbitRadius?: number;
  orbitSpeed?: number;
  initialAngle?: number;
}

export function Earth({
  orbitRadius = 10.5,
  orbitSpeed = 0.12,
  initialAngle = 4.1,
}: EarthProps) {
  const groupRef = useRef<THREE.Group>(null);
  const planetRef = useRef<THREE.Group>(null);
  const surfaceRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  const [hovered, setHovered] = useState(false);
  const { focusOn, focusedObject, setHoveredPlanet } = useCameraNavigation();
  const isFocused = focusedObject === "earth";

  // Generate procedural canvas texture for Earth surface (ocean, continents, ice caps)
  const earthTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // Deep ocean base
    ctx.fillStyle = "#0c2854";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ocean shelf shallow areas
    ctx.fillStyle = "#164478";
    for (let i = 0; i < 30; i++) {
      const cx = (Math.sin(i * 1.7) * 0.5 + 0.5) * canvas.width;
      const cy = (Math.cos(i * 1.3) * 0.5 + 0.5) * canvas.height;
      const r = 40 + Math.sin(i) * 30;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Continents & landmasses
    ctx.fillStyle = "#2d5a27"; // deep green
    const continents = [
      { x: 260, y: 180, rx: 110, ry: 75, angle: 0.2 }, // North America
      { x: 340, y: 340, rx: 70, ry: 110, angle: 0.1 },  // South America
      { x: 520, y: 170, rx: 80, ry: 60, angle: -0.1 },  // Europe
      { x: 540, y: 280, rx: 100, ry: 100, angle: 0 },   // Africa
      { x: 740, y: 190, rx: 160, ry: 90, angle: 0.15 }, // Asia
      { x: 840, y: 350, rx: 75, ry: 60, angle: -0.2 },  // Australia
    ];

    continents.forEach(({ x, y, rx, ry, angle }) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.fill();

      // Mountain / arid highlights inside landmass
      ctx.fillStyle = "#6d6244";
      ctx.beginPath();
      ctx.ellipse(0, -10, rx * 0.5, ry * 0.5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // Polar Ice caps
    ctx.fillStyle = "#e0f2fe";
    ctx.fillRect(0, 0, canvas.width, 35); // North pole
    ctx.fillRect(0, canvas.height - 45, canvas.width, 45); // Antarctica

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }, []);

  // Generate procedural clouds texture
  const cloudsTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.75)";

    // Swirling cloud bands
    for (let i = 0; i < 70; i++) {
      const cx = (Math.sin(i * 3.1) * 0.5 + 0.5) * canvas.width;
      const cy = (Math.cos(i * 2.3) * 0.4 + 0.5) * canvas.height;
      const rx = 35 + (i % 25) * 4;
      const ry = 12 + (i % 10) * 2;
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, (i * Math.PI) / 8, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    return texture;
  }, []);

  const currentAngle = useRef(initialAngle);

  useFrame((_, delta) => {
    // Orbital revolution
    currentAngle.current += delta * orbitSpeed * 0.35;
    if (planetRef.current) {
      const x = Math.cos(currentAngle.current) * orbitRadius;
      const z = Math.sin(currentAngle.current) * orbitRadius;
      planetRef.current.position.set(x, 0, z);
    }

    // Earth axial rotation (axial tilt ~23.5 degrees)
    if (surfaceRef.current) {
      surfaceRef.current.rotation.y += delta * 0.15;
    }

    // Clouds rotate independently slightly faster
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.2;
    }
  });

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    focusOn("earth", "about");
  };

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(true);
    setHoveredPlanet("earth");
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    setHovered(false);
    setHoveredPlanet(null);
    document.body.style.cursor = "auto";
  };

  const scale = hovered || isFocused ? 1.15 : 1.0;

  return (
    <group ref={groupRef}>
      <group
        ref={planetRef}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        scale={[scale, scale, scale]}
      >
        {/* Axial tilt wrapper (23.4 degrees) */}
        <group rotation={[0.41, 0, 0]}>
          {/* Surface Sphere */}
          <mesh ref={surfaceRef}>
            <sphereGeometry args={[0.75, 48, 48]} />
            <meshStandardMaterial
              map={earthTexture || undefined}
              color={earthTexture ? "#ffffff" : "#2b82c9"}
              roughness={0.6}
              metalness={0.1}
            />
          </mesh>

          {/* Cloud Layer (slightly larger radius & distinct rotation) */}
          <mesh ref={cloudsRef}>
            <sphereGeometry args={[0.765, 40, 40]} />
            <meshStandardMaterial
              map={cloudsTexture || undefined}
              transparent
              opacity={0.55}
              blending={THREE.NormalBlending}
              depthWrite={false}
            />
          </mesh>

          {/* Atmospheric Rim Glow */}
          <mesh>
            <sphereGeometry args={[0.79, 32, 32]} />
            <meshBasicMaterial
              color="#38bdf8"
              transparent
              opacity={0.2}
              blending={THREE.AdditiveBlending}
              side={THREE.BackSide}
              depthWrite={false}
            />
          </mesh>
        </group>

        {/* Navigation Label: ONLY appears on hover or focus */}
        <PlanetLabel
          label="ABOUT // SYSTEM OVERVIEW"
          visible={hovered || isFocused}
          distance={1.3}
        />
      </group>
    </group>
  );
}

