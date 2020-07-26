import React from "react";

import "./Player.css";

const Player = (props) => {
  return (
    <video
      controls
      src={props.url}
      className={`player ${props.className}`}
    ></video>
  );
};

export default Player;
