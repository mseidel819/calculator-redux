import { THEME_ACTION_TYPES } from "./theme.types";
import { createAction } from "../../reducer.utils";

const themeToggler = (themeSet) => {
  if (themeSet === 2) return 0;
  return themeSet + 1;
};

export const toggleTheme = (themeSet) => {
  const toggled = themeToggler(themeSet);
  return createAction(THEME_ACTION_TYPES.SET_THEME, toggled);
};
