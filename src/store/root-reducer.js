import { combineReducers } from "redux";
import { calcReducer } from "./calc/calc.reducer";

export const rootReducer = combineReducers({
  calc: calcReducer,
});
