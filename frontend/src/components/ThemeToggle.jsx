import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (saved === "dark" || (!saved && prefersDark)) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);

    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="h-10 w-10 flex items-center justify-center rounded-full bg-card/70 text-foreground shadow-soft backdrop-blur transition hover:bg-accent/10 hover:text-accent"
    >
<FontAwesomeIcon
  icon={dark ? faSun : faMoon}
  className={`h-4 w-4 ${
    dark ? "text-yellow-400" : "text-gray-500"
  }`}
/>    </button>
  );
}