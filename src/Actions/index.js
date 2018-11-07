export const isLoading = status => ({
  type: "IS_LOADING",
  status
});

export const initialLoading = () => ({
  type: "INITIAL_LOADING"
});

export const isDarkMode = () => ({
  type: "TOGGLE_DARKMODE"
});

export const addFav = articleId => ({
  type: "ADD_FAV",
  articleId
});

export const removeFav = articleId => ({
  type: "REMOVE_FAV",
  articleId
});
