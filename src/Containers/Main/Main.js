import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNews } from "../../Helpers/fetcher";
import { updateNews } from "../../Actions/index";

import Fab from "../../Components/Fab/Fab";
import Featured from "../../Components/Featured/Featured";
import Header from "../../Containers/Header/Header";
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import NewsContainer from "../../Containers/NewsContainer/NewsContainer";

export class Main extends Component {
  handleNewsLink = async type => {
    const news = await fetchNews(type);
    this.props.updateNews(news.articles);
  };

  render() {
    return (
      <div className="busted-box">
        <Header />
        <Fab />
        <HomeHeader />
        <Featured handleNewsLink={this.handleNewsLink} />
        <div className="biggest-news-box">
          <NewsContainer />
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
