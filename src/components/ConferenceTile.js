import React from "react";
import ConferenceCard from "./ConferenceCard";

const ConferenceTile = ({ confData, isLoading }) => {
  return isLoading ? (
    <div>
      <h1>Loading</h1>
    </div>
  ) : (
    <section className="wrapper">
      {confData.map((data) => (
        <ConferenceCard key={data.id} data={data} />
      ))}
    </section>
  );
};

export default ConferenceTile;
