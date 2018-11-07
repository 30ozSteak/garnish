import { combineReducers } from "redux";
import { darkMode } from "./darkModeReducer";
import { initialLoading } from "./initialLoadingReducer";
import { fabActive } from "./fabActive";

export const rootReducer = combineReducers({
  darkMode,
  initialLoading,
  fabActive
});
