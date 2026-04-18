"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { SKILLS } from "@/lib/constants";
import { useAnimateIn } from "@/lib/useAnimateIn";

export default function Skills() {
  const { ref, isVisible } = useAnimateIn(0.2);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;

      barsRef.current.forEach((bar, i) => {
        if (!bar) return;
        const targetWidth = bar.getAttribute("data-width");

        gsap.to(bar, {
          width: targetWidth,
          duration: 1.4,
          ease: "power3.out",
          delay: i * 0.1,
        });
      });
    }
  }, [isVisible]);

  return (
    <section id="skills" ref={ref} className="relative z-10 section-padding bg-black/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Skills list */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="flex items-center gap-4 mb-12">
              <FontAwesomeIcon icon={faCode} className="w-4 h-4 text-gold-dim" />
              <h2 className="section-title">
                <span className="text-white">TECH </span>
                <span className="text-gold">STACK</span>
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {SKILLS.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-mono text-[0.7rem] text-text/90 tracking-wider uppercase flex items-center gap-2">
                      <FontAwesomeIcon icon={faCircleCheck} className="w-3 h-3 text-gold/60" />
                      {skill.name}
                    </span>
                    <span className="font-mono text-[0.65rem] text-gold tracking-widest">
                      {skill.percent}%
                    </span>
                  </div>
                  <div className="h-[2px] w-full bg-panel relative overflow-hidden">
                    <div
                      ref={(el) => { barsRef.current[i] = el; }}
                      data-width={`${skill.percent}%`}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold-dim to-gold w-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quote block */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="p-8 md:p-12 border-l-2 border-gold/30 relative">
              <div className="absolute -top-4 -left-[21px] w-10 h-10 bg-black flex items-center justify-center">
                <span className="font-display text-4xl text-gold-dim leading-none">&quot;</span>
              </div>
              <p className="pull-quote mb-6">
                &quot;The best engineers don&apos;t just write code. They engineer momentum.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gold-dim" />
                <span className="font-mono text-[0.65rem] text-muted tracking-widest uppercase">
                  Akshit&apos;s Engineering Philosophy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
