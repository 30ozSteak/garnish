import { combineReducers } from "redux";
import { darkMode } from "./darkModeReducer";
import { isLoading } from "./isLoadingReducer";
import { initialLoading } from "./initialLoadingReducer";

export const rootReducer = combineReducers({
  darkMode,
  isLoading,
  initialLoading
});
