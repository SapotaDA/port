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
  const [isBright, setIsBright] = useState(false); // Forced dark for Cyberpunk

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', '#050505');
    root.style.setProperty('--text-color', '#00fff2');
    root.style.setProperty('--text-secondary-color', '#9d00ff');
    root.style.setProperty('--border-color', '#ff00ff');
    root.style.setProperty('--card-bg', '#0c0c0e');
    root.style.setProperty('--nav-bg', 'rgba(5, 5, 5, 0.9)');
    root.style.setProperty('--accent-color', '#ff00ff');
  }, []);

  const toggleBrightness = () => {
    // Disabled for Cyberpunk theme consistency
  };

  const theme = {
    isBright,
    toggleBrightness,
    colors: {
      background: '#050505',
      text: '#00fff2',
      textSecondary: '#9d00ff',
      border: '#ff00ff',
      cardBg: '#0c0c0e',
      navBg: 'rgba(5, 5, 5, 0.9)',
      accent: '#ff00ff'
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
