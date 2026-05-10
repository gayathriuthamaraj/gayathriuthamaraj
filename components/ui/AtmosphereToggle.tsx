"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useAtmosphere } from "@/lib/atmosphere";

// ─── AtmosphereToggle ─────────────────────────────────────────────────────────
// A deliberately discreet, low-contrast toggle tucked into the sidebar footer.
// Reads like a system-status line rather than a UI button.
// Sound control appears only in exploring mode as a secondary micro-icon.

export default function AtmosphereToggle() {
  const { mode, toggle, soundEnabled, toggleSound } = useAtmosphere();

  const isExploring = mode === "exploring";

  return (
    <div className="px-3 py-3 border-t border-moss/20 space-y-2">
      {/* Mode toggle line */}
      <button
        onClick={toggle}
        title={`Switch to ${isExploring ? "organic" : "exploring"} mode`}
        className="w-full flex items-center gap-2 group"
        aria-label={`Current mode: ${mode}. Click to switch.`}
      >
        {/* Pulsing status dot */}
        <span className="relative flex-shrink-0">
          <span
            className="block w-1.5 h-1.5 rounded-full transition-colors duration-700"
            style={{
              backgroundColor: isExploring
                ? "rgba(122,155,118,0.85)"
                : "rgba(90,122,86,0.45)",
              boxShadow: isExploring
                ? "0 0 6px 1px rgba(122,155,118,0.35)"
                : "none",
            }}
          />
        </span>

        {/* Mode label */}
        <span
          className="flex-1 text-left font-mono transition-colors duration-500"
          style={{
            fontSize: "9px",
            letterSpacing: "0.08em",
            color: isExploring
              ? "rgba(154,184,150,0.65)"
              : "rgba(184,168,144,0.35)",
          }}
        >
          sys.mode ·{" "}
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mode}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              style={{ display: "inline-block" }}
            >
              {mode}
            </motion.span>
          </AnimatePresence>
        </span>

        {/* Chevron — appears on hover */}
        <span
          className="flex-shrink-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 font-mono"
          style={{ fontSize: "8px", color: "rgba(122,155,118,0.6)" }}
          aria-hidden="true"
        >
          ⟳
        </span>
      </button>

      {/* Sound toggle — only visible in exploring mode */}
      <AnimatePresence initial={false}>
        {isExploring && (
          <motion.button
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={toggleSound}
            title={soundEnabled ? "Mute ambient breeze" : "Enable ambient breeze"}
            className="w-full flex items-center gap-2 overflow-hidden"
            aria-label={`Ambient sound: ${soundEnabled ? "on" : "off"}`}
          >
            {/* Sound icon */}
            <span className="flex-shrink-0 w-1.5 h-1.5" aria-hidden="true">
              {soundEnabled ? (
                <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="rgba(122,155,118,0.65)" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 010 7.07" />
                  <path d="M19.07 4.93a10 10 0 010 14.14" />
                </svg>
              ) : (
                <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="rgba(122,155,118,0.35)" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              )}
            </span>

            <span
              className="font-mono"
              style={{
                fontSize: "9px",
                letterSpacing: "0.07em",
                color: soundEnabled
                  ? "rgba(154,184,150,0.55)"
                  : "rgba(184,168,144,0.28)",
              }}
            >
              breeze · {soundEnabled ? "on" : "off"}
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
