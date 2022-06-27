import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCalc } from "../../store/calc/calc.selector";
import { StyledAnswerCard } from "./answer-bar.styles";

const AnswerBar = () => {
  const { calc } = useSelector(selectCalc);

  return (
    <StyledAnswerCard>
      <Typography variant="h2" color="primary" sx={{ paddingTop: "5px" }}>
        {calc ? calc : 0}
      </Typography>
    </StyledAnswerCard>
  );
};

export default AnswerBar;
