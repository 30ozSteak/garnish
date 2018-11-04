import React, { Component } from "react";
import PropTypes from "prop-types";
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
          <div className="cross">
            <div className="cross-horizontal" />
            <div className="cross-vertical" />
          </div>
          <div>
            <NavLink to="/home" onClick={this.props.handlePeopleLink} />
            <NavLink to="/notes" onClick={this.props.handleNotesLink} />
            <NavLink to="/settings" onClick={this.props.handleSettingsLink} />
          </div>
        </ul>
      </div>
    );
  }
}
