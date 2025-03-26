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
      className="py-[5vw] px-[4vw] w-full h-screen bg-dark-bg text-white"
    >
      {data.map((item, index) => (
        <div
          key={index}
          ref={(el) => (elementsRef.current[index] = el)}
          className={`element ${index === 2 ? "lastelem border-b" : ""} 
            w-full border-t border-gray-300 py-[1vw] pl-[2vw] pr-0 
            flex items-center justify-between relative`}
        >
          <h1 className="uppercase text-[7vw] opacity-70 relative z-10">
            {item.title}
          </h1>
          <img
            ref={(el) => (imagesRef.current[index] = el)}
            src={item.img}
            alt={item.title}
            className="absolute opacity-0 h-[150px] w-[150px] object-cover 
            transition-opacity duration-500 ease-in-out transform 
            -translate-x-1/2 -translate-y-1/2"
          />
          <h5>{index === 2 ? "2021" : "2022"}</h5>
        </div>
      ))}
    </div>
  );
};

export default Page2;
