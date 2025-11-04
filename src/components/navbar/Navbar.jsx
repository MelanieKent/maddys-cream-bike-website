import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { SECTIONS } from "../../constants/constants";
import "./Navbar.css";

export const Navbar = ({ activeSection }) => {
  const scrollWithOffset = (el) => {
    const yOffset = -90; // 5.625rem = 90px
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="navbar-container">
      <div className="navbar-inner-container">
        <img
          className="navbar-logo"
          src={`${process.env.PUBLIC_URL}/maddys_logo.png`}
          alt="Maddy's Cream Bike logo"
        />
        <div className="navbar-links-container">
          {SECTIONS.map((section) => (
            <HashLink
              key={section.id}
              className={`navbar-link ${activeSection === section.id ? "active" : ""}`}
              to={`/#${section.id}`}
              scroll={scrollWithOffset}
            >
              {section.name}
            </HashLink>
          ))}
          <div className="navbar-icons-container">
            <a
              href="https://www.facebook.com/people/Maddys-Cream-Bike/61570810093626/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="navbar-icon"
                icon={faFacebookF}
                size="lg"
              />
            </a>
            <a
              href="https://www.instagram.com/maddyscreambike/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="navbar-icon"
                icon={faInstagram}
                size="lg"
              />
            </a>
            <a href="mailto:Caroline@MaddysCreamBike.com">
              <FontAwesomeIcon
                className="navbar-icon"
                icon={faEnvelope}
                size="lg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
