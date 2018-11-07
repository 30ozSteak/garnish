import React from "react";
import { connect } from "react-redux";
import "../../Components/Featured/Featured";

export const Channels = ({ channelName, channelString, handleTechLink }) => (
  <div onClick={handleTechLink} className="channel-box">
    <div className="channel-button">
      <p>{channelName}</p>
      <p className="channel-desc">{channelString}</p>
    </div>
  </div>
);

export default Channels;
