import React from "react";
import { Helmet } from "react-helmet";
import "./Contact.css";

const Contact = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Contact | Pyncher</title>
      </Helmet>
      <div className="aboutContainer">
        <p className="aboutText">
          Pyncher was formed in 2020 by Sam Blakeley (lead vocals, guitar),
          Harvey O’Toole (guitar), Jack Rainbow (drums) and Britt Dewhurst
          (bass) in Manchester, England. Known for their lively performances and
          distinctive sound, Still Listening Magazine explains pyncher are
          “manoeuvring to stardom”. The young quartet have attracted the
          attention of NME, Damien Hirst, BBC Radio and beyond.
        </p>
      </div>
      <div className="aboutContainer">
        <p className="contactTitle">Management</p>
        <p className="contactEmail">
          <a
            href="mailto:management@echochambermusic.co.uk"
            className="emailLink"
          >
            management@echochambermusic.co.uk
          </a>
        </p>
        <p className="contactTitle">General Enquiries</p>
        <a
          href="mailto:pyncherband@gmail.com"
          style={{ textDecoration: "none" }}
        >
          <p className="contactEmail">pyncherband@gmail.com</p>
        </a>
      </div>
    </React.Fragment>
  );
};

export default Contact;
