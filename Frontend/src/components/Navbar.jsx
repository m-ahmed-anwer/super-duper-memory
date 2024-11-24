import React, { useState } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  const [theme, setTheme] = useState("light");

  const darkModeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme === "light");
  };

  return (
    <div className="sticky top-0 px-3 py-2 bg-white dark:bg-zinc-900 bg-opacity-60 backdrop-blur-lg shadow-md transition duration-300 z-50">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Left: Navigation */}
        <ul className="flex items-center space-x-6">
          <li>
            <button
              onClick={() => window.location.reload()}
              className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-[#00ADB5] dark:hover:text-[#00ADB5] transition duration-300"
            >
              Refresh
            </button>
          </li>
        </ul>

        {/* Center: Brand */}
        <Link
          to={"/"}
          className="text-2xl font-bold text-gray-800 dark:text-gray-100 uppercase tracking-widest flex items-center"
        >
          <span className="mr-2 bg-gradient-to-r from-[#00ADB5] to-[#00ADB5] bg-clip-text text-transparent">
            Recipe Tracker
          </span>
        </Link>

        {/* Right: Dark Mode Toggle */}
        <div className="flex items-center space-x-6">
          <button
            onClick={darkModeHandler}
            className="relative w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADB5] to-[#393E46] p-[2px] transition duration-300 hover:shadow-lg hover:shadow-[#00ADB5]/50"
          >
            <div className="flex items-center justify-center w-full h-full bg-white dark:bg-zinc-800 rounded-full transition duration-300">
              {theme === "light" ? (
                <IoMoonOutline className="text-xl text-gray-700 dark:text-gray-300" />
              ) : (
                <IoSunnyOutline className="text-xl text-yellow-400" />
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
