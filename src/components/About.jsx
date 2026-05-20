import React from "react";
import { about } from "../../constants/data";

const About = () => {
  return (
    <>
      {/* {cursor} */}
      <div
        id="about"
        className="w-full bg-zinc-900 p-4 sm:p-6 md:p-8 lg:p-[2vw] lg:pl-[30vh] pt-8 sm:pt-16 text-white flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-[4vw]"
      >
        <div className="w-full lg:w-2/6 lg:pl-20">
          <div className="columns-1 sm:columns-2 gap-4">
            <div className="break-inside-avoid mb-4 rounded-lg">
              <img
                src="./dev.jpg"
                alt="Image 1"
                className="border-2 border-zinc-700 rounded-lg w-full h-auto"
              />
            </div>
            <div className="mb-4 rounded-lg">
              <img
                src="./dev2.jpg"
                alt="Image 2"
                className="border-2 border-zinc-700 rounded-lg w-full h-auto"
              />
            </div>
          </div>
          <div className="break-inside-avoid mb-4 rounded-lg">
            <img
              src="./image.jpg"
              alt="Image 3"
              className="w-full sm:w-80 md:w-96 h-auto rounded-lg border-2 border-zinc-700"
            />
          </div>
        </div>

        <div id="text" className="w-full lg:w-1/2">
          <h5 className="opacity-60 mb-2.5 text-sm md:text-base">(ABOUT ME)</h5>
          <p className="leading-6 mb-8 font-medium text-sm md:text-base lg:text-lg text-justify">
            {about}
          </p>
          <a
            href="cv.pdf"
            download="resume"
            className="bg-zinc-800 px-6 sm:px-10 py-2 sm:py-3 rounded-full cursor-pointer hover:bg-zinc-900 border border-zinc-700 flex items-center w-fit justify-center text-sm sm:text-base"
          >
            Download CV <i className="ri-arrow-down-line ml-2 text-xl sm:text-2xl"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
