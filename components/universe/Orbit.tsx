"use client";

import React, { useMemo } from "react";
import * as THREE from "three";

interface OrbitProps {
  radius: number;
  color?: string;
  opacity?: number;
}

export function Orbit({
  radius,
  color = "#38bdf8",
  opacity = 0.08,
}: OrbitProps) {
  const lineGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const segments = 96;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(
        new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius)
      );
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [radius]);

  return (
    <lineLoop geometry={lineGeometry}>
      <lineBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineLoop>
  );
}

