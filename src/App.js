import React, { Component } from "react";
import LandingLoading from "./Components/Brand/LandingLoading";
import { Route, withRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Main from "./Components/Main/Main";

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: []
    };
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingLoading} />
        <Route exact path="/main" component={Main} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  isLoading: state.isLoading,
  darkMode: state.darkMode,
  initialLoading: state.initialLoading,
  fabActive: state.fabActive
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
