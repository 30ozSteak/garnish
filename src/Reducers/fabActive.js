export const fabActive = (state = false, action) => {
  return action.type === "FAB_ACTIVE" ? action.status : state;
};
