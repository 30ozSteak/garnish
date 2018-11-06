import React, { Component } from "react";
import Logo from "../Brand/Logo";
import "./Header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      darkMode: false
    };
  }

  toggleDarkMode = () => {
    this.setState({
      darkMode: !this.state.darkMode
    });
  };

  render() {
    const { darkMode } = this.state;
    return (
      <div className="mucho-header-box">
        <Logo />
        <div />
        <div
          onClick={this.toggleDarkMode}
          className={darkMode ? "light-mode" : "dark-mode"}
        />
      </div>
    );
  }
}

export default Header;
