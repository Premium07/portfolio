import React from "react";
import { about } from "../../constants/data";

const About = () => {
  return (
    <>
      {/* {cursor} */}
      <div
        id="about"
        className="w-full bg-zinc-900 p-4 sm:p-[2vw] sm:pl-[30vh]  text-white flex justify-between items-center gap-[4vw]"
      >
        <div className="w-2/6 pl-20">
          <div className="columns-2 gap-4">
            <div className="break-inside-avoid mb-4  rounded-lg">
              <img
                src="./dev.jpg"
                alt="Image 1"
                className="border-2 border-zinc-700 rounded-lg"
              />
            </div>
            <div className="mb-4  rounded-lg">
              <img
                src="./dev2.jpg"
                alt="Image 2"
                className="border-2 border-zinc-700 rounded-lg"
              />
            </div>
          </div>
          <div className="break-inside-avoid mb-4 rounded-lg">
            <img
              src="./image.jpg"
              alt="Image 3"
              className="size-96 rounded-lg border-2 border-zinc-700"
            />
          </div>
        </div>

        <div id="text" className="w-5/6 sm:w-1/2">
          <h5 className="opacity-60 mb-2.5">(ABOUT ME)</h5>
          <p className="leading-6 mb-8 font-medium text-lg text-justify">
            {about}
          </p>
          <a
            href="cv.pdf"
            download="resume"
            className="bg-zinc-800 px-10 py-3 rounded-full cursor-pointer hover:bg-zinc-900 border border-zinc-700 flex items-center w-fit justify-center"
          >
            Download CV <i className="ri-arrow-down-line ml-2 text-2xl"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
