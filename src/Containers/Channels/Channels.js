import React from "react";
import { connect } from "react-redux";
import { getChannel, activateChannel } from "../../Actions/index";
import { fetchLatestTech } from "../../Helpers/apicaller";
import "../../Components/Featured/Featured";

export const Channel = ({ channelName, channelString, onClick, active }) => (
  <div onClick={onClick} className="channel-box">
    <div className="channel-button">
      <p>{channelName}</p>
      <p className="channel-desc">{channelString}</p>
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
