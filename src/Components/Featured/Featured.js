import React from "react";
import "./Featured.css";
import Channels from "../../Containers/Channels/Channels";

const Featured = ({ handleTechLink }) => (
  <div className="featured-container">
    <div className="featured-box">
      <Channels
        channelName="tech"
        channelString="new in tech, today"
        handleTechLink={handleTechLink}
      />
      <Channels
        channelName="memes"
        channelString="fortnite floss, kids falling over, the works"
      />
      <Channels channelName="abramov" channelString="whatever dan says" />
      <Channels channelName="culture" channelString="learn some things" />
      <Channels
        channelName="top news"
        channelString="for when you want to be sad"
      />
    </div>
    <p className="scroll-text">scroll for more</p>
  </div>
);

export default Featured;
