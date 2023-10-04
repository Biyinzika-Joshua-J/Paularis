"use client"
import React, {createContext, useState, useEffect, useContext} from "react";

interface ThemeContextType {
    mode : string
    setMode : (mode:string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({children} : {children: React.ReactNode}){
    const [mode, setMode] = useState('light')

    function handleThemeChange(){
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
              window.matchMedia("(prefers-color-scheme:dark)").matches)
          ) {
            setMode("dark");
            document.documentElement.classList.add("dark");
            console.log('setting dark now------')
          } else {
            setMode("light");
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
            console.log('setting light now------')
          }
    }

    useEffect(() => {
        handleThemeChange();
        console.log('changing to ' + mode)
    }, [mode])

    return (
        <ThemeContext.Provider value={{
           mode, 
           setMode
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
  }
  