"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useAtmosphere } from "@/lib/atmosphere";

// ─── SVG ─────────────────────────────────────────────────────────────────────
function ButterflySVG({ size }: { size: number }) {
  return (
    <svg width={size} height={Math.round(size * 0.76)} viewBox="0 0 28 21" fill="none" aria-hidden="true">
      <path d="M14,9 C9,2 0,1 1,7 C2,12 7,13 14,9Z"          fill="rgba(160,210,242,0.72)" />
      <path d="M14,9 C19,2 28,1 27,7 C26,12 21,13 14,9Z"      fill="rgba(160,210,242,0.72)" />
      <path d="M14,10 C7,13 2,16 3,19 C4,22 9,19 14,12Z"      fill="rgba(140,195,232,0.50)" />
      <path d="M14,10 C21,13 26,16 25,19 C24,22 19,19 14,12Z" fill="rgba(140,195,232,0.50)" />
      <path d="M14,9 C10,6 5,5 2,7"  stroke="rgba(110,175,218,0.28)" strokeWidth="0.45" fill="none" />
      <path d="M14,9 C18,6 23,5 26,7" stroke="rgba(110,175,218,0.28)" strokeWidth="0.45" fill="none" />
      <ellipse cx="14" cy="11.5" rx="0.9" ry="4.8" fill="rgba(90,155,200,0.55)" />
      <path d="M13.2,7 C12,4.5 11,2.5 10,1.2" stroke="rgba(100,160,205,0.42)" strokeWidth="0.5" strokeLinecap="round" fill="none" />
      <path d="M14.8,7 C16,4.5 17,2.5 18,1.2" stroke="rgba(100,160,205,0.42)" strokeWidth="0.5" strokeLinecap="round" fill="none" />
      <circle cx="10" cy="1.2" r="0.65" fill="rgba(130,190,225,0.55)" />
      <circle cx="18" cy="1.2" r="0.65" fill="rgba(130,190,225,0.55)" />
    </svg>
  );
}

// ─── Config ───────────────────────────────────────────────────────────────────
// x/y use percentage strings relative to the section container.
// Values outside 0–100% fly off-screen (container has overflow:visible).
// times[] controls dart vs glide: small gap = quick dart, large gap = slow glide.
type BDef = {
  id: number; size: number; opacity: number;
  flapDuration: number; flapDelay: number;
  dur: number; delay: number;
  x: string[]; y: string[]; rot: number[]; times: number[];
};

const BUTTERFLIES: BDef[] = [
  {
    // Enters left → zigzags across → exits right-bottom
    id: 0, size: 28, opacity: 0.24, flapDuration: 1.5, flapDelay: 0, dur: 52, delay: 2,
    x:   ["-18%","7%",  "4%", "18%","14%","30%","24%","42%","38%","58%","54%","78%","115%"],
    y:   ["50%", "44%","32%","40%","22%","32%","14%","26%","40%","48%","62%","74%","82%"],
    rot: [-18,   -8,   10,   4,   -14,   8,   -10,   5,   18,   10,   -5,  12,   5],
    times:[0, .05,.13,.18,.26,.31,.40,.45,.55,.60,.72,.85, 1],
  },
  {
    // Enters right → flutters upper half → exits top-left
    id: 1, size: 26, opacity: 0.20, flapDuration: 1.7, flapDelay: 0.6, dur: 58, delay: 14,
    x:   ["115%","84%","90%","70%","80%","58%","68%","48%","55%","36%","44%","-14%"],
    y:   ["32%", "26%","14%","20%", "6%","16%", "3%","14%","28%","20%","40%","52%"],
    rot: [12,    4,   -12,  -4,   14,   6,   -16,  -6,  10,   2,  -10,  -16],
    times:[0, .06,.12,.19,.24,.31,.36,.44,.52,.62,.76,  1],
  },
  {
    // Enters top → drifts diagonally down-left → exits left edge
    id: 2, size: 28, opacity: 0.22, flapDuration: 1.6, flapDelay: 1.1, dur: 48, delay: 8,
    x:   ["68%","62%","74%","66%","52%","60%","44%","52%","36%","28%","38%","-16%"],
    y:   ["-14%","8%","16%","30%","24%","40%","32%","50%","44%","60%","74%","68%"],
    rot: [8,     4,  -10,   6,  -12,   8,   -8,  14,   -4,  10,  -6,  -18],
    times:[0, .06,.13,.22,.28,.36,.42,.52,.59,.71,.85,  1],
  },
  {
    // Enters bottom-right → flutter up and across → exits upper-right
    id: 3, size: 26, opacity: 0.19, flapDuration: 1.9, flapDelay: 0.3, dur: 62, delay: 24,
    x:   ["90%","84%","94%","76%","86%","70%","80%","62%","74%","56%","66%","84%","112%"],
    y:   ["120%","88%","74%","80%","64%","72%","54%","65%","46%","58%","38%","18%","2%"],
    rot: [8,    15,   -5,  12,   -8,  18,  -12,   8,  -15,   5,  -10,  15,   8],
    times:[0, .06,.13,.19,.27,.33,.42,.49,.58,.65,.76,.89,  1],
  },
];

// ─── Single butterfly ─────────────────────────────────────────────────────────
function Butterfly({ d }: { d: BDef }) {
  return (
    <motion.div
      aria-hidden="true"
      style={{ position:"absolute", left:d.x[0], top:d.y[0], pointerEvents:"none", zIndex:0, opacity:d.opacity }}
      animate={{ left:d.x, top:d.y, rotate:d.rot }}
      transition={{ duration:d.dur, delay:d.delay, repeat:Infinity, ease:"easeInOut", times:d.times }}
    >
      {/* Wing flap: two quick folds per cycle = "flutter flutter … glide" */}
      <motion.div
        animate={{ scaleX:[1, 0.32, 1, 0.32, 1] }}
        transition={{
          duration: d.flapDuration,
          delay: d.flapDelay,
          times: [0, 0.18, 0.38, 0.56, 1],
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin:"center center" }}
      >
        {/* Subtle body bob synced with flap */}
        <motion.div
          animate={{ y:[0, -2.5, 0, -2.5, 0] }}
          transition={{ duration:d.flapDuration, delay:d.flapDelay, times:[0,.18,.38,.56,1], repeat:Infinity, ease:"easeInOut" }}
        >
          <ButterflySVG size={d.size} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────
export default function ButterflyAmbience() {
  const { mode } = useAtmosphere();
  return (
    <AnimatePresence>
      {mode === "exploring" && (
        <motion.div
          key="butterflies"
          aria-hidden="true"
          initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
          transition={{ duration:3, ease:"easeInOut" }}
          style={{ position:"absolute", inset:0, overflow:"visible", pointerEvents:"none", zIndex:0 }}
        >
          {BUTTERFLIES.map(d => <Butterfly key={d.id} d={d} />)}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
