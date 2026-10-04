"use client";

import { useEffect, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import { Pause, Play } from "lucide-react";
import { getMusic } from "./lib/music";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const rotate = useMotionValue(0);

  // Follow the real state of the player. Browsers block autoplay until the first tap,
  // so the vinyl only starts turning once the music actually starts.
  useEffect(() => {
    const music = getMusic();
    const on = () => setIsPlaying(true);
    const off = () => setIsPlaying(false);
    music.on("play", on);
    music.on("pause", off);
    music.on("stop", off);
    setIsPlaying(music.playing());
    return () => {
      music.off("play", on);
      music.off("pause", off);
      music.off("stop", off);
    };
  }, []);

  // The record keeps its angle when paused and carries on from there.
  useAnimationFrame((_, delta) => {
    if (isPlaying) rotate.set(rotate.get() + delta * 0.09);
  });

  const toggleMusic = () => {
    const music = getMusic();
    if (music.playing()) music.pause();
    else music.play();
  };

  return (
    <motion.button
      type="button"
      onClick={toggleMusic}
      aria-label={isPlaying ? "Pause background music" : "Play background music"}
      aria-pressed={isPlaying}
      className="group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 size-16 rounded-full shadow-xl outline-none focus-visible:ring-4 focus-visible:ring-sky sm:right-6 sm:size-20"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 160, damping: 14, delay: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      <motion.span
        style={{ rotate }}
        className="absolute inset-0 rounded-full border-2 border-white/70 [background:repeating-radial-gradient(circle_at_center,#111_0_2px,#1e1e1e_2px_4px)]"
      >
        {/* light reflection so the turning is easy to see */}
        <span className="absolute inset-0 rounded-full [background:conic-gradient(transparent_0_20%,rgba(255,255,255,0.18)_25%,transparent_30%_70%,rgba(255,255,255,0.18)_75%,transparent_80%)]" />
        {/* album cover as the record label */}
        <span className="absolute inset-[28%] rounded-full bg-[url('/music/vinyl.jpg')] bg-cover bg-center ring-2 ring-sky/80" />
        <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper" />
      </motion.span>
      <span className="absolute inset-0 grid place-items-center text-white drop-shadow">
        {isPlaying ? (
          <Pause size={20} className="opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
        ) : (
          <Play size={22} className="fill-white" />
        )}
      </span>
    </motion.button>
  );
}
