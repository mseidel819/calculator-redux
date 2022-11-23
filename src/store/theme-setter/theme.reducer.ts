import { AnyAction } from "@reduxjs/toolkit";
import { THEME_ACTION_TYPES } from "./theme.types";

const INITIAL_STATE = {
  themeSet: 0,
};

export const themeReducer = (state = INITIAL_STATE, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case THEME_ACTION_TYPES.SET_THEME:
      return { themeSet: payload };
    default:
      return state;
  }
};
