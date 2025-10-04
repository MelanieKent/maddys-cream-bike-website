import "./OurStory.css";

export const OurStory = () => {
  return (
    <div className="our-story-container">
      <p className="our-story-title">Where It All Began</p>
      <div className="todo-temp-spacer">...</div>
      <img className="our-story-visual-spacer" src={`${process.env.PUBLIC_URL}/placeholder_1.png`} alt="Placeholder 1" />
      <p className="our-story-title">Testimonials</p>
      <p className="testimonials-subheader">See What Our Customers Say:</p>
      <div className="todo-temp-spacer">...</div>
    </div>
  );
}
