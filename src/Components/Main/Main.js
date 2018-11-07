import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Fab from "../../Components/Fab/Fab";
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import Featured from "../../Components/Featured/Featured";
import NewsCard from "../../Components/NewsCard/NewsCard";
import {
  fetchTechNews,
  fetchMemes,
  fetchAbramov,
  fetchCulture,
  fetchTopNews
} from "../../Helpers/fetcher";

class Main extends Component {
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
  };

  handleMemeLink = async () => {
    const meme = await fetchMemes();
    this.setState({
      news: meme.articles
    });
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
      <div>
        <Header />
        <Fab />
        <HomeHeader />
        <Featured
          handleTechLink={this.handleTechLink}
          handleMemeLink={this.handleMemeLink}
          handleAbramovLink={this.handleAbramovLink}
          handleCultureLink={this.handleCultureLink}
          handleTopNewsLink={this.handleTopNewsLink}
        />
        <div className="biggest-news-box">
          <NewsCard news={this.state.news} />
        </div>
      </div>
    );
  }
}
export default Main;
