import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isBright, setIsBright] = useState(() => {
    const saved = localStorage.getItem('theme-brightness');
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('theme-brightness', JSON.stringify(isBright));
  }, [isBright]);

  useEffect(() => {
    const root = document.documentElement;
    if (isBright) {
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--text-secondary-color', '#666666');
      root.style.setProperty('--border-color', '#e5e5e5');
      root.style.setProperty('--card-bg', '#ffffff');
      root.style.setProperty('--nav-bg', 'rgba(255, 255, 255, 0.8)');
      root.style.setProperty('--accent-color', '#000000');
    } else {
      root.style.setProperty('--bg-color', '#050816');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--text-secondary-color', '#aaa6c3');
      root.style.setProperty('--border-color', '#1d1836');
      root.style.setProperty('--card-bg', '#151030');
      root.style.setProperty('--nav-bg', 'rgba(5, 8, 22, 0.8)');
      root.style.setProperty('--accent-color', '#915eff');
    }
  }, [isBright]);

  const toggleBrightness = () => {
    setIsBright(prev => !prev);
  };

  const theme = {
    isBright,
    toggleBrightness,
    colors: {
      background: isBright ? '#ffffff' : '#050816',
      text: isBright ? '#000000' : '#ffffff',
      textSecondary: isBright ? '#666666' : '#aaa6c3',
      border: isBright ? '#e5e5e5' : '#1d1836',
      cardBg: isBright ? '#ffffff' : '#151030',
      navBg: isBright ? 'rgba(255, 255, 255, 0.8)' : 'rgba(5, 8, 22, 0.8)',
      accent: isBright ? '#000000' : '#915eff'
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
