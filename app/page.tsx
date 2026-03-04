"use client";

import { useRef } from "react";
import { useScroll } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { BackgroundGlow } from "@/components/BackgroundGlow";
import { KeyboardSequence } from "@/components/KeyboardSequence";
import { ScrollSections } from "@/components/ScrollSections";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-black text-white min-h-screen selection:bg-[#FF6A00]/30 font-sans">
      <Navbar />
      
      <div ref={containerRef} className="relative h-[400vh]" id="scroll-container">
        {/* Anchor Points for Navigation */}
        <div id="overview" className="absolute top-0 w-full h-10 pointer-events-none" />
        <div id="technology" className="absolute top-[100vh] w-full h-10 pointer-events-none" />
        <div id="design" className="absolute top-[260vh] w-full h-10 pointer-events-none" />
        <div id="specs" className="absolute top-[340vh] w-full h-10 pointer-events-none" />
        <div id="buy" className="absolute bottom-0 w-full h-10 pointer-events-none" />

        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          <BackgroundGlow progress={scrollYProgress} />
          
          {/* 
            In a production environment, this CSS 3D sequence would be replaced 
            by an HTML5 Canvas playing a 120-frame pre-rendered image sequence 
            for maximum photorealism, as requested. For this prototype, we use 
            a high-performance CSS 3D hardware-accelerated sequence to simulate 
            the explosion effect.
          */}
          <KeyboardSequence progress={scrollYProgress} />
          
          <ScrollSections progress={scrollYProgress} />
        </div>
      </div>

      <div className="h-screen bg-black flex items-center justify-center border-t border-white/10">
        <p className="text-white/40">© 2026 Flow Hive. All rights reserved.</p>
      </div>
    </main>
  );
}
