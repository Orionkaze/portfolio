"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollControllerProps {
  children: (scrollProgress: React.MutableRefObject<number>) => ReactNode;
}

export default function ScrollController({ children }: ScrollControllerProps) {
  const scrollProgress = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        scrollProgress.current = self.progress;
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div ref={containerRef}>
      {children(scrollProgress)}
    </div>
  );
}
