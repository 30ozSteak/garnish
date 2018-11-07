export const isDarkMode = () => ({
  type: "TOGGLE_DARKMODE"
});

export const updateNews = news => ({
  type: "UPDATE_NEWS",
  news
});
