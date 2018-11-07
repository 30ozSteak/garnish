import React from "react";
import "./NewsCard.css";

const NewsCard = ({ news }) => {
  let newsArray = news || [];
  return newsArray.map(article => {
    return (
      <div className="cat-box">
        <h1 className="article-title">{article.title}</h1>
        <img src={article.urlToImage} alt="" />
        <a href={article.url}> read more..</a>
      </div>
    );
  });
};

export default NewsCard;
