import React, { Component } from "react";
import LandingLoading from "./Components/Brand/LandingLoading";
import { Route } from "react-router-dom";
import Logo from "./Components/Brand/Logo";
import Fab from "./Components/Fab/Fab";
import HomeHeader from "./Components/HomeHeader/HomeHeader";
import Article from "./Components/Article/Article";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        {/* <LandingLoading /> */}
        <Fab />
        <HomeHeader />
        <Article />
        {/* <Route exact path="/" component={LandingLoading} /> */}

        {/* <Route exact path="/tech" component = {techCrunch} /> */}
      </div>
    );
  }
}

export default App;
