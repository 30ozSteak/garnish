import React from "react";
import "../../Components/NewsCard/NewsCard.css";
import NewsCard from "../../Components/NewsCard/NewsCard";

const NewsContainer = news => {
  let newsArray = news;

  const newsCard = newsArray.map(article => {
    return (
      <div className="news-box">
        <h1> Your news </h1>
        <div className="cat-box" />
        <NewsCard />
      </div>
    );
  });
};

export default NewsContainer;
