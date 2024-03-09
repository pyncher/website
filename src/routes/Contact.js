import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <React.Fragment>
      <hr className="breaker" />
      <div className="aboutContainer">
        <p className="sectionTitle">Contact</p>
        <p className="contactTitle">Management</p>
        <p className="contactEmail">management@echochambermusic.co.uk</p>
        <p className="contactTitle">General Enquiries</p>
        <p className="contactEmail">pyncherband@gmail.com</p>
      </div>
      <hr className="breaker" />
      <div className="aboutContainer">
        <p className="sectionTitle">About</p>
        <p className="aboutText">
          Pyncher was formed in 2020 by Sam Blakeley (lead vocals, guitar),
          Harvey O’Toole (guitar), Jack Rainbow (drums) and Britt Dewhurst
          (bass) in Manchester, England. Known for their lively performances and
          distinctive sound, Still Listening Magazine explains pyncher are
          “manoeuvring to stardom”. The young quartet have attracted the
          attention of NME, Damien Hirst, BBC Radio and beyond.
        </p>
      </div>
      <hr className="breaker" />
      <div className="aboutContainer" style={{ marginBottom: "50px" }}>
        <p className="sectionTitle">Press</p>
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
    </React.Fragment>
  );
};

export default Contact;
