export const darkMode = (state = false, action) => {
  return action.type === "TOGGLE_DARKMODE" ? action.status : state;
};
