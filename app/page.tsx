"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Ornament, SplitReveal, ease } from "./components/Bits";
import { event } from "@/lib/event";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export default function Home() {
  return (
    <section className="flex w-full max-w-3xl flex-col items-center text-center">
      <motion.p
        className="font-script text-[clamp(2.25rem,9vw,4.5rem)] leading-tight text-ink"
        {...fadeUp(0.1)}
      >
        You Are Invited!
      </motion.p>

      <h1
        aria-label={`${event.groom} and ${event.bride}`}
        className="mt-1 flex flex-col items-center font-serif font-bold uppercase leading-[1.05] text-dusty"
      >
        <SplitReveal
          text={event.groom.toUpperCase()}
          delay={0.5}
          className="text-[clamp(2.75rem,14vw,7rem)] tracking-[0.08em]"
        />
        <motion.span
          aria-hidden="true"
          className="my-1 font-script text-[clamp(2.5rem,10vw,5rem)] font-normal normal-case text-sky"
          initial={{ opacity: 0, scale: 0.4, rotate: -12 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 140, damping: 12, delay: 1.1 }}
        >
          &amp;
        </motion.span>
        <SplitReveal
          text={event.bride.toUpperCase()}
          delay={1.3}
          className="text-[clamp(2.75rem,14vw,7rem)] tracking-[0.08em]"
        />
      </h1>

      <Ornament className="mx-auto mt-6 w-44 sm:w-60" />

      <motion.p
        className="mt-6 font-sans text-xs uppercase tracking-[0.25em] text-ink sm:text-base sm:tracking-[0.3em]"
        {...fadeUp(1.9)}
      >
        {event.dateLabel} <span className="mx-1 text-sky sm:mx-2">|</span> {event.timeLabel}
      </motion.p>

      <motion.address
        className="mt-4 max-w-md font-sans text-sm not-italic leading-relaxed text-ink/80 sm:text-base"
        {...fadeUp(2.1)}
      >
        {event.addressLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </motion.address>

      <motion.div className="mt-8 flex flex-wrap items-center justify-center gap-3" {...fadeUp(2.3)}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
          <Button
            asChild
            className="h-12 rounded-full bg-dusty px-9 font-sans text-xs uppercase tracking-[0.25em] text-paper hover:bg-ink"
          >
            <Link href="/rsvp">RSVP</Link>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-full border-dusty bg-transparent px-7 font-sans text-xs uppercase tracking-[0.25em] text-dusty hover:bg-sky/20 hover:text-ink"
          >
            <Link href="/navigation">
              <MapPin /> View map
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
