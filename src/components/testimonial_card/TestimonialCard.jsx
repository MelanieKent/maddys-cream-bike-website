import "./TestimonialCard.css";

export const TestimonialCard = ({
  name,
  comment
}) => {
  return (
    <div className="testimonial-card">
      <div className="inner-testimonial-card">
        <img
          className="testimonial-card-profile-image"
          src={`${process.env.PUBLIC_URL}/testimonial_profile.png`}
          alt=""
          />
        <div className="testimonial-text-container">
          <p className="testimonial-quotation">
            "
          </p>
          <p className="testimonial-review">
            {comment}
          </p>
          <p
            className="testimonial-quotation"
            style={{ alignSelf: "end" }}
          >
            "
          </p>
        </div>
        <div className="testimonial-footer">
          <p className="testimonial-name">
            - {name}
          </p>
          <img
            className="five-stars-image"
            src={`${process.env.PUBLIC_URL}/five_star_review.png`}
            alt="Five stars"
          />
        </div>
      </div>
    </div>
  );
}