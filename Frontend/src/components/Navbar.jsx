import React, { useState } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

function Navbar() {
  const [theme, setTheme] = useState("light");

  const darkModeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme === "light");
  };

  return (
    <div className="px-6 py-5 bg-white dark:bg-zinc-900 shadow-md transition duration-300">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Left: Navigation */}
        <ul className="flex items-center space-x-6">
          <li>
            <a
              href="/"
              className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
            >
              Refresh
            </a>
          </li>
        </ul>

        {/* Center: Brand */}
        <a
          href="/"
          aria-label="Company"
          title="Company"
          className="text-2xl font-bold text-gray-800 dark:text-gray-100 uppercase tracking-widest flex items-center"
        >
          <span className="mr-2 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Mummy's Kitchen
          </span>
        </a>

        {/* Right: Dark Mode Toggle */}
        <div className="flex items-center space-x-6">
          <button
            onClick={darkModeHandler}
            className="relative w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 p-[2px] transition duration-300 hover:shadow-lg hover:shadow-indigo-500/50"
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
