"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "NAVIGATION", path: "/navigation" },
  { name: "FAMILY", path: "/family" },
  { name: "GIFTS", path: "/gifts" },
  { name: "RSVP", path: "/rsvp" },
];

const NavigationBar = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main"
      className="sticky top-0 z-30 border-b border-sky/40 bg-paper/85 px-3 py-2 backdrop-blur-sm sm:py-3"
    >
      <ul className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-0 sm:gap-x-8 md:gap-x-12">
        {navItems.map((item) => {
          const active = pathname === item.path;
          return (
            <li key={item.path}>
              <Link
                href={item.path}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative block px-1 py-3 font-sans text-[0.7rem] font-medium tracking-[0.16em] transition-colors sm:text-sm sm:tracking-[0.25em]",
                  active ? "text-ink" : "text-dusty hover:text-ink"
                )}
              >
                {item.name}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 bottom-1.5 h-0.5 rounded bg-sky"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationBar;
