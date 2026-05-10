"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── SnakeTrail ───────────────────────────────────────────────────────────────
// A tiny snake silhouette that occasionally traverses the bottom of the viewport.
// Fixed-position, z-index between page content and decorative overlays.
// The snake appears on a schedule: first traverse starts after 20s in exploring mode,
// then repeats with a ~80s rest between each crossing.
// All opacity values keep it barely perceptible — an atmospheric whisper, not a mascot.

const TRAVERSE_DURATION = 48;   // seconds to cross the viewport
const FIRST_DELAY_MS    = 20_000;
const REST_MS           = 80_000;

// Snake SVG — viewed from above, heading right.
// Body: sinusoidal S-curve. Head: rounded blunt ellipse. Tongue: forked stroke.
function SnakeSVG() {
  return (
    <svg
      width="110"
      height="22"
      viewBox="0 0 110 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Tail — tapers to a point at the left */}
      <path
        d="M2,11 C4,11 7,11 10,11"
        stroke="rgba(58,92,77,0.45)"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Main body — S-curve sinusoidal wave */}
      <path
        d="M10,11 C20,4 35,4 50,11 C65,18 80,18 95,11"
        stroke="rgba(58,92,77,0.72)"
        strokeWidth="3.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Body highlight (inner lighter stripe) */}
      <path
        d="M10,11 C20,5.5 35,5.5 50,11 C65,16.5 80,16.5 95,11"
        stroke="rgba(90,130,86,0.22)"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />

      {/* Head — slightly wider ellipse */}
      <ellipse
        cx="100"
        cy="11"
        rx="8"
        ry="5"
        fill="rgba(46,78,62,0.82)"
        stroke="rgba(58,92,77,0.5)"
        strokeWidth="0.4"
      />

      {/* Eye — tiny bright point */}
      <circle cx="104" cy="9.5" r="0.9" fill="rgba(122,155,118,0.9)" />
      <circle cx="104" cy="9.5" r="0.35" fill="rgba(200,230,195,0.8)" />

      {/* Tongue — forked, extends from snout */}
      <path
        d="M108,11 L112,9.2 M108,11 L112,12.8"
        stroke="rgba(90,155,86,0.65)"
        strokeWidth="0.7"
        strokeLinecap="round"
      />

      {/* Scale pattern hints */}
      <path d="M30,8 C34,7 38,7 42,8.5"   stroke="rgba(40,68,52,0.3)" strokeWidth="0.5" fill="none" />
      <path d="M55,13 C59,14 63,14 67,13" stroke="rgba(40,68,52,0.3)" strokeWidth="0.5" fill="none" />
    </svg>
  );
}

export default function SnakeTrail() {
  const [visible, setVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(52);

  // Randomise vertical position slightly each pass
  const scheduleNext = useCallback((delay: number) => {
    return window.setTimeout(() => {
      setBottomOffset(44 + Math.random() * 20);
      setVisible(true);

      // After traversal completes, rest and schedule again
      const restTimer = window.setTimeout(() => {
        setVisible(false);
        scheduleNext(REST_MS);
      }, (TRAVERSE_DURATION + 2) * 1000);

      return restTimer;
    }, delay);
  }, []);

  useEffect(() => {
    const t = scheduleNext(FIRST_DELAY_MS);
    return () => window.clearTimeout(t);
  }, [scheduleNext]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden="true"
          style={{
            position: "fixed",
            bottom: bottomOffset,
            left: 0,
            zIndex: 15,
            pointerEvents: "none",
            // Slight vertical body-bob simulated by y oscillation
          }}
          initial={{ x: "-120px", opacity: 0 }}
          animate={{
            x: "calc(100vw + 20px)",
            opacity: [0, 0.9, 0.9, 0.85, 0],
          }}
          exit={{ opacity: 0 }}
          transition={{
            x: {
              duration: TRAVERSE_DURATION,
              ease: "linear",
            },
            opacity: {
              duration: TRAVERSE_DURATION,
              times: [0, 0.04, 0.88, 0.96, 1],
              ease: "linear",
            },
          }}
        >
          {/* Subtle vertical slither — the snake bobs gently as it moves */}
          <motion.div
            animate={{ y: [0, -1.5, 1.5, -1, 0.8, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          >
            <SnakeSVG />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
