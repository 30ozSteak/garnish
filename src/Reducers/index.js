import { combineReducers } from "redux";
import { darkMode } from "./darkModeReducer";
import { initialLoading } from "./initialLoadingReducer";
import { news } from "./news";

export const rootReducer = combineReducers({
  darkMode,
  initialLoading,
  news
});
