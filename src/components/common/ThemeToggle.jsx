import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const ThemeToggle = () => {
  const { isBright, toggleBrightness, colors } = useTheme();

  return (
    <motion.button
      onClick={toggleBrightness}
      className="fixed top-24 right-6 z-50 p-3 rounded-full backdrop-blur-md border transition-all duration-300"
      style={{
        backgroundColor: colors.cardBg,
        borderColor: colors.border,
        color: colors.text,
        boxShadow: colors.text === '#000000' ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '0 4px 6px rgba(255, 255, 255, 0.1)'
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={isBright ? "Switch to dark mode" : "Switch to light mode"}
    >
      <motion.div
        key={isBright ? 'sun' : 'moon'}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isBright ? (
          <Moon size={20} />
        ) : (
          <Sun size={20} />
        )}
      </motion.div>
    </motion.button>
  );
};
