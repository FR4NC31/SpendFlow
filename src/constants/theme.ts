import { Platform } from 'react-native';
import { getFontFamily } from '../utils/fonts';

export type ThemeMode = "dark" | "light";

/* -----------------------------
   🎨 BASE COLOR PALETTES (Indigo Edition)
------------------------------*/

// 🌙 DARK THEME
const dark = {
  // Brand
  primary: "#6366F1",
  secondary: "#3B82F6",

  // Finance
  income: "#10B981",
  expense: "#F43F5E",
  warning: "#F59E0B",

  // Backgrounds
  background: "#020617",
  surface: "#0F172A",
  surfaceSecondary: "#1E293B",

  // Text
  text: "#F8FAFC",
  textForeground: "rgba(248,250,252,0.9)",
  textMutedForeground: "#94A3B8",

  // UI
  border: "rgba(255,255,255,0.04)",
  divider: "rgba(255,255,255,0.02)",
  disabled: "#1E293B",

  // Gradient
  gradientColors: ["#3B82F6", "#6366F1", "#8B5CF6"],
};

// ☀️ LIGHT THEME
const light = {
  // Brand
  primary: "#6366F1",
  secondary: "#3B82F6",

  // Finance
  income: "#10B981",
  expense: "#F43F5E",
  warning: "#F59E0B",

  // Backgrounds
  background: "#FFFFFF",
  surface: "#F8FAFC",
  surfaceSecondary: "#F1F5F9",

  // Text
  text: "#020617",
  textForeground: "rgba(2,6,23,0.9)",
  textMutedForeground: "#64748B",

  // UI
  border: "rgba(0,0,0,0.04)",
  divider: "rgba(0,0,0,0.02)",
  disabled: "#F1F5F9",

  // Gradient
  gradientColors: ["#4f46e5", "#8b5cf6", "#e879f9"],
};

/* -----------------------------
   🧱 SPACING SYSTEM
------------------------------*/

export const spacing = {
  xs: 6,
  small: 8,
  medium: 16,
  large: 24,
  xl: 32,
};

/* -----------------------------
   🔤 TYPOGRAPHY SYSTEM
------------------------------*/

export const typography = {
  superheading: 34,
  heading: 26,
  subheading: 18,
  body: 15,
  caption: 12,
  small: 11,
  extraSmall: 9,
};

/* -----------------------------
   🧱 CARD SYSTEM
------------------------------*/

const card = {
  borderRadius: 32, // Fancy rounded
  padding: 24,

  background: {
    dark: "#0F172A",
    light: "#F8FAFC",
  },

  secondaryBackground: {
    dark: "#1E293B",
    light: "#F1F5F9",
  },

  border: {
    dark: "rgba(255,255,255,0.04)",
    light: "rgba(0,0,0,0.04)",
  },
};

/* -----------------------------
   🧊 SKELETON SYSTEM
------------------------------*/

const skeleton = {
  base: {
    dark: "#1E293B",
    light: "#E2E8F0",
  },
  low: {
    dark: "#162030",
    light: "#F1F5F9",
  },
  high: {
    dark: "#334155",
    light: "#CBD5E1",
  },
};

/* -----------------------------
   📱 SHEET SYSTEM
------------------------------*/

const sheet = {
  iconSize: 22,
};

/* -----------------------------
   🎯 COLOR OPTIONS (CATEGORIES)
------------------------------*/

export const COLOR_OPTIONS = {
  indigo: "#6366F1",
  emerald: "#10B981",
  blue: "#3B82F6",
  rose: "#F43F5E",
  amber: "#F59E0B",
  violet: "#8B5CF6",
  pink: "#EC4899",
  orange: "#F97316",
  gray: "#6B7280",
};

/* -----------------------------
   🎨 THEME BUILDER
------------------------------*/

export const createTheme = (mode: ThemeMode) => {
  const isDark = mode === "dark";

  const colors = isDark ? dark : light;

  return {
    mode,
    colors,

    spacing,
    typography,

    card: {
      ...card,
      background: isDark ? card.background.dark : card.background.light,
      secondaryBackground: isDark
        ? card.secondaryBackground.dark
        : card.secondaryBackground.light,
      border: isDark ? card.border.dark : card.border.light,
    },

    skeleton: {
      base: isDark ? skeleton.base.dark : skeleton.base.light,
      low: isDark ? skeleton.low.dark : skeleton.low.light,
      high: isDark ? skeleton.high.dark : skeleton.high.light,
    },

    sheet: {
      ...sheet,
      background: isDark
        ? "rgba(15,23,42,0.95)"
        : "rgba(255,255,255,0.95)",
      textColor: colors.textForeground,
      iconColor: colors.textForeground,
    },
  };
};

/* -----------------------------
   DEFAULT EXPORT (DARK THEME)
------------------------------*/

export const darkTheme = createTheme("dark")
export const lightTheme = createTheme("light")