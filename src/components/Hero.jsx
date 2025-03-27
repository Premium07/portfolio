import React, { useRef } from "react";
import { Expo, gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { icons } from "../../constants/data";

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from("#nav", {
        y: "-20",
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 2.5,
      });

      tl.to(".bounding-elem", {
        y: "0",
        ease: Expo.easeInOut,
        duration: 2,
        stagger: 0.2,
        delay: -1,
      });

      tl.from("#hero-footer", {
        y: "-10",
        opacity: 0,
        ease: Expo.easeInOut,
        delay: -1,
        duration: 1.3,
      });
    },
    { scope: heroRef }
  );

  return (
    <div
      ref={heroRef}
      id="hero"
      className="relative w-full h-screen bg-zinc-900 text-white overflow-hidden"
    >
      <nav
        id="nav"
        className="w-full p-5 px-10 text-white flex justify-between items-center"
      >
        <Link
          to="/"
          className="relative pb-0.5 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-px before:bg-white before:transition-all before:duration-300 before:ease-in hover:before:w-full"
        >
          Prem Sagar Gupta
        </Link>
        <div className="navbar">
          <h3 className="text-white no-underline text-[1.2vw] cursor-pointer font-semibold">
            MENU +
          </h3>
        </div>
      </nav>

      <div id="heading" className="mt-[90px]">
        <div className="bounding w-fit overflow-hidden">
          <h1 className="bounding-elem ml-[50px] text-[10vw] uppercase font-black leading-none opacity-60 translate-y-[100%]">
            FullStack
          </h1>
        </div>

        <div id="second-heading" className="flex flex-col items-end w-fit">
          <div className="bounding w-fit overflow-hidden">
            <h1
              id="heading2"
              className="bounding-elem ml-[14vw] text-[10vw] uppercase font-black leading-none opacity-60 translate-y-[100%]"
            >
              Developer
            </h1>
          </div>
          <div className="bounding w-fit overflow-hidden">
            <h5 className="bounding-elem text-right translate-y-[100%] uppercase text-[1.1vw] flex items-center gap-[0.8vw]">
              based in nepal{" "}
              <img
                src="./flag.png"
                alt="Nepal flag"
                className="w-[1vw] h-auto"
              />
            </h5>
          </div>
        </div>
      </div>

      <div
        id="third-heading"
        className="flex flex-col items-end mt-20 pr-[50px]"
      >
        <div className="bounding">
          <h5 className="bounding-elem text-right uppercase mt-[0.5vw] text-[1.1vw] leading-none">
            available for freelance
          </h5>
        </div>
        {/* <div className="bounding">
          <h5 className="bounding-elem text-right uppercase mt-[0.5vw] text-[1.1vw] leading-none">
            work from may 24'
          </h5>
        </div> */}
      </div>

      <div
        id="hero-footer"
        className="flex justify-between items-center absolute bottom-[3%] px-[2vw] w-full"
      >
        <a
          href="#"
          className="relative pb-0.5 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-px before:bg-white before:transition-all before:duration-300 before:ease-in hover:before:w-full"
        >
          FREELANCER<i className="ri-arrow-right-up-line"></i>
        </a>
        <a
          href="#"
          className="relative pb-0.5 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-px before:bg-white before:transition-all before:duration-300 before:ease-in hover:before:w-full"
        >
          DEVELOPER<i className="ri-arrow-right-up-line"></i>
        </a>
        <div id="icons" className="flex gap-2.5">
          {icons.map((icon) => (
            <div
              key={icon.id}
              className="group w-7 h-7 rounded-full bg-gray-500 flex items-center flex-col overflow-hidden cursor-pointer group"
            >
              <i
                className={`${icon.iconClass} -translate-y-full group-hover:translate-y-0 text-center text-2xl text-[#121212] transition-transform duration-200`}
              />
              <i
                className={`${icon.iconClass} -translate-y-full group-hover:translate-y-0 text-center text-2xl text-[#121212] transition-transform duration-200`}
              />
            </div>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
