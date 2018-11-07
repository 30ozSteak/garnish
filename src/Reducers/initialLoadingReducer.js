export const initialLoading = (state = false, action) => {
  return action.type === "INITIAL_LOADING" ? action.status : state;
};
