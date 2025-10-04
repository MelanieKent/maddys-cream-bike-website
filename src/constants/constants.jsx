import { Hero } from "../sections/hero/Hero.jsx";
import { MenuAndCatering } from "../sections/menu_and_catering/MenuAndCatering.jsx";
import { WhyMaddys } from "../sections/why_maddys/WhyMaddys.jsx";
import { OurStory } from "../sections/our_story/OurStory.jsx";
import { FindUs } from "../sections/find_us/FindUs.jsx";

export const SECTIONS = [
    { id: "home", name: "HOME", component: <Hero /> },
    { id: "menu-and-catering", name: "MENU & CATERING", component: <MenuAndCatering /> },
    { id: "why-maddys", name: "WHY MADDY'S", component: <WhyMaddys /> },
    { id: "our-story", name: "OUR STORY", component: <OurStory /> },
    { id: "find-us", name: "FIND US", component: <FindUs /> },
]

// For phones, screen size < 600px
export const XS_SCREEN_SIZE = 600;

// For tablets, 600px <= screen size < 1200px
export const MD_SCREEN_SIZE = 1200;

// For laptops and desktops, screen size >= 1200px
