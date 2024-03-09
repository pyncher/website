import React from "react";
import GigCard from "../components/GigCard";
import gigData from "../content/gigs.json";

const gigList = gigData.map((gig) => {
  return (
    <GigCard name={gig.name} date={gig.date} ticketLink={gig.ticketLink} />
  );
});

const Live = () => {
  return <div>{gigList}</div>;
};

export default Live;
