"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-gold-dim/20 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left — brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-display text-xl text-gold tracking-wider">
              AKSHIT SHUKLA
            </span>
            <span className="font-mono text-[0.6rem] text-muted tracking-widest uppercase">
              CTO & Full-Stack Developer
            </span>
          </div>

          {/* Center — social links */}
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="text-muted hover:text-gold transition-colors duration-300"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-gold transition-colors duration-300"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-gold transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-gold transition-colors duration-300"
              aria-label="Website"
            >
              <FontAwesomeIcon icon={faGlobe} className="w-4 h-4" />
            </a>
          </div>

          {/* Right — credits */}
          <div className="flex flex-col items-center md:items-end gap-1">
            <span className="font-mono text-[0.55rem] text-muted/60 tracking-wider">
              3D Model: Oracle Red Bull RB19 by Redgrund / Sketchfab (CC BY)
            </span>
            <span className="font-mono text-[0.55rem] text-muted/40 tracking-wider">
              © {new Date().getFullYear()} Akshit Shukla. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
