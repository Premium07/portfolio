import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";



const ContactFormGSAP = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const formSectionRef = useRef(null);
  const formRef = useRef(null);
  const headingRef = useRef(null);
  const inputRefs = useRef([]);
  const buttonRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!accessKey) {
      setError("The contact form is not configured yet. Please email me directly.");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData(e.target);
      formData.append("access_key", accessKey);
      formData.append("subject", "New portfolio contact message");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setError("Unable to send your message. Please try again.");
      }
    } catch {
      setError("Unable to send your message. Please try again.");
    } finally {
      setLoading(false);
    }
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
    <div className="relative w-full bg-zinc-900 text-white flex justify-center items-center my-5 pb-10 flex-col px-4 sm:px-0">
      {showForm && (
        <section
          ref={formSectionRef}
          className="w-full sm:w-11/12 md:w-4/5 lg:w-3/4 mx-auto flex flex-col lg:flex-row justify-between items-start gap-4 sm:gap-6 md:gap-8"
        >
          <div ref={headingRef} className="w-full lg:w-fit lg:mr-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[7vw] uppercase border-b font-semibold opacity-60 leading-tight">
              Let's Get
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[5vw] uppercase opacity-80 flex items-center gap-2">
              In Touch<i className="ri-arrow-right-up-long-line text-xl sm:text-2xl md:text-3xl"></i>
            </h2>
          </div>
          <form
            ref={formRef}
            className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 backdrop-filter backdrop-blur-md shadow-lg"
            onSubmit={handleSubmit}
          >
            <input
              ref={(el) => (inputRefs.current[0] = el)}
              className="bg-zinc-800/50 px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 text-sm sm:text-base cursor-pointer hover:bg-zinc-900 border-b-2 border-zinc-700 focus:outline-none"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              ref={(el) => (inputRefs.current[1] = el)}
              className="bg-zinc-800/50 px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 text-sm sm:text-base cursor-pointer hover:bg-zinc-900 border-b-2 border-zinc-700 focus:outline-none"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              ref={(el) => (inputRefs.current[2] = el)}
              name="message"
              value={formData.message}
              onChange={handleChange}
              cols={30}
              rows={8}
              placeholder="Your Message"
              className="bg-zinc-800/50 resize-none px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 text-sm sm:text-base cursor-pointer hover:bg-zinc-900 border-b-2 border-zinc-700 focus:outline-none"
              required
            ></textarea>

            {error && (
              <div className="text-red-500 mt-2 p-2 sm:p-3 bg-red-100/10 rounded border border-red-500/20 text-xs sm:text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="text-green-500 mt-2 p-2 sm:p-3 bg-green-100/10 rounded border border-green-500/20 text-xs sm:text-sm">
                Message sent successfully! You should receive a confirmation
                email shortly.
              </div>
            )}

            <button
              ref={buttonRef}
              type="submit"
              disabled={loading}
              className="bg-zinc-800/50 px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 mt-2 text-sm sm:text-base md:text-lg cursor-pointer hover:bg-zinc-900 border-b-2 border-zinc-700 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Submit <i className="ri-arrow-right-up-long-line"></i>
                </>
              )}
            </button>
          </form>
        </section>
      )}

      <button
        ref={toggleButtonRef}
        onClick={() => setShowForm(!showForm)}
        className="bg-zinc-800 px-6 sm:px-10 py-2 sm:py-3 mt-4 rounded-full text-sm sm:text-base cursor-pointer hover:bg-zinc-900 border border-zinc-700"
      >
        {showForm ? <i className="ri-close-line"></i> : "Contact Me"}
      </button>
    </div>
  );
};

export default ContactFormGSAP;
