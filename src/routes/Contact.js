import React from "react";
import { Helmet } from "react-helmet";
import useScript from "../hooks/useScript";
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
      <div className="aboutContainer">
        <div id="mc_embed_shell">
          <link
            href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
            rel="stylesheet"
            type="text/css"
          />
          <style type="text/css">
            background:#fff; false;clear:left; font:14px
            Helvetica,Arial,sans-serif; width: 500px;
          </style>
          <div id="mc_embed_signup">
            <form
              action="https://gmail.us21.list-manage.com/subscribe/post?u=a929ed1ac72ec432588d4435a&amp;id=0e20dd497c&amp;f_id=0063fbe6f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
            >
              <div id="mc_embed_signup_scroll">
                <div class="indicates-required">
                  <span class="asterisk">*</span> indicates required
                </div>
                <div class="mc-field-group">
                  <label for="mce-EMAIL">
                    Email Address <span class="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    class="required email"
                    id="mce-EMAIL"
                    required=""
                    value=""
                  />
                  <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
                </div>
                <div id="mce-responses" class="clear foot">
                  <div
                    class="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  ></div>
                  <div
                    class="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  ></div>
                </div>
                <div
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-5000px" }}
                >
                  <input
                    type="text"
                    name="b_a929ed1ac72ec432588d4435a_0e20dd497c"
                    tabindex="-1"
                    value=""
                  />
                </div>
                <div class="optionalParent">
                  <div class="clear foot">
                    <input
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      class="button"
                      value="Subscribe"
                    />
                    <p style={{ margin: "0px auto" }}>
                      <a
                        href="http://eepurl.com/iMcStc"
                        title="Mailchimp - email marketing made easy and fun"
                      >
                        <span
                          style={{
                            display: "inline-block",
                            backgroundColor: "transparent",
                            borderRadius: "4px",
                          }}
                        >
                          <img
                            class="refferal_badge"
                            src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                            alt="Intuit Mailchimp"
                            style={{
                              width: "220px",
                              height: "40px",
                              display: "flex",
                              padding: "2px 0px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {useScript(
            "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
          )}
          <script type="text/javascript">
            (window.fnames = new Array(); window.ftypes = new
            Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';(jQuery));var
            $mcj = jQuery.noConflict(true);
          </script>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
