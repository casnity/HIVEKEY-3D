"use client";

import { motion, MotionValue, useTransform } from "motion/react";

interface BackgroundGlowProps {
  progress: MotionValue<number>;
}

export function BackgroundGlow({ progress }: BackgroundGlowProps) {
  const heatOpacity = useTransform(progress, [0.15, 0.3, 0.7, 0.85], [0, 1, 1, 0]);
  const glowOpacity = useTransform(progress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[#000000]" />

      <motion.div
        style={{ opacity: heatOpacity }}
        className="absolute inset-0 bg-[linear-gradient(180deg,#000000_0%,#1A0000_30%,#3B0000_50%,#1A0000_70%,#000000_100%)]"
      />

      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0%,rgba(255,120,60,0.25)_25%,rgba(255,0,0,0.2)_45%,rgba(0,0,0,0)_75%)]" />
      </motion.div>
    </div>
  );
}
