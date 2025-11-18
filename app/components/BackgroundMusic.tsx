"use client";

import { useEffect, useState } from "react";
import { getMusic } from "./lib/music";
import { Play, Pause } from "lucide-react";

let isInitialized = false; // prevent re-init

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const music = getMusic();

  useEffect(() => {
    if (!isInitialized) {
      isInitialized = true;

      // Try autoplay
      try {
        music.play();
        setIsPlaying(true);
      } catch {
        // Autoplay blocked
        setIsPlaying(false);
      }
    } else if (music?.playing()) {
      setIsPlaying(true);
    }
  }, []);

  const toggleMusic = () => {
    if (!music) return;
    if (music.playing()) {
      music.pause();
      setIsPlaying(false);
    } else {
      music.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div
        className="w-20 h-20 rounded-full bg-[url('/music/vinyl.jpg')] bg-size-[auto_100px] bg-center border-4 border-gray-300 shadow-lg cursor-pointer flex items-center justify-center
                   transition-transform transform hover:scale-110 hover:rotate-[15deg]"
        onClick={toggleMusic}
      >
        <div className="w-6 h-6 rounded-full bg-gray-500 animate-spin-slow"></div>
        <div className="absolute text-white">
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </div>
      </div>
    </div>
  );
}
