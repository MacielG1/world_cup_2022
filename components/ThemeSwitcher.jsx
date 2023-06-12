"use client";

import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  function handleThemeChange() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      <button aria-label="Toggle Dark Mode" type="button" className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10" onClick={handleThemeChange}>
        {theme === "dark" ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-yellow-500" />}
      </button>
    </>
  );
}
