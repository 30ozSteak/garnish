import React, { Component } from "react";
import LandingLoading from "./Components/Brand/LandingLoading";
import { Route, withRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Fab from "./Components/Fab/Fab";
import HomeHeader from "./Components/HomeHeader/HomeHeader";
import Header from "./Components/Header/Header";
import Featured from "./Components/Featured/Featured";
import Loading from "./Components/Loading/Loading";
import NewsCard from "./Components/NewsCard/NewsCard";
import {
  fetchTechNews,
  fetchMemes,
  fetchAbramov,
  fetchCulture,
  fetchTopNews
} from "./Helpers/fetcher";

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: []
    };
  }

  handleTechLink = async () => {
    const tech = await fetchTechNews();
    this.setState({
      news: tech.articles
    });
    console.log(tech);
  };

  handleMemeLink = async () => {
    const meme = await fetchMemes();
    this.setState({
      news: meme.articles
    });
    console.log(meme);
  };

  handleAbramovLink = async () => {
    const abramov = await fetchAbramov();
    this.setState({
      news: abramov.articles
    });
  };

  handleCultureLink = async () => {
    const culture = await fetchCulture();
    this.setState({
      news: culture.articles
    });
  };

  handleTopNewsLink = async () => {
    const top = await fetchTopNews();
    this.setState({
      news: top.articles
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        {/* <LandingLoading /> */}
        {/* <Loading /> */}
        <Fab />
        <HomeHeader />
        <Featured
          handleTechLink={this.handleTechLink}
          handleMemeLink={this.handleMemeLink}
        />
        <NewsCard news={this.state.news} />
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
