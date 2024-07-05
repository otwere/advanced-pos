import React, { useState, useEffect } from "react";
import CalltoAction from "../CallToActionButton/CallToActionButton";
import styles from '../FooterComponent/Footer.module.css';

const Footer = ({ collapsed }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { 
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      className={`fixed bottom-0 h-16 flex justify-between items-center p-4 bg-[hsl(231, 26%, 95%)] shadow-none transition-all duration-300 ${
        hidden ? styles.hiddenFooter : ""
      } ${collapsed ? "w-[calc(100%-88px)] ml-[90px]" : "w-[calc(100%-262px)] ml-[272px]"}`}
    >
      <div className="flex items-center">
        <div className="text-xs text-gray-700">
          &copy; 2023 - {new Date().getFullYear()} &nbsp;
          Developed by :
          <a
            href="https://www.snave.info"
            target="_"
            className="text-blue-500 hover:text-gray-500 ml-1"
          >
            Snave Webhub Africa
          </a>
          &nbsp; | All Rights Reserved.
        </div>
      </div>
      <div className="pr-12 text-xs text-gray-700">
        Integrated Advanced EPR - POS (version 2.0.1)
      </div>
      <CalltoAction collapsed={collapsed} />
    </footer>
  );
};

export default Footer;
