import React from "react";

import "../../Components/Featured/Featured";

export const Channels = ({ channelName, channelString, handleNews, type }) => (
  <div onClick={() => handleNews(type)} className="channel-box">
    <div className="channel-button">
      <p>{channelName}</p>
      <p className="channel-desc">{channelString}</p>
    </div>
  </div>
);

export default Channels;
