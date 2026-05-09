"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";

const INFRA_CARDS = [
  {
    title: "InDel Stack",
    desc: "7-service Docker Compose · Kafka + Zookeeper · PostgreSQL · Go microservices · React dashboards",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
  {
    title: "Gotham Nodes",
    desc: "Multi-node federated deployment · Independent PostgreSQL instances · Cross-node federation sync",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
  },
  {
    title: "Monitoring (coming)",
    desc: "Grafana dashboards · Prometheus metrics · Distributed trace aggregation · Alert pipelines",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: "ML Model Endpoints",
    desc: "Disruption predictor (live) · Resume matcher LLM (soon) · Fern AutoML (wip)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>
        <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
      </svg>
    ),
  },
];

const STATUS_STYLE: Record<string, string> = {
  live: "text-sage bg-sage/10 border-sage/30",
  coming: "text-beige-dark bg-forest-800/40 border-forest-600/20",
  wip: "text-walnut-light bg-walnut/10 border-walnut/30",
};

const METHOD_COLOR: Record<string, string> = {
  GET: "text-sage/80 bg-sage/10",
  POST: "text-beige-dark bg-forest-700/40",
  PATCH: "text-walnut-light/80 bg-walnut/10",
  DELETE: "text-red-400/60 bg-red-900/10",
};

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 30% 60%, rgba(46,74,61,0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container relative">
        <SectionReveal delay={0}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-sage/40" />
            <span className="text-xs font-mono text-sage/70 tracking-widest uppercase">06 — Infrastructure & APIs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-beige mb-3">
            Deployed <span className="text-gradient-sage">infrastructure</span>
          </h2>
          <p className="text-sm text-beige-dark mb-12 max-w-xl">
            Live APIs, model inference endpoints, monitoring tooling, and deployment topology.
          </p>
        </SectionReveal>

        {/* Infra overview cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {INFRA_CARDS.map((card, i) => (
            <SectionReveal key={card.title} delay={i * 0.07}>
              <div className="h-full p-5 rounded-2xl border border-moss/20 bg-forest-800/20 hover:border-sage/25 hover:bg-forest-800/30 transition-all duration-300 group">
                <span className="text-sage/50 group-hover:text-sage/80 transition-colors duration-200 mb-3 block">
                  {card.icon}
                </span>
                <p className="text-sm font-semibold text-beige mb-1">{card.title}</p>
                <p className="text-xs text-beige-dark/60 leading-relaxed">{card.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* API endpoint table — placeholder */}
        <SectionReveal delay={0.3}>
          <GlassCard hover={false} className="overflow-hidden p-0">
            <div className="p-5 border-b border-moss/20">
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage/60">
                  <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
                </svg>
                <span className="text-xs font-mono text-beige-dark">api.registry</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center py-14 px-8 gap-4 text-center">
              <div className="w-10 h-10 rounded-xl border border-moss/25 bg-forest-800/30 flex items-center justify-center text-beige-dark/30">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-mono text-beige-dark/40 mb-1">endpoints being documented</p>
                <p className="text-xs text-beige-dark/25 font-mono">— adding later —</p>
              </div>
            </div>
          </GlassCard>
        </SectionReveal>
      </div>
    </section>
  );
}
