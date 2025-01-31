import React from "react";
import "./ActivityCard.css";

const ActivityCard = (props) => {
  return (
    <div className="body">
    <div className="card" onClick={props.onClick}>
      <div className="container">
        <img
          className="activity-image"
          src={props.image}
          alt={props.ImgT}
        />
        <h2>{props.title}</h2>
        <p>
          {props.description}
        </p>
      </div>
    </div>
    </div>
  );
};

export default ActivityCard;
