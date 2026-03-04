"use client";

import { motion, MotionValue, useTransform } from "motion/react";

interface KeyboardSequenceProps {
  progress: MotionValue<number>;
}

export function KeyboardSequence({ progress }: KeyboardSequenceProps) {
  const maxZ = 120;

  const keycapsZ = useTransform(progress, [0, 0.15, 0.4, 0.85, 1], [0, 0, maxZ * 3, maxZ * 3, 0]);
  const switchesZ = useTransform(progress, [0, 0.15, 0.4, 0.85, 1], [0, 0, maxZ * 2, maxZ * 2, 0]);
  const plateZ = useTransform(progress, [0, 0.15, 0.4, 0.85, 1], [0, 0, maxZ * 1, maxZ * 1, 0]);
  const foamZ = useTransform(progress, [0, 0.15, 0.4, 0.85, 1], [0, 0, maxZ * 0.5, maxZ * 0.5, 0]);
  const pcbZ = useTransform(progress, [0, 0.15, 0.4, 0.85, 1], [0, 0, 0, 0, 0]);
  const caseZ = useTransform(progress, [0, 0.15, 0.4, 0.85, 1], [0, 0, -maxZ * 1.5, -maxZ * 1.5, 0]);

  const rotateX = useTransform(progress, [0, 0.5, 1], [60, 50, 60]);
  const rotateZ = useTransform(progress, [0, 0.5, 1], [-45, -35, -45]);
  const scale = useTransform(progress, [0, 0.5, 1], [1, 0.85, 1]);

  // 65% Layout definition
  const rows = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2], // Row 1 (14 keys)
    [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5], // Row 2 (14 keys)
    [1.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.25], // Row 3 (13 keys)
    [2.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.75, 1], // Row 4 (13 keys)
    [1.25, 1.25, 1.25, 6.25, 1, 1, 1, 1, 1], // Row 5 (9 keys)
  ];

  const renderGrid = (renderItem: (width: number, key: string) => React.ReactNode) => (
    <div className="absolute inset-2 flex flex-col justify-between">
      {rows.map((row, rIdx) => (
        <div key={rIdx} className="flex justify-between w-full h-[18%]">
          {row.map((width, cIdx) => renderItem(width, `${rIdx}-${cIdx}`))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none perspective-[1500px]">
      <motion.div
        style={{
          rotateX,
          rotateZ,
          scale,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[700px] h-[220px]"
      >
        {/* Case */}
        <motion.div
          style={{ translateZ: caseZ }}
          className="absolute inset-0 bg-[#0A0A0C] rounded-2xl border border-[#1A1A1A] shadow-[0_40px_80px_rgba(0,0,0,0.9)]"
        >
          <div className="absolute inset-2 bg-[#050505] rounded-xl shadow-inner border border-[#111]" />
        </motion.div>

        {/* PCB */}
        <motion.div
          style={{ translateZ: pcbZ }}
          className="absolute inset-2 bg-[#0A1A0A] rounded-xl border border-[#1A3A1A] opacity-95 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_95%,rgba(255,215,0,0.15)_100%)] bg-[length:15px_100%]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_95%,rgba(255,215,0,0.15)_100%)] bg-[length:100%_15px]" />
          {/* Microchips */}
          <div className="absolute top-4 right-8 w-12 h-12 bg-[#050505] border border-[#222] rounded-sm" />
          <div className="absolute bottom-4 left-1/2 w-8 h-8 bg-[#050505] border border-[#222] rounded-sm" />
        </motion.div>

        {/* Foam */}
        <motion.div
          style={{ translateZ: foamZ }}
          className="absolute inset-2 bg-[#111] rounded-xl border border-[#222] opacity-85"
        />

        {/* Plate */}
        <motion.div
          style={{ translateZ: plateZ }}
          className="absolute inset-2 bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-xl border border-[#444] shadow-lg"
        >
          {renderGrid((width, key) => (
            <div
              key={key}
              style={{ width: `${(width / 15) * 100}%` }}
              className="h-full p-[2px]"
            >
              <div className="w-full h-full bg-[#050505] rounded-sm shadow-inner" />
            </div>
          ))}
        </motion.div>

        {/* Switches */}
        <motion.div
          style={{ translateZ: switchesZ }}
          className="absolute inset-2"
        >
          {renderGrid((width, key) => (
            <div
              key={key}
              style={{ width: `${(width / 15) * 100}%` }}
              className="h-full flex items-center justify-center p-[2px]"
            >
              <div className="w-4 h-4 bg-gradient-to-b from-[#FF2E00] to-[#B30000] rounded-sm shadow-[0_0_15px_rgba(255,46,0,0.4)] border border-[#FF6A00]/50" />
            </div>
          ))}
        </motion.div>

        {/* Keycaps */}
        <motion.div
          style={{ translateZ: keycapsZ }}
          className="absolute inset-2"
        >
          {renderGrid((width, key) => (
            <div
              key={key}
              style={{ width: `${(width / 15) * 100}%` }}
              className="h-full p-[2px]"
            >
              <div className="w-full h-full bg-gradient-to-b from-[#222] to-[#0A0A0C] rounded-md border-t border-[#444] border-b border-[#000] shadow-[0_8px_15px_rgba(0,0,0,0.8)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent" />
                {/* Subtle top highlight */}
                <div className="absolute top-0 left-1 right-1 h-[1px] bg-white/[0.1]" />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
