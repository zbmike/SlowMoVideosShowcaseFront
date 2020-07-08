import React, { useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Player from "../../shared/components/UIElements/Player";
import "./VideoItem.css";

const VideoItem = (props) => {
  const [showPlayer, setShowPlayer] = useState(false);

  const openPlayerHandler = () => setShowPlayer(true);
  const closePlayerHandler = () => setShowPlayer(false);

  return (
    <React.Fragment>
      <Modal
        show={showPlayer}
        onCancel={closePlayerHandler}
        header={props.id}
        contentClass="video-item__modal-content"
        footerClass="video-item__modal-actions"
        footer={<Button onClick={closePlayerHandler}>CLOSE</Button>}
      >
        <div className="player-container">
          <Player
            url={props.url}
            thumbnail={props.thumbnail}
            className="video-item__player"
          />
        </div>
      </Modal>
      <li className="video-item">
        <Card className="video-item__content">
          <div className="video-item__image">
            <img src={props.image} alt={props.id} />
          </div>
          <div className="video-item__info">
            <h2>{props.id}</h2>
          </div>
          <div className="video-item__actions">
            <Button inverse onClick={openPlayerHandler}>
              Play Video
            </Button>
            <Button danger>Delete</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default VideoItem;
