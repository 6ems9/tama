"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface StarsProps {
  count?: number;
}

// Pure deterministic pseudo-random generator
function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export function Stars({ count = 1200 }: StarsProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const colorPalette = [
      new THREE.Color("#ffffff"),
      new THREE.Color("#93c5fd"), // soft blue
      new THREE.Color("#a5f3fc"), // cyan tint
      new THREE.Color("#fef08a"), // soft warm white
    ];

    for (let i = 0; i < count; i++) {
      // Distribute in a large spherical shell deterministically
      const r = 40 + pseudoRandom(i * 3) * 80;
      const theta = 2 * Math.PI * pseudoRandom(i * 3 + 1);
      const phi = Math.acos(2 * pseudoRandom(i * 3 + 2) - 1);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const colorIndex = Math.floor(pseudoRandom(i * 7) * colorPalette.length);
      const color = colorPalette[colorIndex] ?? colorPalette[0];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }

    return [pos, col];
  }, [count]);

  // Very slow, calm cosmic drift
  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.003;
      pointsRef.current.rotation.x += delta * 0.001;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

