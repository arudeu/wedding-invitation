"use client";
import { motion } from "motion/react";

const corners = [
  { src: "/flw-tl.svg", pos: "left-0 top-0", origin: "top left", x: -40, y: -40 },
  { src: "/flw-tr.svg", pos: "right-0 top-0", origin: "top right", x: 40, y: -40 },
  { src: "/flw-bl.svg", pos: "bottom-0 left-0", origin: "bottom left", x: -40, y: 40 },
  { src: "/flw-br.svg", pos: "bottom-0 right-0", origin: "bottom right", x: 40, y: 40 },
];

export default function Corners() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      {corners.map((c, i) => (
        // outer layer sways forever, inner layer does the entrance
        <motion.div
          key={c.src}
          className={`absolute ${c.pos}`}
          style={{ transformOrigin: c.origin }}
          animate={{ rotate: [0, i % 2 ? -1.6 : 1.6, 0] }}
          transition={{ duration: 9 + i, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.img
            src={c.src}
            alt=""
            className="w-24 select-none sm:w-36 md:w-48 xl:w-60"
            style={{ transformOrigin: c.origin }}
            initial={{ opacity: 0, scale: 0.85, x: c.x, y: c.y }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      ))}
    </div>
  );
}
