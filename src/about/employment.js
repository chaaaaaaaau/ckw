import React from "react";

import "./aboutComponent.css";

function Employment(props) {
  return (
    <div className="employment-component">
      <text className="title">{props.title}</text>
      <br />
      <text className="company">{props.company}, </text>
      <text className="duration">{props.duration}</text>
      <br />
      <br />
    </div>
  );
}

export default Employment;
