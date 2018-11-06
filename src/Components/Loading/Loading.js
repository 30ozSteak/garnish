import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-box">
      <div className="squared" />
      <div className="loading-wrapper">
        <p>
          <span className="loader letter1">L</span>
          <span className="loader letter2">o</span>
          <span className="loader letter3">a</span>
          <span className="loader letter4">d</span>
          <span className="loader letter5">i</span>
          <span className="loader letter6">n</span>
          <span className="loader letter">g</span>
        </p>
      </div>
    </div>
  );
};

export default Loading;
