import React from "react";
import moviesApp from "../images/We-love-movies-img.png";
import restaurantApp from "../images/restaurant-starter img.png";
import flashcard from "../images/flashcard-image.png";
import decoder from "../images/decoder-image.png";

function Projects() {
  return (
    <div className="slider">
      <input type="radio" name="toggle" id="btn-1" checked />
      <input type="radio" name="toggle" id="btn-2" checked />
      <input type="radio" name="toggle" id="btn-3" checked />
      <input type="radio" name="toggle" id="btn-4" checked />

      <div className="slider-controls">
        <label htmlFor="btn-1"></label>
        <label htmlFor="btn-2"></label>
        <label htmlFor="btn-3"></label>
        <label htmlFor="btn-4"></label>
      </div>

      <ul className="slides">
        <li className="slide">
          <div className="slide-content">
            <h2 className="slide-title">Restaurant Reservation App</h2>
            <p className="slide-text">
              This application is used by the restaurant staff. When a customer
              calls, the employee can record their information, search by phone
              number or date, can seat them at a table when they arrive and free
              the table when the party leaves. The app implements react router
              and express to build a RESTful API in order to make HTTP requests
              for all of the reservation data stored on the connected PostgreSQL
              database. It also utilizes CRUD functions and knex queries to
              handle data going to and coming from the database.
            </p>
            <p className="slide-text">
              Technology Used: React, Node.js, Express, Knex and PostgreSQL.
            </p>
            {/* <a
              href="https://starter-restaurant-reservation-0k9h.onrender.com/dashboard"
              className="slide-link"
            >
              Live Demo
            </a> */}
            <a
              href="https://github.com/StevenVicino/starter-restaurant-reservation"
              className="slide-link"
            >
              Github Repository
            </a>
          </div>
          <p className="slide-image">
            <img src={restaurantApp} className="d-block" alt="restaurant app" />
          </p>
        </li>
        <li className="slide">
          <div className="slide-content">
            <h2 className="slide-title">Flashcard Study App</h2>
            <p className="slide-text">
              This is an application that allows users to create, edit, and
              delete decks and cards within them. It uses REST APIs and
              middleware functions to allow users to create, read, update and
              delete their perfect deck of study cards. The routes and URLs are
              defined and state is used over multiple components.
            </p>
            <p className="slide-text">
              {" "}
              Technology Used: JavaScript, React, Express, Knex, HTML and CSS.
              Progress/Versions tracked with Git.
            </p>
            {/* <a
              href="https://flashcard-nbay.onrender.com/"
              className="slide-link"
            >
              Live Demo
            </a> */}
            <a
              href="https://github.com/StevenVicino/flash-card-app"
              className="slide-link"
            >
              Github Repository
            </a>
          </div>
          <p className="slide-image">
            <img src={flashcard} className="d-block w-100" alt="flashcard" />
          </p>
        </li>
        <li className="slide">
          <div className="slide-content">
            <h2 className="slide-title">Movies Database Application</h2>
            <p className="slide-text">
              This is a backend for a website that allows any user to search for
              their favorite movies. It uses CRUD methods for reviews and view
              theaters and movies that are showing. The website applies router
              and controller functions to retrieve a user's specific requests.
            </p>
            <p className="slide-text">
              {" "}
              Technology Used: Node.js, Express, and Knex. Version control with
              Git.
            </p>
            {/* <a
              href="https://we-love-movies-front-end.onrender.com/"
              className="slide-link"
            >
              Live Demo
            </a> */}
            <a
              href="https://github.com/StevenVicino/we-love-movies"
              className="slide-link"
            >
              Github Repository
            </a>
          </div>
          <p className="slide-image">
            <img src={moviesApp} className="d-block w-100" alt="moviesApp" />
          </p>
        </li>
        <li className="slide">
          <div className="slide-content">
            <h2 className="slide-title">Decoder App</h2>
            <p className="slide-text">
              Built to be an encryption/decryption application to communicate
              and read top-secret messages. It was designed to use the Caesar
              shift, the Polybius square, and Substitution cipher methods.
            </p>
            <p className="slide-text">
              {" "}
              Technology Used: JavaScript ES6, HTML5, Node.js, Bootstrap, Mocha,
              Chai.
            </p>
            {/* <a href="https://decoder-ring.onrender.com/" className="slide-link">
              Live Demo
            </a> */}
            <a
              href="https://github.com/StevenVicino/Decoder-Ring"
              className="slide-link"
            >
              Github Repository
            </a>
          </div>
          <p className="slide-image">
            <img src={decoder} className="d-block w-100" alt="decoder" />
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
