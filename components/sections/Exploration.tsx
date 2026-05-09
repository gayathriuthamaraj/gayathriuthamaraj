"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { explorations } from "@/lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  "git-branch": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="6" y1="3" x2="6" y2="15"/>
      <circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
      <path d="M18 9a9 9 0 01-9 9"/>
    </svg>
  ),
  activity: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  cpu: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>
      <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
      <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
      <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
      <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
    </svg>
  ),
  "share-2": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  ),
  zap: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  layers: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
};

export default function Exploration() {
  return (
    <section id="exploration" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 70% 40%, rgba(92,64,51,0.07) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container relative">
        <SectionReveal delay={0}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-sage/40" />
            <span className="text-xs font-mono text-sage/70 tracking-widest uppercase">07 — Exploration</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-beige mb-3">
            Currently <span className="text-gradient-sage">drawn towards</span>
          </h2>
          <p className="text-sm text-beige-dark mb-12 max-w-xl">
            Areas pulling my attention right now — NLP, data systems, ML, and the infrastructure that makes them work at scale.
          </p>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {explorations.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 0.08}>
              <motion.div
                className="group relative p-6 rounded-2xl border border-moss/20 bg-forest-800/15 hover:border-sage/30 hover:bg-forest-800/25 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Background shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(122,155,118,0.04) 0%, transparent 60%)"
                  }}
                />

                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-forest-700/40 border border-moss/25 flex items-center justify-center text-sage/50 group-hover:text-sage group-hover:border-sage/40 transition-all duration-300 mb-4">
                    {ICON_MAP[item.icon] ?? null}
                  </div>
                  <h3 className="text-sm font-semibold text-beige mb-2">{item.title}</h3>
                  <p className="text-xs text-beige-dark/70 leading-relaxed">{item.description}</p>

                  {/* Arrow indicator */}
                  <div className="mt-4 flex items-center gap-1 text-[10px] font-mono text-sage/0 group-hover:text-sage/50 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
                    <span>exploring</span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* Terminal quote */}
        <SectionReveal delay={0.5}>
          <div className="mt-12 p-5 rounded-xl bg-forest-900/60 border border-moss/20 font-mono text-xs max-w-2xl">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-walnut/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-sage/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-beige-dark/20" />
              <span className="ml-2 text-beige-dark/40">gayathri@system:~</span>
            </div>
            <p className="text-beige-dark/60 leading-relaxed">
              <span className="text-sage/70">$ </span>
              echo <span className="text-beige/60">"exploring the space where data, language, and models intersect"</span>
            </p>
            <p className="text-beige-dark/40 mt-1 pl-4">
              → nlp · data pipelines · machine learning · deep learning · ml infra
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
