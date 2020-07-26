import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import VideoList from "../components/VideoList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";

const PartyVideos = () => {
  const [loadedVideos, setLoadedVideos] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [partyName, setPartyName] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const partyId = useParams().partyId;
  const auth = useContext(AuthContext);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/videos/party/${partyId}`,
          "GET",
          null,
          {
            Authorization: "Bearer " + auth.token,
          }
        );
        setLoadedVideos(responseData.videos);
        setThumbnail(responseData.thumbnail);
        setPartyName(responseData.name);
      } catch (err) {}
    };
    fetchVideos();
  }, [
    sendRequest,
    partyId,
    setLoadedVideos,
    setThumbnail,
    setPartyName,
    auth.token,
  ]);

  const videoDeletedHandler = (deletedVideoId) => {
    setLoadedVideos((prevVideos) =>
      prevVideos.filter((video) => video.id !== deletedVideoId)
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedVideos && (
        <VideoList
          partyId={partyId}
          partyName={partyName}
          image={thumbnail}
          items={loadedVideos}
          onDeleteVideo={videoDeletedHandler}
        />
      )}
    </React.Fragment>
  );
};

export default PartyVideos;
