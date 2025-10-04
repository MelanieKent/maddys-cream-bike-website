import "./LeftCookieBanner.css";

export const LeftCookieBanner = ({
  img_src = "",
  img_alt = "",
  title = "",
  description = "",
}) => {
  return (
    <div className="left-cookie-banner-container">
      <img src="cookie_banner_left.png" alt="Cookie banner" />
      <div className="left-cookie-banner-content">
        <img className="sammy-image" src={img_src} alt={img_alt} />
        <div>
          <p className="cookie-banner-title">{title}</p>
          <p className="cookie-banner-description">{description}</p>
        </div>
      </div>
    </div>
  );
}
