import "./FindUs.css";

export const FindUs = () => {
  return (
    <>
      <div className="find-us-container">
        <div className="find-us-contact-container">
          <p className="find-us-title">Find Us</p>
        </div>
        <p className="previous-events-title">Previous Events</p>
        {/* Inspired by: https://github.com/Girls-in-Steam/girls-in-steam-official/blob/main/src/pages/components/TheTeam.js */}
        <div className="previous-events-slider">
        <div className="events-image-slide">
          <img src={`${process.env.PUBLIC_URL}/placeholder_cookie_1.png`} />
                    <img src={`${process.env.PUBLIC_URL}/placeholder_cookie_1.png`} />
                              <img src={`${process.env.PUBLIC_URL}/placeholder_cookie_1.png`} />
                                        <img src={`${process.env.PUBLIC_URL}/placeholder_cookie_1.png`} />
                                                  <img src={`${process.env.PUBLIC_URL}/placeholder_cookie_1.png`} />
                                                            <img src={`${process.env.PUBLIC_URL}/placeholder_cookie_1.png`} />
                                                                      <img src={`${process.env.PUBLIC_URL}/placeholder_cookie_1.png`} />
                                                                                <img src={`${process.env.PUBLIC_URL}/placeholder_cookie_1.png`} />
                                                                                          <img src={`${process.env.PUBLIC_URL}/placeholder_cookie_1.png`} />
                                                                                                    <img src={`${process.env.PUBLIC_URL}/placeholder_cookie_1.png`} />
                    <img src={`${process.env.PUBLIC_URL}/placeholder_cookie_1.png`} />
                              <img src={`${process.env.PUBLIC_URL}/placeholder_cookie_1.png`} />
                                        <img src={`${process.env.PUBLIC_URL}/placeholder_cookie_1.png`} />
                                                  <img src={`${process.env.PUBLIC_URL}/placeholder_cookie_1.png`} />
                                                            <img src={`${process.env.PUBLIC_URL}/placeholder_cookie_1.png`} />
                                                                      <img src={`${process.env.PUBLIC_URL}/placeholder_cookie_1.png`} />
                                                                                <img src={`${process.env.PUBLIC_URL}/placeholder_cookie_1.png`} />
                                                                                          <img src={`${process.env.PUBLIC_URL}/placeholder_cookie_1.png`} />
          {/* {bioData.map((bio) => (
            <img
              src={bio.src}
              alt={bio.name}
              key={bio.name}
              onClick={() => handleBioImgClick(bio)}
            />
          ))} */}
        </div>

      </div>
      </div>
      <div className="footer">
        <p className="footer-copyright-text">
          @MaddysCreamBike 2025
        </p>
      </div>
    </>
  );
}
