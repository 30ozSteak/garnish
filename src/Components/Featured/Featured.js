import React from "react";
import "./Featured.css";
import Channels from "../../Containers/Channels/Channels";

const Featured = () => (
  <div className="featured-box">
    <Channels channelName="Tech" channelString="Tech" />
  </div>
);

export default Featured;
