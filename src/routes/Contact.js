import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="aboutContainer">
        <p className="aboutText">
          Pyncher are the very best of the Manchester underground, moody and
          playful post punk that's begun to delight ears nationwide. This radio
          6 featured outfit brings to life Ennio Morricone riffs and twangs with
          their new EP Chew receiving praise from NME and beyond. Having only
          been gigging for a year, this young band have shot themselves into the
          limelight of the Manchester music scene, and are starting to make a
          name for themselves in London as well, after being invited by Damien
          Hirst to play The Troubador. - Reece Ritchie, Night and Day.
        </p>
      </div>
      <div className="aboutContainer" style={{ marginBottom: "50px" }}>
        <p className="contactTitle">Management</p>
        <p className="contactEmail">management@echochambermusic.co.uk</p>
        <p className="contactTitle">General Enquiries</p>
        <p className="contactEmail">pyncherband@gmail.com</p>
      </div>
    </React.Fragment>
  );
};

export default Contact;
