import React from "react";
import contactImg from "./images/contact1.png";
import "./infoCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <div className="card">
        <img src={contactImg} alt="" className="card__img"></img>
        <div className="card__text">
          <h3 className="card__title">Look Forward to Meeting with YOU!</h3>
          <p className="card__body">
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;chauchaulatias@gmail.com
            <br />
            <FontAwesomeIcon icon={faPhone} />
            &nbsp; +852 67030715
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
