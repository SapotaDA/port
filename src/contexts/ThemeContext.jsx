import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

const COLORS = {
  indigo:  { rgb: '99, 102, 241',  hex: '#6366f1', label: 'Indigo' },
  cyan:    { rgb: '34, 211, 238',  hex: '#22d3ee', label: 'Cyan' },
  emerald: { rgb: '16, 185, 129',  hex: '#10b981', label: 'Emerald' },
  rose:    { rgb: '244, 63, 94',   hex: '#f43f5e', label: 'Rose' },
  amber:   { rgb: '245, 158, 11',  hex: '#f59e0b', label: 'Amber' },
  violet:  { rgb: '139, 92, 246',  hex: '#8b5cf6', label: 'Violet' },
};

export const ThemeProvider = ({ children }) => {
  const [accentKey, setAccentKey] = useState(() => localStorage.getItem('accent') || 'indigo');

  useEffect(() => {
    const c = COLORS[accentKey] || COLORS.indigo;
    document.documentElement.style.setProperty('--accent', c.rgb);
    localStorage.setItem('accent', accentKey);
  }, [accentKey]);

  return (
    <ThemeContext.Provider value={{ accentKey, setAccentKey, colors: COLORS, current: COLORS[accentKey] || COLORS.indigo }}>
      {children}
    </ThemeContext.Provider>
  );
};
