import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

export const DarkToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDarkTheme = theme === "dark";

  const setThemeLocal = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    toggleTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      toggleTheme(savedTheme);
    } else if (prefersDark) {
      toggleTheme("dark");
    }
  }, []);

  return (
    <div>
      <button className="btn-hidden" onClick={() =>  { toggleTheme(theme === 'light' ? 'dark' : 'light'); setThemeLocal() }}>
      {isDarkTheme ?
            <FaSun className="btn-icon" color="yellow" size="28"/>:
           <FaMoon className="btn-icon" color="white" size="28"/>}
      </button>
    </div>
  );
};