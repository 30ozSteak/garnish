import React, { Component } from "react";
import LandingLoading from "./Components/Brand/LandingLoading";
import { Route, withRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Fab from "./Components/Fab/Fab";
import HomeHeader from "./Components/HomeHeader/HomeHeader";
import Header from "./Components/Header/Header";
import Featured from "./Components/Featured/Featured";
import Loading from "./Components/Loading/Loading";
import News from "./Components/News/News";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <LandingLoading /> */}
        {/* <Loading /> */}
        <Fab />
        <HomeHeader />
        <Featured />
        <News />
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

// export const mapDispatchToProps = dispatch => ({

// });
export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
