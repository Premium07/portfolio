import React, { useRef, useEffect } from "react";
import { skillsData } from "../../constants/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Make sure to register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);

  // Set up the marquee animation that responds to scroll direction
  useEffect(() => {
    const handleWheel = (e) => {
      // Clear any existing animations
      gsap.killTweensOf(marqueeRef.current);

      // Create appropriate animation based on scroll direction
      gsap.to(marqueeRef.current, {
        translateX: e.deltaY > 0 ? "-200%" : "0%",
        duration: 10,
        ease: "linear", // Changed from "none" to "linear" for smoother animation
        repeat: -1,
        repeatDelay: 0,
      });
    };

    // Add event listener
    window.addEventListener("wheel", handleWheel);

    // Clean up function
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // ScrollTrigger animation for the heading
  useGSAP(
    () => {
      gsap.from(".skills-heading", {
        y: 50,
        opacity: 0,
        duration: 1, // Reduced from 10 to 1 for more reasonable animation time
        scrollTrigger: {
          trigger: ".skills-heading",
          start: "top 80%",
          end: "bottom 70%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="my-8 sm:my-12 mt-3 sm:mt-5 container mx-auto px-4 sm:px-8 md:px-12 lg:px-20" ref={sectionRef}>
      <h2 className="skills-heading text-white opacity-70 text-lg sm:text-xl md:text-2xl text-center mb-6 sm:mb-8">
        My Skills
      </h2>

      <div
        id="marquee"
        ref={marqueeRef}
        className=" flex items-center justify-center gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8 md:py-10 relative"
        style={{ transform: "translateX(-100%)" }} // Initial position
      >
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center justify-center min-w-[100px] sm:min-w-[120px] md:min-w-[150px]"
          >
            <div className="size-20 sm:size-24 md:size-28 bg-zinc-800 rounded-xl flex items-center justify-center p-3 sm:p-4 mb-3 sm:mb-4 border border-zinc-700 hover:scale-110 transition-all duration-300">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-white w-fit text-xs sm:text-sm md:text-base font-thin pr-2 text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
