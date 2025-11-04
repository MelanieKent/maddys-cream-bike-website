import { HeroBanner } from "../../components/hero_banner/HeroBanner";
import { PrimaryButton } from "../../components/button/Button";
import { HashLink } from "react-router-hash-link";
import "./Hero.css";

export const Hero = () => {
  return (
   <div className="hero-section">
    <div className="hero-image-wrapper">
      {/* <img
        className="hero-video"
        src={`${process.env.PUBLIC_URL}/temp_hero.jpg`}
        alt="Hero placeholder"
      /> */}
      <video
        className="hero-video"
        src={`${process.env.PUBLIC_URL}/hero_video_placeholder.MP4`}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        onPause={(e) => e.target.play()} // Auto-resume if paused
        onContextMenu={(e) => e.preventDefault()} // Disable right-click
      />
      <div className="hero-banner-container">
        <HeroBanner />
      </div>
      </div>
      <HashLink className="book-us-button" to="/#catering">
        <PrimaryButton boxShadow={true}>Book Us</PrimaryButton>
      </HashLink>
    </div>
  );
}
