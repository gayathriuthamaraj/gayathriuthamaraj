"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAtmosphere } from "@/lib/atmosphere";


// ─── DriftingLeaves ───────────────────────────────────────────────────────────
// Atmospheric leaf-fall animation scoped to the footer/contact section.
// Uses Framer Motion for reliable, GPU-composited animation across all browsers.
// Pointer-events are disabled — nothing blocks footer buttons or links.

type LeafConfig = {
  id: number;
  startX: string;   // % from left
  startY: string;   // % from top of the section
  scale: number;
  opacity: number;
  duration: number; // seconds for one full drift cycle
  delay: number;    // stagger delay in seconds
  rotateEnd: number;// final rotation in degrees
  driftX: number;   // horizontal drift in px (negative = left)
};

const LEAVES: LeafConfig[] = [
  { id: 0, startX: "7%",  startY: "-5%",  scale: 0.7,  opacity: 0.28, duration: 12, delay: 0,    rotateEnd:  40,  driftX:  55 },
  { id: 1, startX: "20%", startY: "-8%",  scale: 0.5,  opacity: 0.20, duration: 15, delay: 2.5,  rotateEnd: -35,  driftX: -45 },
  { id: 2, startX: "37%", startY: "-3%",  scale: 0.85, opacity: 0.32, duration: 11, delay: 5,    rotateEnd:  55,  driftX:  40 },
  { id: 3, startX: "52%", startY: "-10%", scale: 0.45, opacity: 0.18, duration: 17, delay: 1,    rotateEnd: -50,  driftX: -60 },
  { id: 4, startX: "68%", startY: "-6%",  scale: 0.75, opacity: 0.26, duration: 13, delay: 7,    rotateEnd:  30,  driftX:  50 },
  { id: 5, startX: "83%", startY: "-4%",  scale: 0.55, opacity: 0.22, duration: 16, delay: 3.5,  rotateEnd: -42,  driftX: -35 },
  { id: 6, startX: "14%", startY: "-12%", scale: 0.60, opacity: 0.24, duration: 14, delay: 9,    rotateEnd:  60,  driftX:  65 },
  { id: 7, startX: "61%", startY: "-7%",  scale: 0.90, opacity: 0.30, duration: 10, delay: 4,    rotateEnd: -25,  driftX: -38 },
];

// Small botanical leaf SVG
function Leaf({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Leaf blade */}
      <path
        d="M12 1C12 1 3 7 3 16C3 21.5228 7.47715 26 13 26C18.5228 26 23 21.5228 23 16C23 7 12 1 12 1Z"
        fill="rgba(90,122,86,0.75)"
        stroke="rgba(58,92,77,0.5)"
        strokeWidth="0.5"
      />
      {/* Midrib */}
      <path
        d="M12 3C12 3 11.5 13 12.5 26"
        stroke="rgba(40,70,55,0.7)"
        strokeWidth="0.7"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left lateral veins */}
      <path d="M12 10 C9.5 11.5 7 12.5 5.5 13.5" stroke="rgba(40,70,55,0.45)" strokeWidth="0.5" strokeLinecap="round" fill="none" />
      <path d="M12 15 C9 16.5 7 17.5 5 18" stroke="rgba(40,70,55,0.35)" strokeWidth="0.4" strokeLinecap="round" fill="none" />
      {/* Right lateral veins */}
      <path d="M12.5 12 C15 13 17.5 13.5 19.5 14.5" stroke="rgba(40,70,55,0.45)" strokeWidth="0.5" strokeLinecap="round" fill="none" />
      <path d="M12.5 18 C15 19 17 19.5 19 20" stroke="rgba(40,70,55,0.35)" strokeWidth="0.4" strokeLinecap="round" fill="none" />
      {/* Highlight sheen */}
      <path
        d="M10 5 C8.5 9 8 14 9 19"
        stroke="rgba(154,184,150,0.22)"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function DriftingLeaf({ leaf }: { leaf: LeafConfig }) {
  const px = Math.round(18 + leaf.scale * 14); // 18–30px rendered size

  return (
    <motion.div
      key={leaf.id}
      aria-hidden="true"
      style={{
        position: "absolute",
        left: leaf.startX,
        top: leaf.startY,
        pointerEvents: "none",
        zIndex: 0,
      }}
      initial={{ opacity: 0, y: 0, x: 0, rotate: 0 }}
      animate={{
        opacity: [0, leaf.opacity, leaf.opacity * 0.85, leaf.opacity * 0.5, 0],
        // Fall downward through the full section height
        y: ["0%", "20vh", "50vh", "80vh", "110vh"],
        x: [
          0,
          leaf.driftX * 0.25,
          leaf.driftX * 0.6,
          leaf.driftX * 0.85,
          leaf.driftX,
        ],
        rotate: [0, leaf.rotateEnd * 0.3, leaf.rotateEnd * 0.65, leaf.rotateEnd * 0.9, leaf.rotateEnd],
      }}
      transition={{
        duration: leaf.duration,
        delay: leaf.delay,
        repeat: Infinity,
        ease: [0.37, 0, 0.63, 1],
        // Stagger the individual keyframe timings naturally
        times: [0, 0.08, 0.4, 0.75, 1],
      }}
    >
      <div style={{ transform: `scale(${leaf.scale})`, transformOrigin: "center top" }}>
        <Leaf size={px} />
      </div>
    </motion.div>
  );
}

export default function DriftingLeaves() {
  const { mode } = useAtmosphere();

  return (
    <AnimatePresence>
      {mode === "exploring" && (
        <motion.div
          key="leaves"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          {LEAVES.map((leaf) => (
            <DriftingLeaf key={leaf.id} leaf={leaf} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
