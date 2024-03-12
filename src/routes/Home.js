import React from "react";
import { Helmet } from "react-helmet";
import pyncherImage from "../content/images/pyncher.jpg";
import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Pyncher</title>
      </Helmet>
      <img
        className="homeImage"
        src={pyncherImage}
        alt="Pyncher the band sitting on the floor of a corridor"
      />
    </React.Fragment>
  );
};

export default Home;
