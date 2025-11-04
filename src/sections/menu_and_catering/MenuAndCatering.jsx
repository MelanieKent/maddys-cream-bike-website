import { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../../components/button/Button";
import { LeftCookieBanner } from "../../components/left_cookie_banner/LeftCookieBanner";
import { RightCookieBanner } from "../../components/right_cookie_banner/RightCookieBanner";
import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Fade,
  Snackbar,
  Slide
 } from '@mui/material';
import "./MenuAndCatering.css";
import { NamedInput, NamedTextArea } from "../../components/named_input/NamedInput";

export const MenuAndCatering = () => {
  const [state, setState] = useState({
    open: false,
    transition: Fade,
  });

  const handleMenuDownload = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/maddys_catering_menu_2025.pdf`;
    link.download = "Maddys_Catering_Menu_2025.pdf";
    link.click();
  }

  const slideTransition = (props) => {
    return <Slide {...props} direction="left" />;
  }

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

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
      <PrimaryButton onClick={handleMenuDownload}>
        <div className="download-menu-button">
          <DownloadIcon />
          Download Menu
        </div>
      </PrimaryButton>
      <div className="menu-catering-spacer"></div>
      <LeftCookieBanner
        img_src={`${process.env.PUBLIC_URL}/060_classic.png`}
        img_alt="Placeholder cookie 1"
        title="Sweet Chip Classic"
        description="A timeless pairing of Mini Chocolate Chip cookies wrapped around a scoop of dreamy Vanilla Bean ice cream. It’s nostalgic, playful, and just sweet enough to steal your heart. A gentle nod to first loves and forever favorites."
      />
      <RightCookieBanner
        img_src={`${process.env.PUBLIC_URL}/064_lemon.png`}
        img_alt="Placeholder cookie 2"
        title="Lemonberry Bliss"
        description="A lively duet of tart and sweet — brings together golden Lemon cookies and lush Oregon Strawberry ice cream for a flavor that's as cheerful as it is delicious."
      />
      <LeftCookieBanner
        img_src={`${process.env.PUBLIC_URL}/065_choco.png`}
        img_alt="Placeholder cookie 3"
        title="Coco Mint Lover"
        description="Rich Double Chocolate cookies with a kiss of Sea Salt embrace cool Mint Chocolate Chip ice cream for a refreshingly bold affair. With just the right touch of sweetness, it’s a love story for the true chocolate devotee."
      />
      <RightCookieBanner
        img_src={`${process.env.PUBLIC_URL}/067_ube.png`}
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
      <div id="catering" className="catering-inquiry-section">
        <p className="catering-inquiry-title">Catering Inquiry</p>
        <div className="catering-inquiry-form-container">
          <div className="catering-inquiry-text-container">
            <p className="catering-inquiry-text">
              * We currently offer two delightful ways to enjoy Maddy&#39;s — our Full-Service Cream Bike Catering Experience or our convenient Party-Ready Cooler Box drop off for smaller gatherings.
              Complete the form below to bring our treats to your event!
            </p>
          </div>
          <form className="catering-inquiry-form">
            {/* TODO */}
            <NamedInput title="Full Name" placeholder="E.g. John Smith" required={true} />
            <NamedInput title="Business Name (if applicable)" placeholder="E.g. Some Company" />
            <NamedInput title="Email" placeholder="E.g. example@gmail.com" required={true} />
            <NamedInput title="Phone Number" placeholder="E.g. 123-456-7890" required={true} />
            {/* TODO: turn this into date / time dropdown */}
            <NamedInput title="Event Date and Time" type="date" placeholder="E.g. 01/01/2025 5:00 PM" required={true} />
            <NamedInput title="Event Address" placeholder="E.g. 1234 Freshwater Dr" required={true} />
            <NamedTextArea title="Event Description" placeholder="Please describe the nature of the event" required={true} />
            <div className="submit-button-container">
              <SecondaryButton onClick={handleClick(slideTransition)}>Submit</SecondaryButton>
            </div>
              <Snackbar
                open={state.open}
                onClose={handleClose}
                slots={{ transition: state.Transition }}
                message="Form submission implementation in progress..."
                autoHideDuration={2000}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                ContentProps={{
                  sx: {
                    backgroundColor: "#FCF3E2",
                    color: "#545555",
                    boxShadow: 3,
                    border: "none",
                  },
                }}
              />
          </form>
          <div className="catering-inquiry-form-spacer"></div>
        </div>
      </div>
      <img
        className="menu-catering-visual-spacer"
        src={`${process.env.PUBLIC_URL}/068.jpg`}
        alt="Placeholder 1"
      />
      <div className="faqs-section">
        <p className="faqs-title">FAQs</p>
        {/* TODO: make this scalable with nested looping */}
        <div className="faq-subsection">
          <p className="faq-subtitle">Events & Booking</p>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "1px solid #9B6868",
              marginBottom: "1rem",
              width: "60rem"
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
              We cater a wide variety of events! From corporate gatherings and office celebrations to weddings, birthdays, school events, sports and community festivals—Maddy’s Cream Bike brings premium handcrafted joy to any occasion.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "1px solid #9B6868",
              marginBottom: "1rem",
              width: "60rem"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <p className="accordion-title">How many guests can you serve?</p>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "#9B6868" }}>
              We can comfortably serve anywhere from <span style={{ fontWeight: "bold" }}>30 to 700 guests</span>, depending on your needs.
              <br /><br />
              Our <span style={{ fontWeight: "bold" }}>Party-Ready Cooler Box</span> drop off is perfect for smaller gatherings (around 30–60 guests), while our <span style={{ fontWeight: "bold" }}>full-service Cream Bike</span> can easily roll up to serve anywhere from 75 to 700 guests. For larger events, just reach out—we&#39;re happy to create a custom plan for you.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "1px solid #9B6868",
              marginBottom: "1rem",
              width: "60rem"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <p className="accordion-title">Do you have a minimum order?</p>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "#9B6868" }}>
              Yes, we typically require a 75-guest minimum for our full-service cream bike catering experience.
              <br /><br />
              For smaller gatherings, our Party-Ready Cooler Box is a perfect fit (serves 30–60 guests). It’s a simple drop-off and pick-up service—no setup required, just chill, serve, and enjoy!
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "1px solid #9B6868",
              marginBottom: "1rem",
              width: "60rem"
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
              We recommend booking at least <span style={{ fontWeight: "bold" }}>3-4 weeks in advance</span>, especially for peak seasons (summer and holidays). Last-minute inquiries? Contact us—we’ll do our best to fit you in.
            </AccordionDetails>
          </Accordion>
          <p className="faq-subtitle">Pricing & Packages</p>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "1px solid #9B6868",
              marginBottom: "1rem",
              width: "60rem"
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
              Our pricing is simple and all-inclusive—designed to make your event effortless and joyful.
              <br /><br />
              <span style={{ fontWeight: "bold" }}>Full-Service Cream Bike Catering</span>
              <ul>
                <li><span style={{ fontWeight: "bold" }}>Bike Service Fee:</span> $500—includes our signature bike setup, one friendly server, and up to 2 hours of service.</li>
                <li><span style={{ fontWeight: "bold" }}>Delivery & Setup:</span> $200—covers transport, setup, breakdown, and cleanup, so you don’t have to lift a finger.</li>
                <li><span style={{ fontWeight: "bold" }}>Ice Cream Sammies:</span> Starting at $7 each—handcrafted with Tillamook ice cream and our house-baked cookies.</li>
              </ul>
              <span style={{ fontStyle: "italic" }}>Example: A 100-guest event typically ranges from $1,400–$1,600 total, depending on your menu selections.</span>
              <br /><br />
              <span style={{ fontWeight: "bold" }}>Party-Ready Cooler Box (Drop-Off Service)</span>
              <br />
              Our Party-Ready Cooler Box is perfect for smaller gatherings (30–60 guests).
              <ul>
                <li><span style={{ fontWeight: "bold" }}>Ice Cream Sammies:</span> Starting at $7 each—handcrafted with Tillamook ice cream and our house-baked cookies.</li>
                <li><span style={{ fontWeight: "bold" }}>Delivery & Packaging:</span> $200–$350—includes drop-off, next-day pick-up, and premium presentation in our branded cooler box.</li>
              </ul>
              Everything arrives ready to serve—no setup required, just chill, enjoy, and we&#39;ll handle the rest.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "1px solid #9B6868",
              marginBottom: "1rem",
              width: "60rem"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <p className="accordion-title">What’s included in your catering service?</p>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "#9B6868" }}>
              Our <span style={{ fontWeight: "bold" }}>full-service catering</span> includes everything you need for a seamless (and joy-filled) experience:
              <ul>
                <li>Our signature <span style={{ fontWeight: "bold" }}>Cream Bike</span> setup—charming and photo-ready</li>
                <li>A curated menu of <span style={{ fontWeight: "bold" }}>handcrafted ice cream sammies</span></li>
                <li>A friendly <span style={{ fontWeight: "bold" }}>attendant</span> to serve your guests with a smile</li>
                <li><span style={{ fontWeight: "bold" }}>Setup and cleanup</span>—you won&#39;t have to lift a finger!</li>
              </ul>
              For smaller gatherings, our <span style={{ fontWeight: "bold" }}>Party-Ready Cooler Box</span> offers the same handcrafted sammies, beautifully packaged and ready to enjoy with simple <span style={{ fontWeight: "bold" }}>drop-off and pick-up service</span>.
            </AccordionDetails>
          </Accordion>
          <p className="faq-subtitle">Flavors & Dietary Needs</p>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "1px solid #9B6868",
              marginBottom: "1rem",
              width: "60rem"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <p className="accordion-title">What flavors do you offer?</p>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "#9B6868" }}>
              You can find our current lineup of handcrafted ice cream sammies in the Catering Menu section of our website. We typically offer up to 2 or 4 flavors per event, featuring our homemade specialty cookies paired with premium Tilimook ice cream.
              <br /><br />
              We also occasionally roll out <span style={{ fontWeight: "bold" }}>limited-edition seasonal flavors</span>—follow us on Instagram to see what&#39;s new and delicious!
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "1px solid #9B6868",
              marginBottom: "1rem",
              width: "60rem"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <p className="accordion-title">Can you accommodate dietary restrictions?</p>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "#9B6868" }}>
              Yes! We believe everyone should get to enjoy a sweet treat. We offer <span style={{ fontWeight: "bold" }}>dairy-free sorbet push pops</span> that are also gluten-free—perfect for guests with dietary restrictions or preferences.
              <br /><br />
              If you have specific needs or allergy concerns, just let us know when booking. We’ll work with you to find options that suit your group.
            </AccordionDetails>
          </Accordion>
          <p className="faq-subtitle">Setup & Logistics</p>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "1px solid #9B6868",
              marginBottom: "1rem",
              width: "60rem"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <p className="accordion-title">Do you need power or special setup?</p>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "#9B6868" }}>
              Nope! Our ice cream bike is completely self-contained and doesn't require power. We just need a flat area for setup—about 6x8 feet of space.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "1px solid #9B6868",
              marginBottom: "1rem",
              width: "60rem"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <p className="accordion-title">What areas do you serve?</p>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "#9B6868" }}>
              We’re based in <span style={{ fontWeight: "bold" }}>Portland, OR</span>, and happily cater events within a 30-minute drive with no additional travel fee.
              <br /><br />
              If your event is 30–60 minutes away, a small travel surcharge will apply. Events over 1 hour from Portland are welcome too—just reach out for a custom quote!
              We’ll confirm all pricing in your personalized proposal.
            </AccordionDetails>
          </Accordion>
          <p className="faq-subtitle">Policies</p>
          <Accordion
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "1px solid #9B6868",
              marginBottom: "1rem",
              width: "60rem"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <p className="accordion-title">What’s your cancellation policy?</p>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "#9B6868" }}>
              We understand that plans can change, and we try to be as flexible as possible. Here’s how our cancellation policy works:
              <ul>
                <li><span style={{ fontWeight: "bold" }}>More than 7 days before your event:</span> Your deposit is non-refundable, but no additional payment is required.</li>
                <li><span style={{ fontWeight: "bold" }}>Within 7 days of your event:</span> The full payment is due, as we’ve reserved your date and begun preparing for your event.</li>
              </ul>
              If you need to reschedule, let us know—we’ll do our best to accommodate based on availability.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="menu-catering-spacer"></div>
      <img
        className="menu-catering-visual-spacer"
        src={`${process.env.PUBLIC_URL}/035.jpg`}
        alt="Placeholder 2"
      />
    </div>
  );
}
