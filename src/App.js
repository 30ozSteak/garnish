import React, { Component } from "react";
import LandingLoading from "./Components/Brand/LandingLoading";
import { Route } from "react-router-dom";
import Logo from "./Components/Brand/Logo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <LandingLoading />
        {/* <Route exact path="/" component={LandingLoading} /> */}

        {/* <Route exact path="/tech" component = {techCrunch} /> */}
      </div>
    );
  }
}

export default App;
