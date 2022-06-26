import { Typography } from "@mui/material";
import { StyledAnswerCard } from "./answer-bar.styles";

const AnswerBar = () => {
  return (
    <StyledAnswerCard>
      <Typography variant="h2" color="primary" sx={{ paddingTop: "5px" }}>
        100,000
      </Typography>
    </StyledAnswerCard>
  );
};

export default AnswerBar;
