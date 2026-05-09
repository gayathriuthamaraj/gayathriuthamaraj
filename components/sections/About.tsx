"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { owner } from "@/lib/data";

const FOCUS_ICONS: Record<string, React.ReactNode> = {
  "Data Pipelines & Lifecycle": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  "NLP & Language Models": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
  "Machine Learning & DL": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
    </svg>
  ),
  "Backend Engineering": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  "Distributed Systems": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  ),
  "ML Infrastructure": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  ),
};

const STATS = [
  { value: "5+", label: "Production Projects" },
  { value: "7", label: "Docker Services (InDel)" },
  { value: "1K+", label: "Workers Simulated" },
  { value: "2025", label: "Springer Publication" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-moss/40" />

      <div className="section-container">
        {/* Label */}
        <SectionReveal delay={0}>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-sage/40" />
            <span className="text-xs font-mono text-sage/70 tracking-widest uppercase">01 — About</span>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-start">
          {/* Left: bio */}
          <div>
            <SectionReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-semibold text-beige leading-tight mb-6">
                Systems builder, curious about{" "}
                <span className="text-gradient-sage">data and models.</span>
              </h2>
            </SectionReveal>

            <div className="space-y-4">
              {owner.bio.map((para, i) => (
                <SectionReveal key={i} delay={0.15 + i * 0.1}>
                  <p className="text-beige-dark leading-relaxed text-sm md:text-base">{para}</p>
                </SectionReveal>
              ))}
            </div>

            {/* Focus areas */}
            <SectionReveal delay={0.4}>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {owner.focus.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                    className="flex items-start gap-2 p-3 rounded-xl bg-forest-800/30 border border-moss/20 group hover:border-sage/30 transition-all duration-200"
                  >
                    <span className="text-sage/60 group-hover:text-sage mt-0.5 transition-colors flex-shrink-0">
                      {FOCUS_ICONS[item] ?? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      )}
                    </span>
                    <span className="text-xs text-beige-dark group-hover:text-beige transition-colors leading-snug">{item}</span>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Right: stats + identity card */}
          <div className="space-y-4">
            <SectionReveal delay={0.2} direction="right">
              <GlassCard glow>
                <div className="space-y-1 mb-5">
                  <p className="text-[10px] font-mono text-sage/50 tracking-widest uppercase">identity.json</p>
                </div>
                <div className="font-mono text-[11px] space-y-2 text-beige-dark">
                  <div><span className="text-sage/50">"name"</span><span className="text-beige-dark/40">: </span><span className="text-beige">"Gayathri U"</span></div>
                  <div><span className="text-sage/50">"role"</span><span className="text-beige-dark/40">: </span><span className="text-beige">"Backend Engineer"</span></div>
                  <div><span className="text-sage/50">"institution"</span><span className="text-beige-dark/40">: </span><span className="text-beige">"Amrita Vishwa Vidyapeetham"</span></div>
                  <div><span className="text-sage/50">"degree"</span><span className="text-beige-dark/40">: </span><span className="text-beige">"B.Tech CSE"</span></div>
                  <div><span className="text-sage/50">"location"</span><span className="text-beige-dark/40">: </span><span className="text-beige">"Coimbatore, IN"</span></div>
                  <div><span className="text-sage/50">"personality_leak"</span><span className="text-beige-dark/40">: </span><span className="text-beige">"pattern recognition runs a little too deep..."</span></div>
                  <div className="pt-2 border-t border-moss/20">
                    <span className="text-sage/50">"focus"</span><span className="text-beige-dark/40">: [</span>
                    <div className="ml-4 space-y-0.5">
                      <div><span className="text-beige/60">"data pipelines"</span><span className="text-beige-dark/40">,</span></div>
                      <div><span className="text-beige/60">"nlp & ml"</span><span className="text-beige-dark/40">,</span></div>
                      <div><span className="text-beige/60">"backend engineering"</span><span className="text-beige-dark/40">,</span></div>
                      <div><span className="text-beige/60">"distributed systems"</span></div>
                    </div>
                    <span className="text-beige-dark/40">]</span>
                  </div>
                </div>
              </GlassCard>
            </SectionReveal>

            {/* Stats */}
            <SectionReveal delay={0.35} direction="right">
              <div className="grid grid-cols-2 gap-3">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl bg-forest-800/30 border border-moss/20 hover:border-sage/20 transition-all duration-200"
                  >
                    <p className="text-2xl font-bold text-gradient stat-number mb-0.5">{stat.value}</p>
                    <p className="text-[10px] font-mono text-beige-dark/60 leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
