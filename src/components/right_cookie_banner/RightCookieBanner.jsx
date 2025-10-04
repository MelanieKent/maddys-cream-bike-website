import "./RightCookieBanner.css";

export const RightCookieBanner = ({
  img_src = "",
  img_alt = "",
  title = "",
  description = "",
}) => {
  return (
    <div className="right-cookie-banner-container">
      <img src={`${process.env.PUBLIC_URL}/cookie_banner_right.png`} alt="Cookie banner" />
      <div className="right-cookie-banner-content">
        <div>
          <p className="cookie-banner-title">{title}</p>
          <p className="cookie-banner-description">{description}</p>
        </div>
        <img className="sammy-image" src={img_src} alt={img_alt} />
      </div>
    </div>
  );
}
