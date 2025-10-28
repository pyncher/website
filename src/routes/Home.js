import React from "react";
import { Helmet } from "react-helmet";
import pyncherImage from "../content/images/pyncher.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Pyncher</title>
      </Helmet>
      <p className="aboutText" style={{ maxWidth: "60%" }}>
        New album out now:{" "}
        <a
          href="https://ditto.fm/every-town-needs-a-stranger"
          target="_blank"
          rel="noreferrer"
          className="ticketLink"
        >
          Every Town Needs a Stranger
        </a>
      </p>
      <img
        className="homeImage"
        src={pyncherImage}
        alt="Pyncher the band sitting on the floor of a corridor"
      />
    </React.Fragment>
  );
};

export default Home;
