import { Card, Grid } from "@mui/material";
import {
  KeypadButton,
  KeypadButtonSecondary,
  KeypadButtonTertiary,
} from "./keypad.styles";

const Keypad = () => {
  return (
    <Card sx={{ padding: "32px 30px" }}>
      <Grid container spacing={{ sm: 3, xs: 2 }}>
        <Grid item xs={3}>
          <KeypadButton onClick={() => updateCalc("7")}>7</KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => updateCalc("8")}>8</KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => updateCalc("9")}>9</KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButtonSecondary onClick={backSpace}>DEL</KeypadButtonSecondary>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => updateCalc("4")}>4</KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => updateCalc("5")}>5</KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => updateCalc("6")}>6</KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => updateCalc("+")}>+</KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => updateCalc("1")}>1</KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => updateCalc("2")}>2</KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => updateCalc("3")}>3</KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => updateCalc("-")}>-</KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => updateCalc(".")}>.</KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={calc ? () => updateCalc("0") : clear}>
            0
          </KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => updateCalc("/")}>/</KeypadButton>
        </Grid>
        <Grid item xs={3}>
          <KeypadButton onClick={() => updateCalc("*")}>x</KeypadButton>
        </Grid>
        <Grid item xs={6}>
          <KeypadButtonSecondary>reset</KeypadButtonSecondary>
        </Grid>
        <Grid item xs={6}>
          <KeypadButtonTertiary onClick={calculate}>=</KeypadButtonTertiary>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Keypad;
