"use client";
import { motion } from "motion/react";
import { Compass, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageTitle, Reveal } from "../components/Bits";
import { event, mapsDirectionsUrl, mapsSearchUrl } from "@/lib/event";

const NavigationPage = () => {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-8">
      <PageTitle script="We're" title="HERE!" />

      <Reveal className="w-full">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border-4 border-sky bg-sky/20 shadow-xl sm:aspect-video">
          <iframe
            title="Map to the wedding venue"
            src={event.mapEmbed}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </Reveal>

      <Reveal className="flex w-full flex-col items-center gap-5 text-center" delay={0.1}>
        <motion.div
          className="grid size-12 place-items-center rounded-full bg-sky/30 text-dusty"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <MapPin aria-hidden="true" />
        </motion.div>
        <address className="font-sans text-sm not-italic leading-relaxed tracking-wide text-ink sm:text-base">
          {event.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            asChild
            className="h-12 rounded-full bg-dusty px-7 font-sans text-xs uppercase tracking-[0.2em] text-paper hover:bg-ink"
          >
            <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
              <Compass /> Get directions
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-full border-dusty bg-transparent px-7 font-sans text-xs uppercase tracking-[0.2em] text-dusty hover:bg-sky/20 hover:text-ink"
          >
            <a href={mapsSearchUrl} target="_blank" rel="noopener noreferrer">
              Open in Maps
            </a>
          </Button>
        </div>
      </Reveal>
    </div>
  );
};

export default NavigationPage;
