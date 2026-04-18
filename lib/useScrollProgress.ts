"use client";

import { createContext, useContext } from "react";
import { CAR_SCROLL, CAMERA, POST_PROCESSING } from "./constants";

interface ScrollProgressValues {
  progress: number;
  carZ: number;
  carRotX: number;
  cameraZ: number;
  cameraX: number;
  bloomIntensity: number;
}

const ScrollProgressContext = createContext<{ current: number }>({ current: 0 });

export const ScrollProgressProvider = ScrollProgressContext.Provider;

export function useScrollProgress(): ScrollProgressValues {
  const progressRef = useContext(ScrollProgressContext);
  const p = progressRef.current;

  return {
    progress: p,
    carZ: CAR_SCROLL.zStart + p * (CAR_SCROLL.zEnd - CAR_SCROLL.zStart),
    carRotX: CAR_SCROLL.rotXStart + p * (CAR_SCROLL.rotXEnd - CAR_SCROLL.rotXStart),
    cameraZ: CAMERA.scrollZRange[0] + p * (CAMERA.scrollZRange[1] - CAMERA.scrollZRange[0]),
    cameraX: Math.sin(p * Math.PI * 4) * CAMERA.driftAmplitude,
    bloomIntensity:
      POST_PROCESSING.bloom.intensityStart +
      p * (POST_PROCESSING.bloom.intensityEnd - POST_PROCESSING.bloom.intensityStart),
  };
}
