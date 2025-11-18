import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();

  const baseStyle =
    "md:text-2xl font-medium cursor-pointer transition-colors duration-500 transition-transform hover:scale-105";
  const activeStyle = "text-gray-900 scale-110";
  const inactiveStyle = "text-[#89CFF0]";

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "NAVIGATION", path: "/navigation" },
    { name: "RSVP", path: "/rsvp" },
  ];

  return (
    <nav className="w-full p-4 mb-6 absolute top-10">
      <ul className="flex justify-center space-x-4 md:space-x-20">
        {navItems.map((item) => (
          <li
            key={item.path}
            className={`${baseStyle} ${
              location.pathname === item.path ? activeStyle : inactiveStyle
            }`}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
