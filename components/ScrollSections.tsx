"use client";

import { useState } from "react";
import { motion, MotionValue, useTransform, AnimatePresence } from "motion/react";

interface ScrollSectionsProps {
  progress: MotionValue<number>;
}

export function ScrollSections({ progress }: ScrollSectionsProps) {
  const [toast, setToast] = useState<string | null>(null);

  const handleAddToCart = () => {
    setToast("Hive 65 added to your cart.");
    setTimeout(() => setToast(null), 3000);
  };

  const handleBuyNow = () => {
    setToast("Proceeding to secure checkout...");
    setTimeout(() => setToast(null), 3000);
  };

  const section1Opacity = useTransform(progress, [0, 0.05, 0.1, 0.15], [1, 1, 1, 0]);
  const section2Opacity = useTransform(progress, [0.15, 0.2, 0.35, 0.4], [0, 1, 1, 0]);
  const section3Opacity = useTransform(progress, [0.4, 0.45, 0.6, 0.65], [0, 1, 1, 0]);
  const section4Opacity = useTransform(progress, [0.65, 0.7, 0.8, 0.85], [0, 1, 1, 0]);
  const section5Opacity = useTransform(progress, [0.85, 0.9, 1, 1], [0, 1, 1, 1]);

  const section1Y = useTransform(progress, [0, 0.05, 0.1, 0.15], [0, 0, 0, -20]);
  const section2Y = useTransform(progress, [0.15, 0.2, 0.35, 0.4], [20, 0, 0, -20]);
  const section3Y = useTransform(progress, [0.4, 0.45, 0.6, 0.65], [20, 0, 0, -20]);
  const section4Y = useTransform(progress, [0.65, 0.7, 0.8, 0.85], [20, 0, 0, -20]);
  const section5Y = useTransform(progress, [0.85, 0.9, 1, 1], [20, 0, 0, 0]);

  return (
    <>
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {/* Section 1: Hero */}
        <motion.div
          style={{ opacity: section1Opacity, y: section1Y }}
          className="absolute text-center max-w-2xl px-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-[#FFF2EB] to-[#FFB08A]">
            Flow Hive 65
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-white/90 mb-6">
            Precision, perfected.
          </p>
          <p className="text-lg text-white/60">
            Flagship mechanical performance, refined to its purest form.
          </p>
        </motion.div>

        {/* Section 2: Engineering Reveal */}
        <motion.div
          style={{ opacity: section2Opacity, y: section2Y }}
          className="absolute left-10 md:left-24 max-w-lg px-6 text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-[#FFF2EB] to-[#FFB08A]">
            Engineered from the inside out.
          </h2>
          <div className="space-y-4 text-lg text-white/60">
            <p>Custom mechanical switches tuned for consistency and responsiveness.</p>
            <p>CNC-machined aluminum paired with a precision gasket mount for balanced keystroke dynamics.</p>
            <p>Every component is tuned for control, stability, and durability—keystroke after keystroke.</p>
          </div>
        </motion.div>

        {/* Section 3: Switches & Performance */}
        <motion.div
          style={{ opacity: section3Opacity, y: section3Y }}
          className="absolute right-10 md:right-24 max-w-lg px-6 text-right"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-[#FFF2EB] to-[#FFB08A]">
            Performance in every press.
          </h2>
          <div className="space-y-4 text-lg text-white/60">
            <p>Hot-swappable switch architecture.</p>
            <p>Ultra-low latency wired and wireless modes.</p>
            <p>High polling rate for real-time input precision.</p>
            <p>Optimized actuation for speed and control.</p>
          </div>
        </motion.div>

        {/* Section 4: Materials & Structure */}
        <motion.div
          style={{ opacity: section4Opacity, y: section4Y }}
          className="absolute left-10 md:left-24 max-w-lg px-6 text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-[#FFF2EB] to-[#FFB08A]">
            Crafted for stability.
          </h2>
          <div className="space-y-4 text-lg text-white/60">
            <p>Multi-layer internal structure enhances consistency across every key.</p>
            <p>Precision-aligned stabilizers eliminate wobble.</p>
            <p>Balanced resistance. Clean reset. Effortless control.</p>
          </div>
        </motion.div>

        {/* Section 5: Reassembly & CTA */}
        <motion.div
          style={{ opacity: section5Opacity, y: section5Y }}
          className="absolute text-center max-w-2xl px-6 pointer-events-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-[#FFF2EB] to-[#FFB08A]">
            Built for focus.<br />Designed for flow.
          </h2>
          <p className="text-xl md:text-2xl font-medium text-white/90 mb-10">
            Hive 65. A new standard in mechanical precision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-4">
            <div className="flex flex-col items-center sm:items-end">
              <span className="text-4xl font-bold tracking-tight text-white">$79</span>
              <span className="text-sm text-white/50">Free worldwide shipping</span>
            </div>
            <div className="h-12 w-px bg-white/20 hidden sm:block"></div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button onClick={handleAddToCart} className="relative overflow-hidden rounded-full px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 active:scale-95 group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00] via-[#FF2E00] to-[#B30000] opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 shadow-[0_0_30px_rgba(255,106,0,0.4)]" />
                <span className="relative z-10">Add to Cart</span>
              </button>
              <button onClick={handleBuyNow} className="rounded-full px-8 py-4 text-lg font-semibold text-white bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                Buy Now
              </button>
            </div>
          </div>

          <p className="mt-12 text-sm text-white/40 uppercase tracking-widest">
            Compact form. Full control.
          </p>
        </motion.div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-[#1A1A1A]/90 backdrop-blur-md border border-[#333] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 pointer-events-none"
          >
            <div className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse" />
            <span className="font-medium text-sm tracking-wide">{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
