import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container min-vh-100">
      <div className="row min-vh-100 justify-content-center align-items-center">
        <div className="row w-85" id="text-box">
          <h1 id="styled-heading-about">Me, Myself, and I</h1>
          <p id="styled-paragraph">
            I'm a web developer located in Valley Stream, NY. I'm passionate
            about making great websites, apps and more!
          </p>
          <p id="styled-paragraph">
            I'm an avid learner. I currently am learning both Spanish and
            Korean. When I'm not coding I like to spend my time outdoors,
            walking and hiking with my dog, Raffi.
          </p>
          <p id="styled-paragraph">
            More than anything else, I seek an environment where I can learn
            more about software development and work with other people who are
            as passionate as I am.
          </p>
          <p id="styled-ending">Together, let's make something awesome!</p>
        </div>
        <Link
          to="/Experience"
          className="w-75 justify-self-center text-center"
          id="input-button"
        >
          See All Skills
        </Link>
        <div
          className="row justify-content-center"
          id="styled-heading-about message-body"
        >
          <h1 id="h1">
            <span id="h1-span">I Love</span>
            <div className="message">
              <div className="word1">JS</div>
              <div className="word2">Express</div>
              <div className="word3">SQL</div>
            </div>
          </h1>
          <h1 id="h1">
            <span id="h1-span">I Love</span>
            <div className="message">
              <div className="word1">React</div>
              <div className="word2">Knex</div>
              <div className="word3">Jest</div>
            </div>
          </h1>
          <h1 id="h1">
            <span id="h1-span">I Love</span>
            <div className="message">
              <div className="word1">Dogs</div>
              <div className="word2">Learning</div>
              <div className="word3">Travel</div>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
