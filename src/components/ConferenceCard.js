import React from "react";

const ConferenceCard = ({ data }) => {
  return (
    <div className="card">
      <img className="image" src={data.imageURL} alt="banner" />
      <div className="middle">
        <div className="text">
          <h1> Name of Conference : {data.confName} </h1>
          <h3> Date: {data.confStartDate}</h3>
          <a href={data.confUrl}> View More </a>
        </div>
      </div>
    </div>
  );
};

export default ConferenceCard;
