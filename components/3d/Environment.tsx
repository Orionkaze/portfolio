"use client";

import { LIGHTING } from "@/lib/constants";

export default function Environment() {
  return (
    <group>
      {/* Near-total darkness ambient */}
      <ambientLight intensity={LIGHTING.ambient.intensity} color={LIGHTING.ambient.color} />

      {/* Hemisphere light — subtle sky/ground separation */}
      <hemisphereLight
        color={LIGHTING.hemisphere.skyColor}
        groundColor={LIGHTING.hemisphere.groundColor}
        intensity={LIGHTING.hemisphere.intensity}
      />

      {/* Key light — gold spot above the car */}
      <spotLight
        position={[0, 10, 0]}
        color={LIGHTING.spotKey.color}
        intensity={LIGHTING.spotKey.intensity}
        angle={LIGHTING.spotKey.angle}
        penumbra={LIGHTING.spotKey.penumbra}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Rim light — blue behind car for dramatic backlighting */}
      <spotLight
        position={[0, 3, -8]}
        color={LIGHTING.spotRim.color}
        intensity={LIGHTING.spotRim.intensity}
        angle={0.5}
        penumbra={0.8}
      />

      {/* Front point light — warm headlamp glow ahead */}
      <pointLight
        position={[0, 1, 10]}
        color={LIGHTING.pointFront.color}
        intensity={LIGHTING.pointFront.intensity}
        distance={30}
      />
    </group>
  );
}
