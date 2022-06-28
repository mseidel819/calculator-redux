import { styled } from "@mui/material";

export const StyledContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledMiniContainer = styled("div")(({ theme }) => ({
  width: "540px",
  padding: "75px",
  "@media (max-width: 570px)": {
    width: "330px",
    padding: "45px 5px",
  },
}));

export const StyledFooter = styled("footer")(({ theme }) => ({
  color: theme.palette.text.secondary,

  a: {
    color: theme.palette.text.secondary,
  },
}));
