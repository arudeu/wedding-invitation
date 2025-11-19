"use client";

import React from "react";
import { motion } from "motion/react";

const GiftsPage = () => {
  return (
    <motion.div
      className="flex flex-col items-center space-y-4 p-10"
      initial={{ filter: "blur(20px)" }}
      animate={{ filter: "none" }}
      transition={{ duration: 1 }}
    >
      <h3 className="">A Note On</h3>
      <h1 className="navigation-header">GIFTS</h1>
      <div className="text-xl">
        <p className="my-3">
          Your presence at our wedding is the greatest gift of all!
        </p>
        <p className="my-3">
          However, if you wish to honor us with a gift, monetary gifts,
        </p>
        <p className="my-3">
          For our future home, it would really make our day!
        </p>
        <p className="mt-4 text-2xl lg:text-3xl text-right text-[#89CFF0] leading-[2] tracking-tighter">
          JOAQUIN <span className="text-4xl lg:text-5xl text-black ">&</span>{" "}
          KRISNA
        </p>
      </div>
    </motion.div>
  );
};

export default GiftsPage;
