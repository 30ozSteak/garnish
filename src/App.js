import React, { Component } from "react";
import LandingLoading from "./Components/LandingLoading";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <LandingLoading /> */}
        <Route exact path="/" component={LandingLoading} />
        {/* <Route exact path="/tech" component = {techCrunch} /> */}
      </div>
    );
  }
}

export default App;
