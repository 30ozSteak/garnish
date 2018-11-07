import ReactDOM from "react-dom";
import React from "react";
import { connect } from "react-redux";
import News from "../../Components/News/News";
import Loading from "../../Components/Loading/Loading";

const NewsBox = ({ channels, loading }) => {
  let topNews = "";
  if (channels) {
    topNews = channels.map((article, index) => (
      <div key={`${index}`} className="row">
        <News article={channels[index]} />
      </div>
    ));
  }
  if (loading) {
    topNews = <Loading />;
  }
  return <div>{topNews}</div>;
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  null
)(NewsBox);
