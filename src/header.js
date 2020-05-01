import React from "react";
import "./header.css";

import { Link } from "react-scroll";

function Header(props) {
  return (
    <div>
      <div className="navbar">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li>
            <a
              href="#"
              className="header-button"
              onClick={() => props.handleClick()}
            >
              Home
            </a>
          </li>
        </Link>
        <Link
          className="dropdown"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li>
            <a
              href="#"
              className="header-button"
              onClick={() => props.handleClick()}
            >
              About
            </a>
          </li>
        </Link>
        <Link
          className="dropdown"
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li>
            <a href="#" className="header-button">
              Project
            </a>
          </li>
        </Link>
        <Link
          className="dropdown"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li>
            <a href="#" className="header-button">
              Contact
            </a>
          </li>
        </Link>
      </div>
    </div>
  );
}

export default Header;

/*
          <li className="dropdown">
            <a href="#" className="header-button">
              Practice
            </a>
            <div className="dropdown-content">
              <a href="#" className="dropdown-content-item">
                Meme Generator
              </a>
            </div>
          </li>
*/
