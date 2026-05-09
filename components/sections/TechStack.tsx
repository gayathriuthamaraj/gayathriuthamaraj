"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { techStack, type TechItem } from "@/lib/data";

const PROFICIENCY_WIDTH: Record<string, string> = {
  intermediate: "w-[60%]",
  beginner: "w-[32%]",
};

const PROFICIENCY_LABEL: Record<string, string> = {
  intermediate: "Intermediate",
  beginner: "Beginner",
};

const GROUP_ICONS: Record<string, React.ReactNode> = {
  server: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
      <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  ),
  layout: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
    </svg>
  ),
  brain: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2a7 7 0 017 7c0 1.5-.5 3-1.5 4l1 3-3-1a7 7 0 01-7 0l-3 1 1-3A7 7 0 015 9a7 7 0 017-7z"/>
    </svg>
  ),
  code: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
};

function TechRow({ item, index }: { item: TechItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-beige-dark group-hover:text-beige transition-colors duration-200 font-mono">
          {item.name}
        </span>
        <span className="text-[10px] text-beige-dark/40 font-mono">
          {PROFICIENCY_LABEL[item.proficiency]}
        </span>
      </div>
      <div className="h-[3px] bg-forest-800/60 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: undefined }}
          viewport={{ once: true }}
          className={`h-full rounded-full bg-gradient-to-r from-moss to-sage ${PROFICIENCY_WIDTH[item.proficiency]}`}
          style={{ transition: "width 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
        />
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const displayed = activeGroup
    ? techStack.filter((g) => g.label === activeGroup)
    : techStack;

  return (
    <section id="stack" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 20% 50%, rgba(92,64,51,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container relative">
        <SectionReveal delay={0}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-sage/40" />
            <span className="text-xs font-mono text-sage/70 tracking-widest uppercase">03 — Stack</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-beige mb-3">
            Technical <span className="text-gradient-sage">proficiency</span>
          </h2>
          <p className="text-sm text-beige-dark mb-8 max-w-xl">
            Tools I work with across backend systems, data engineering, and ML/NLP workflows.
          </p>
        </SectionReveal>

        {/* Filter pills */}
        <SectionReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveGroup(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                activeGroup === null
                  ? "bg-moss/50 border-sage/40 text-beige"
                  : "bg-transparent border-forest-600/30 text-beige-dark hover:border-sage/30 hover:text-beige"
              }`}
            >
              All
            </button>
            {techStack.map((g) => (
              <button
                key={g.label}
                onClick={() => setActiveGroup(g.label === activeGroup ? null : g.label)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                  activeGroup === g.label
                    ? "bg-moss/50 border-sage/40 text-beige"
                    : "bg-transparent border-forest-600/30 text-beige-dark hover:border-sage/30 hover:text-beige"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Groups grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {displayed.map((group, gi) => (
            <SectionReveal key={group.label} delay={gi * 0.1}>
              <div
                className="p-6 rounded-2xl border transition-all duration-200"
                style={{
                  background: "rgba(30, 48, 40, 0.25)",
                  borderColor: "rgba(122, 155, 118, 0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Group header */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sage/60">{GROUP_ICONS[group.icon]}</span>
                  <span className="text-sm font-semibold text-beige">{group.label}</span>
                </div>
                {/* Items */}
                <div className="space-y-4">
                  {group.items.map((item, i) => (
                    <TechRow key={item.name} item={item} index={i} />
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
