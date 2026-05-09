"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { owner } from "@/lib/data";

const PINNED_REPOS = [
  {
    name: "InDel",
    desc: "Parametric income insurance platform — Kafka, Go, Docker, PostgreSQL",
    lang: "Go",
    color: "#00ADD8",
  },
  {
    name: "Gotham",
    desc: "Federated social network with ActivityPub-inspired cross-server federation",
    lang: "Go",
    color: "#00ADD8",
  },
  {
    name: "RKIVE",
    desc: "AI candidate shortlisting — NER + LLM resume-JD matching pipeline",
    lang: "Python",
    color: "#3776AB",
  },
  {
    name: "Kuzhu",
    desc: "Secure community platform with RBAC and hybrid encryption",
    lang: "Go",
    color: "#00ADD8",
  },
];

export default function GitHub() {
  const username = "gayathriuthamaraj";

  return (
    <section id="github" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionReveal delay={0}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-sage/40" />
            <span className="text-xs font-mono text-sage/70 tracking-widest uppercase">05 — GitHub</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-beige mb-3">
            Open source & <span className="text-gradient-sage">contributions</span>
          </h2>
          <p className="text-sm text-beige-dark mb-12 max-w-xl">
            Engineering output, contribution cadence, and pinned repositories.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-[1fr_340px] gap-8">
          {/* Left: stats images */}
          <div className="space-y-5">
            <SectionReveal delay={0.1}>
              <GlassCard hover={false}>
                <p className="text-[10px] font-mono text-sage/50 tracking-widest uppercase mb-4">
                  contribution graph
                </p>
                <div className="rounded-xl overflow-hidden bg-forest-900/50 p-2">
                  <img
                    src={`https://ghchart.rshah.org/7A9B76/${username}`}
                    alt="GitHub contribution chart"
                    className="w-full h-auto opacity-80"
                    loading="lazy"
                  />
                </div>
              </GlassCard>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <GlassCard hover={false}>
                <p className="text-[10px] font-mono text-sage/50 tracking-widest uppercase mb-4">
                  coding streak
                </p>
                <div className="rounded-xl overflow-hidden bg-forest-900/60 flex items-center justify-center p-3">
                  <img
                    src={`https://streak-stats.demolab.com?user=${username}&theme=dark&hide_border=true&background=0d1a12&ring=7A9B76&fire=5C4033&currStreakLabel=D8CBB5&sideLabels=7A9B76&dates=7A9B76cc&sideNums=D8CBB5&currStreakNum=D8CBB5`}
                    alt="GitHub streak"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </GlassCard>
            </SectionReveal>
          </div>

          {/* Right: pinned repos + profile link */}
          <div className="space-y-4">
            <SectionReveal delay={0.15} direction="right">
              <p className="text-[10px] font-mono text-sage/50 tracking-widest uppercase mb-3">
                pinned repositories
              </p>
              {PINNED_REPOS.map((repo, i) => (
                <div
                  key={repo.name}
                  className="group mb-3 p-4 rounded-xl border border-moss/20 hover:border-sage/25 bg-forest-800/20 hover:bg-forest-800/35 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <a
                      href={owner.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-beige group-hover:text-sage transition-colors duration-200"
                    >
                      {repo.name}
                    </a>
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: repo.color }}
                      />
                      <span className="text-[10px] font-mono text-beige-dark/50">{repo.lang}</span>
                    </div>
                  </div>
                  <p className="text-xs text-beige-dark/70 leading-snug">{repo.desc}</p>
                </div>
              ))}
            </SectionReveal>

            <SectionReveal delay={0.4} direction="right">
              <a
                href={owner.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-moss/30 text-xs font-mono text-beige-dark hover:text-beige hover:border-sage/40 hover:bg-moss/20 transition-all duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-sage/60">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                view all repositories →
              </a>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
