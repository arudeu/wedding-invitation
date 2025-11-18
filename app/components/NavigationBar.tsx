import React from "react";

const NavigationBar = () => {
  return (
    <nav className="w-full p-4 mb-6">
      <ul className="flex justify-center space-x-20">
        <li className="text-2xl text-[#89CFF0] font-medium hover:text-gray-900 cursor-pointer transition-colors duration-500 transition-transform hover:scale-105">
          HOME
        </li>
        <li className="text-2xl text-[#89CFF0] font-medium hover:text-gray-900 cursor-pointer transition-colors duration-500 transition-transform hover:scale-105">
          NAVIGATION
        </li>
        <li className="text-2xl text-[#89CFF0] font-medium hover:text-gray-900 cursor-pointer transition-colors duration-500 transition-transform hover:scale-105">
          RSVP
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
