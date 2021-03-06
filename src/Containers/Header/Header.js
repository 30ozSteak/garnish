import React, { Component } from "react";
import { isDarkMode } from "../../Actions/";
import { connect } from "react-redux";
import "./Header.css";

import Logo from "../../Components/Logo/Logo";

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

  render(props) {
    const { darkMode } = this.state;
    return (
      <div className="mucho-header-box">
        <Logo />
        <div />
        <div
          onClick={this.props.toggleDarkMode}
          className={darkMode ? "light-mode" : "dark-mode"}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  isDarkMode: state.isDarkMode
});

export const mapDispatchToProps = dispatch => ({
  toggleDarkMode: () => dispatch(isDarkMode())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
