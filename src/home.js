import React from "react";
import homeImg from "./images/home1.png";
import "./infoCard.css";

function Home() {
  return (
    <div id="home" style={{ marginTop: "40px" }}>
      <br />
      <div className="card">
        <img src={homeImg} alt="" className="card__img"></img>
        <div className="card__text">
          <h3 className="card__title">I am CHAU Kwun Wai</h3>
          <p className="card__body">
            A final-year student majoring in <br />{" "}
            <b>Computer and Data Engineering</b>.
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Home;
