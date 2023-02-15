import resume from "../images/Steven-Vicino-Resume.pdf";
import html from "../images/html-50.png";
import css from "../images/css-50.png";
import js from "../images/javascript-50.png";
import reactImage from "../images/react-48.png";
import jquery from "../images/jquery-50.png";
import nodeJs from "../images/node-js-48.png";
import express from "../images/express-js-50.png";
import restApi from "../images/rest-api-50.png";
import postgreSql from "../images/postgresql-50.png";
import typescript from "../images/typescript-50.png";
import mocha from "../images/mocha-1.png";
import chai from "../images/chai-js.png";
import jest from "../images/jest.png";
import vsc from "../images/visual-studio-code-50.png";
import npm from "../images/npm-50.png";
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
        <div className="row align-self-start" id="text-box">
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
        <div className="row align-self-start" id="text-box">
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
                  <h2 id="skills-title">Front-End</h2>
                </li>
                <li id="skills-item">
                  <img src={html} alt="html" id="logo" /> HTML
                </li>
                <li id="skills-item">
                  <img src={css} alt="css" id="logo" /> CSS
                </li>
                <li id="skills-item">
                  <img src={js} alt="js" id="logo" /> Javascript
                </li>
                <li id="skills-item">
                  {" "}
                  <img src={reactImage} alt="react" id="logo" /> React
                </li>
                <li id="skills-item">
                  <img src={jquery} alt="jQuery" id="logo" /> jQuery
                </li>
                <li> &nbsp;</li>
              </ul>
              <ul
                className="col-4 list-unstyled components"
                id="styled-paragraph"
              >
                <li>
                  <h2 id="skills-title">Back-End</h2>
                </li>
                <li id="skills-item">
                  <img src={nodeJs} alt="nodeJs" id="logo" /> Node.js
                </li>
                <li id="skills-item">
                  <img src={express} alt="express" id="logo" /> Express
                </li>
                <li id="skills-item">
                  <img src={restApi} alt="restAPI" id="logo" />
                  Restful APIs
                </li>
                <li id="skills-item">
                  <img src={postgreSql} alt="postgresSql" id="logo" />{" "}
                  PostgreSQL
                </li>
                <li id="skills-item">
                  <img src={typescript} alt="typescript" id="logo" /> Typescript
                </li>
              </ul>
              <ul
                className="col-4 list-unstyled components"
                id="styled-paragraph"
              >
                <li>
                  <h2 id="skills-title">Tools</h2>
                </li>
                <li id="skills-item">
                  <img src={mocha} alt="mocha" id="logo" /> Mocha
                </li>
                <li id="skills-item">
                  <img src={chai} alt="chai" id="logo" /> Chai
                </li>
                <li id="skills-item">
                  <img src={jest} alt="jest" id="logo" /> Jest
                </li>
                <li id="skills-item">
                  <img src={vsc} alt="visual-studio-code" id="logo" /> Visual
                  Studio Code
                </li>
                <li id="skills-item">
                  <img src={npm} alt="node-package-manager" id="logo" /> &nbsp;
                  NPM
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
