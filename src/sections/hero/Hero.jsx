import { HeroBanner } from "../../components/hero_banner/HeroBanner";
import { PrimaryButton } from "../../components/button/Button";
import "./Hero.css";

export const Hero = () => {
  return (
   <div className="hero-section">
    <div className="hero-image-wrapper">
      {/* <img
        className="hero-image"
        src={`${process.env.PUBLIC_URL}/hero_placeholder.png`}
        alt="Hero placeholder"
      /> */}
      <video
        className="hero-video"
        src={`${process.env.PUBLIC_URL}/hero_video_placeholder.mov`}
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
      <div className="book-us-button">
        <PrimaryButton boxShadow={true}>Book Us</PrimaryButton>
      </div>
    </div>
  );
}
