"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe, faBolt } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useAnimateIn } from "@/lib/useAnimateIn";

export default function Contact() {
  const { ref, isVisible } = useAnimateIn(0.2);

  // Magnetic hover effect
  const handleMagneticMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const distance = Math.sqrt(x * x + y * y);
    const maxDist = 40;

    if (distance < maxDist) {
      gsap.to(el, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMagneticLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <section id="contact" ref={ref} className="relative z-10 section-padding pb-32">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <FontAwesomeIcon icon={faBolt} className="w-4 h-4 text-gold animate-pulse" />
            <span className="font-mono text-[0.65rem] text-muted tracking-[0.2em] uppercase">
              Pit Stop
            </span>
            <FontAwesomeIcon icon={faBolt} className="w-4 h-4 text-gold animate-pulse" />
          </div>

          <h2 className="font-display text-5xl md:text-8xl lg:text-[9rem] text-white leading-[0.8] tracking-tight mb-8">
            LET'S <span className="text-gold">BUILD</span><br />
            TOGETHER
          </h2>

          <p className="font-mono text-sm text-text/80 max-w-lg mx-auto leading-relaxed mb-16">
            Open to full-time roles, freelance contracts, and interesting collabs. Let's make something fast.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
              className="group flex items-center gap-3 px-6 py-4 bg-panel border border-gold-dim/30 hover:border-gold hover:bg-gold/5 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-gold-dim group-hover:text-gold" />
              <span className="font-mono text-[0.7rem] text-text tracking-widest uppercase">Email</span>
            </a>

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
              className="group flex items-center gap-3 px-6 py-4 bg-panel border border-gold-dim/30 hover:border-gold hover:bg-gold/5 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 text-gold-dim group-hover:text-gold" />
              <span className="font-mono text-[0.7rem] text-text tracking-widest uppercase">LinkedIn</span>
            </a>

            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
              className="group flex items-center gap-3 px-6 py-4 bg-panel border border-gold-dim/30 hover:border-gold hover:bg-gold/5 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faGithub} className="w-4 h-4 text-gold-dim group-hover:text-gold" />
              <span className="font-mono text-[0.7rem] text-text tracking-widest uppercase">GitHub</span>
            </a>

            <a
              href={SOCIAL_LINKS.website}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
              className="group flex items-center gap-3 px-6 py-4 bg-panel border border-gold-dim/30 hover:border-gold hover:bg-gold/5 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faGlobe} className="w-4 h-4 text-gold-dim group-hover:text-gold" />
              <span className="font-mono text-[0.7rem] text-text tracking-widest uppercase">Website</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
