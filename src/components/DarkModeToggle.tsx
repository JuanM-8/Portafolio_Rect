import { useState, useEffect } from 'react';
import '../Styles/DarkMode.css';
import '../Styles/DarkModeToggle.css';

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  // Apply theme when component mounts and when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme} aria-label="Toggle dark mode">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </div>
  );
};

export default DarkModeToggle;