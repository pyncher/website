import React from "react";
import { Helmet } from "react-helmet";
import GigCard from "../components/GigCard/GigCard";
import gigData from "../content/gigs.json";

const gigList = gigData.map((gig) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Live | Pyncher</title>
      </Helmet>
      <GigCard name={gig.name} date={gig.date} ticketLink={gig.ticketLink} />
    </React.Fragment>
  );
});

const Live = () => {
  return <div>{gigList}</div>;
};

export default Live;
