"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { STATS } from "@/lib/constants";
import { useAnimateIn } from "@/lib/useAnimateIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlagCheckered,
  faRocket,
  faUsers,
  faGaugeHigh,
} from "@fortawesome/free-solid-svg-icons";

const STAT_ICONS = [faFlagCheckered, faRocket, faUsers, faGaugeHigh];

export default function Stats() {
  const { ref, isVisible } = useAnimateIn(0.2);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;

      STATS.forEach((stat, i) => {
        const el = countersRef.current[i];
        if (!el) return;

        const obj = { value: 0 };
        gsap.to(obj, {
          value: stat.value,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(obj.value).toString();
          },
        });
      });
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className={`relative z-10 section-padding ${
        isVisible ? "animate-fade-up" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="card-panel p-6 md:p-8 flex flex-col items-center text-center group"
            >
              <FontAwesomeIcon
                icon={STAT_ICONS[i]}
                className="w-4 h-4 text-gold-dim mb-4 group-hover:text-gold transition-colors duration-300"
              />
              <div className="flex items-baseline gap-0.5 mb-2">
                <span
                  ref={(el) => { countersRef.current[i] = el; }}
                  className="font-display text-4xl md:text-5xl text-gold"
                >
                  0
                </span>
                <span className="font-display text-2xl md:text-3xl text-gold">
                  {stat.suffix}
                </span>
              </div>
              <span className="font-mono text-[0.6rem] text-muted tracking-[0.15em] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
