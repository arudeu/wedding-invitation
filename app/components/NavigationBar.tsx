import React, { useEffect, useState } from "react";

const NavigationBar = () => {
  const [activePage, setActivePage] = useState("/");

  useEffect(() => {
    setActivePage(window.location.pathname);
  }, []);

  const baseStyle =
    "md:text-2xl font-medium cursor-pointer transition-colors duration-500 transition-transform hover:scale-105";
  const activeStyle = "text-gray-900 scale-110"; // Highlighted
  const inactiveStyle = "text-[#89CFF0]";

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "NAVIGATION", path: "/navigation" },
    { name: "RSVP", path: "/rsvp" },
  ];

  return (
    <nav className="w-full p-4 mb-6">
      <ul className="flex justify-center space-x-4  md:space-x-20">
        {navItems.map((item) => (
          <li
            key={item.path}
            className={`${baseStyle} ${
              activePage === item.path ? activeStyle : inactiveStyle
            }`}
            onClick={() => (window.location.href = item.path)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
