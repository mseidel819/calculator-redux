import { CALC_ACTION_TYPES } from "./calc.types";

const INITIAL_STATE = {
  calc: "",
};

export const calcReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  console.log(payload);

  switch (type) {
    case CALC_ACTION_TYPES.SET_CALC:
      return { calc: payload };
    default:
      return state;
  }
};
