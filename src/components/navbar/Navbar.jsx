import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { SECTIONS } from "../../constants/constants";
import "./Navbar.css";

export const Navbar = ({ activeSection }) => {
  return (
    <div className="navbar-container">
      <div className="navbar-inner-container">
        <img
          className="navbar-logo"
          src={`${process.env.PUBLIC_URL}/maddys_logo.png`}
          alt="Maddy's Cream Bike logo"
        />
        <div className="navbar-links-container">
          { SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`/#/#${section.id}`}
              className={`navbar-link ${
                activeSection === section.id ? "active" : ""
              }`}
            >
              { section.name }
            </a>
          ))}
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
