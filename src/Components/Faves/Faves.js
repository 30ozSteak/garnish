import React from "react";
import { NavLink } from "react-router-dom";

import "./Faves.css";

const Faves = () => {
  return (
    <div className="faves-box">
      <NavLink to="/main">
        <h1> This one too </h1>
      </NavLink>
    </div>
  );
};

export default Faves;
