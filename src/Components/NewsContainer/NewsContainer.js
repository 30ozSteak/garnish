import React, { Component } from "react";
import "./NewsContainer.css";
import { fetchNews } from "../../Helpers/fetcher";
import NewsCard from "../../Components/NewsCard/NewsCard";
import { connect } from "react-redux";
import { updateNews } from "../../Actions/index";

export class NewsContainer extends Component {
  render() {
    return (
      <div className="box-box">
        <NewsCard news={this.props.news} />
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
)(NewsContainer);
