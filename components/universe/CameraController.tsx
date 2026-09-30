"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useCameraNavigation } from "./CameraNavigation";
import { SOLAR_SYSTEM_DATA } from "@/lib/solar-data";

// Reusable vectors to avoid memory allocation and GC pauses in useFrame
const defaultPos = new THREE.Vector3(0, 2.5, 23);
const defaultLookAt = new THREE.Vector3(4.5, -0.2, -2);
const targetCameraPos = new THREE.Vector3();
const targetLookAt = new THREE.Vector3();
const currentLookAt = new THREE.Vector3(4.5, -0.2, -2);

export function CameraController() {
  const { camera } = useThree();
  const { focusedObject } = useCameraNavigation();
  const initialMount = useRef(true);

  useEffect(() => {
    if (initialMount.current) {
      camera.position.copy(defaultPos);
      camera.lookAt(defaultLookAt);
      currentLookAt.copy(defaultLookAt);
      initialMount.current = false;
    }
  }, [camera]);

  useFrame((state, delta) => {
    // Clamp delta to prevent jumps on tab focus change
    const safeDelta = Math.min(delta, 0.05);
    const lerpFactor = Math.min(safeDelta * 2.8, 0.12);

    if (focusedObject) {
      if (focusedObject === "sun") {
        // Sun is at solar group center [5.5, 0, -2]
        targetLookAt.set(5.5, 0, -2);
        targetCameraPos.set(3.2, 1.4, 5.5);
      } else {
        // Find planet configuration
        const planetConfig = SOLAR_SYSTEM_DATA.find((p) => p.id === focusedObject);
        if (planetConfig) {
          // Calculate approx position in solar group
          // Offset camera so it frames the planet as an anchor rather than dead center
          const offset = planetConfig.cameraOffset;
          targetLookAt.set(5.5, 0, -2);
          targetCameraPos.set(
            5.5 + offset[0] - 1.2,
            offset[1] + 1.0,
            -2 + offset[2] + 4.5
          );
        } else {
          targetLookAt.copy(defaultLookAt);
          targetCameraPos.copy(defaultPos);
        }
      }
    } else {
      // Normal state with subtle, cinematic mouse parallax
      const pointerX = state.pointer.x;
      const pointerY = state.pointer.y;

      targetCameraPos.set(
        defaultPos.x + pointerX * 0.8,
        defaultPos.y + pointerY * 0.4,
        defaultPos.z
      );

      targetLookAt.set(
        defaultLookAt.x + pointerX * 0.3,
        defaultLookAt.y + pointerY * 0.2,
        defaultLookAt.z
      );
    }

    // Smooth lerp camera position
    camera.position.lerp(targetCameraPos, lerpFactor);

    // Smooth lerp camera lookAt target
    currentLookAt.lerp(targetLookAt, lerpFactor);
    camera.lookAt(currentLookAt);
  });

  return null;
}

