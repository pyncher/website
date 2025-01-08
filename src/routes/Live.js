import React from "react";
import { Helmet } from "react-helmet";
import useScript from "../hooks/useScript";
import "./Live.css";

const Live = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Live | Pyncher</title>
      </Helmet>
      <a
        href="https://www.songkick.com/artists/10177018"
        class="songkick-widget"
        data-theme="dark"
        data-track-button="on"
        data-detect-style="off"
        data-background-color="rgb(0,0,0,1)"
        data-font-color="rgb(255,255,255,1)"
        data-button-bg-color="rgb(255,255,255,1)"
        data-button-text-color="rgb(0,0,0,1)"
        data-locale="en"
        data-other-artists="on"
        data-share-button="on"
        data-country-filter="on"
        data-rsvp="on"
        data-request-show="on"
        data-past-events="off"
        data-past-events-offtour="off"
        data-remind-me="off"
        style={{ display: "none" }}
      >
        _
      </a>
      {useScript("//widget-app.songkick.com/injector/10177018")}
    </React.Fragment>
  );
};

export default Live;
