"use client";

import { Geist, Geist_Mono } from "next/font/google";
import NavigationBar from "./components/NavigationBar";
import { motion } from "motion/react";
import Head from "next/head";
import BackgroundMusic from "./components/BackgroundMusic";
import { Toaster } from "@/components/ui/sonner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./globals.css";

// pages
import Home from "./page";
import NavigationPage from "./navigation/page";
import RSVPPage from "./rsvp/page";

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
      <Head>
        <title>Joaquin & Krisna</title>
        <meta name="description" content="You Are Invited!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <motion.body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-6 flex items-center justify-center h-screen w-screen bg-[#89CFF0]`}
        initial={{ filter: "blur(20px)" }}
        animate={{ filter: "none" }}
        transition={{ duration: 1 }}
      >
        <Toaster richColors closeButton />
        <div className="relative h-full w-full flex items-center justify-center bg-[#F6F5F0]">
          <Router>
            <NavigationBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/navigation" element={<NavigationPage />} />
              <Route path="/rsvp" element={<RSVPPage />} />
            </Routes>
          </Router>

          <div>
            <span className="hidden xl:block absolute top-1 left-1 xl:top-10 xl:left-5 xl:w-60 xl:h-60 bg-[url('/flw-tl.svg')] bg-no-repeat bg-[length:5rem_5rem] xl:bg-[length:15rem_15rem] -z-1"></span>
            <span className="hidden xl:block absolute top-1 right-1 xl:top-10 xl:right-5 xl:w-60 xl:h-60 bg-[url('/flw-tr.svg')] bg-no-repeat bg-[length:5rem_5rem] xl:bg-[length:15rem_15rem] -z-1"></span>
            <span className="hidden xl:block absolute bottom-1 left-1 xl:bottom-10 xl:left-5 xl:w-60 xl:h-60 bg-[url('/flw-bl.svg')] bg-no-repeat bg-[length:5rem_5rem] xl:bg-[length:15rem_15rem] -z-1"></span>
            <span className="hidden xl:block absolute bottom-1 right-1 xl:bottom-10 xl:right-5 xl:w-60 xl:h-60 bg-[url('/flw-br.svg')] bg-no-repeat bg-[length:5rem_5rem] xl:bg-[length:15rem_15rem] -z-1"></span>
            <main>
              <BackgroundMusic />
            </main>
          </div>
        </div>
      </motion.body>
    </html>
  );
}
