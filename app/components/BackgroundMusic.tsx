"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";
import { Howl } from "howler";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(true);
  const musicRef = useRef<Howl | null>(null);

  useEffect(() => {
    // Initialize Howl only once
    if (!musicRef.current) {
      musicRef.current = new Howl({
        src: ["/music/bg.mp3"],
        loop: true,
        volume: 0,
        html5: true,
      });

      // Autoplay muted to bypass restrictions
      musicRef.current.mute(true);
      musicRef.current.play();

      // Fade in
      let vol = 0;
      const fadeIn = setInterval(() => {
        if (!musicRef.current) return;
        vol += 0.02;
        musicRef.current.volume(Math.min(vol, 0.4));
        if (vol >= 0.4) {
          clearInterval(fadeIn);
          musicRef.current.mute(false);
        }
      }, 120);
    }
  }, []);

  const handlePause = () => {
    if (!musicRef.current) return;

    let vol = musicRef.current.volume();
    const fadeOut = setInterval(() => {
      if (!musicRef.current) return;
      vol -= 0.03;
      musicRef.current.volume(Math.max(vol, 0));
      if (vol <= 0) {
        clearInterval(fadeOut);
        musicRef.current.pause();
        setIsPlaying(false);
      }
    }, 100);
  };

  const handlePlay = () => {
    if (!musicRef.current) return;

    musicRef.current.volume(0);
    musicRef.current.play();
    setIsPlaying(true);

    let vol = 0;
    const fadeIn = setInterval(() => {
      if (!musicRef.current) return;
      vol += 0.02;
      musicRef.current.volume(Math.min(vol, 0.4));
      if (vol >= 0.4) clearInterval(fadeIn);
    }, 120);
  };

  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-2 z-50 bg-neutral-800 px-3 py-2 rounded-4xl">
      <div
        className={`w-16 h-16 rounded-full border-4 border-black shadow-lg 
        bg-[url('/music/vinyl.jpg')] bg-cover bg-center
        ${isPlaying ? "animate-spin-slow" : "opacity-50"}`}
      ></div>
      <div className="text-white text-lg w-53 md:w-30">
        <h5 className="text-sm album-text">The Last Time</h5>
        <h5 className="text-[0.5rem] album-text">Eric Benét</h5>
      </div>
      <Button
        onClick={isPlaying ? handlePause : handlePlay}
        className="rounded-full h-12 w-12 p-0 shadow-xl bg-black text-white hover:bg-neutral-800"
      >
        {isPlaying ? <Pause size={22} /> : <Play size={22} />}
      </Button>

      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
