import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Fab.css";

export default class Menu extends Component {
  constructor(props, favorites) {
    super(props);
    this.state = {
      buttonState: "",
      favorites: []
    };
  }

  toggleActive = () => {
    this.state.buttonState === ""
      ? this.setState({ buttonState: "active" })
      : this.setState({ buttonState: "" });
  };

  render() {
    return (
      <div className="fab-literal">
        <ul className={this.state.buttonState}>
          <div>
            <li />
            <li />
            <li />
          </div>
        </ul>
      </div>
    );
  }
}
