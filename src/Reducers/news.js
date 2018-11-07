export const news = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_NEWS":
      return action.news;

    default:
      return state;
  }
};
