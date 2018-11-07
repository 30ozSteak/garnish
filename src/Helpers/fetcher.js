import { Key } from "../Key";
import { fetchRequest } from "./API.js";

export const fetchTechNews = async topic => {
  const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${Key}`;
  const response = await fetchRequest(url);
  const { articles } = response;

  return articles.map(article => {
    return {
      title: article.title,
      author: article.arthur,
      description: article.description,
      url: article.url,
      coverImg: article.urlToImage,
      published: article.publishedAt
    };
  });
};
