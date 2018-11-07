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
import { updateNews } from "../../Actions/index";
import { connect } from "react-redux";

class Main extends Component {
  handleTechLink = async () => {
    const tech = await fetchTechNews();
    this.props.updateNews(tech.articles);
  };

  handleMemeLink = async () => {
    const meme = await fetchMemes();
    this.props.updateNews(meme.articles);
  };

  handleAbramovLink = async () => {
    const abramov = await fetchAbramov();
    this.props.updateNews(abramov.articles);
  };

  handleCultureLink = async () => {
    const culture = await fetchCulture();
    this.props.updateNews(culture.articles);
  };

  handleTopNewsLink = async () => {
    const top = await fetchTopNews();
    this.props.updateNews(top.articles);
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
          <NewsCard news={this.props.news} />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = ({ news }) => ({
  news
});

export const mapDispatchToProps = dispatch => ({
  updateNews: news => dispatch(updateNews(news))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
