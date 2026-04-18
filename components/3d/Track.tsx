"use client";

import { useRef, useMemo } from "react";
import { Mesh, DoubleSide } from "three";
import { TRACK } from "@/lib/constants";

function LaneMarkings() {
  const markings = useMemo(() => {
    const items = [];
    for (let z = -TRACK.roadLength / 2; z < TRACK.roadLength / 2; z += TRACK.laneMarkingSpacing) {
      items.push(
        <mesh key={`lane-${z}`} position={[0, 0.01, z]} rotation={[-Math.PI / 2, 0, 0]}>
          <boxGeometry args={[0.15, 3, 0.02]} />
          <meshStandardMaterial
            color={TRACK.laneMarkingColor}
            transparent
            opacity={TRACK.laneMarkingOpacity}
          />
        </mesh>
      );
    }
    return items;
  }, []);

  return <>{markings}</>;
}

function Kerbs({ side }: { side: "left" | "right" }) {
  const xPos = side === "left" ? -(TRACK.roadWidth / 2 - 0.25) : TRACK.roadWidth / 2 - 0.25;

  const kerbs = useMemo(() => {
    const items = [];
    const segmentLength = 1.5;
    const numSegments = Math.floor(TRACK.roadLength / segmentLength);

    for (let i = 0; i < numSegments; i++) {
      const z = -TRACK.roadLength / 2 + i * segmentLength + segmentLength / 2;
      const isRed = i % 2 === 0;

      items.push(
        <mesh key={`kerb-${side}-${i}`} position={[xPos, TRACK.kerbHeight / 2, z]}>
          <boxGeometry args={[TRACK.kerbWidth, TRACK.kerbHeight, segmentLength]} />
          <meshStandardMaterial color={isRed ? TRACK.kerbRed : TRACK.kerbWhite} />
        </mesh>
      );
    }
    return items;
  }, [xPos, side]);

  return <>{kerbs}</>;
}

function ArmcoBarriers({ side }: { side: "left" | "right" }) {
  const xPos =
    side === "left"
      ? -(TRACK.roadWidth / 2 + TRACK.armcoWidth / 2 + 0.2)
      : TRACK.roadWidth / 2 + TRACK.armcoWidth / 2 + 0.2;

  return (
    <mesh position={[xPos, TRACK.armcoHeight / 2, 0]}>
      <boxGeometry args={[TRACK.armcoWidth, TRACK.armcoHeight, TRACK.roadLength]} />
      <meshStandardMaterial
        color={TRACK.armcoColor}
        metalness={TRACK.armcoMetalness}
        roughness={TRACK.armcoRoughness}
      />
    </mesh>
  );
}

function FloodlightPoles({ side }: { side: "left" | "right" }) {
  const xPos =
    side === "left"
      ? -(TRACK.roadWidth / 2 + 2)
      : TRACK.roadWidth / 2 + 2;

  const poles = useMemo(() => {
    const items = [];
    const spacing = TRACK.roadLength / (TRACK.polesPerSide + 1);

    for (let i = 1; i <= TRACK.polesPerSide; i++) {
      const z = -TRACK.roadLength / 2 + i * spacing;
      items.push(
        <mesh key={`pole-${side}-${i}`} position={[xPos, TRACK.poleHeight / 2, z]}>
          <cylinderGeometry args={[0.08, 0.12, TRACK.poleHeight, 8]} />
          <meshStandardMaterial color={TRACK.poleColor} metalness={0.5} roughness={0.5} />
        </mesh>
      );
    }
    return items;
  }, [xPos, side]);

  return <>{poles}</>;
}

export default function Track() {
  const roadRef = useRef<Mesh>(null);

  return (
    <group>
      {/* Road surface */}
      <mesh ref={roadRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[TRACK.roadWidth, TRACK.roadLength]} />
        <meshStandardMaterial
          color={TRACK.roadColor}
          roughness={TRACK.roadRoughness}
          metalness={TRACK.roadMetalness}
          side={DoubleSide}
        />
      </mesh>

      {/* Lane markings */}
      <LaneMarkings />

      {/* Kerbs */}
      <Kerbs side="left" />
      <Kerbs side="right" />

      {/* Armco barriers */}
      <ArmcoBarriers side="left" />
      <ArmcoBarriers side="right" />

      {/* Floodlight poles */}
      <FloodlightPoles side="left" />
      <FloodlightPoles side="right" />
    </group>
  );
}
