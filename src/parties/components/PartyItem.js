import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import "./PartyItem.css";

const PartyItem = (props) => {
  return (
    <li className="party-item">
      <Card className="party-item__content">
        <Link to={`/${props.id}/videos`}>
          <div className="party-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="party-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.videoCount} {props.videoCount === 1 ? "Video" : "Videos"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default PartyItem;
