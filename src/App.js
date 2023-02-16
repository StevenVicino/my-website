import "./App.css";
import headshot from "./images/headshot.jpg";
import github from "./images/icons8-github-100.png";
import linkedIn from "./images/icons8-linkedin-circled-100.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Homepage from "./Layout/Homepage";
import About from "./Layout/About";
import Experience from "./Layout/Experience";
import Projects from "./Layout/Projects";
import Contact from "./Layout/Contact";
import Resume from "./Layout/Resume";
import trail from "./Utils/neon";

function App() {
  return (
    <div className="App wrapper">
      <Router>
        <nav className="border" id="sidebar">
          <div className="bg-dark">
            <img
              src={headshot}
              className="rounded-circle"
              alt="headshot-me"
              id="headshot-me"
            />
            <p className="text-white-50" id="nav-title">
              Steven Vicino
            </p>
            <p className="text-white-50" id="nav-title">
              Web Developer
            </p>
          </div>
          <ul className="snip1217 list-unstyled" id="menu">
            <li>
              <Link id="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link id="nav-link" to="/About">
                About
              </Link>
            </li>
            <li>
              <Link id="nav-link" to="/Experience">
                Skills and Experience
              </Link>
            </li>
            <li>
              <Link id="nav-link" to="/Resume">
                Resume
              </Link>
            </li>
            <li>
              <Link id="nav-link" to="/Projects">
                Projects
              </Link>
            </li>
            <li>
              <Link id="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-icons">
            <a href="https://github.com/stevenvicino">
              <img className="w-50" src={github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/steven-vicino-software-developer/">
              <img className="w-50" src={linkedIn} alt="Linkedin" />
            </a>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </Router>
      <script src={trail}></script>
    </div>
  );
}

export default App;
