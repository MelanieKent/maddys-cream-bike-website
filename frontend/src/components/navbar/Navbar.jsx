import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./Navbar.css";

export const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState("");

  return (
    <div className="navbar-container">
      <div className="navbar-inner-container">
        <img
          className="navbar-logo"
          src="/maddys_logo.png"
          alt="Maddy's Cream Bike Logo"
        />
        <div className="navbar-links-container">
          <a className="navbar-link">
            HOME
          </a>
          <a className="navbar-link">
            MENU & CATERING
          </a>
          <a className="navbar-link">
            WHY MADDY'S
          </a>
          <a className="navbar-link">
            OUR STORY
          </a>
          <a className="navbar-link">
            FIND US
          </a>
          <div className="navbar-icons-container">
            <FontAwesomeIcon className="navbar-icon" icon={faFacebookF} size="lg" />
            <FontAwesomeIcon className="navbar-icon" icon={faInstagram} size="lg" />
            <FontAwesomeIcon className="navbar-icon" icon={faEnvelope} size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
