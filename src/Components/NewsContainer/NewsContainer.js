import React from "react";
import "./NewsContainer.css";
import NewsCard from "../../Components/NewsCard/NewsCard";

const NewsContainer = () => {
  return (
    <div>
      <NewsCard news={this.props.news} />
    </div>
  );
};

export default NewsContainer;
