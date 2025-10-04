import { PrimaryButton, SecondaryButton } from "../../components/button/Button";
import { LeftCookieBanner } from "../../components/left_cookie_banner/LeftCookieBanner";
import { RightCookieBanner } from "../../components/right_cookie_banner/RightCookieBanner";
import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
 } from '@mui/material';
import "./MenuAndCatering.css";
import { NamedInput, NamedTextArea } from "../../components/named_input/NamedInput";

export const MenuAndCatering = () => {
  return (
    <div className="menu-catering-container">
      <div className="menu-catering-top-container">
        <p className="menu-catering-title">Menu and Catering</p>
        <img
          className="bike-illustration-image"
          src={`${process.env.PUBLIC_URL}/maddys_bike_illustration.png`}
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
      <LeftCookieBanner
        img_src={`${process.env.PUBLIC_URL}/placeholder_cookie_1.png`}
        img_alt="Placeholder cookie 1"
        title="Sweet Chip Classic"
        description="A timeless pairing of Mini Chocolate Chip cookies wrapped around a scoop of dreamy Vanilla Bean ice cream. It’s nostalgic, playful, and just sweet enough to steal your heart. A gentle nod to first loves and forever favorites."
      />
      <RightCookieBanner
        img_src={`${process.env.PUBLIC_URL}/placeholder_cookie_2.png`}
        img_alt="Placeholder cookie 2"
        title="Lemonberry Bliss"
        description="A lively duet of tart and sweet — brings together golden Lemon cookies and lush Oregon Strawberry ice cream for a flavor that's as cheerful as it is delicious."
      />
      <LeftCookieBanner
        img_src={`${process.env.PUBLIC_URL}/placeholder_cookie_3.png`}
        img_alt="Placeholder cookie 3"
        title="Coco Mint Lover"
        description="Rich Double Chocolate cookies with a kiss of Sea Salt embrace cool Mint Chocolate Chip ice cream for a refreshingly bold affair. With just the right touch of sweetness, it’s a love story for the true chocolate devotee."
      />
      <RightCookieBanner
        img_src={`${process.env.PUBLIC_URL}/placeholder_cookie_4.png`}
        img_alt="Placeholder cookie 4"
        title="Sweet Ube Kiss"
        description="Brings together pillowy Ube Marbled cookies and creamy Vanilla Bean ice cream, creating a tender moment you’ll want to savor."
      />
      <div>
        <img
          className="more-coming-soon-banner"
          src={`${process.env.PUBLIC_URL}/cookie_banner_left.png`}
          alt=""
        />
        <p className="more-coming-soon-text">More Coming Soon...</p>
        <div className="menu-catering-spacer"></div>
      </div>
      <div className="catering-inquiry-section">
        <p className="catering-inquiry-title">Catering Inquiry</p>
        <div className="catering-inquiry-form-container">
          <p className="catering-inquiry-text">
            * We currently only offer catering services and pre-prepared boxes. 
            Please fill out the form below if you would like to book Maddy&#39;s for an event!
          </p>
          <form className="catering-inquiry-form">
            {/* TODO */}
            <NamedInput title="Full Name" placeholder="E.g. John Smith" required={true} />
            <NamedInput title="Business Name (if applicable)" placeholder="E.g. Some Company" />
            <NamedInput title="Email" placeholder="E.g. example@gmail.com" required={true} />
            <NamedInput title="Phone Number" placeholder="E.g. 123-456-7890" required={true} />
            {/* TODO: turn this into date / time dropdown */}
            <NamedInput title="Event Date and Time" placeholder="E.g. 01/01/2025" required={true} />
            <NamedInput title="Event Address" placeholder="E.g. 1234 Freshwater Dr" required={true} />
            <NamedInput title="Event Description" placeholder="Please enter relevant event details" required={true} />
            <NamedTextArea title="Event description" placeholder="Please describe the nature of the event" required={true} />
            <div className="submit-button-container">
              <SecondaryButton>Submit</SecondaryButton>
            </div>
          </form>
          <div className="catering-inquiry-form-spacer"></div>
        </div>
      </div>
      <img
        className="menu-catering-visual-spacer"
        src={`${process.env.PUBLIC_URL}/placeholder_1.png`}
        alt="Placeholder 1"
      />
      <div className="faqs-section">
        <p className="faqs-title">FAQs</p>
        {/* TODO: make this scalable with nested looping */}
        <div className="faq-subsection">
          <p className="faq-subtitle">Sub Section One</p>
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
              <p className="accordion-title">What kinds of events do you cater?</p>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "#9B6868" }}>
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
              <p className="accordion-title">What's included in your catering services?</p>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "#9B6868" }}>
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
              <p className="accordion-title">How many guests can you serve?</p>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "#9B6868" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <p className="faq-subtitle">Sub Section Two</p>
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
              <p className="accordion-title">How much does it cost?</p>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "#9B6868" }}>
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
              <p className="accordion-title">Do you have a minimum order?</p>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "#9B6868" }}>
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
              <p className="accordion-title">How far in advance should I book?</p>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "#9B6868" }}>
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
              <p className="accordion-title">What flavors do you offer?</p>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "#9B6868" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <p className="faq-subtitle">Sub Section Three</p>
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
              <p className="accordion-title">Can you accommodate dietary restrictions?</p>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "#9B6868" }}>
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
              <p className="accordion-title">Do you need power or special setup?</p>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "#9B6868" }}>
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
              <p className="accordion-title">What areas do you serve?</p>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "#9B6868" }}>
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
              <p className="accordion-title">What’s your cancellation policy?</p>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "#9B6868" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="menu-catering-spacer"></div>
      <img
        className="menu-catering-visual-spacer"
        src={`${process.env.PUBLIC_URL}/placeholder_2.png`}
        alt="Placeholder 2"
      />
    </div>
  );
}
