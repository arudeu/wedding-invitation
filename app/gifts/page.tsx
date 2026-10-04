"use client";
import { motion } from "motion/react";
import { Gift } from "lucide-react";
import { PageTitle, Reveal } from "../components/Bits";
import { event } from "@/lib/event";

const GiftsPage = () => {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-8">
      <PageTitle script="A Note On" title="GIFTS" />

      <Reveal className="relative w-full rounded-3xl border border-sky/60 bg-white/60 px-6 py-10 text-center shadow-sm backdrop-blur-sm sm:px-12">
        <motion.div
          className="mx-auto mb-6 grid size-14 place-items-center rounded-full bg-sky/30 text-dusty"
          animate={{ rotate: [-6, 6, -6], y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Gift aria-hidden="true" />
        </motion.div>
        <p className="text-lg leading-relaxed sm:text-xl">
          Your presence at our wedding is the greatest gift of all!
        </p>
        <p className="mt-4 text-lg leading-relaxed sm:text-xl">
          However, if you wish to honor us with gifts or monetary gifts for our future home, it would really make our
          day!
        </p>
        <p className="mt-8 text-right font-script text-4xl text-dusty sm:text-5xl">
          {event.groom} <span className="text-sky">&amp;</span> {event.bride}
        </p>
      </Reveal>
    </div>
  );
};

export default GiftsPage;
