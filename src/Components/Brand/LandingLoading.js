import React from "react";
import "../Brand/LandingLoading";
import "../Brand/LandingLoading.css";
import "../../Styles/colors.css";

const LandingLoading = () => {
  return (
    <div className="bigger-slot-box">
      <div className="slot-box">
        <h1 class="slot-machine">
          <span class="slot-value slot-value-initial slot-value-slide-out">
            news
          </span>
          <span class="slot-value slot-cycle">technology</span>
          <span class="slot-value slot-cycle">diversity</span>
          <span class="slot-value slot-cycle">meme</span>
          <span class="slot-value slot-cycle">culture</span>
          <span class="slot-value slot-cycle slot-value-final">garn</span>
          <span className="ish">ish</span>
        </h1>
        <p className="logo-subtitle">a trim of news for your day</p>
      </div>
    </div>
  );
};

export default LandingLoading;
