import React from "react";
import { Helmet } from "react-helmet";
import gigData from "../content/gigs.json";
import "./Live.css"

const gigList = gigData.map((gig) => {
  return (
    <a className="ticketLink" href={gig.ticketLink} target="_blank" rel="noreferrer">{gig.date} - {gig.name}</a>
  );
});

const Live = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Live | Pyncher</title>
      </Helmet>
      {gigList}
    </React.Fragment>
  );
};

export default Live;
