import "./HeroBanner.css";

export const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <img className="hero-banner-image" src="hero_banner.png" alt="Handcrafted ice cream sandwich catering company" />
      <div className="hero-banner-text-container">
        <p className="hero-banner-text upper">Handcrafted ice cream sandwich catering</p>
        <p className="hero-banner-text lower">Currently serving the Greater Portland area</p>
      </div>
    </div>
  );
};
