import { Grid } from "@mui/material";
import "./WhyMaddys.css";

export const WhyMaddys = () => {
  return (
    <div className="why-maddys-container">
      <p className="why-maddys-title">Why Maddy's?</p>
      <div className="todo-temp-spacer">...</div>
      <div className="our-mission-container">
        <Grid container spacing={2}>
          <Grid size={3}>
            <div className="our-mission-image-container">
              <img
                className="our-mission-image"
                src={`${process.env.PUBLIC_URL}/our_mission_circle.png`}
                alt=""
              />
            </div>
          </Grid>
          <Grid size={9}>
            <p className="our-mission-title">Our Mission is Simple</p>
            <div className="our-mission-text-container">
              <p className="our-mission-text">
                Spread joy, one sammie at a time. We create <span style={{ fontWeight: "bold" }}>memorable dessert experiences</span> that bring together, spark conversations, and remind us that even in a seemingly divided world, happiness is best shared.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
