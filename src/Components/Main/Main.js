import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Fab from "../../Components/Fab/Fab";
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import Featured from "../../Components/Featured/Featured";
import NewsCard from "../../Components/NewsCard/NewsCard";
import { fetchNews } from "../../Helpers/fetcher";
import { updateNews } from "../../Actions/index";
import { connect } from "react-redux";

export class Main extends Component {
  handleNewsLink = async type => {
    const news = await fetchNews(type);
    this.props.updateNews(news.articles);
  };

  render() {
    return (
      <div>
        <Header />
        <Fab />
        <HomeHeader />
        <Featured handleNewsLink={this.handleNewsLink} />
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
