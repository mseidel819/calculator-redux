import { createTheme } from "@mui/material";

export const lightThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#e5e4e1",
      light: "#ffffff",
      dark: "#A79E91",
    },
    secondary: {
      main: "#378187",
      light: "#62b5bc",
      dark: "#1B6066",
    },
    background: {
      paper: "#D2CDCD",
      default: "#E6E6E6",
    },
    text: {
      secondary: "#36362C",
      primary: "#36362c",
      disabled: "rgba(254,254,254,0.8)",
    },
    info: {
      main: "#EEEEEE",
      light: "#EEEEEE",
    },
    error: {
      main: "#c85402",
      light: "#ff8a38",
      dark: "#873901",
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
