import React from "react";
import { connect } from "react-redux";
import { getChannel, activeChannel } from "../actions";

const Channel = ({ channelName, channelString, onClick, active }) => (
  <div onClick={onClick} className="featured -box">
    <div className="featured-button">
      <p>{channelName}</p>
    </div>
  </div>
);

export const mapStateToProps = state => ({
  active: state.channel
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(getChannel(ownProps.channelString));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);
