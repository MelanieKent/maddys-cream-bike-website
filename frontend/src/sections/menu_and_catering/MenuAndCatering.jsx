import { PrimaryButton } from "../../components/button/Button";
import { LeftCookieBanner } from "../../components/left_cookie_banner/LeftCookieBanner";
import { RightCookieBanner } from "../../components/right_cookie_banner/RightCookieBanner";
import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button
 } from '@mui/material';
import "./MenuAndCatering.css";

export const MenuAndCatering = () => {
  return (
    <div className="menu-catering-container">
      <div className="menu-catering-top-container">
        <p className="menu-catering-title">Menu and Catering</p>
        <img
          className="bike-illustration-image"
          src="maddys_bike_illustration.png"
          alt="Maddy's Bike Illustration"
        />
      </div>
      <PrimaryButton>
        <div className="download-menu-button">
          <DownloadIcon />
          Download Menu
        </div>
      </PrimaryButton>
      <div className="menu-catering-spacer"></div>
      <LeftCookieBanner />
      <RightCookieBanner />
      <div>
        <img className="more-coming-soon-banner" src="cookie_banner.png" alt="" />
        <p>More Coming Soon...</p>
      </div>
      <div className="catering-inquiry-section">
        <p className="catering-inquiry-title">Catering Inquiry</p>
        <p className="catering-inquiry-text">
          * We currently only offer catering services and pre-prepared boxes. 
          Please fill out the form below if you would like to book Maddy&#39;s for an event!
        </p>
        <form>
          {/* TODO */}
        </form>
      </div>
      <img src="placeholder_1.png" alt="Placeholder 1" />
      <div className="faqs-section">
        <p className="faqs-title">FAQs</p>
        <Accordion
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "1px solid #9B6868",
            marginBottom: "1rem"
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "1px solid #9B6868",
            marginBottom: "1rem"
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "1px solid #9B6868",
            marginBottom: "1rem"
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography component="span">Accordion Actions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions>
        </Accordion>
      </div>
      <img src="placeholder_2.png" alt="Placeholder 2" />
    </div>
  );
}
