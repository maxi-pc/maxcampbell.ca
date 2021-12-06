import React from 'react';
import { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

export const DarkToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkTheme = theme === "dark";
  return (
    <div>
      <button className="btn-hidden" onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}>
      {isDarkTheme ?
            <FaSun className="btn-icon" color="yellow" size="28"/>:
           <FaMoon className="btn-icon" color="white" size="28"/>}
      </button>
    </div>
  );
};