import { styled } from "@mui/material";

export const ThemeSlider = styled("div")(({ theme }) => ({
  width: "140px",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",

  ".slider-numbers": {
    display: "flex",
    // justifyContent: "space-around",
    justifyContent: "center",
    gap: "23%",
    // margin: "0 5px",
    width: "70px",
  },
  ".slider-box": {
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    borderRadius: "1000px",
    height: "26px",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  ".slider-button": {
    cursor: "pointer",
    borderRadius: "1000px",
    margin: "5px",
    height: "16px",
    width: "16px",
    backgroundColor: theme.palette.error.main,
  },
}));
