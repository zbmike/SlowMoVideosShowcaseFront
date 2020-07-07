import React from "react";

import PartyItem from "./PartyItem";
import "./PartiesList.css";

const PartiesList = (props) => {
  if (props.items.length === 0) {
    return (
      <div classname="center">
        <h2>No parties found.</h2>
      </div>
    );
  }

  return (
    <ul className="parties-list">
      {props.items.map((party) => {
        return (
          <PartyItem
            key={party.id}
            id={party.id}
            image={party.image}
            name={party.name}
            videoCount={party.videos}
          />
        );
      })}
    </ul>
  );
};

export default PartiesList;
