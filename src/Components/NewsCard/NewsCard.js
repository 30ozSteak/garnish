import React from "react";
import "./NewsCard.css";

const NewsCard = ({ news, title, urlToImage, description, url }) => {
  let newsArray = news;
  const newsCard = newsArray.map(article => {
    return (
      <div className="cat-box">
        <h1 className="article-title">{article.title}</h1>
        <img src={article.urlToImage} alt="" />
        <p className="article-desc">{article.description}</p>
        <a href={article.url}> read more..</a>
      </div>
    );
  });
};

export default NewsCard;
