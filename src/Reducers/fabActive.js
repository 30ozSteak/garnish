export const fabActive = (state = false, action) => {
  switch (action.type) {
    case "FAB_ACTIVE":
      return !state;

    default:
      return state;
  }
};
