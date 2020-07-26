import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import Button from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import VideoUpload from "../../shared/components/FormElements/VideoUpload";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import "./NewVideo.css";

const NewParty = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      video: {
        value: null,
        isValid: false,
      },
    },
    false
  );
  const partyId = useParams().partyId;

  const history = useHistory();

  const partySubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("video", formState.inputs.video.value);
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/videos/party/${partyId}`,
        "POST",
        formData,
        {
          Authorization: "Bearer " + auth.token,
        }
      );
      history.push("/");
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="party-form" onSubmit={partySubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <VideoUpload
          id="video"
          onInput={inputHandler}
          errorText="Please provide video."
        />
        <Button type="submit" disabled={!formState.isValid}>
          UPLOAD VIDEO
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NewParty;
