"use client";

import { Geist, Geist_Mono } from "next/font/google";
import NavigationBar from "./components/NavigationBar";
import { motion } from "motion/react";
import { metadata } from "./metadata";
import BackgroundMusic from "./components/BackgroundMusic";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-6 flex items-center justify-center h-screen w-screen bg-[#89CFF0]`}
      >
        <BackgroundMusic />
        <motion.div
          className="relative h-full w-full flex items-center justify-center bg-[#F6F5F0]"
          initial={{ filter: "blur(20px)" }}
          animate={{ filter: "none" }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-10 ">
            <NavigationBar />
          </div>

          <div>
            <span className="absolute top-10 left-5 w-60 h-60 bg-[url('/flw-tl.svg')] bg-no-repeat bg-[length:15rem_15rem]"></span>
            <span className="absolute top-10 right-5 w-60 h-60 bg-[url('/flw-tr.svg')] bg-no-repeat bg-[length:15rem_15rem]"></span>
            <span className="absolute bottom-10 left-5 w-60 h-60 bg-[url('/flw-bl.svg')] bg-no-repeat bg-[length:15rem_15rem]"></span>
            <span className="absolute bottom-10 right-5 w-60 h-60 bg-[url('/flw-br.svg')] bg-no-repeat bg-[length:15rem_15rem]"></span>

            {children}
          </div>
        </motion.div>
      </body>
    </html>
  );
}
