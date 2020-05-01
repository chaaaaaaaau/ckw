import React from "react";

import "./aboutComponent.css";

function Education(props) {
  return (
    <div className="education-component">
      <text className="qualification">{props.qualification}</text>
      <br />
      <text className="school">{props.school}, </text>
      <text className="duration">{props.duration}</text>
      <br />
      <br />
    </div>
  );
}

export default Education;
