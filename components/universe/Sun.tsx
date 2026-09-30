"use client";

import React, { useRef, useState } from "react";
import { useFrame, ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";
import { useCameraNavigation } from "./CameraNavigation";
import { PlanetLabel } from "./PlanetLabel";

export function Sun() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { focusOn, focusedObject, setHoveredPlanet } = useCameraNavigation();

  const isFocused = focusedObject === "sun";

  useFrame((state, delta) => {
    // Gentle rotation
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
    }

    // Subtle pulsing corona glow
    if (glowRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.04;
      const targetScale = (hovered || isFocused ? 1.1 : 1.0) * pulse;
      glowRef.current.scale.set(targetScale, targetScale, targetScale);
    }
  });

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    focusOn("sun", "home");
  };

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(true);
    setHoveredPlanet("sun");
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    setHovered(false);
    setHoveredPlanet(null);
    document.body.style.cursor = "auto";
  };

  return (
    <group position={[0, 0, 0]}>
      {/* Primary Point Light illuminating planets */}
      <pointLight
        color="#fffbeb"
        intensity={3.0}
        distance={70}
        decay={1.2}
      />
      
      {/* Soft secondary ambient fill so planet dark sides remain visible */}
      <ambientLight intensity={0.25} />

      {/* Main Core 3D Sun Sphere */}
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        scale={hovered ? [1.06, 1.06, 1.06] : [1, 1, 1]}
      >
        <sphereGeometry args={[1.8, 48, 48]} />
        <meshStandardMaterial
          color="#ffedd5"
          emissive="#fbbf24"
          emissiveIntensity={1.8}
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>

      {/* Atmospheric Soft Corona Glow */}
      <mesh ref={glowRef} scale={[1.2, 1.2, 1.2]}>
        <sphereGeometry args={[1.85, 32, 32]} />
        <meshBasicMaterial
          color="#fde047"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* Outer subtle halo */}
      <mesh scale={[1.45, 1.45, 1.45]}>
        <sphereGeometry args={[1.85, 24, 24]} />
        <meshBasicMaterial
          color="#f59e0b"
          transparent
          opacity={0.06}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* Navigation Label: ONLY appears on hover or focus */}
      <PlanetLabel
        label="HOME // SYSTEM CENTER"
        visible={hovered || isFocused}
        distance={2.6}
      />
    </group>
  );
}

