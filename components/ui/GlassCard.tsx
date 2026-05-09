"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
  id?: string;
};

export default function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
  onClick,
  id,
}: GlassCardProps) {
  return (
    <motion.div
      id={id}
      onClick={onClick}
      className={cn(
        "glass-card rounded-2xl p-6 relative overflow-hidden",
        glow && "shadow-sage-glow",
        onClick && "cursor-pointer",
        className
      )}
      whileHover={hover ? { y: -2, scale: 1.002 } : undefined}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Subtle top-left shine */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)",
        }}
      />
      {children}
    </motion.div>
  );
}
