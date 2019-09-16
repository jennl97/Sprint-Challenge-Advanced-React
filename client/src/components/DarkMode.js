import React from 'react';

import { useDarkMode } from '../hooks/useDarkMode';

const DarkMode = () => {
    const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

    return(
        <div>
        <h1>Sprint Challenge: Advanced React - Women's World Cup</h1>
        <button
        onClick={toggleMode}
        className={darkMode ? 'toggle toggled' : 'toggle'}
        >Dark Mode</button>
        </div>
    )
}

export default DarkMode;