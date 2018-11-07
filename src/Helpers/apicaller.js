import React from "react";
import { Key } from "../Key.js";
import Loading from "../Components/Loading/Loading";

export const fetchRequest = async url => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
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
