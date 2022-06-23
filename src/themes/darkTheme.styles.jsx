import { createTheme } from "@mui/material";

export const darkThemeOptions = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#EAE3DC",
      light: "#FFFFFF",
      dark: "#B3A497",
    },
    secondary: {
      main: "#647198",
      light: "#A2B2E1",
      dark: "#414E73",
    },
    error: {
      main: "#D03F2F",
      light: "#F96B5B",
      dark: "#93261A",
    },
    background: {
      paper: "#242D44",
      default: "#3a4663",
    },
    text: {
      secondary: "#ffffff",
      primary: "#434a59",
      disabled: "rgba(254,254,254,0.8)",
    },
    info: {
      main: "#181f33",
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
      fontSize: 41,
      fontWeight: 700,
      lineHeight: 0.83,
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
      lineHeight: 1.32,
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
