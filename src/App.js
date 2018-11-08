import React, { Component } from "react";
import LandingLoading from "./Components/LandingLoading/LandingLoading";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Main from "./Containers/Main/Main";
import Settings from "./Components/Settings/Settings";
import Faves from "./Components/Faves/Faves";

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
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/faves" component={Faves} />
      </div>
    );
  }
}

export const mapStateToProps = state => state;

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
