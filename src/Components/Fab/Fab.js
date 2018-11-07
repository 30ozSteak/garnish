import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Fab.css";

export default class Menu extends Component {
  constructor(props, favorites) {
    super(props);
    this.state = {
      buttonState: ""
    };
  }

  toggleActive = () => {
    this.state.buttonState === ""
      ? this.setState({ buttonState: "active" })
      : this.setState({ buttonState: "" });
  };

  render() {
    return (
      <div className="menu">
        <div className="menu-button" onClick={this.toggleActive} />
        <ul className={this.state.buttonState}>
          <span onClick={this.toggleActive} className="cross">
            <p>+</p>
          </span>
          <div>
            <NavLink to="/" />
            <NavLink to="/notes" />
            <NavLink to="/settings" />
          </div>
        </ul>
      </div>
    );
  }
}
