import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import {
  useMediaQuery,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { SECTIONS } from "../../constants/constants";
import "./Navbar.css";

export const Navbar = ({ activeSection }) => {
  const [open, setOpen] = useState(false);

  const smallScreen = useMediaQuery('(max-width:1200px)');

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollWithOffset = (el) => {
    const yOffset = -90; // 5.625rem = 90px
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const DrawerList = (
    <Box className="drawer-container" sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {SECTIONS.map((section, index) => (
          <>
            <ListItem key={section.id} disablePadding>
              <ListItemButton>
                <HashLink
                  key={section.id}
                  className="navbar-link mobile-navbar-link"
                  to={`/#${section.id}`}
                  scroll={scrollWithOffset}
                >
                  {section.name}
                </HashLink>
              </ListItemButton>
            </ListItem>
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-inner-container">
          <img
            className="navbar-logo"
            src={`${process.env.PUBLIC_URL}/maddys_logo.png`}
            alt="Maddy's Cream Bike logo"
          />
          <div className="navbar-links-container">
            {!smallScreen && SECTIONS.map((section) => (
              <HashLink
                key={section.id}
                className={`navbar-link ${activeSection === section.id ? "active" : ""}`}
                to={`/#${section.id}`}
                scroll={scrollWithOffset}
              >
                {section.name}
              </HashLink>
            ))}
            <div className="navbar-icons-container">
              <a
                href="https://www.facebook.com/people/Maddys-Cream-Bike/61570810093626/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="navbar-icon"
                  icon={faFacebookF}
                  size="lg"
                />
              </a>
              <a
                href="https://www.instagram.com/maddyscreambike/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="navbar-icon"
                  icon={faInstagram}
                  size="lg"
                />
              </a>
              <a href="mailto:Caroline@MaddysCreamBike.com">
                <FontAwesomeIcon
                  className="navbar-icon"
                  icon={faEnvelope}
                  size="lg"
                />
              </a>
              {smallScreen &&
              (
                <FontAwesomeIcon
                  className="navbar-hamburger-menu"
                  icon={faBars}
                  size="lg"
                  onClick={toggleDrawer(true)}
              />
              )}
            </div>
          </div>
        </div>
      </div>
      <Drawer
        open={open}
        anchor="right"
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#FEFDF9',
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </>
  );
};
