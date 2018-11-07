export const isLoading = status => ({
  type: "IS_LOADING",
  status
});

export const isDarkMode = () => ({
  type: "TOGGLE_DARKMODE"
});

export const addFav = articleId => ({
  type: "ADD_FAV",
  articleId
});
