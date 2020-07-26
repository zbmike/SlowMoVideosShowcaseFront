import React, { useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Player from "../../shared/components/UIElements/Player";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./VideoItem.css";

const VideoItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const [showPlayer, setShowPlayer] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openPlayerHandler = () => setShowPlayer(true);
  const closePlayerHandler = () => setShowPlayer(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      console.log(props.id);
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/videos/${props.id}`,
        "DELETE",
        null,
        {
          Authorization: "Bearer " + auth.token,
        }
      );
      props.onDelete(props.id);
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showPlayer}
        header={props.partyName}
        onCancel={closePlayerHandler}
        contentClass="video-item__modal-content"
        footerClass="video-item__modal-actions"
        footer={<Button onClick={closePlayerHandler}>CLOSE</Button>}
      >
        <div className="player-container">
          <Player url={props.url} className="video-item__player" />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="video-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this video? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>
      <li className="video-item">
        <Card className="video-item__content">
          {isLoading && <LoadingSpinner asOverlay />}
          <div className="video-item__image">
            <img src={props.image} alt={props.id} />
          </div>
          {/* <div className="video-item__info">
            <h2>{props.id}</h2>
          </div> */}
          <div className="video-item__actions">
            <Button inverse onClick={openPlayerHandler}>
              Play Video
            </Button>
            <Button danger onClick={showDeleteWarningHandler}>
              Delete
            </Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default VideoItem;
