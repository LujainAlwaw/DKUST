


import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      darkMode: theme === "dark",
      toggleTheme: () =>
        setTheme((current) => (current === "light" ? "dark" : "light")),
      toggleDarkMode: () =>
        setTheme((current) => (current === "light" ? "dark" : "light")),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};