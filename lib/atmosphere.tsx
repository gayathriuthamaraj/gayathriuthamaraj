"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
export type AtmosphereMode = "organic" | "exploring";

type AtmosphereCtxValue = {
  mode: AtmosphereMode;
  toggle: () => void;
  soundEnabled: boolean;
  toggleSound: () => void;
};

// ─── Context ──────────────────────────────────────────────────────────────────
const AtmosphereCtx = createContext<AtmosphereCtxValue | null>(null);

const STORAGE_KEY_MODE  = "atm.mode";
const STORAGE_KEY_SOUND = "atm.sound";

// ─── Provider ─────────────────────────────────────────────────────────────────
export function AtmosphereProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<AtmosphereMode>("organic");
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Rehydrate from localStorage on mount (client-only)
  useEffect(() => {
    try {
      const savedMode  = localStorage.getItem(STORAGE_KEY_MODE) as AtmosphereMode | null;
      const savedSound = localStorage.getItem(STORAGE_KEY_SOUND);
      if (savedMode === "organic" || savedMode === "exploring") setMode(savedMode);
      if (savedSound === "true") setSoundEnabled(true);
    } catch {
      // Private browsing / SSR — silently ignore
    }
  }, []);

  const toggle = useCallback(() => {
    setMode((prev) => {
      const next = prev === "organic" ? "exploring" : "organic";
      try { localStorage.setItem(STORAGE_KEY_MODE, next); } catch {}
      // Turning off exploring always mutes sound
      if (next === "organic") {
        setSoundEnabled(false);
        try { localStorage.setItem(STORAGE_KEY_SOUND, "false"); } catch {}
      }
      return next;
    });
  }, []);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      try { localStorage.setItem(STORAGE_KEY_SOUND, String(next)); } catch {}
      return next;
    });
  }, []);

  return (
    <AtmosphereCtx.Provider value={{ mode, toggle, soundEnabled, toggleSound }}>
      {children}
    </AtmosphereCtx.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useAtmosphere() {
  const ctx = useContext(AtmosphereCtx);
  if (!ctx) throw new Error("useAtmosphere must be used inside <AtmosphereProvider>");
  return ctx;
}
