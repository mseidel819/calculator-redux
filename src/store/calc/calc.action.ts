import { CALC_ACTION_TYPES } from "./calc.types";
import { createAction } from "../../reducer.utils";

//////
///////
const operators = ["+", "-", "/", "*"];
const deci = ["."];

const updateCalcFunction = (value: string, calc: string) => {
  try {
    if (operators.includes(value) && calc === "" && value !== "-")
      return (calc = "");

    if (deci.includes(value) && calc === "") {
      return 0 + value;
    }

    if (
      (operators.includes(value) &&
        operators.includes(calc.slice(-1)) &&
        value !== "-") ||
      (deci.includes(value) && deci.includes(calc.slice(-1)))
    ) {
      const valup = calc.slice(0, -1);

      return valup + value;
    }

    if (value === "-" && value === calc.slice(-1)) return calc;

    if (
      operators.includes(calc.slice(-1)) &&
      operators.includes(calc.slice(-2, -1)) &&
      calc.slice(-1) !== "-"
    ) {
      calc = calc.slice(0, -2).concat(calc.slice(-1));
    }
    ////////////////////////////////////////////////////////////////////////////////
    return calc + value;
  } catch (error) {
    return calc;
  }
};

export const updateCalc = (value: string, calc: string) => {
  const updated = updateCalcFunction(value, calc);

  return createAction(CALC_ACTION_TYPES.SET_CALC, updated);
};

////////////////////////////////////////////////////////////////////////////////////
export const clear = () => {
  return createAction(CALC_ACTION_TYPES.SET_CALC, "");
};
////////////////////////////////////////////////////////////////////////////////////

const backSpaceFunction = (calc: string) => {
  if (!calc) return (calc = "");
  return calc.slice(0, -1);
};

export const backSpace = (calc = "") => {
  let backed = backSpaceFunction(calc);
  return createAction(CALC_ACTION_TYPES.SET_CALC, backed);
};
////////////////////////////////////////////////////////////////////////////////////

const calculateFunction = (calc: string) => {
  return eval(calc).toString();
};

export const calculate = (calc: string) => {
  const calculated = calculateFunction(calc);
  return createAction(CALC_ACTION_TYPES.SET_CALC, calculated);
};
