import { createContext, useEffect, useState } from "react";
import { flushSync } from "react-dom";

export const ThemeContext = createContext();

export default function ThemeGiver({ children }) {
  const [theme, setTheme] = useState(()=>{
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark";
  });

  const toggleTheme = async (event) => {
    // If the browser does not support View Transitions, simply change the state
    if (!document.startViewTransition) {
      setTheme((prev) => (prev === "dark" ? "light" : "dark"));
      return;
    }
    
    
    const x = event?.clientX ?? window.innerWidth / 2;
    const y = event?.clientY ?? window.innerHeight / 2;
    
    const right = window.innerWidth - x;
    const bottom = window.innerHeight - y;
    const maxRadius = Math.hypot(Math.max(x, right), Math.max(y, bottom));
    
    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
      });
    }).ready;
    
    
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };
  
  
  useEffect(() => {
    const root = window.document.documentElement;
    localStorage.setItem("theme", theme);
    
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }

    
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

  }, [theme]);

  // Valid React component return statement!
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
