import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import PartiesList from "../components/PartiesList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";

const Parties = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedParties, setloadedParties] = useState();

  const userId = useParams().userId;

  // like componentWillMount
  useEffect(() => {
    const fetchParties = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/parties/user/${userId}`,
          "GET",
          null,
          {
            Authorization: "Bearer " + auth.token,
          }
        );

        setloadedParties(responseData.parties);
      } catch (err) {}
    };
    fetchParties();
  }, [sendRequest, userId, auth.token]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedParties && <PartiesList items={loadedParties} />}
    </React.Fragment>
  );
};

export default Parties;
