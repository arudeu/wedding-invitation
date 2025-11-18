"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isReady, setIsReady] = useState(false);

  // Fade-in autoplay logic
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0;
    audio.muted = true;

    const start = async () => {
      try {
        await audio.play();
        audio.muted = false;
        setIsReady(true);

        // Fade-in
        let vol = 0;
        const fade = setInterval(() => {
          vol += 0.02;
          audio.volume = Math.min(vol, 0.4);
          if (vol >= 0.4) clearInterval(fade);
        }, 120);
      } catch (err) {
        console.log("Autoplay blocked:", err);
      }
    };

    start();
  }, []);

  // Fade-out on pause
  const handlePause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    let vol = audio.volume;
    const fade = setInterval(() => {
      vol -= 0.03;
      audio.volume = Math.max(vol, 0);
      if (vol <= 0) {
        clearInterval(fade);
        audio.pause();
        setIsPlaying(false);
      }
    }, 100);
  };

  const handlePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0;
    await audio.play();
    setIsPlaying(true);

    // fade-in
    let vol = 0;
    const fade = setInterval(() => {
      vol += 0.02;
      audio.volume = Math.min(vol, 0.4);
      if (vol >= 0.4) clearInterval(fade);
    }, 120);
  };

  return (
    <>
      {/* AUDIO TAG */}
      <audio ref={audioRef} src="/music/bg.mp3" preload="auto" />

      {/* FLOATING VINYL MUSIC BUTTON */}
      <div className="fixed bottom-6 right-6 flex flex-row items-center gap-2 z-50 bg-neutral-800 px-3 py-2 rounded-4xl">
        {/* Vinyl Disc */}
        <div
          className={`w-16 h-16 rounded-full border-4 border-black shadow-lg 
          bg-[url('/music/vinyl.jpg')] bg-cover bg-center
          ${isPlaying ? "animate-spin-slow" : "opacity-50"}`}
        ></div>
        {/* Title and Artist */}
        <div className="text-white text-lg w-30">
          <h5 className="text-sm album-text">The Last Time</h5>
          <h5 className="text-[0.5rem] album-text">Eric Benét</h5>
        </div>
        {/* Play / Pause Button */}
        <Button
          onClick={isPlaying ? handlePause : handlePlay}
          className="rounded-full h-12 w-12 p-0 shadow-xl bg-black text-white hover:bg-neutral-800"
        >
          {isPlaying ? <Pause size={22} /> : <Play size={22} />}
        </Button>
      </div>

      {/* Spin Animation */}
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
    </>
  );
}
