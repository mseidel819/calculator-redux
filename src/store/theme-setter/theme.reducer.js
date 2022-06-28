import { THEME_ACTION_TYPES } from "./theme.types";

const INITIAL_STATE = {
  themeSet: 0,
};

export const themeReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  //   console.log(payload);

  switch (type) {
    case THEME_ACTION_TYPES.SET_THEME:
      return { themeSet: payload };
    default:
      return state;
  }
};
