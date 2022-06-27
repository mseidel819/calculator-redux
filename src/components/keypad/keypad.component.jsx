import { useDispatch, useSelector } from "react-redux";
import {
  updateCalc,
  clear,
  backSpace,
  calculate,
} from "../../store/calc/calc.action";

import { Card, Grid } from "@mui/material";
import {
  KeypadButton,
  KeypadButtonSecondary,
  KeypadButtonTertiary,
} from "./keypad.styles";
import { selectCalc } from "../../store/calc/calc.selector";

const Keypad = () => {
  const { calc } = useSelector(selectCalc);
  const dispatch = useDispatch();
  console.log(calc);

  return (
    <Card sx={{ padding: "32px 30px" }}>
      <Grid container spacing={{ sm: 3, xs: 2 }}>
        <Grid item xs={3}>
          <KeypadButton onClick={() => dispatch(updateCalc("7", calc))}>
            7
          </KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => dispatch(updateCalc("8", calc))}>
            8
          </KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => dispatch(updateCalc("9", calc))}>
            9
          </KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButtonSecondary onClick={backSpace}>DEL</KeypadButtonSecondary>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => dispatch(updateCalc("4", calc))}>
            4
          </KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => dispatch(updateCalc("5", calc))}>
            5
          </KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => dispatch(updateCalc("6", calc))}>
            6
          </KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => dispatch(updateCalc("+", calc))}>
            +
          </KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => dispatch(updateCalc("1", calc))}>
            1
          </KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => dispatch(updateCalc("2", calc))}>
            2
          </KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => dispatch(updateCalc("3", calc))}>
            3
          </KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => dispatch(updateCalc("-", calc))}>
            -
          </KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => dispatch(updateCalc(".", calc))}>
            .
          </KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton
            onClick={calc ? () => dispatch(updateCalc("0", calc)) : clear}
          >
            0
          </KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => dispatch(updateCalc("/", calc))}>
            /
          </KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => dispatch(updateCalc("*", calc))}>
            x
          </KeypadButton>
        </Grid>
        <Grid item xs={6}>
          <KeypadButtonSecondary onClick={() => dispatch(clear())}>
            reset
          </KeypadButtonSecondary>
        </Grid>
        <Grid item xs={6}>
          <KeypadButtonTertiary onClick={() => dispatch(calculate(calc))}>
            =
          </KeypadButtonTertiary>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Keypad;
