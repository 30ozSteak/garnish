import ReactDOM from "react-dom";
import React from "react";
import { connect } from "react-redux";
import News from "../../Components/News/News";
import Loading from "../../Components/Loading/Loading";

const NewsBox = ({ channels, loading }) => {};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  null
)(NewsBox);
