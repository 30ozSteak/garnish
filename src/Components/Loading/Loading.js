import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-box">
      <div className="squared" />
      <div className="loading-wrapper">
        <p>Loading</p>
        <p>Loading</p>
        <p>Loading</p>
      </div>
    </div>
  );
};

export default Loading;
