import React from "react";
import { about } from "../../constants/data";
import Cursor from "./Cursor";

const About = ({ cursor }) => {
  return (
    <>
      {/* {cursor} */}
      <div
        id="about"
        className="w-full bg-zinc-900 p-4 sm:p-[4vw] sm:pl-[20vw] text-white flex justify-between items-center gap-[4vw]"
      >
        <div>
          <img src="./premgif.gif" alt="" className="rounded-xl w-[340px]" />
        </div>
        <div id="text" className="w-full sm:w-1/2">
          <h5 className="opacity-60 mb-2.5">(ABOUT ME)</h5>
          <p className="leading-6 mb-8 font-medium text-lg text-justify">
            {about}
          </p>
          <a
            href="cv.pdf"
            download="resume"
            className="resume-btn px-8 py-2 rounded-full border border-white no-underline text-white text-base font-semibold bg-[#121212] transition-all duration-300 cursor-pointer hover:bg-white hover:text-[#121212] hover:font-semibold"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
