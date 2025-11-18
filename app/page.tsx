"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function Home() {
  return (
    <motion.div
      initial={{ filter: "blur(20px)" }}
      animate={{ filter: "none" }}
      transition={{ duration: 1 }}
    >
      <motion.h3
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4, ease: [0.5, 0.71, 1, 1] }}
      >
        You Are Invited!
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 5, ease: [0.5, 0.71, 1, 1] }}
      >
        JOAQUIN
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 6, ease: [0.5, 0.71, 1, 1] }}
        className="leading-[2rem] text-black font-outline-4"
      >
        &amp;
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 7, ease: [0.5, 0.71, 1, 1] }}
      >
        KRISNA
      </motion.h1>
      <motion.h4
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 8, ease: [0.5, 0.71, 1, 1] }}
      >
        NOVEMBER 28, 2025 | 11:00 AM
      </motion.h4>
      <motion.h5
        className="mt-5 address album-text text-center text-md"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 8, ease: [0.5, 0.71, 1, 1] }}
      >
        BLK 11, LOT 44, ST. MARTIN ST. TIERRA VERDE SUBDIVISION,
        <br />
        PALLOCAN WEST, BATANGAS CITY
      </motion.h5>
    </motion.div>
  );
}
