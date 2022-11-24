import { styled, Button } from "@mui/material";

export const KeypadButton = styled(Button)(({ theme }) => ({
  width: "100%",
  padding: "15px 40px",
  textTransform: "none",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  boxShadow: `inset 0px -4px 0px ${theme.palette.primary.dark}`,

  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },

  "@media (max-width: 570px)": {
    padding: "19px 21px",
    fontSize: "32px",
  },
}));

export const KeypadButtonSecondary = styled(Button)(({ theme }) => ({
  width: "100%",
  padding: "15px 40px",

  fontSize: "28px",
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
  boxShadow: `inset 0px -4px 0px ${theme.palette.secondary.dark}`,

  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },

  "@media (max-width: 570px)": {
    padding: "19px 21px",
    fontSize: "20px",
  },
}));

export const KeypadButtonTertiary = styled(Button)(({ theme }) => ({
  width: "100%",
  padding: "15px 40px",
  fontSize: "28px",
  backgroundColor: theme.palette.error.main,
  color: theme.palette.info.light,
  boxShadow: `inset 0px -4px 0px ${theme.palette.error.dark}`,

  "&:hover": {
    backgroundColor: theme.palette.error.light,
  },

  "@media (max-width: 570px)": {
    padding: "19px 21px",
    fontSize: "20px",
  },
}));
