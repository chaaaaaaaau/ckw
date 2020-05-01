import React from "react";
import "./about.css";

import Education from "./about/education";
import educationData from "./about/educationData";

import Employment from "./about/employment";
import employmentData from "./about/employmentData";

function About() {
  const educationComponents = educationData.map((education) => (
    <Education
      key={education.id}
      qualification={education.qualification}
      school={education.school}
      duration={education.duration}
    />
  ));

  const employmentComponents = employmentData.map((employment) => (
    <Employment
      key={employment.id}
      title={employment.title}
      company={employment.company}
      duration={employment.duration}
    />
  ));

  return (
    <div id="about">
      <h1>About</h1>
      <h2>Education</h2>
      {educationComponents}
      <h2>Employment</h2>
      {employmentComponents}
      <h2>Skills</h2>
      <br />
    </div>
  );
}

export default About;
