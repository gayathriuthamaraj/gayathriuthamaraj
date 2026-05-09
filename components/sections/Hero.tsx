"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { owner } from "@/lib/data";

const ROLES = [
  "Backend Engineer",
  "Data Pipeline Engineer",
  "NLP & ML Enthusiast",
  "Distributed Systems",
  "ML Infrastructure",
  "Systems + Data",
];

function TypedRole() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = ROLES[idx];

    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        60
      );
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        35
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % ROLES.length);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, deleting, idx]);

  return (
    <span className="font-mono text-sage">
      {displayed}
      <span className="inline-block w-0.5 h-5 ml-0.5 bg-sage align-middle animate-[blink_1s_step-end_infinite]" />
    </span>
  );
}

// ─── Floating grid nodes (decorative) ─────────────────────────────────────────
function GridNode({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-sage/30"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.4, 1] }}
      transition={{ duration: 3 + delay, repeat: Infinity, delay }}
    />
  );
}

const NODES = [
  { x: 15, y: 25 }, { x: 30, y: 60 }, { x: 50, y: 20 },
  { x: 70, y: 45 }, { x: 85, y: 70 }, { x: 40, y: 80 },
  { x: 60, y: 15 }, { x: 90, y: 30 }, { x: 20, y: 75 },
  { x: 75, y: 85 }, { x: 10, y: 50 }, { x: 55, y: 55 },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
        <div
          className="orb w-[500px] h-[500px]"
          style={{
            top: "10%", left: "5%",
            background: "radial-gradient(circle, rgba(46,74,61,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          className="orb w-[400px] h-[400px]"
          style={{
            bottom: "10%", right: "8%",
            background: "radial-gradient(circle, rgba(92,64,51,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="orb w-[300px] h-[300px]"
          style={{
            top: "40%", left: "50%",
            background: "radial-gradient(circle, rgba(122,155,118,0.08) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(122,155,118,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(122,155,118,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Floating nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {NODES.map((n, i) => (
          <GridNode key={i} x={n.x} y={n.y} delay={i * 0.3} />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 section-container text-center max-w-4xl"
      >
        {/* Pre-label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-sage animate-breathe" />
          <span className="text-xs font-mono text-beige-muted tracking-widest uppercase">
            Amrita Vishwa Vidyapeetham · B.Tech CSE
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-sage animate-breathe" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-4 text-gradient leading-none"
        >
          Gayathri U
        </motion.h1>

        {/* Typed role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-2xl mb-6 min-h-[36px]"
        >
          <TypedRole />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-beige-dark max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-10"
        >
          I build systems from the infrastructure up and work with data from the pipeline
          down — distributed backends, NLP pipelines, ML experiments, and the infrastructure
          that ties them together.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={owner.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
              bg-moss/50 border border-moss text-beige
              hover:bg-moss/70 hover:border-sage/50
              transition-all duration-300 ease-out"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-sage">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          <a
            href={owner.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
              bg-forest-700/40 border border-forest-600/40 text-beige-dark
              hover:bg-forest-700/60 hover:border-sage/30 hover:text-beige
              transition-all duration-300 ease-out"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-sage/70">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href={owner.resume}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
              bg-forest-700/40 border border-forest-600/40 text-beige-dark
              hover:bg-forest-700/60 hover:border-sage/30 hover:text-beige
              transition-all duration-300 ease-out"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage/70">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
            Resume
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
              border border-sage/30 text-sage
              hover:bg-sage/10 hover:border-sage/60
              transition-all duration-300 ease-out"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            Contact
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono text-beige-dark/40 tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-sage/40 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
