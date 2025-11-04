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
  const handleMenuDownload = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/maddys_catering_menu_2025.pdf`;
    link.download = "Maddys_Catering_Menu_2025.pdf";
    link.click();
  }

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
              * We currently only offer catering services and pre-prepared boxes. 
              Please fill out the form below if you would like to book Maddy&#39;s for an event!
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
              <SecondaryButton>Submit</SecondaryButton>
            </div>
          </form>
          <div className="catering-inquiry-form-spacer"></div>
        </div>
      </div>
      <img
        className="menu-catering-visual-spacer"
        src={`${process.env.PUBLIC_URL}/temp_faqs.jpg`}
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
              We can comfortably serve anywhere from <span style={{ fontWeight: "bold" }}>75 to 700 guests</span> per event. For larger events, just reach out—we’re happy to discuss custom options.
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
              Yes, we typically require a <span style={{ fontWeight: "bold" }}>75-guest minimum</span> for catering services. If you have a smaller event, reach out—we might still be able to accommodate.
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
              Our catering pricing is simple and all-inclusive:
              <ul>
                <li><span style={{ fontWeight: "bold" }}>Bike Service Fee:</span> $500 This covers our signature bike setup, one friendly server, and up to 2 hours of service.</li>
                <li><span style={{ fontWeight: "bold" }}>Delivery & Setup:</span> $200 Includes transport, setup, breakdown, and cleanup—so you don’t have to lift a finger.</li>
                <li><span style={{ fontWeight: "bold" }}>Ice Cream Sammies:</span> Starting at <span style={{ fontWeight: "bold" }}>$7 each</span> Our premium handcrafted sammies are made with Tillamook ice cream and house-baked cookies. We can help you estimate quantities based on your guest count (most people order 1–2 per guest).</li>
              </ul>
              For example, a 100-guest event typically comes to around <span style={{ fontWeight: "bold" }}>$1,300–$1,500 total</span>, depending on your menu selections.
              <br /><br />
              We’re happy to provide a customized quote — just reach out!
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
              Our full-service catering includes:
              <ul>
                <li>Our signature ice cream bike setup</li>
                <li>A menu of handcrafted ice cream sandwiches</li>
                <li>A friendly attendant to serve your guests</li>
                <li>Setup and cleanup—no effort required on your part!</li>
              </ul>
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
              You can find our current lineup of handcrafted ice cream sammies in the <span style={{ fontWeight: "bold" }}>Catering Menu</span> section of our website. We typically offer up to <span style={{ fontWeight: "bold" }}>2 or 4 flavors per event</span>, featuring Tillamook ice cream and our house-baked cookies.
              <br /><br />
              We also occasionally roll out limited-edition seasonal flavors—follow us on Instagram to see what’s new and delicious!
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
        src={`${process.env.PUBLIC_URL}/temp_why_maddys.jpg`}
        alt="Placeholder 2"
      />
    </div>
  );
}
