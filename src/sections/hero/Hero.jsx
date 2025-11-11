import { HeroBanner } from "../../components/hero_banner/HeroBanner";
import { PrimaryButton } from "../../components/button/Button";
import { HashLink } from "react-router-hash-link";
import { useMediaQuery } from '@mui/material';
import "./Hero.css";

export const Hero = () => {
  const smallScreen = useMediaQuery('(max-width:680px)');

  const scrollWithOffset = (el) => {
    const yOffset = -90; // 5.625rem = 90px
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="hero-section">
      <div className="hero-video-wrapper">
        {/* <img
          className="hero-video"
          src={`${process.env.PUBLIC_URL}/temp_hero.jpg`}
          alt="Hero placeholder"
        /> */}
        <video
          className="hero-video"
          src={`${process.env.PUBLIC_URL}/hero_video.MP4`}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          onPause={(e) => e.target.play()} // Auto-resume if paused
          onContextMenu={(e) => e.preventDefault()} // Disable right-click
        />
        <div className="hero-banner-button-container">
          <div className="hero-banner-container">
            <HeroBanner />
          </div>
          <HashLink
            className="book-us-button"
            to="/#catering"
            scroll={scrollWithOffset}
          >
            <PrimaryButton size={smallScreen ? "small" : "medium"} boxShadow={true}>Book Us</PrimaryButton>
          </HashLink>
        </div>
      </div>
    </div>
  );
}
