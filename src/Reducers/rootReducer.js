import { combineReducers } from "redux";
import { darkMode } from "./darkModeReducer";
import { isLoading } from "./isLoadingReducer";

export const rootReducer = combineReducers({
  darkMode,
  isLoading
});
