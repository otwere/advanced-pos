import React, { useState, useEffect } from "react";
import CalltoAction from "../CallToActionButton/CallToActionButton";
import styles from "../FooterComponent/Footer.module.css";

const Footer = ({ collapsed }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY <= 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 w-full  h-10 flex justify-between items-center p-4 bg-none shadow-lg transition-all duration-300 ${hidden ? styles.hiddenFooter : ""}`}
      role="contentinfo"
    >
      <div className="flex flex-col sm:flex-row sm:items-center w-full">
        <div className="flex justify-between w-full sm:w-auto">
          <div className="ml-1 text-nowrap text-xs text-gray-700 text-center sm:text-left">
            &copy; 2023 - {new Date().getFullYear()}
            <a
              href="https://www.snave.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 ml-1"
              title="Visit Snave Webhub Africa website"
            >
              {/* Snave Webhub Africa  */}
            </a> | &nbsp; All Rights Reserved.
          </div>
          <div className="sm:hidden mt-2">
            <CalltoAction collapsed={collapsed} />
          </div>
        </div>
        <div className="hidden sm:flex sm:pl-8 text-xs text-gray-700 w-full justify-between items-center ml-[56rem]">
          <span>Integrated Advanced EPR - POS (version 2.0.1)</span>
          <CalltoAction collapsed={collapsed} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
