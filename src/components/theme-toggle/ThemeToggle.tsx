"use client";

import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function applyTheme(theme: Theme) {
    document.documentElement.setAttribute("data-theme", theme);
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const storedTheme = window.localStorage.getItem(STORAGE_KEY);

        if (storedTheme === "light" || storedTheme === "dark") {
            setTheme(storedTheme);
            applyTheme(storedTheme);
            return;
        }

        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme: Theme = prefersDark ? "dark" : "light";
        setTheme(initialTheme);
        applyTheme(initialTheme);
    }, []);

    const isDark = theme === "dark";

    const handleToggle = () => {
        const nextTheme: Theme = isDark ? "light" : "dark";
        setTheme(nextTheme);
        applyTheme(nextTheme);
        window.localStorage.setItem(STORAGE_KEY, nextTheme);
    };

    return (
        <button
            className="py-2 px-4 rounded-md border border-white/20 hover:border-white/35 transition-colors"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={handleToggle}
            type="button"
        >
            <span className="relative block h-4 w-4 overflow-hidden">
                <MdOutlineWbSunny
                    className={`absolute inset-0 h-4 w-4 transition-all duration-200 ${isDark ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                        }`}
                />
                <MdOutlineDarkMode
                    className={`absolute inset-0 h-4 w-4 transition-all duration-200 ${isDark ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                        }`}
                />
            </span>
        </button>
    )
}




