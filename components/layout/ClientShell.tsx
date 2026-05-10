"use client";

import { AtmosphereProvider } from "@/lib/atmosphere";
import ExploringEffects from "@/components/ui/ExploringEffects";
import type { ReactNode } from "react";

// ─── ClientShell ──────────────────────────────────────────────────────────────
// Thin client wrapper so the root layout.tsx can stay a server component
// (required for Next.js metadata exports) while still providing the
// AtmosphereContext to all children.

export default function ClientShell({ children }: { children: ReactNode }) {
  return (
    <AtmosphereProvider>
      {children}
      {/* Global exploring-mode effects (snake, ambient glow, sound) */}
      <ExploringEffects />
    </AtmosphereProvider>
  );
}
