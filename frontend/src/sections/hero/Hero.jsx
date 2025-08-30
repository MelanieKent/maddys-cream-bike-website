import { HeroBanner } from "../../components/hero_banner/HeroBanner";
import { PrimaryButton } from "../../components/button/Button";
import "./Hero.css";

export const Hero = () => {
  return (
   <div className="hero-section">
    <div className="hero-image-wrapper">
      <img
        className="hero-image"
        src="hero_placeholder.png"
        alt="Hero placeholder"
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
