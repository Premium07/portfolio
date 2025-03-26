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
      className="bg-zinc-900 text-white flex justify-between items-center py-4 px-7.5"
    >
      <div className="footer-left flex gap-5">
        <h5 className="current-year text-lg">&copy; {currentYear}</h5>
        <h5 className="current-time text-lg">{currentTime}</h5>
      </div>
      <div className="footer-right flex gap-12">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            className="link uppercase text-sm font-semibold text-white no-underline"
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
