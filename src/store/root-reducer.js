import { combineReducers } from "redux";
import { calcReducer } from "./calc/calc.reducer";
import { themeReducer } from "./theme-setter/theme.reducer";

export const rootReducer = combineReducers({
  calc: calcReducer,
  themeSet: themeReducer,
});
