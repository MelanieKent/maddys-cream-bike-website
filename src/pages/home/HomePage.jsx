import { useEffect, useRef, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar.jsx";
import { DiscountPopup } from "../../components/discount_popup/DiscountPopup.jsx";
import { SECTIONS } from "../../constants/constants";
import "./HomePage.css"

export const HomePage = () => {
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.15 }
    );

    SECTIONS.forEach((section) => {
      if (sectionRefs.current[section.id]) {
        observer.observe(sectionRefs.current[section.id]);
      }
    });

    return () => {
      SECTIONS.forEach((section) => {
        if (sectionRefs.current[section.id]) {
          observer.unobserve(sectionRefs.current[section.id]);
        }
      });
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash.split("#")[1];
    if (hash && sectionRefs.current[hash]) {
      sectionRefs.current[hash].scrollIntoView({ behavior: "smooth" });
    }

    const onHashChange = () => {
      const newHash = window.location.hash.split("#")[2];
      if (newHash && sectionRefs.current[newHash]) {
        sectionRefs.current[newHash].scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <div className="homepage-container">
        { SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            ref={(el) => (sectionRefs.current[section.id] = el)}
          >
            { section.component }
          </section>
        ))}
      </div>
      <DiscountPopup />
    </>
  );
}
