import { styled } from "@mui/material";

export const ThemeSlider = styled("div")(({ theme }) => ({
  width: "140px",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",

  ".slider-numbers": {
    display: "flex",
    justifyContent: "center",
    gap: "23%",
    width: "75px",
  },
  ".slider-box": {
    display: "flex",
    alignItems: "center",
    justifyContent:
      theme.palette.type === "dark"
        ? "start"
        : theme.palette.type === "light"
        ? "center"
        : "end",
    borderRadius: "1000px",
    height: "26px",
    width: "75px",
    backgroundColor: theme.palette.background.paper,
  },
  ".slider-button": {
    borderRadius: "1000px",
    margin: "5px",
    height: "16px",
    width: "16px",
    color: theme.palette.error.main,
  },

  ".toggle-icon": {
    borderRadius: "1000px",
    height: "18px",
    width: "18px",
    "&:hover": {
      color: theme.palette.error.light,
    },
  },
}));
