import React, { Component } from "react";
import LandingLoading from "./Components/Brand/LandingLoading";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Main from "./Components/Main/Main";

export class App extends Component {
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
  darkMode: state.darkMode
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
