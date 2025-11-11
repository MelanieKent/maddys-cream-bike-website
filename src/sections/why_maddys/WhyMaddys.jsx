import {
  Grid,
  useMediaQuery
} from "@mui/material";
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
  const smallScreen = useMediaQuery('(max-width:1200px)');

  return (
    <div className="why-maddys-container">
      <p className="why-maddys-title">Why Maddy's?</p>
      <Grid container spacing={2} sx={{ maxWidth: "70rem", margin: "1rem" }}>
        <Grid size={{ xs: 6, lg: 3 }}>
          <div className={ smallScreen ? "mobile-why-maddys-item-container" : "why-maddys-item-container" }>
            <div style={{ color: "#E5CC99", fontWeight: "bold" }}>
              <FontAwesomeIcon className="why-maddys-item-icon-dark" icon={faCookieBite} size="3x" />
              <FontAwesomeIcon className="why-maddys-item-icon-dark" icon={faPlus} size="1x" />
              <FontAwesomeIcon className="why-maddys-item-icon-dark" icon={faIceCream} size="3x" />
            </div>
            <p className="why-maddys-item-title">Cookie + Ice Cream = Dessert Heaven</p>
            <p className="why-maddys-item-description">Handcrafted sandwiches that combine the best of both worlds.</p>
          </div>
        </Grid>
        <Grid size={{ xs: 6, lg: 3 }}>
          <div className={ smallScreen ? "mobile-why-maddys-item-container" : "why-maddys-item-container" }>
              <FontAwesomeIcon className="why-maddys-item-icon" icon={faAward} size="3x" />
            <p className="why-maddys-item-title">Clean, Top-Quality Ingredients</p>
            <p className="why-maddys-item-description">No preservatives, no shortcuts—just pure, local goodness.</p>
          </div>
        </Grid>
        <Grid size={{ xs: 6, lg: 3 }}>
          <div className="why-maddys-item-container">
              <FontAwesomeIcon className="why-maddys-item-icon-dark" icon={faBicycle} size="3x" />
            <p className="why-maddys-item-title">We Roll to You — No Hassle</p>
            <p className="why-maddys-item-description">No setup, no cleanup. We bring the bike and the fun.</p>
          </div>
        </Grid>
        <Grid size={{ xs: 6, lg: 3 }}>
          <div className="why-maddys-item-container">
              <FontAwesomeIcon className="why-maddys-item-icon" icon={faClock} size="3x" />
            <p className="why-maddys-item-title">Serve 200+ Guests in 30 Minutes</p>
            <p className="why-maddys-item-description">Fast, efficient service to keep your event flowing smoothly.</p>
          </div>
        </Grid>
        <Grid size={{ xs: 6, lg: 3 }}>
          <div className="why-maddys-item-container">
            <div>
              <FontAwesomeIcon className="why-maddys-item-icon" icon={faPerson} size="3x" />
              <FontAwesomeIcon className="why-maddys-item-icon" icon={faPerson} size="3x" />
            </div>
            <p className="why-maddys-item-title">Indoor or Outdoor, Any Size Crowd</p>
            <p className="why-maddys-item-description">From boardrooms to block parties—we fit right in.</p>
          </div>
        </Grid>
        <Grid size={{ xs: 6, lg: 3 }}>
          <div className="why-maddys-item-container">
            <FontAwesomeIcon className="why-maddys-item-icon-dark" icon={faFaceSmile} size="3x" />
            <p className="why-maddys-item-title">Delight Guests, Be the Host Hero</p>
            <p className="why-maddys-item-description">A unique experience they’ll rave about long after the event.</p>
          </div>
        </Grid>
        <Grid size={{ xs: 6, lg: 3 }}>
          <div className="why-maddys-item-container">
            <FontAwesomeIcon className="why-maddys-item-icon" icon={faCheckDouble} size="3x" />
            <p className="why-maddys-item-title">Founder Experience You Can Count On</p>
            <p className="why-maddys-item-description">Decades of business know-how mean we understand corporate clients.</p>
          </div>
        </Grid>
        <Grid size={{ xs: 6, lg: 3 }}>
          <div className="why-maddys-item-container">
            <FontAwesomeIcon className="why-maddys-item-icon-dark" icon={faHeart} size="3x" />
            <p className="why-maddys-item-title">Woman-Led & Made with Love</p>
            <p className="why-maddys-item-description">Family-founded, female-powered, and fueled by passion.</p>
          </div>
        </Grid>
      </Grid>
      <div className="our-mission-container">
        <Grid container spacing={2}>
          {
            !smallScreen &&
            <Grid size={{ xs: 12, lg: 4 }}>
              <div className="our-mission-image-container">
                <img
                  className="our-mission-image"
                  src={`${process.env.PUBLIC_URL}/our_mission_circle.png`}
                  alt=""
                />
              </div>
            </Grid>
          }
            <Grid size={{ xs: 12, lg: 8 }}>
            <p className={ smallScreen ? "mobile-our-mission-title" : "our-mission-title" }>Our Mission is Simple</p>
            <div className={ smallScreen ? "mobile-our-mission-text-container" : "our-mission-text-container" }>
              <p className="our-mission-text">
                Our mission is simple: to spread joy, one sammie at a time. We <span style={{ fontWeight: "bold" }}>create memorable dessert experiences</span> that bring people together, spark genuine connection, and remind us that even in an increasingly digital world, the sweetest moments are the ones we share.
              </p>
            </div>
          </Grid>
          {
            smallScreen &&
            <Grid size={{ xs: 12, lg: 4 }}>
              <div className={ smallScreen ? "mobile-our-mission-image-container" : "our-mission-image-container" }>
                <img
                  className={ smallScreen ? "mobile-our-mission-image" : "our-mission-image" }
                  src={`${process.env.PUBLIC_URL}/our_mission_circle.png`}
                  alt=""
                />
              </div>
            </Grid>
          }
        </Grid>
      </div>
    </div>
  );
}
