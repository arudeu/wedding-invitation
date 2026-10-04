"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const ease = [0.22, 1, 0.36, 1] as const;

/** Fades and rises when scrolled into view. */
export function Reveal({
  children, className, delay = 0, y = 24,
}: { children: React.ReactNode; className?: string; delay?: number; y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Letters slide up one by one from behind a mask. */
export function SplitReveal({
  text, className, delay = 0, stagger = 0.05,
}: { text: string; className?: string; delay?: number; stagger?: number }) {
  return (
    <span aria-label={text} className={cn("inline-flex overflow-hidden pb-[0.08em]", className)}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="inline-block"
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, delay: delay + i * stagger, ease }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

/** Thin line, diamond, thin line. The lines draw themselves in. */
export function Ornament({ className }: { className?: string }) {
  const draw = {
    initial: { pathLength: 0 },
    whileInView: { pathLength: 1 },
    viewport: { once: true },
    transition: { duration: 1.2, ease },
  };
  return (
    <svg viewBox="0 0 200 20" fill="none" aria-hidden="true" className={cn("h-5 text-sky", className)}>
      <motion.path d="M2 10H84" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...draw} />
      <motion.path d="M198 10H116" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...draw} />
      <motion.path
        d="M100 3L107 10L100 17L93 10Z"
        fill="currentColor"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 14 }}
        style={{ originX: 0.5, originY: 0.5 }}
      />
    </svg>
  );
}

/** Script line over big capital letters. */
export function PageTitle({ script, title }: { script: string; title: string }) {
  return (
    <div className="text-center">
      <motion.p
        className="font-script text-4xl text-ink sm:text-5xl md:text-6xl"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
      >
        {script}
      </motion.p>
      <h1 className="font-serif text-[clamp(2.75rem,13vw,5.5rem)] font-bold uppercase leading-none tracking-[0.1em] text-dusty">
        <SplitReveal text={title} delay={0.25} />
      </h1>
      <Ornament className="mx-auto mt-5 w-40 sm:w-56" />
    </div>
  );
}
