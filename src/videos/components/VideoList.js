import React from "react";

import Card from "../../shared/components/UIElements/Card";
import VideoItem from "./VideoItem";
import "./VideoList.css";

const VideoList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="video-list center">
        <Card>
          <h2>No videos found. Maybe Upload one?</h2>
          <button>Upload Video</button>
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
          image={video.thumbnail}
          url={video.url}
          partyId={video.partyId}
        />
      ))}
    </ul>
  );
};

export default VideoList;
