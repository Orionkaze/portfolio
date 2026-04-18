"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  Vignette,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import Car from "./Car";
import Track from "./Track";
import TrackLights from "./TrackLights";
import Environment from "./Environment";
import { CAMERA, FOG, POST_PROCESSING } from "@/lib/constants";

function CameraController({
  scrollProgress,
}: {
  scrollProgress: React.MutableRefObject<number>;
}) {
  useFrame(({ camera }) => {
    const p = scrollProgress.current;

    // Camera Z follows the car (chases behind)
    const targetZ =
      CAMERA.scrollZRange[0] +
      p * (CAMERA.scrollZRange[1] - CAMERA.scrollZRange[0]);

    // Broadcast camera drift on X axis
    const targetX =
      Math.sin(p * Math.PI * 4) * CAMERA.driftAmplitude;

    // Smooth lerp
    camera.position.z += (targetZ - camera.position.z) * 0.05;
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y = CAMERA.initialPosition[1];

    // Look at the car's approximate position
    const carZ = p * 120;
    camera.lookAt(0, 1, Math.min(carZ, camera.position.z - 5));
  });

  return null;
}

function SceneContent({
  scrollProgress,
}: {
  scrollProgress: React.MutableRefObject<number>;
}) {
  return (
    <>
      <CameraController scrollProgress={scrollProgress} />
      <Environment />
      <Track />
      <TrackLights />
      <Suspense fallback={null}>
        <Car scrollProgress={scrollProgress} />
      </Suspense>
    </>
  );
}

function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-gold-dim border-t-gold rounded-full animate-spin" />
        <p className="font-mono text-xs text-muted tracking-widest uppercase">
          Loading Circuit...
        </p>
      </div>
    </div>
  );
}

interface SceneProps {
  scrollProgress: React.MutableRefObject<number>;
}

export default function Scene({ scrollProgress }: SceneProps) {
  return (
    <div className="fixed inset-0 w-full h-full" style={{ zIndex: 0 }}>
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          shadows
          gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.0,
          }}
          camera={{
            fov: CAMERA.fov,
            position: CAMERA.initialPosition,
            near: 0.1,
            far: 500,
          }}
          onCreated={({ scene }) => {
            scene.fog = new THREE.FogExp2(FOG.color, FOG.density);
          }}
        >
          <SceneContent scrollProgress={scrollProgress} />

          {/* Post-processing effects */}
          <EffectComposer>
            <Bloom
              luminanceThreshold={POST_PROCESSING.bloom.luminanceThreshold}
              intensity={POST_PROCESSING.bloom.intensityStart}
              mipmapBlur
            />
            <Vignette
              offset={POST_PROCESSING.vignette.offset}
              darkness={POST_PROCESSING.vignette.darkness}
              blendFunction={BlendFunction.NORMAL}
            />
            <ChromaticAberration
              offset={
                new THREE.Vector2(
                  POST_PROCESSING.chromaticAberration.offset[0],
                  POST_PROCESSING.chromaticAberration.offset[1]
                )
              }
              blendFunction={BlendFunction.NORMAL}
            />
          </EffectComposer>
        </Canvas>
      </Suspense>
    </div>
  );
}
