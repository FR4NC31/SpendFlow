import React, { createContext, useContext, useState, ReactNode, JSX, Context } from 'react';
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme, ThemeMode } from '../constants/theme';

export type ThemeContextType = {
  mode: ThemeMode;
  colors: typeof lightTheme.colors;
  typography: typeof lightTheme.typography;
  spacing: typeof lightTheme.spacing;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
};

const ThemeContext: Context<ThemeContextType | undefined> = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [mode, setMode] = useState<ThemeMode>(systemColorScheme === 'dark' ? 'dark' : 'light');

  const theme = mode === 'dark' ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setTheme = (newMode: ThemeMode) => {
    setMode(newMode);
  };

  const value: ThemeContextType = {
    mode,
    colors: theme.colors,
    typography: theme.typography,
    spacing: theme.spacing,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};