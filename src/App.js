import React, { Component } from "react";
import LandingLoading from "./Components/Brand/LandingLoading";
import { Route } from "react-router-dom";
import Logo from "./Components/Brand/Logo";
import Fab from "./Components/Fab/Fab";
import HomeHeader from "./Components/HomeHeader/HomeHeader";
import Article from "./Components/Article/Article";
import Header from "./Components/Header/Header";
import Loading from "./Components/Loading/Loading";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Logo /> */}
        <Header />
        {/* <LandingLoading /> */}
        <Loading />
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
