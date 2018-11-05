import React, { Component } from "react";
import Logo from "../Brand/Logo";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="mucho-header-box">
        <Logo />
        <div />
        <div className="magnifying-glass" />
      </div>
    );
  }
}

export default Header;
