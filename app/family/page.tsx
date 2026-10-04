"use client";
import { motion } from "motion/react";
import { Ornament, Reveal, ease } from "../components/Bits";
import { event } from "@/lib/event";

const list = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const parents = [
  { role: "GROOM", names: event.groomParents },
  { role: "BRIDE", names: event.brideParents },
];

const FamilyPage = () => {
  return (
    <div className="flex w-full max-w-4xl flex-col items-center gap-10 sm:gap-14">
      {/* Parents */}
      <div className="grid w-full gap-5 md:grid-cols-2">
        {parents.map((p, i) => (
          <Reveal
            key={p.role}
            delay={i * 0.12}
            className="rounded-3xl border border-sky/60 bg-white/60 px-6 py-8 text-center shadow-sm backdrop-blur-sm"
          >
            <p className="font-script text-3xl text-ink sm:text-4xl">
              Parents of the
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-[0.12em] text-dusty sm:text-4xl">
              {p.role}
            </h2>
            <Ornament className="mx-auto my-4 w-32" />
            <ul className="space-y-1 text-base sm:text-lg">
              {p.names.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {/* Principal sponsors */}
      <div className="w-full text-center">
        <Reveal>
          <p className="font-script text-3xl text-ink sm:text-5xl">Principal</p>
          <h2 className="font-serif text-3xl font-bold tracking-[0.12em] text-dusty sm:text-5xl">
            SPONSORS
          </h2>
          <Ornament className="mx-auto my-5 w-40" />
        </Reveal>

        <motion.ul
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-2 text-base min-[440px]:grid-cols-2 sm:gap-y-3 sm:text-lg"
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {event.sponsors.map((name) => (
            <motion.li key={name} variants={item}>
              {name}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default FamilyPage;
