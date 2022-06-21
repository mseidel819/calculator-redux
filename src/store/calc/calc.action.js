import { CALC_ACTION_TYPES } from "./calc.types";
import { createAction } from "../../reducer.utils";

//////
//not finished. or started really
///////
const updateCalc = (value) => {
  try {
    if (operators.includes(value) && calc === "" && value !== "-") return;

    if (deci.includes(value) && calc === "") {
      setCalc(0 + value);
      return;
    }

    if (
      (operators.includes(value) &&
        operators.includes(calc.slice(-1)) &&
        value !== "-") ||
      (deci.includes(value) && deci.includes(calc.slice(-1)))
    ) {
      const valup = calc.slice(0, -1);

      setCalc(valup + value);
      return;
    }

    if (value === "-" && value === calc.slice(-1)) return;

    // if (calc[-1] == calc[-2]) {
    //   setCalc(calc.slice(0, -2));
    // }

    ////////////////////////////////////////////////////////////////////////////////
    setCalc(calc + value);
    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  } catch (error) {
    setCalc(calc);
    return;
  }
};

if (
  operators.includes(calc.slice(-1)) &&
  operators.includes(calc.slice(-2, -1)) &&
  calc.slice(-1) !== "-"
) {
  setCalc(calc.slice(0, -2).concat(calc.slice(-1)));
}

////////////////////////////////////////////////////////////////////////////////////
const clear = () => {
  setCalc("");
};
////////////////////////////////////////////////////////////////////////////////////

const backSpace = () => {
  if (calc === "") return;
  setCalc(calc.slice(0, -1));
};
////////////////////////////////////////////////////////////////////////////////////

const calculate = () => {
  setCalc(eval(calc).toString());
};
