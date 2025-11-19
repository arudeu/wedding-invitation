"use client";

import React from "react";
import { motion } from "motion/react";

const FamilyPage = () => {
  return (
    <motion.div
      className="flex flex-col items-center gap-3 lg:gap-14 px-4"
      initial={{ filter: "blur(20px)" }}
      animate={{ filter: "none" }}
      transition={{ duration: 1 }}
    >
      {/* Parents Section */}
      <div className="flex flex-col md:flex-row gap-4 lg:gap-20 w-full justify-center">
        {/* Groom Parents */}
        <div className="w-full md:w-auto">
          <div className="text-center">
            <h2 className="parents-head-text">Parents Of The</h2>
            <h2 className="groom-head-text">GROOM</h2>
          </div>
          <div className="text-center lg:mt-3">
            <ul className="lg:space-y-1 text-md lg:text-xl">
              <li>Joaquin Teriana Parcon Jr.</li>
              <li>Emily Mirafuentes Parcon</li>
            </ul>
          </div>
        </div>

        {/* Bride Parents */}
        <div className="w-full md:w-auto">
          <div className="text-center">
            <h2 className="parents-head-text">Parents Of The</h2>
            <h2 className="groom-head-text">BRIDE</h2>
          </div>
          <div className="text-center lg:mt-3">
            <ul className="lg:space-y-1 text-md lg:text-xl">
              <li>Oliver Mercado Manalo</li>
              <li>Ruzen Mercado Manalo</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Godparents Section */}
      <div className="text-center w-full">
        <h2 className="parents-head-text">Principal</h2>
        <h2 className="groom-head-text">SPONSORS</h2>

        <ul className="lg:mt-6 grid grid-cols-1 grid-cols-2 lg:gap-y-3 lg:gap-x-10 gap-x-4 text-md lg:text-xl">
          <li>Erwin Bagamasbad</li>
          <li>Darlene Maranan</li>
          <li>Mary Jean Red</li>
          <li>Leonardo Red</li>
          <li>Nestor De Leon</li>
          <li>Nilda De Leon</li>
          <li>Bonifacio Manalo</li>
          <li>Rosenie Manalo</li>
          <li>Engr. Aldrin Abraham</li>
          <li>Melanie Abraham</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default FamilyPage;
