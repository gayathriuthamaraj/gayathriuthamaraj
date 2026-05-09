"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { research } from "@/lib/data";

export default function Research() {
  return (
    <section id="research" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(46,74,61,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container relative">
        <SectionReveal delay={0}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-sage/40" />
            <span className="text-xs font-mono text-sage/70 tracking-widest uppercase">04 — Research</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-beige mb-3">
            Published <span className="text-gradient-sage">work</span>
          </h2>
          <p className="text-sm text-beige-dark mb-12 max-w-xl">
            Academic research at the intersection of distributed systems and security engineering.
          </p>
        </SectionReveal>

        <div className="space-y-5 max-w-3xl">
          {research.map((paper, i) => (
            <SectionReveal key={paper.id} delay={i * 0.1}>
              <GlassCard glow>
                <div className="flex items-start gap-5">
                  {/* Icon column */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-forest-700/50 border border-moss/30 flex items-center justify-center text-sage/70">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
                      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Badge row */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono bg-walnut/20 border border-walnut/30 text-beige-dark">
                        {paper.venue}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono bg-sage/10 border border-sage/20 text-sage">
                        <span className="w-1 h-1 rounded-full bg-sage mr-1.5" />
                        Published {paper.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-beige leading-snug mb-3">
                      {paper.title}
                    </h3>

                    {/* Abstract */}
                    <p className="text-sm text-beige-dark leading-relaxed mb-4">
                      {paper.abstract}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {paper.tags.map((tag) => (
                        <span key={tag} className="tech-badge">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </SectionReveal>
          ))}
        </div>

        {/* Citation style hint */}
        <SectionReveal delay={0.3}>
          <div className="mt-8 max-w-3xl p-4 rounded-xl bg-forest-900/50 border border-moss/20">
            <p className="text-[11px] font-mono text-beige-dark/50 leading-relaxed">
              <span className="text-sage/60">$ citation</span>{" "}
              — Springer CVR 2025 · Project Management with Tamper-Proof Evaluation using Blockchain and Secured Storage
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
