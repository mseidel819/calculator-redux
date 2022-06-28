import { styled, Card } from "@mui/material";

export const StyledAnswerCard = styled(Card)(({ theme }) => ({
  padding: "24px 24px",
  textAlign: "end",
  marginBottom: "24px",
  boxShadow: "none",
  backgroundColor: theme.palette.info.main,
}));
