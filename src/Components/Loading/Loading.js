import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-box">
      <div className="squared" />
      <div className="loading-wrapper">
        <p>
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </p>
      </div>
    </div>
  );
};

export default Loading;
