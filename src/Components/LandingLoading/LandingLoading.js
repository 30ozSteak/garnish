import React from "react";
import { NavLink } from "react-router-dom";

import "../LandingLoading/LandingLoading";
import "../LandingLoading/LandingLoading.css";
import "../../Styles/colors.css";

const LandingLoading = () => {
  return (
    <div className="bigger-slot-box">
      <div className="slot-box">
        <h1 className="slot-machine">
          <span className="slot in out">news</span>
          <span className="slot cycle">tech</span>
          <span className="slot cycle">diversity</span>
          <span className="slot cycle">meme</span>
          <span className="slot cycle">culture</span>
          <span className="slot cycle slot-final">garn</span>
          <span className="ish">ish</span>
        </h1>
        <p className="logo-subtitle">a trim of news for your day</p>
      </div>
      <NavLink to="/main">continue</NavLink>
    </div>
  );
};

export default LandingLoading;
