import React from "react";
import "./Featured.css";
import Channels from "../../Containers/Channels/Channels";

const Featured = () => (
  <div className="featured-container">
    <div className="featured-box">
      <Channels channelName="Tech" channelString="Tech" />
      <Channels channelName="Memes" channelString="Tech" />
      <Channels channelName="Web Dev" channelString="Tech" />
      <Channels channelName="Tech" channelString="Tech" />
      <Channels channelName="Tech" channelString="Tech" />
    </div>
  </div>
);

export default Featured;
