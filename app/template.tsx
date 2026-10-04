"use client";
import { motion } from "motion/react";

// A template re-mounts on every navigation, so each page fades and rises in.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="flex w-full flex-col items-center"
      initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
