import React from "react";

import Card from "../../shared/components/UIElements/Card";
import "./VideoItem.css";

const VideoItem = (props) => {
  return (
    <li className="video-item">
      <Card className="video-item__content">
        <div className="video-item__image">
          <img src={props.image} alt={props.id} />
        </div>
        <div className="video-item__info">
          <h2>{props.id}</h2>
        </div>
        <div className="video-item__actions">
          <button>Play Video</button>
          <button>Delete</button>
        </div>
      </Card>
    </li>
  );
};

export default VideoItem;
