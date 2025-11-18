import React from "react";

const NavigationPage = () => {
  return (
    <div className="text-center">
      <h1 className="navigation-header mt-10">WE'RE</h1>
      <h3 className="">Here!</h3>
      <div className="py-5 flex justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4967480920564!2d121.06981995690377!3d13.752643893409516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd056717fd7fc7%3A0xb99d5d92b207375d!2sTierra%20Verde%20Subdivision!5e0!3m2!1sen!2sph!4v1763443588574!5m2!1sen!2sph"
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
    </div>
  );
};

export default NavigationPage;
