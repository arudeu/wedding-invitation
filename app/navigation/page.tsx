"use client";

import React from "react";
import { motion } from "motion/react";

const NavigationPage = () => {
  return (
    <motion.div
      className="text-center"
      initial={{ filter: "blur(20px)" }}
      animate={{ filter: "none" }}
      transition={{ duration: 1 }}
    >
      <h1 className="navigation-header mt-10">WE'RE</h1>
      <h3 className="">Here!</h3>
      <div className="py-5 flex justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.8688865210454!2d121.07019990693269!3d13.750171548323033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd053642895993%3A0x42fb54bd6480be0c!2sPallocan%20Kanluran%2C%20Batangas%20City%2C%20Batangas!5e0!3m2!1sen!2sph!4v1763459217206!5m2!1sen!2sph"
          className="w-80 h-50 2xl:w-100 2xl:h-100"
          loading="lazy"
          style={{
            border: "5px #89CFF0 solid",
          }}
        ></iframe>
      </div>

      <div>
        <h5 className="address album-text">
          BLK 11, LOT 44, ST. MARTIN ST.,
          <br />
          TIERRA VERDE SUBDIVISION, PALLOCAN WEST,
          <br />
          BATANGAS CITY
        </h5>
      </div>
    </motion.div>
  );
};

export default NavigationPage;
