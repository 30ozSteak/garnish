import React from "react";
import { Key } from "../Key.js";
import Loading from "../Components/Loading/Loading";

export const fetchLatestTech = async category => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${Key}`
    );
    const techNews = await response.json();
    return techNews;
  } catch {
    return <Loading />;
  }
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
