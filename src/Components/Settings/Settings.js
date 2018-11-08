import React from "react";
import "./Settings.css";
import { NavLink } from "react-router-dom";

const Settings = () => {
  return (
    <div className="settings-box-settings">
      <h1> This feature is in progress, thanks! </h1>
      <NavLink to="/main">
        <p> Go back </p>
      </NavLink>
    </div>
  );
};

export default Settings;
