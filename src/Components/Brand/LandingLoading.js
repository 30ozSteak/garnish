import React from "react";
import "../Brand/LandingLoading";
import "../Brand/LandingLoading.css";
import "../../Styles/colors.css";
import { NavLink } from "react-router-dom";

const LandingLoading = () => {
  return (
    <div className="bigger-slot-box">
      <div className="slot-box">
        <h1 className="slot-machine">
          <span className="slot-value slot-value-initial slot-value-slide-out">
            news
          </span>
          <span className="slot-value slot-cycle">technology</span>
          <span className="slot-value slot-cycle">diversity</span>
          <span className="slot-value slot-cycle">meme</span>
          <span className="slot-value slot-cycle">culture</span>
          <span className="slot-value slot-cycle slot-value-final">garn</span>
          <span className="ish">ish</span>
        </h1>
        <p className="logo-subtitle">a trim of news for your day</p>
      </div>
      <NavLink to="/main">continue</NavLink>
    </div>
  );
};

export default LandingLoading;
