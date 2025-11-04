import { TestimonialCard } from "../../components/testimonial_card/TestimonialCard.jsx";
import { Grid } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./OurStory.css";

export const OurStory = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1650 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1650, min: 1325 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1325, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const testimonials = [
    {
      name: "Bowen Fuller",
      comment: "Genuinely one of the greatest composed desserts I’ve ever consumed. The deliciously unique flavors of the soft, heaven like cookies that perfectly encompass pure and whole ice cream showcase an entirely different level of ice cream sandwiches."
    },
    {
      name: "T Kent",
      comment: "Wow! My daughter and I loved their Choco Mint Lover! A rich double chocolate chip cookie sandwiching mint chocolate chip ice cream. The combination was perfect -- each bite is refreshing, rich, and perfectly balanced in sweetness! The ice cream bike itself is adorable. The owner is friendly and attentive."
    },
    {
      name: "Leon Taylor",
      comment: "We had Maddy's come out for a neighborhood party and they were fantastic! Everyone loved their ice cream sandwiches and the push pops were a big hit! We would definitely have them back again."
    },
    {
      name: "Mary Messer",
      comment: "Our group tried one of each of the flavor combos: Sweet Chip Classic, Lemonberry Bliss, Choco Mint Lover and Sweet Ube Kiss. Honestly, you can’t go wrong with any of them - so delicious! Definitely recommend!"
    },
    {
      name: "May Koo",
      comment: "What a delightful discovery! This new small business in Portland offers truly exceptional ice cream sandwiches, and I had the joy of trying them at Gabriel Park during the Portland Sunday Parkways event. They were serving from the most charming little ice cream bike — such a fun and inviting touch!"
    },
    {
      name: "Kaitlyn Carrier",
      comment: "We used the ice cream bike for a summer event at a winery for around 80 people and it was AMAZING! Caroline was so easy to work with, helped us customize our menu, and was such a friendly and cute addition to our event. You can tell all the love and care that goes into each sandwich, from the flavors to the packaging."
    },
  ]

  return (
    <div className="our-story-container">
      <div className="where-it-all-began-container">
        <Grid container spacing={2}>
          <Grid size={8}>
            <p className="our-story-title">Where It All Began</p>
            <div className="where-it-all-began-text-container">
              <p className="where-it-all-began-text">
                Hello, my name is Caroline. Maddy&#39;s Cream Bike was inspired by my daughter, Maddy—the joy behind everything I do. When she was just a baby, I wanted to build something that captured the same sense of wonder, warmth, and connection that she brought into our lives.
                <br /><br />
                The idea started simple: to <span style={{ fontWeight: "bold" }}>spread a little happiness, one sammie at a time.</span> We named it Maddy’s because it reflects the spirit of childhood joy—that feeling you get when the ice cream truck rolls by or when you share a treat with someone you love.
                <br /><br />
                Our vintage-style freezer bike became the perfect symbol of that—it slows people down, invites smiles, and creates those small, shared moments that make a day special. Every cookie is baked from scratch, every sandwich assembled with care, and every event feels personal—because at heart, Maddy’s Cream Bike is about bringing people together through simple, nostalgic joy.
              </p>
            </div>
          </Grid>
          <Grid size={4}>
            <div className="where-it-all-began-image-container">
              <img
                className="where-it-all-began-image"
                src={`${process.env.PUBLIC_URL}/where_it_all_began_polaroid.png`}
                alt=""
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="about-us-container">
        <Grid container spacing={2}>
          <Grid size={5}>
            <div className="about-us-image-container">
              <img
                className="about-us-image"
                src={`${process.env.PUBLIC_URL}/about_us_polaroids.png`}
                alt=""
              />
            </div>
          </Grid>
          <Grid size={7}>
            <p className="our-story-title about-us-title">About Us</p>
            <div className="about-us-text-container">
              <p className="about-us-text">
                We’re Maddy’s Cream Bike, a Portland-based handcrafted ice cream sandwich venture born from a love of slowing down, connecting, and sharing joy through simple, nostalgic desserts. Founded by a tech start up executive turned ice cream dreamers, we set out to reimagine the classic ice cream sandwich—small-batch cookies baked from scratch, paired with premium ice cream, served from a beautifully vintage-style freezer bike.
                <br /><br />
                Our setup is as unique as our story—fully self-contained, no power or prep required, and designed to bring a smile anywhere we roll in. From corporate events, brand activations and weddings to neighborhood block parties, guests love the charm, the look, and of course, the taste of our deliciously handcrafted ice cream sammies.
                <br /><br />
                Since launching in early 2025, we’ve quickly built a loyal following and have been invited to cater community festivals, company events, and local celebrations. The response is incredible—people call it <span style={{ fontWeight: "bold" }}>“the perfect Portland treat”</span> and <span style={{ fontWeight: "bold" }}>“the dessert everyone talks about.”</span>
                <br /><br />
                At Maddy’s, our mission is simple: to create shared memories and connections—when we share something sweet, we share something human. 
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
      <img className="our-story-visual-spacer" src={`${process.env.PUBLIC_URL}/098.jpg`} alt="Placeholder 1" />
      <p className="our-story-title">Testimonials</p>
      <p className="testimonials-subheader">See what our customers say:</p>
      <div className="testimonials-container">
        <div className="testimonials-carousel">
          <Carousel responsive={responsive}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                comment={testimonial.comment}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
