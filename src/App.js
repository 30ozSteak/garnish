import React, { Component } from "react";
import LandingLoading from "./Components/Brand/LandingLoading";
import { Route } from "react-router-dom";
import Logo from "./Components/Brand/Logo";
import Fab from "./Components/Fab/Fab";
import HomeHeader from "./Components/HomeHeader/HomeHeader";
import Header from "./Components/Header/Header";
import Featured from "./Components/Featured/Featured";
import Loading from "./Components/Loading/Loading";
import News from "./Components/News/News";
import NewsBox from "./Containers/NewsContainer/NewsBox";

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

export default App;
