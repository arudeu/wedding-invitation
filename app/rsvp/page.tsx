"use client";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageTitle, Reveal } from "../components/Bits";
import { event } from "@/lib/event";

export default function RSVPPage() {
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-10">
      <PageTitle script="Kindly" title="RSVP" />

      <Reveal delay={0.2} className="relative">
        {/* soft pulse to draw the eye */}
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-sky"
          animate={{ scale: [1, 1.25], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div className="relative" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
          <Button
            asChild
            className="h-14 rounded-full bg-dusty px-10 font-sans text-sm uppercase tracking-[0.25em] text-paper hover:bg-ink"
          >
            <a href={event.rsvpUrl} target="_blank" rel="noopener noreferrer">
              RSVP Here <ArrowUpRight />
            </a>
          </Button>
        </motion.div>
      </Reveal>
    </div>
  );
}
