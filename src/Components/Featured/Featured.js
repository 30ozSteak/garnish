import React from "react";
import "./Featured.css";
import Channels from "../../Containers/Channels/Channels";

const Featured = ({
  handleTechLink,
  handleMemeLink,
  handleAbramovLink,
  handleCultureLink,
  handleTopLink
}) => (
  <div className="featured-container">
    <div className="featured-box">
      <Channels
        channelName="tech"
        channelString="new in tech, today"
        handleFetch={handleTechLink}
      />
      <Channels
        channelName="memes"
        channelString="fortnite floss, kids falling over, the works"
        handleFetch={handleMemeLink}
      />
      <Channels
        channelName="abramov"
        channelString="whatever dan says"
        handleFetch={handleAbramovLink}
      />
      <Channels
        channelName="culture"
        channelString="learn some things"
        handleFetch={handleCultureLink}
      />
      <Channels
        channelName="top news"
        channelString="for when you want to be sad"
        handleFetch={handleTopLink}
      />
    </div>
    <p className="scroll-text">scroll for more</p>
  </div>
);

export default Featured;
