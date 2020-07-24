import React, { useEffect, useState } from "react";

import PartiesList from "../components/PartiesList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Parties = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedParties, setloadedParties] = useState();

  // like componentWillMount
  useEffect(() => {
    const fetchParties = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/parties"
        );

        setloadedParties(responseData.parties);
      } catch (err) {}
    };
    fetchParties();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <PartiesList items={PARTIES} />
    </React.Fragment>
  );
};

export default Parties;
