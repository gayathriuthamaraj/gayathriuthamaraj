"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { projects, type Project } from "@/lib/data";

// ─── Status config ─────────────────────────────────────────────────────────────
const STATUS: Record<string, { label: string; dot: string; text: string }> = {
  live:     { label: "live",     dot: "bg-sage",         text: "text-sage" },
  active:   { label: "active",   dot: "bg-beige-dark",   text: "text-beige-dark" },
  research: { label: "research", dot: "bg-walnut-light",  text: "text-walnut-light" },
};

const CATEGORY_ACCENT: Record<string, string> = {
  distributed: "#7A9B76",
  federated:   "#b8a890",
  ml:          "#7a5546",
  security:    "#9ab896",
  infra:       "#5a7a56",
};

// ─── Small icon helpers ────────────────────────────────────────────────────────
function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}
function ExternalIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}
function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}
function ChevronDown({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );
}

// ─── Architecture Flow ─────────────────────────────────────────────────────────
function ArchFlow({ flow }: { flow: Project["flow"] }) {
  return (
    <div className="flex items-start gap-0 flex-wrap">
      {flow.map((node, i) => (
        <div key={node.label} className="flex items-center">
          {/* Node */}
          <div className="flex flex-col items-center">
            <div
              className="px-3 py-2 rounded-lg border text-center min-w-[80px]"
              style={{
                background: "rgba(46,74,61,0.25)",
                borderColor: "rgba(122,155,118,0.2)",
              }}
            >
              <p className="text-[11px] font-mono font-medium text-beige leading-tight">{node.label}</p>
              {node.sub && (
                <p className="text-[9px] font-mono text-beige-dark/60 mt-0.5 leading-none">{node.sub}</p>
              )}
            </div>
          </div>
          {/* Arrow connector */}
          {i < flow.length - 1 && (
            <div className="flex items-center px-1.5 text-sage/30 flex-shrink-0 mt-[-8px]">
              <div className="w-4 h-px bg-sage/20" />
              <ArrowRight size={10} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Single Project Section ────────────────────────────────────────────────────
function ProjectSection({ project, index }: { project: Project; index: number }) {
  const [deepOpen, setDeepOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  const st = STATUS[project.status];
  const accentColor = CATEGORY_ACCENT[project.category];
  const isEven = index % 2 === 0;

  return (
    <motion.article
      ref={ref}
      id={project.id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
      className="relative"
    >
      {/* Left accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 top-0 bottom-0 w-px origin-top"
        style={{ background: `linear-gradient(to bottom, ${accentColor}55, transparent)` }}
      />

      <div className="pl-8 py-16 md:py-20">

        {/* ── Row 1: Index + Status + Links ─────────────────────────────── */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-5">
            {/* Large index */}
            <span
              className="text-7xl md:text-8xl font-bold leading-none select-none tabular-nums"
              style={{ color: `${accentColor}18`, fontVariantNumeric: "tabular-nums" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              {/* Status pill */}
              <div className="flex items-center gap-2 mb-1">
                <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono ${st.text}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${st.dot} animate-breathe`} />
                  {st.label}
                </span>
                <span className="text-beige-dark/20 text-[10px]">·</span>
                <span className="text-[10px] font-mono text-beige-dark/40">{project.category}</span>
              </div>
              {/* Name */}
              <h3 className="text-3xl md:text-4xl font-bold text-beige tracking-tight leading-none">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Links cluster */}
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono border border-moss/30 text-beige-dark hover:text-beige hover:border-sage/40 hover:bg-moss/20 transition-all duration-200"
              >
                <GitHubIcon size={13} />
                source
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono border border-sage/30 text-sage hover:bg-sage/10 hover:border-sage/60 transition-all duration-200"
              >
                <ExternalIcon size={12} />
                live
              </a>
            )}
          </div>
        </div>

        {/* ── Row 2: Tagline + Context ───────────────────────────────────── */}
        <div className="mb-8 max-w-3xl">
          <p className="text-xl md:text-2xl font-medium text-beige/80 mb-2 leading-snug">
            {project.tagline}
          </p>
          <p className="text-xs font-mono text-sage/50 tracking-wide">{project.context}</p>
        </div>

        {/* ── Row 3: Main body — description + system context ─────────────── */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-8 mb-10">
          {/* Left: narrative */}
          <div className="space-y-5">
            <p className="text-sm md:text-base text-beige-dark leading-relaxed">
              {project.description}
            </p>
            <div
              className="p-4 rounded-xl border-l-2 bg-forest-900/40"
              style={{ borderColor: `${accentColor}50` }}
            >
              <p className="text-[10px] font-mono tracking-widest uppercase mb-2" style={{ color: `${accentColor}80` }}>
                Engineering Context
              </p>
              <p className="text-sm text-beige-dark/80 leading-relaxed">{project.systemContext}</p>
            </div>

            {/* Architecture flow */}
            <div>
              <p className="text-[10px] font-mono text-beige-dark/40 tracking-widest uppercase mb-3">
                Data / Control Flow
              </p>
              <ArchFlow flow={project.flow} />
            </div>
          </div>

          {/* Right: Deployment metadata panel */}
          <div className="space-y-4">
            {/* Metadata table */}
            <div
              className="rounded-2xl border overflow-hidden"
              style={{
                background: "rgba(8,15,10,0.6)",
                borderColor: "rgba(122,155,118,0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                className="px-5 py-3 border-b flex items-center gap-2"
                style={{ borderColor: "rgba(122,155,118,0.08)" }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                <span className="text-[10px] font-mono text-beige-dark/50 tracking-widest uppercase">
                  deployment.meta
                </span>
              </div>
              <div className="divide-y" style={{ borderColor: "rgba(122,155,118,0.06)" }}>
                {project.deploymentMeta.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-start justify-between px-5 py-2.5 gap-4 group hover:bg-moss/10 transition-colors duration-150"
                  >
                    <span className="text-[11px] font-mono text-beige-dark/40 flex-shrink-0">{item.key}</span>
                    <span className="text-[11px] font-mono text-beige/70 text-right leading-snug">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack badges */}
            <div>
              <p className="text-[10px] font-mono text-beige-dark/30 tracking-widest uppercase mb-2.5">
                Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Row 4: Expand — Architecture + Infra Notes ────────────────── */}
        <div>
          <button
            onClick={() => setDeepOpen((o) => !o)}
            className="flex items-center gap-2 text-xs font-mono text-beige-dark/40 hover:text-sage transition-colors duration-200 group mb-1"
          >
            <motion.span animate={{ rotate: deepOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
              <ChevronDown size={11} />
            </motion.span>
            <span>{deepOpen ? "collapse engineering details" : "expand engineering details"}</span>
          </button>

          <AnimatePresence initial={false}>
            {deepOpen && (
              <motion.div
                key="deep"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-6 grid md:grid-cols-2 gap-6 max-w-4xl">
                  {/* Architecture list */}
                  <div>
                    <p className="text-[10px] font-mono tracking-widest uppercase mb-4" style={{ color: `${accentColor}70` }}>
                      Architecture Components
                    </p>
                    <ol className="space-y-3">
                      {project.architecture.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05, duration: 0.35 }}
                          className="flex items-start gap-3"
                        >
                          <span
                            className="text-[10px] font-mono tabular-nums mt-0.5 flex-shrink-0 w-5 text-right"
                            style={{ color: `${accentColor}60` }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm text-beige-dark/80 leading-snug">{item}</span>
                        </motion.li>
                      ))}
                    </ol>
                  </div>

                  {/* Infrastructure notes */}
                  <div>
                    <p className="text-[10px] font-mono text-beige-dark/30 tracking-widest uppercase mb-4">
                      Infrastructure Notes
                    </p>
                    <ul className="space-y-2.5">
                      {project.infraNotes.map((note, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 + 0.1, duration: 0.35 }}
                          className="flex items-start gap-2.5 text-sm text-beige-dark/70 leading-snug"
                        >
                          <span className="text-sage/30 mt-1 flex-shrink-0">›</span>
                          {note}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </motion.article>
  );
}

// ─── Section Divider ──────────────────────────────────────────────────────────
function ProjectDivider({ index }: { index: number }) {
  return (
    <div className="flex items-center gap-4 pl-8">
      <div className="flex-1 h-px bg-gradient-to-r from-moss/40 to-transparent" />
      <span className="text-[9px] font-mono text-beige-dark/20 tracking-[0.2em]">
        {String(index + 1).padStart(2, "0")} /{" "}
        {String(projects.length).padStart(2, "0")}
      </span>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24">

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 15% 50%, rgba(46,74,61,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative">

        {/* ── Section Header ────────────────────────────────────────────── */}
        <div className="pl-8 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-sage/40" />
              <span className="text-xs font-mono text-sage/70 tracking-widest uppercase">
                02 — Projects
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-beige mb-3">
              Engineering <span className="text-gradient-sage">case studies</span>
            </h2>
            <p className="text-sm text-beige-dark max-w-xl leading-relaxed">
              Each project is documented as an architecture case study — system context,
              design decisions, infrastructure breakdown, and deployment topology.
            </p>
          </motion.div>
        </div>

        {/* ── Vertical spine line ───────────────────────────────────────── */}
        <div className="relative">
          {/* Continuous left rail */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(122,155,118,0.12) 5%, rgba(122,155,118,0.12) 95%, transparent)",
            }}
          />

          {/* Projects */}
          {projects.map((project, i) => (
            <div key={project.id}>
              <ProjectSection project={project} index={i} />
              {i < projects.length - 1 && <ProjectDivider index={i} />}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
