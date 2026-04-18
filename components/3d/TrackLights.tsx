"use client";

import { useRef, useMemo, useEffect } from "react";
import { SpotLight as ThreeSpotLight } from "three";
import { TRACK, LIGHTING } from "@/lib/constants";

function FloodLight({ position }: { position: [number, number, number] }) {
  const lightRef = useRef<ThreeSpotLight>(null);

  useEffect(() => {
    if (!lightRef.current) return;
    const light = lightRef.current;

    // Subtle flicker effect — random intensity variation
    const baseIntensity = LIGHTING.floodlight.intensity;


    // Run flicker at reduced frequency (every ~100ms)
    const interval = setInterval(() => {
      const noise = 0.8 + Math.random() * 0.4;
      light.intensity = baseIntensity * noise;
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <spotLight
      ref={lightRef}
      position={position}
      color={LIGHTING.floodlight.color}
      intensity={LIGHTING.floodlight.intensity}
      angle={0.6}
      penumbra={0.5}
      distance={30}
      castShadow
      shadow-mapSize-width={512}
      shadow-mapSize-height={512}
      target-position={[position[0], 0, position[2]]}
    />
  );
}

export default function TrackLights() {
  const lights = useMemo(() => {
    const items: { position: [number, number, number]; key: string }[] = [];
    const spacing = TRACK.roadLength / (TRACK.polesPerSide + 1);

    for (let i = 1; i <= TRACK.polesPerSide; i++) {
      const z = -TRACK.roadLength / 2 + i * spacing;
      items.push({
        position: [-(TRACK.roadWidth / 2 + 2), TRACK.poleHeight, z],
        key: `flood-left-${i}`,
      });
      items.push({
        position: [TRACK.roadWidth / 2 + 2, TRACK.poleHeight, z],
        key: `flood-right-${i}`,
      });
    }
    return items;
  }, []);

  return (
    <group>
      {lights.map((light) => (
        <FloodLight key={light.key} position={light.position} />
      ))}
    </group>
  );
}
