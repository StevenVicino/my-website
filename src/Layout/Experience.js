import resume from "../images/Steven-Vicino-Resume.pdf";
import React, { useState } from "react";

function Experience() {
  const [display, setDisplay] = useState("d-none");
  const [button, setButton] = useState("Show Resume");

  const show = () => {
    if (display === "d-none") {
      setDisplay("d-block");
      setButton("Hide Resume");
    } else {
      setDisplay("d-none");
      setButton("Show Resume");
    }
  };

  return (
    <div className="container min-vh-100">
      <button
        className={display}
        type="button"
        onClick={show}
        id="full-picture"
      >
        <embed
          src={resume}
          alt="resume"
          id="full-picture"
          type="application/pdf"
        />
      </button>

      <div className="row min-vh-100 justify-content-around align-items-center">
        <button
          type="button"
          onClick={show}
          id="input-button"
          className="col-12 align-self-end"
        >
          {button}
        </button>
        <div className="col-6 align-self-start" id="text-box">
          <h1 id="styled-heading-about">Experience</h1>
          <p id="styled-paragraph">
            Recently, I have graduated as a software engineering student from
            Thinkful This intense bootcamp taught me React, HTML, CSS, API
            implementing, Node.JS, Express, PostgreSQL, and frameworks like
            Bootstrap. Currently I am adding to my knowledge with Udemy courses.
          </p>
          <p id="styled-paragraph">
            Before this I have had over 10 years in sales management, most
            recently as a Sales Center Leader in Bombo Bakeries. These
            experiences helped me work as a team and understand the business
            needs of a company.
          </p>
        </div>
        <div className="col-5 align-self-start" id="text-box">
          <div className="container">
            <div className="row justify-content center ">
              <h1 id="styled-heading-about">Skills</h1>
            </div>
            <div className="row justify-content center ">
              <ul
                className="col-4 list-unstyled components"
                id="styled-paragraph"
              >
                <li>
                  <h2>Front End</h2>
                </li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>jQuery</li>
                <li> &nbsp;</li>
              </ul>
              <ul
                className="col-4 list-unstyled components"
                id="styled-paragraph"
              >
                <li>
                  <h2>Back End</h2>
                </li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Restful Apis</li>
                <li>PostgreSQL</li>
                <li>Typescript</li>
              </ul>
              <ul
                className="col-4 list-unstyled components"
                id="styled-paragraph"
              >
                <li>
                  <h2>Tools</h2>
                </li>
                <li>Mocha</li>
                <li>Chai</li>
                <li>Jest</li>
                <li>Knex</li>
                <li>NPM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
