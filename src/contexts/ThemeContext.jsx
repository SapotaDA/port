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
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('theme-brightness', JSON.stringify(isBright));
  }, [isBright]);

  useEffect(() => {
    // Apply theme to document element only once
    const root = document.documentElement;
    if (isBright) {
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--text-secondary-color', '#666666');
      root.style.setProperty('--border-color', '#e5e5e5');
      root.style.setProperty('--card-bg', '#ffffff');
      root.style.setProperty('--nav-bg', 'rgba(255, 255, 255, 0.8)');
      root.style.setProperty('--accent-color', '#000000');
      root.style.setProperty('--accent-secondary', '#666666');
    } else {
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--text-secondary-color', '#999999');
      root.style.setProperty('--border-color', '#333333');
      root.style.setProperty('--card-bg', '#1a1a1a');
      root.style.setProperty('--nav-bg', 'rgba(0, 0, 0, 0.8)');
      root.style.setProperty('--accent-color', '#ffffff');
      root.style.setProperty('--accent-secondary', '#cccccc');
    }
  }, [isBright]);

  const toggleBrightness = () => {
    setIsBright(prev => !prev);
  };

  const theme = {
    isBright,
    toggleBrightness,
    colors: {
      background: isBright ? '#ffffff' : '#000000',
      text: isBright ? '#000000' : '#ffffff',
      textSecondary: isBright ? '#666666' : '#999999',
      border: isBright ? '#e5e5e5' : '#333333',
      cardBg: isBright ? '#ffffff' : '#1a1a1a',
      navBg: isBright ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
      accent: isBright ? '#000000' : '#ffffff',
      accentSecondary: isBright ? '#666666' : '#cccccc'
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
