// lib/music.ts
import { Howl } from "howler";

let music: Howl;

export const getMusic = () => {
  if (!music) {
    music = new Howl({
      src: ["/music/bg.mp3"],
      autoplay: true,
      loop: true,
      volume: 0.3,
    });
  }
  return music;
};
