import React from "react";
import "./Wrong.css";
import { NavLink } from "react-router-dom";

const Wrong = () => {
  return (
    <div className="wrong-way-box">
      <h1> 404 </h1>
      <NavLink to="/main">
        <h1>Go Back</h1>
      </NavLink>
    </div>
  );
};

export default Wrong;
