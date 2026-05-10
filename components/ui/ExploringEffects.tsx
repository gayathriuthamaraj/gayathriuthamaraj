"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useAtmosphere } from "@/lib/atmosphere";
import AmbientBreeze from "@/components/ui/AmbientBreeze";

// ─── ExploringEffects ─────────────────────────────────────────────────────────
// Mounts all global "exploring" mode atmospheric effects.
// Section-scoped effects (butterflies, drifting leaves) live in Contact.tsx.
// AmbientBreeze is always mounted so it can manage its own IntersectionObserver
// and audio fade logic continuously.

export default function ExploringEffects() {
  const { mode } = useAtmosphere();
  const isExploring = mode === "exploring";

  return (
    <>
      {/* Always mounted — manages its own section-visibility + audio fade */}
      <AmbientBreeze />

      <AnimatePresence>
        {isExploring && (
          <motion.div
            key="explore-glow"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            style={{
              position: "fixed",
              inset: 0,
              pointerEvents: "none",
              zIndex: 1,
              background:
                "radial-gradient(ellipse 70% 40% at 50% 100%, rgba(46,74,61,0.12) 0%, transparent 70%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

