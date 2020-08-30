import React from "react";

const ConferenceCard = ({ data }) => {
  return (
    <a href={data.confURl} className="card">
      <div style={{ width: "2em", height: "1em" }} className={data.entryType}>
        {data.entryType}
      </div>
      <img src={data.imageURL.replace('"', "").replace('"', "")} alt="" />
      <div className="confData">
        <p className="confDate">{data.confStartDate}</p>
        <p className="confName">{data.confName}</p>
        <button class="btn click">
          <a href={data.confUrl}>Visit Website</a>
        </button>
      </div>
    </a>
  );
};
//01/Feb 2020
//2010/07/01
export default ConferenceCard;
