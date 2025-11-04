import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faFaceSmile,
  faClock
} from "@fortawesome/free-regular-svg-icons";
import {
  faAward,
  faBicycle,
  faCheckDouble,
  faCookieBite,
  faIceCream,
  faPerson,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import "./WhyMaddys.css";

export const WhyMaddys = () => {
  return (
    <div className="why-maddys-container">
      <p className="why-maddys-title">Why Maddy's?</p>
      <Grid container spacing={2} sx={{ maxWidth: "95rem", padding: "0 10rem 4rem 10rem" }}>
        <Grid size={3}>
          <div className="why-maddys-item-container">
            <div style={{ color: "#E5CC99", fontWeight: "bold" }}>
              <FontAwesomeIcon className="why-maddys-item-icon-dark" icon={faCookieBite} size="3x" />
              <FontAwesomeIcon className="why-maddys-item-icon-dark" icon={faPlus} size="1x" />
              <FontAwesomeIcon className="why-maddys-item-icon-dark" icon={faIceCream} size="3x" />
            </div>
            <p className="why-maddys-item-title">Cookie + Ice Cream = Dessert Heaven</p>
            <p className="why-maddys-item-description">Handcrafted sandwiches that combine the best of both worlds.</p>
          </div>
        </Grid>
        <Grid size={3}>
          <div className="why-maddys-item-container">
              <FontAwesomeIcon className="why-maddys-item-icon" icon={faAward} size="3x" />
            <p className="why-maddys-item-title">Clean, Top-Quality Ingredients</p>
            <p className="why-maddys-item-description">No preservatives, no shortcuts—just pure, local goodness.</p>
          </div>
        </Grid>
        <Grid size={3}>
          <div className="why-maddys-item-container">
              <FontAwesomeIcon className="why-maddys-item-icon-dark" icon={faBicycle} size="3x" />
            <p className="why-maddys-item-title">We Roll to You — No Hassle</p>
            <p className="why-maddys-item-description">No setup, no cleanup. We bring the bike and the fun.</p>
          </div>
        </Grid>
        <Grid size={3}>
          <div className="why-maddys-item-container">
              <FontAwesomeIcon className="why-maddys-item-icon" icon={faClock} size="3x" />
            <p className="why-maddys-item-title">Serve 200+ Guests in 30 Minutes</p>
            <p className="why-maddys-item-description">Fast, efficient service to keep your event flowing smoothly.</p>
          </div>
        </Grid>
        <Grid size={3}>
          <div className="why-maddys-item-container">
            <div>
              <FontAwesomeIcon className="why-maddys-item-icon" icon={faPerson} size="3x" />
              <FontAwesomeIcon className="why-maddys-item-icon" icon={faPerson} size="3x" />
            </div>
            <p className="why-maddys-item-title">Indoor or Outdoor, Any Size Crowd</p>
            <p className="why-maddys-item-description">From boardrooms to block parties—we fit right in.</p>
          </div>
        </Grid>
        <Grid size={3}>
          <div className="why-maddys-item-container">
            <FontAwesomeIcon className="why-maddys-item-icon-dark" icon={faFaceSmile} size="3x" />
            <p className="why-maddys-item-title">Delight Guests, Be the Host Hero</p>
            <p className="why-maddys-item-description">A unique experience they’ll rave about long after the event.</p>
          </div>
        </Grid>
        <Grid size={3}>
          <div className="why-maddys-item-container">
            <FontAwesomeIcon className="why-maddys-item-icon" icon={faCheckDouble} size="3x" />
            <p className="why-maddys-item-title">Founder Experience You Can Count On</p>
            <p className="why-maddys-item-description">Decades of business know-how mean we understand corporate clients.</p>
          </div>
        </Grid>
        <Grid size={3}>
          <div className="why-maddys-item-container">
            <FontAwesomeIcon className="why-maddys-item-icon-dark" icon={faHeart} size="3x" />
            <p className="why-maddys-item-title">Woman-Led & Made with Love</p>
            <p className="why-maddys-item-description">Family-founded, female-powered, and fueled by passion.</p>
          </div>
        </Grid>
      </Grid>
      <div className="our-mission-container">
        <Grid container spacing={2}>
          <Grid size={4}>
            <div className="our-mission-image-container">
              <img
                className="our-mission-image"
                src={`${process.env.PUBLIC_URL}/our_mission_circle.png`}
                alt=""
              />
            </div>
          </Grid>
          <Grid size={8}>
            <p className="our-mission-title">Our Mission is Simple</p>
            <div className="our-mission-text-container">
              <p className="our-mission-text">
                Spread joy, one sammie at a time. We create <span style={{ fontWeight: "bold" }}>memorable dessert experiences</span> that bring together, spark conversations, and remind us that even in a seemingly divided world, happiness is best shared.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
