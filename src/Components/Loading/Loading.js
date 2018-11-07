import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-box">
      <div className="squared" />
      <div className="loading-wrapper">
        <p>
          <span className="loader letter1">g</span>
          <span className="loader letter2">a</span>
          <span className="loader letter3">r</span>
          <span className="loader letter4">n</span>
          <span className="loader letter5">i</span>
          <span className="loader letter6">s</span>
          <span className="loader letter">h</span>
        </p>
      </div>
    </div>
  );
};

export default Loading;
