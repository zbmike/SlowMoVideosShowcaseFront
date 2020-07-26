import React from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import VideoItem from "./VideoItem";
import "./VideoList.css";

const VideoList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="video-list center">
        <Card>
          <h2>No videos found. Maybe Upload one?</h2>
          <Button inverse to={`/${props.partyId}/videos/new`}>
            Upload Now
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="video-list">
      {props.items.map((video) => (
        <VideoItem
          key={video.id}
          id={video.id}
          partyName={props.partyName}
          image={props.image}
          url={video.url}
          onDelete={props.onDeleteVideo}
        />
      ))}
      <li>
        <Card>
          <div className="center">
            <Button inverse to={`/${props.partyId}/videos/new`}>
              Upload More Videos
            </Button>
          </div>
        </Card>
      </li>
    </ul>
  );
};

export default VideoList;
