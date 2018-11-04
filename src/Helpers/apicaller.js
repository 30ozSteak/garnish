import { Key } from "../key";

export const fetchLatestTech = async () => {
  const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${Key}`;
  const response = await fetch(url);
  const data = await response.json();
  const techCrunchData = await techCrunch(data);
  return techCrunchData;
};

export const techCrunch = async data => {
  let techDetails = data.articles.map(article => {
    let articleObj = {
      title: article.title,
      author: article.arthur,
      description: article.description,
      url: article.url,
      coverImg: article.urlToImage,
      published: article.publishedAt
    };
    return articleObj;
  });
  return techDetails;
};

export default fetchLatestTech;
