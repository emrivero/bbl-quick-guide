import { useState } from "react";

// make a useColorTheme hook that returns the current color theme and a function to toggle it
export function useColorTheme() {
  const [colorTheme, setColorTheme] = useState<"light" | "dark">("dark");

  const toggleColorTheme = () => {
    setColorTheme(colorTheme === "dark" ? "light" : "dark");
  };

  return { colorTheme, toggleColorTheme };
}
