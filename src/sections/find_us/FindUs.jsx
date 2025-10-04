import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./FindUs.css";

export const FindUs = () => {
  const eventImages = [
    "img_2737.png",
    "img_3617.png",
    "img_3647.png",
    "img_3835.png",
    "img_3936.png",
    "img_4055.png",
    "img_4067.png",
    "img_4261.png",
    "img_4406.png",
    "photoroom_20250917_202920.png",
  ]

  return (
    <>
      <div className="find-us-container">
        <div className="find-us-contact-container">
          <p className="find-us-title">Find Us</p>
          <div>
            <a className="find-us-link" href="mailto:Caroline@MaddysCreamBike.com">
              <FontAwesomeIcon
                className=""
                icon={faEnvelope}
                size="lg"
              />
              <p>Caroline@MaddysCreamBike.com</p>
            </a>
            <a className="find-us-link" href="https://www.instagram.com/maddyscreambike/">
              <FontAwesomeIcon
                className=""
                icon={faInstagram}
                size="lg"
              />
              <p>@MaddysCreamBike</p>
            </a>
            <a className="find-us-link" href="https://www.facebook.com/people/Maddys-Cream-Bike/61570810093626/">
              <FontAwesomeIcon
                className=""
                icon={faFacebookF}
                size="lg"
              />
              <p>@MaddysCreamBike</p>
            </a>
            <a className="find-us-location">
              <FontAwesomeIcon
                className=""
                icon={faLocationDot}
                size="lg"
              />
              <p>Currently remote out of Portland, OR</p>
            </a>
          </div>
        </div>
        <p className="previous-events-title">Previous Events</p>
        {/* Inspired by: https://github.com/Girls-in-Steam/girls-in-steam-official/blob/main/src/pages/components/TheTeam.js */}
        <div className="previous-events-slider">
        <div className="events-image-slide">
          {eventImages.map((image) => (
            <img
              src={`${process.env.PUBLIC_URL}/events_carousel/${image}`}
              alt=""
              onClick={() => {}}
            />
          ))}
          {eventImages.map((image) => (
            <img
              src={`${process.env.PUBLIC_URL}/events_carousel/${image}`}
              alt=""
              onClick={() => {}}
            />
          ))}
          {eventImages.map((image) => (
            <img
              src={`${process.env.PUBLIC_URL}/events_carousel/${image}`}
              alt=""
              onClick={() => {}}
            />
          ))}
          {eventImages.map((image) => (
            <img
              src={`${process.env.PUBLIC_URL}/events_carousel/${image}`}
              alt=""
              onClick={() => {}}
            />
          ))}
        </div>
      </div>
      </div>
      <div className="footer">
        <p className="footer-copyright-text">
          @MaddysCreamBike 2025
        </p>
      </div>
    </>
  );
}
