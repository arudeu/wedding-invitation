"use client";

import { useRouter, usePathname } from "next/navigation";

const NavigationBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const baseStyle =
    "lg:text-2xl font-medium cursor-pointer transition-colors duration-500 transition-transform hover:scale-105";
  const activeStyle = "text-gray-900 scale-110";
  const inactiveStyle = "text-[#89CFF0]";

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "NAVIGATION", path: "/navigation" },
    { name: "FAMILY", path: "/family" },
    { name: "GIFTS", path: "/gifts" },
    { name: "RSVP", path: "/rsvp" },
  ];

  return (
    <nav className="w-full p-4 mb-6 absolute top-10">
      <ul className="flex justify-center space-x-3 lg:space-x-20">
        {navItems.map((item) => (
          <li
            key={item.path}
            className={`${baseStyle} ${
              pathname === item.path ? activeStyle : inactiveStyle
            }`}
          >
            <button onClick={() => router.push(item.path)}>{item.name}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
