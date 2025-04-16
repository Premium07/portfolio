import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { data } from "../../constants/data";

const Page2 = () => {
  const pageRef = useRef(null);
  const elementsRef = useRef([]);
  const imagesRef = useRef([]);

  useGSAP(
    () => {
      elementsRef.current.forEach((elem, index) => {
        if (!elem) return;

        let rotate = 0;
        let diffrot = 0;

        const handleMouseMove = (e) => {
          let diff = e.clientY - elem.getBoundingClientRect().top;
          diffrot = e.clientX - rotate;
          rotate = e.clientX;

          gsap.to(imagesRef.current[index], {
            opacity: 1,
            ease: "power2.out",
            top: diff,
            left: e.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot),
            duration: 0.3,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(imagesRef.current[index], {
            opacity: 0,
            ease: "power2.out",
            duration: 0.5,
          });
        };

        elem.onmousemove = handleMouseMove;
        elem.onmouseleave = handleMouseLeave;
      });
    },
    { scope: pageRef }
  );
  return (
    <div
      ref={pageRef}
      id="page2"
      className="py-[2vw] px-[2vw] w-full min-h-screen bg-zinc-900 text-white overflow-hidden"
    >
      <h2 className="text-[1vw] uppercase opacity-70 text-center mb-4">
        Projects
      </h2>
      {data.map((item, index) => (
        <div
          key={index}
          ref={(el) => (elementsRef.current[index] = el)}
          className={`element ${index === 2 ? "lastelem" : ""}
            w-full ${
              index !== 0 ? "border-t border-gray-300" : ""
            } py-[1vw] px-[2vw]
            flex items-center justify-between relative gap-4`}
        >
          <div className="flex flex-col z-20">
            <h1 className="uppercase text-[7vw] opacity-70 relative z-20">
              {item.title}
            </h1>
            <div className="flex flex-wrap gap-2 mt-2 max-w-md">
              {item.techStack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <img
            ref={(el) => (imagesRef.current[index] = el)}
            src={item.img}
            alt={item.title}
            className="absolute opacity-0 h-[150px] w-[150px] object-cover
            transition-opacity duration-500 ease-in-out transform
            -translate-x-1/2 -translate-y-1/2 z-0"
          />
          <div className="flex items-center gap-4 relative z-20">
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm border border-zinc-700 px-3 py-1 rounded-full hover:bg-zinc-800 transition-colors duration-300 flex items-center gap-1"
            >
              <i className="ri-github-fill"></i> GitHub
            </a>
            <a
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm border border-zinc-700 px-3 py-1 rounded-full hover:bg-zinc-800 transition-colors duration-300 flex items-center gap-1"
            >
              <i className="ri-external-link-line"></i> Live
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page2;
