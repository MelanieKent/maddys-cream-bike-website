import "./MobileCookieBanner.css";

export const MobileCookieBanner = ({
  img_src = "",
  img_alt = "",
  title = "",
  description = "",
}) => {
  return (
    <div className="mobile-cookie-banner-container">
      <img className="mobile-sammy-image" src={img_src} alt={img_alt} />
      <div className="mobile-cookie-banner-content">
        <p className="mobile-cookie-banner-title">{title}</p>
        <p className="mobile-cookie-banner-description">{description}</p>
      </div>
    </div>
  );
}
