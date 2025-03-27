import React from "react";
import { about } from "../../constants/data";

const About = () => {
  return (
    <>
      {/* {cursor} */}
      <div
        id="about"
        className="w-full bg-zinc-900 p-4 sm:p-[4vw] sm:pl-[30vw] text-white flex justify-between items-center gap-[4vw]"
      >
        <div>
          <img src="./premgif.gif" alt="" className="rounded-full w-[340px]" />
        </div>
        <div id="text" className="w-full sm:w-1/2">
          <h5 className="opacity-60 mb-2.5">(ABOUT ME)</h5>
          <p className="leading-6 mb-8 font-medium text-lg text-justify">
            {about}
          </p>
          <a
            href="cv.pdf"
            download="resume"
            className="bg-zinc-800 px-10 py-3 rounded-full cursor-pointer hover:bg-zinc-900 border border-zinc-700"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
