"use client";

import { useEffect, useRef, useState } from "react";
import { useAtmosphere } from "@/lib/atmosphere";

// ─── AmbientBreeze ─────────────────────────────────────────────────────────────
// Synthesises a soft wind/breeze sound using Web Audio API (no external files).
// Only runs when mode === "exploring" AND soundEnabled === true.
// Uses filtered white noise (lowpass + highpass) to produce a gentle ambient whoosh.
// Fades in/out smoothly with a 2-second envelope to avoid clicks.
// The AudioContext is created lazily on first enable to comply with browser
// autoplay policies that require a user gesture before sound can start.

const FADE_DURATION = 2.5;   // seconds for gain ramp
const TARGET_GAIN   = 0.055; // master volume — quiet but perceptible
const BUFFER_SECS   = 3;     // white-noise buffer length (looped)

type SoundHandles = {
  ctx: AudioContext;
  source: AudioBufferSourceNode;
  gainNode: GainNode;
};

function buildBreezeGraph(ctx: AudioContext): SoundHandles {
  // White noise buffer
  const bufLen = ctx.sampleRate * BUFFER_SECS;
  const buffer = ctx.createBuffer(2, bufLen, ctx.sampleRate); // stereo
  for (let ch = 0; ch < 2; ch++) {
    const data = buffer.getChannelData(ch);
    for (let i = 0; i < bufLen; i++) data[i] = Math.random() * 2 - 1;
  }

  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.loop = true;

  // High-pass: cut sub-bass rumble below 120 Hz
  const hp = ctx.createBiquadFilter();
  hp.type = "highpass";
  hp.frequency.value = 120;
  hp.Q.value = 0.7;

  // Low-pass: cut harsh high frequencies above 700 Hz
  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 700;
  lp.Q.value = 0.5;

  // Gentle notch around 300 Hz to soften the tone
  const notch = ctx.createBiquadFilter();
  notch.type = "notch";
  notch.frequency.value = 300;
  notch.Q.value = 0.5;

  // Master gain — starts at 0 for smooth fade-in
  const gainNode = ctx.createGain();
  gainNode.gain.setValueAtTime(0, ctx.currentTime);

  source.connect(hp);
  hp.connect(lp);
  lp.connect(notch);
  notch.connect(gainNode);
  gainNode.connect(ctx.destination);

  source.start(0);
  return { ctx, source, gainNode };
}

export default function AmbientBreeze() {
  const { mode, soundEnabled } = useAtmosphere();
  const handlesRef = useRef<SoundHandles | null>(null);
  const [inSection, setInSection] = useState(false);

  // Watch whether the contact section is visible in the viewport
  useEffect(() => {
    const section = document.getElementById("contact");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInSection(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Sound plays only when: exploring mode + sound on + inside contact section
  const shouldPlay = mode === "exploring" && soundEnabled && inSection;

  useEffect(() => {
    if (shouldPlay) {
      // Create graph on first use (satisfies browser autoplay policy —
      // this runs in response to the user's toggle click)
      if (!handlesRef.current) {
        try {
          const AudioCtx =
            window.AudioContext ||
            (window as unknown as { webkitAudioContext: typeof AudioContext })
              .webkitAudioContext;
          const ctx = new AudioCtx();
          handlesRef.current = buildBreezeGraph(ctx);
        } catch {
          return; // Web Audio not supported — fail silently
        }
      }

      // Fade in
      const { ctx, gainNode } = handlesRef.current;
      gainNode.gain.cancelScheduledValues(ctx.currentTime);
      gainNode.gain.setValueAtTime(gainNode.gain.value, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(
        TARGET_GAIN,
        ctx.currentTime + FADE_DURATION
      );

      // Resume if suspended (e.g. browser policy pause)
      if (ctx.state === "suspended") ctx.resume();
    } else if (handlesRef.current) {
      // Fade out
      const { ctx, gainNode } = handlesRef.current;
      gainNode.gain.cancelScheduledValues(ctx.currentTime);
      gainNode.gain.setValueAtTime(gainNode.gain.value, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + FADE_DURATION);

      // Suspend after fade to free resources
      window.setTimeout(() => {
        handlesRef.current?.ctx.suspend();
      }, FADE_DURATION * 1000 + 100);
    }
  }, [shouldPlay]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      handlesRef.current?.source.stop();
      handlesRef.current?.ctx.close();
    };
  }, []);

  return null; // purely behavioural — no DOM output
}
