import { combineReducers } from "redux";
import { darkMode } from "./darkModeReducer";
import { isLoading } from "./isLoadingReducer";
import { initialLoading } from "./initialLoadingReducer";
import { fabActive } from "./fab";

export const rootReducer = combineReducers({
  darkMode,
  isLoading,
  initialLoading,
  fabActive
});
