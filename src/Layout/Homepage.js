import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="container" id="homepage">
      <div className="text-center vertical-center" id="backlight">
        <h1 id="styled-heading">
          <div id="letter">H</div>
          <div id="letter">i</div>
          <div id="letter">!</div>
        </h1>
        <h1 id="styled-heading">
          <div id="letter">I</div>
          <div id="letter">'</div>
          <div id="letter">m</div>
          <div id="letter">&nbsp;S</div>
          <div id="letter">t</div>
          <div id="letter">e</div>
          <div id="letter">v</div>
          <div id="letter">e</div>
          <div id="letter"></div>
          <div id="letter">n</div>
        </h1>
        <h1 id="styled-heading">
          <div id="letter">W</div>
          <div id="letter">e</div>
          <div id="letter">b</div>
          <div id="letter">&nbsp;D</div>
          <div id="letter">e</div>
          <div id="letter">v</div>
          <div id="letter">e</div>
          <div id="letter">l</div>
          <div id="letter">o</div>
          <div id="letter">p</div>
          <div id="letter">e</div>
          <div id="letter">r</div>
          <div id="letter">&nbsp;A</div>
          <div id="letter">t</div>
          <div id="letter">&nbsp;Y</div>
          <div id="letter">o</div>
          <div id="letter">u</div>
          <div id="letter">r</div>
          <div id="letter">&nbsp;S</div>
          <div id="letter">e</div>
          <div id="letter">r</div>
          <div id="letter">v</div>
          <div id="letter">i</div>
          <div id="letter">c</div>
          <div id="letter">e</div>
        </h1>
        <h5>(Mobile Version Coming Soon)</h5>
        <Link to="/contact" id="contact-link">
          Contact Me!
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
