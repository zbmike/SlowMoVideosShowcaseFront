import React from "react";

import VideoList from "../components/VideoList";

const DUMMY_VIDEO = [
  {
    id: "v1",
    thumbnail:
      "https://www.videostudiopro.com/static/vsp/images/pages/seo/tips/make/slow-motion-video.jpg",
    url: "../../../assets/file_example_MP4_1280_10MG.mp4",
    partyId: "p1",
  },
  {
    id: "v2",
    thumbnail:
      "https://image.pbs.org/video-assets/amw1aWn-asset-mezzanine-16x9-esHyPoR.JPG?crop=384x215&?format=jpg",
    url: "../../../assets/file_example_MP4_1280_10MG.mp4",
    partyId: "p2",
  },
];

const PartyVideos = () => {
  return <VideoList items={DUMMY_VIDEO} />;
};

export default PartyVideos;
