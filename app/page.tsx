"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import ScrollController from "@/components/ScrollController";
import Nav from "@/components/ui/Nav";
import Cursor from "@/components/ui/Cursor";
import Ticker from "@/components/ui/Ticker";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Work from "@/components/sections/Work";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

// Lazy load the 3D scene to prevent blocking the main thread during initial render
const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="home-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative min-h-screen"
      >
        <Cursor />
        <Nav />

        <ScrollController>
          {(scrollProgress) => (
            <>
              {/* Background 3D Layer (Fixed) */}
              <Scene scrollProgress={scrollProgress} />

              {/* Foreground Content Layer (Scrolls normally over the background) */}
              <div className="relative z-10 w-full flex flex-col pointer-events-none">
                {/* 
                  Use pointer-events-none on the wrapper so we don't block 
                  the canvas behind it, but restore pointer events on sections
                */}
                <div className="pointer-events-auto">
                  <Hero />
                  <Stats />
                  <Work />
                  <Skills />
                  <About />
                  <Contact />
                  <Ticker />
                  <Footer />
                </div>
              </div>
            </>
          )}
        </ScrollController>
      </motion.main>
    </AnimatePresence>
  );
}
