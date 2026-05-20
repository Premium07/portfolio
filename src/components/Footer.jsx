import React, { useState, useEffect } from "react";
import { socialLinks } from "../../constants/data";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      hours = (hours < 10 ? "0" : "") + hours;
      minutes = (minutes < 10 ? "0" : "") + minutes;
      seconds = (seconds < 10 ? "0" : "") + seconds;

      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime(); // Initial call to display time immediately
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <footer
      id="footer"
      className="bg-zinc-900 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 pb-6 sm:pb-8 px-3 sm:px-7.5 gap-4 sm:gap-0"
    >
      <div className="footer-left flex gap-3 sm:gap-5 text-xs sm:text-base">
        <h5 className="current-year">&copy; {currentYear}</h5>
        <h5 className="current-time flex items-center gap-1">
          <i className="ri-time-line"></i>
          <span>{currentTime}</span>
        </h5>
      </div>
      <div className="footer-right flex flex-wrap gap-4 sm:gap-8 md:gap-12 text-xs sm:text-base">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            className="relative pb-0.5 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-px before:bg-white before:transition-all before:duration-300 before:ease-in hover:before:w-full"
            to={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
