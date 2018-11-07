import React from "react";
import { connect } from "react-redux";
import { fetchLatestTech } from "../../Helpers/apicaller";
import { Route, NavLink, withRouter, Switch, Redirect } from "react-router-dom";

const Button = ({ getPosts, channel }) => (
  <button
    onClick={() => {
      getPosts(channel);
    }}
    className="button-for-news"
  >
    Show Me
  </button>
);

const mapStateToProps = state => ({ channel: state.channel });

const mapDispatchToProps = { getPosts: fetchLatestTech };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Button)
);
