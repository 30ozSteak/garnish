export const initialLoading = (state = false, action) => {
  switch (action.type) {
    case "INITIAL_LOADING":
      return !state;

    default:
      return state;
  }
};
