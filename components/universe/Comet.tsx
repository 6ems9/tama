"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Comet() {
  const cometGroup = useRef<THREE.Group>(null);
  const progress = useRef(-10);

  useFrame((_, delta) => {
    if (!cometGroup.current) return;

    progress.current += delta * 6;
    // Reset after it sweeps across the cosmos
    if (progress.current > 70) {
      progress.current = -50;
    }

    // Move in a diagonal path in deep background
    const x = progress.current;
    const y = 14 - progress.current * 0.35;
    const z = -25 + progress.current * 0.2;

    cometGroup.current.position.set(x, y, z);
  });

  return (
    <group ref={cometGroup} position={[-50, 20, -25]}>
      {/* Comet Head */}
      <mesh>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshBasicMaterial color="#a5f3fc" />
      </mesh>

      {/* Comet subtle tail */}
      <mesh position={[-0.8, 0.25, -0.1]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.01, 0.08, 1.8, 8]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

