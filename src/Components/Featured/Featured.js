import React from "react";
import "./Featured.css";
import Channels from "../../Containers/Channels/Channels";

const Featured = () => (
  <div className="featured-container">
    <div className="featured-box">
      <Channels
        channelName="tech"
        channelString="wait are hooks replacing redux?"
      />
      <Channels
        channelName="memes"
        channelString="what the h*ck is a fortnite floss"
      />
      <Channels channelName="abramov" channelString="whatever dan says" />
      <Channels channelName="culture" channelString="learn some things" />
      <Channels channelName="top" channelString="the depressing stuff" />
    </div>
    <p className="scroll-text">scroll for more</p>
  </div>
);

export default Featured;
