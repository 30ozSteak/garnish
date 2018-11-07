import React from "react";
import "./News.css";

const News = ({ title, urlToImage, description, url }) => {
  return (
    <div className="news-box">
      <h1> Your news </h1>
      <div className="cat-box">
        <h1 className="article-title">{title}</h1>
        <img src={urlToImage} alt="" />
        <p className="article-desc">{description}</p>
        <a href={url}> read more..</a>
      </div>
    </div>
  );
};

export default News;
