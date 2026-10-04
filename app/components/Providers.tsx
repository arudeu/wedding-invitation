"use client";
import { MotionConfig } from "motion/react";

// reducedMotion="user" switches off movement for visitors who ask their device for less motion.
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
