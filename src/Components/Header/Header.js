import React, { Component } from "react";
import Logo from "../Brand/Logo";
import "./Header.css";
import { isDarkMode } from "../../Actions/";
import { connect } from "react-redux";

const Header = (props) => {

  props.isDarkMode ? <Box {...props} /> :

  return (
    <div className="mucho-header-box">
      <Logo />
      <div />
      <div
        onClick={props.toggleDarkMode}
        props.isDarkmode={darkMode ? "light-mode" : "dark-mode"}

      />
    </div>
  );
};

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
