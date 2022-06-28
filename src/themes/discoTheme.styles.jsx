import { createTheme } from "@mui/material";

export const discoThemeOptions = createTheme({
  palette: {
    type: "disco",
    primary: {
      main: "#331c4d",
      light: "#6c34ac",
      dark: "#881c9e",
    },
    secondary: {
      main: "#56077c",
      light: "#8631af",
      dark: "#be15f4",
    },
    background: {
      paper: "#1e0936",
      default: "#17062a",
    },
    text: {
      secondary: "#ffe53d",
      primary: "#ffe53d",
      disabled: "rgba(254,254,254,0.8)",
    },
    info: {
      main: "#1E0936",
      light: "#1A2327",
    },
    error: {
      main: "#00ded0",
      light: "#93fff8",
      dark: "#6cf9f1",
    },
  },
  typography: {
    fontFamily: '"League Spartan" , sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: 32,
      lineHeight: 0.92,
    },
    h2: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: "36.8px",
    },
    h3: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: 0.99,
    },
    h4: {
      fontSize: 56,
      fontWeight: 700,
      lineHeight: 1.01,
    },
    body1: {
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1.32,
    },
    button: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: "36.8px",
    },
    body2: {
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1.5,
    },
    fontWeightLight: 700,
    fontSize: 40,
  },
  spacing: 8,
  shape: {
    borderRadius: 10,
  },
});
