import React from "react";

import Channels from "../../Components/Channels/Channels";
import "./Featured.css";

const Featured = ({ handleNewsLink }) => (
  <div className="featured-container">
    <div className="featured-box">
      <Channels
        channelName="tech"
        channelString="new in tech, today"
        handleNews={handleNewsLink}
        type={"tech"}
      />
      <Channels
        channelName="memes"
        channelString="fortnite floss, kids falling over, the works"
        handleNews={handleNewsLink}
        type={"memes"}
      />
      <Channels
        channelName="abramov"
        channelString="whatever dan says"
        handleNews={handleNewsLink}
        type={"abramov"}
      />
      <Channels
        channelName="culture"
        channelString="learn some things"
        handleNews={handleNewsLink}
        type={"culture"}
      />
      <Channels
        channelName="top news"
        channelString="for when you want to be sad"
        handleNews={handleNewsLink}
        type={"top"}
      />
    </div>
    <p className="scroll-text">scroll</p>
  </div>
);

export default Featured;
