import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const ContactFormGSAP = () => {
  const [showForm, setShowForm] = useState(false);
  const formSectionRef = useRef(null);
  const formRef = useRef(null);
  const headingRef = useRef(null);
  const inputRefs = useRef([]);
  const buttonRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    // Create refs array for inputs
    inputRefs.current = inputRefs.current.slice(0, 3);
  }, []);

  useEffect(() => {
    if (showForm) {
      // Animation timeline for form opening
      const tl = gsap.timeline({
        defaults: {
          duration: 0.6,
          ease: "power2.out",
        },
      });

      // Animate form section
      tl.fromTo(
        formSectionRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
        }
      )
        // Animate headings
        .fromTo(
          headingRef.current.children,
          {
            x: -50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            stagger: 0.2,
          },
          0.2
        )
        // Animate inputs
        .fromTo(
          inputRefs.current,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
          },
          0.4
        )
        // Animate submit button
        .fromTo(
          buttonRef.current,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
          },
          0.6
        );
    }
  }, [showForm]);

  // Hover and click animations for toggle button
  useEffect(() => {
    if (toggleButtonRef.current) {
      const toggleButton = toggleButtonRef.current;

      const hoverAnimation = gsap.to(toggleButton, {
        scale: 1.05,
        duration: 0.2,
        paused: true,
      });

      toggleButton.addEventListener("mouseenter", () => hoverAnimation.play());
      toggleButton.addEventListener("mouseleave", () =>
        hoverAnimation.reverse()
      );

      return () => {
        toggleButton.removeEventListener("mouseenter", () =>
          hoverAnimation.play()
        );
        toggleButton.removeEventListener("mouseleave", () =>
          hoverAnimation.reverse()
        );
      };
    }
  }, [showForm]);

  return (
    <div className="relative w-full bg-zinc-900 text-white flex justify-center items-center my-5 pb-10 flex-col">
      {showForm && (
        <section
          ref={formSectionRef}
          className="w-11/12 mx-auto flex justify-between items-center gap-4"
        >
          <div ref={headingRef} className="w-fit mr-10">
            <h2 className="text-[7vw] uppercase border-b font-semibold opacity-60">
              Let's Get
            </h2>
            <h2 className="text-[5vw] uppercase opacity-60">
              In Touch<i className="ri-arrow-right-up-long-line"></i>
            </h2>
          </div>
          <form
            ref={formRef}
            className="w-1/2 flex flex-col gap-4 p-8 backdrop-filter backdrop-blur-md shadow-lg"
            onSubmit={handleSubmit}
          >
            <input
              ref={(el) => (inputRefs.current[0] = el)}
              className="bg-zinc-800/50 px-10 py-4 cursor-pointer hover:bg-zinc-900 border-b-2 border-zinc-700 focus:outline-none"
              type="text"
              placeholder="Your Full name"
            />
            <input
              ref={(el) => (inputRefs.current[1] = el)}
              className="bg-zinc-800/50 px-10 py-4 cursor-pointer hover:bg-zinc-900 border-b-2 border-zinc-700 focus:outline-none"
              type="email"
              placeholder="Your Email"
            />
            <textarea
              ref={(el) => (inputRefs.current[2] = el)}
              name=""
              cols={30}
              rows={10}
              placeholder="Your Message"
              className="bg-zinc-800/50 resize-none px-10 py-4 cursor-pointer hover:bg-zinc-900 border-b-2 border-zinc-700 focus:outline-none"
            ></textarea>
            <button
              ref={buttonRef}
              className="bg-zinc-800/50 px-10 py-3 mt-2 text-lg cursor-pointer hover:bg-zinc-900 border-b-2 border-zinc-700 flex items-center justify-center gap-2"
            >
              Submit <i className="ri-arrow-right-up-long-line"></i>
            </button>
          </form>
        </section>
      )}

      <button
        ref={toggleButtonRef}
        onClick={() => setShowForm(!showForm)}
        className="bg-zinc-800 px-10 py-3 mt-4 rounded-full cursor-pointer hover:bg-zinc-900 border border-zinc-700"
      >
        {showForm ? <i className="ri-close-line"></i> : "Contact Me"}
      </button>
    </div>
  );
};

export default ContactFormGSAP;
