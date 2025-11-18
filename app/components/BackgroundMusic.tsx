"use client";

import { useEffect, useState } from "react";
import { Howl } from "howler";
import { Play, Pause } from "lucide-react";

export default function BackgroundMusic() {
  const [music, setMusic] = useState<Howl | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const sound = new Howl({
      src: ["/music/bg.mp3"], // Put your audio file in /public/music
      loop: true,
      volume: 0.5,
      html5: true,
    });

    setMusic(sound);

    // Try autoplay
    try {
      sound.play();
      setIsPlaying(true);
    } catch {
      console.log("Autoplay blocked; click the vinyl to play.");
    }

    return () => {
      // Ensure the cleanup function does not return the value of sound.unload()
      // (some typings may have unload() return null), so use a block that returns undefined.
      sound.unload();
    };
  }, []);

  const toggleMusic = () => {
    if (!music) return;
    if (isPlaying) {
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
        {/* Vinyl center */}
        <div className="w-6 h-6 rounded-full bg-gray-500 animate-spin-slow"></div>

        {/* Play/Pause Icon Overlay */}
        <div className="absolute text-white">
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </div>
      </div>
    </div>
  );
}
