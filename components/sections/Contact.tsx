"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import DriftingLeaves from "@/components/ui/DriftingLeaves";
import ButterflyAmbience from "@/components/ui/ButterflyAmbience";
import { owner } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(owner.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-36">
      <div className="absolute inset-0 pointer-events-none">
        {/* Ambient floor glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(46,74,61,0.2) 0%, transparent 70%)",
          }}
        />
        {/* Drifting leaves — atmospheric, low-opacity, cinematic */}
        <DriftingLeaves />
        {/* Translucent butterflies — ice-blue, margin-constrained, exploring mode only */}
        <ButterflyAmbience />
      </div>

      <div className="section-container relative text-center">
        <SectionReveal delay={0}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-sage/40" />
            <span className="text-xs font-mono text-sage/70 tracking-widest uppercase">08 — Contact</span>
            <div className="w-8 h-px bg-sage/40" />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-semibold text-beige mb-4 leading-tight">
            Let&apos;s build something{" "}
            <span className="text-gradient-sage">scalable</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <p className="text-sm md:text-base text-beige-dark max-w-xl mx-auto mb-10 leading-relaxed">
            Open to conversations about distributed systems, infrastructure engineering,
            backend architecture, ML systems, and interesting hard problems. Drop a message.
          </p>
        </SectionReveal>

        {/* Email block */}
        <SectionReveal delay={0.3}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 mb-10">
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-forest-800/40 border border-moss/25">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage/60">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span className="font-mono text-sm text-beige">{owner.email}</span>
            </div>

            <motion.button
              onClick={handleCopy}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-mono border border-sage/25 text-sage hover:bg-sage/10 hover:border-sage/50 transition-all duration-200"
            >
              {copied ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sage">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  copied!
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="9" y="9" width="13" height="13" rx="2"/>
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                  </svg>
                  copy
                </>
              )}
            </motion.button>

            <a
              href={`mailto:${owner.email}`}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium bg-moss/50 border border-moss text-beige hover:bg-moss/70 hover:border-sage/40 transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              send email
            </a>
          </div>
        </SectionReveal>

        {/* Social row */}
        <SectionReveal delay={0.4}>
          <div className="flex items-center justify-center gap-4">
            <a
              href={owner.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-beige-dark hover:text-beige border border-transparent hover:border-moss/30 hover:bg-forest-800/30 transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-sage/50 group-hover:text-sage transition-colors duration-200">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              GitHub
            </a>
            <span className="text-moss/40">·</span>
            <a
              href={owner.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-beige-dark hover:text-beige border border-transparent hover:border-moss/30 hover:bg-forest-800/30 transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-sage/50 group-hover:text-sage transition-colors duration-200">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </SectionReveal>

        {/* Footer micro-copy */}
        <SectionReveal delay={0.6}>
          <p className="mt-16 text-[11px] font-mono text-beige-dark/25">
            designed & built by gayathri u · {new Date().getFullYear()}
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
