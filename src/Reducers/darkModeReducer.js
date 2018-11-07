export const darkMode = (state = false, action) => {
  return action.type === "TOGGLE_DARK" ? action.status : state;
};
