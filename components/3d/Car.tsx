"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";
import { CAR_SCROLL } from "@/lib/constants";

interface CarProps {
  scrollProgress: React.MutableRefObject<number>;
}

export default function Car({ scrollProgress }: CarProps) {
  const groupRef = useRef<Group>(null);
  const introComplete = useRef(false);
  const introProgress = useRef(0);

  // Load the GLB model
  const { scene } = useGLTF("/models/car.glb");

  // Clone the scene to avoid mutation issues
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if ((child as any).isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    const group = groupRef.current;

    // Intro animation: car fades in from z:-80 to z:-20
    if (!introComplete.current) {
      introProgress.current += delta / CAR_SCROLL.introDuration;
      if (introProgress.current >= 1) {
        introProgress.current = 1;
        introComplete.current = true;
      }

      const t = easeOutCubic(introProgress.current);
      const introZ = CAR_SCROLL.introFrom + t * (CAR_SCROLL.introTo - CAR_SCROLL.introFrom);
      group.position.z = introZ;

      // Fade in via scale (since GLB materials may not support opacity easily)
      const scale = t;
      group.scale.setScalar(Math.max(0.01, scale));
      return;
    }

    // Scroll-driven position
    const p = scrollProgress.current;
    const targetZ = CAR_SCROLL.zStart + p * (CAR_SCROLL.zEnd - CAR_SCROLL.zStart);
    const targetRotX = CAR_SCROLL.rotXStart + p * (CAR_SCROLL.rotXEnd - CAR_SCROLL.rotXStart);

    // Smooth lerp to target
    group.position.z += (targetZ - group.position.z) * 0.1;
    group.rotation.x += (targetRotX - group.rotation.x) * 0.1;

    // Idle sway on Y axis
    const time = performance.now() / 1000;
    group.position.y =
      Math.sin(time * ((2 * Math.PI) / CAR_SCROLL.idleSwayPeriod)) * CAR_SCROLL.idleSwayAmplitude;
  });

  return (
    <group ref={groupRef} position={[0, 0, CAR_SCROLL.introFrom]} scale={0.01}>
      <primitive object={scene} scale={1} rotation={[0, Math.PI, 0]} />
    </group>
  );
}

// Easing function
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

// Preload the model
useGLTF.preload("/models/car.glb");
