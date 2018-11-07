import React from "react";
import "./News.css";

const News = ({ news, title, urlToImage, description, url }) => {
  let newsArray = news;

  const newsCard = newsArray.map(article => {
    return (
      <div className="news-box">
        <h1> Your news </h1>
        <div className="cat-box">
          <h1 className="article-title">{article.title}</h1>
          <img src={article.urlToImage} alt="" />
          <p className="article-desc">{article.description}</p>
          <a href={article.url}> read more..</a>
        </div>
      </div>
    );
  });
};

export default News;
