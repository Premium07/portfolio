import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser";

/*
 * To set up EmailJS:
 * 1. Create an account at https://www.emailjs.com/
 * 2. Create a new Email Service (Gmail, Outlook, etc.)
 * 3. Create an Email Template with template variables: {{name}}, {{email}}, and {{message}}
 * 4. Get your Service ID, Template ID, and Public Key from the EmailJS dashboard
 * 5. Replace the placeholder values in the handleSubmit function below
 */

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Get EmailJS credentials from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const contactTemplateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
    const autoreplyTemplateId = import.meta.env
      .VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // First, send the contact email to you
    emailjs
      .sendForm(serviceId, contactTemplateId, formRef.current, publicKey)
      .then((result) => {
        console.log("Contact email sent successfully:", result.text);

        // Check if email is valid before sending auto-reply
        if (!formData.email || !formData.email.includes("@")) {
          console.log(
            "Skipping auto-reply due to invalid email:",
            formData.email
          );
          return { text: "OK - No auto-reply sent due to invalid email" };
        }

        // Then, send the auto-reply email to the user
        const templateParams = {
          to_name: formData.name,
          to_email: formData.email,
          message: formData.message,
          from_name: "Prem Sagar Gupta | Full Stack Developer", // Replace with your name or website name
          reply_to: "premsagarg23@gmail.com", // Use your email as reply_to
          email: formData.email, // Add email as a separate field (some templates use this)
          user_email: formData.email, // Add user_email as another alternative
          recipient: formData.email, // Add recipient as another alternative
          // Social media links are hardcoded in the template
        };

        console.log("Sending auto-reply with params:", templateParams);

        // Send auto-reply email using the REST API directly
        return fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: autoreplyTemplateId,
            user_id: publicKey,
            template_params: templateParams,
          }),
        }).then((response) => {
          if (!response.ok) {
            return response.text().then((text) => {
              throw new Error(text);
            });
          }
          return response.text();
        });
      })
      .then((result) => {
        console.log("Auto-reply email sent successfully:", result);
        setSuccess(true);
        setLoading(false);
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        // Hide success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);

        // Provide more specific error messages based on the error
        if (error.text && error.text.includes("recipients address is empty")) {
          setError(
            "There was an issue with your email address. Please check and try again."
          );
        } else if (error.status === 429) {
          setError("Too many requests. Please try again later.");
        } else {
          setError("Failed to send email. Please try again later.");
        }

        setLoading(false);
      });
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
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              ref={(el) => (inputRefs.current[1] = el)}
              className="bg-zinc-800/50 px-10 py-4 cursor-pointer hover:bg-zinc-900 border-b-2 border-zinc-700 focus:outline-none"
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
              rows={10}
              placeholder="Your Message"
              className="bg-zinc-800/50 resize-none px-10 py-4 cursor-pointer hover:bg-zinc-900 border-b-2 border-zinc-700 focus:outline-none"
              required
            ></textarea>

            {error && (
              <div className="text-red-500 mt-2 p-3 bg-red-100/10 rounded border border-red-500/20">
                {error}
              </div>
            )}

            {success && (
              <div className="text-green-500 mt-2 p-3 bg-green-100/10 rounded border border-green-500/20">
                Message sent successfully! You should receive a confirmation
                email shortly.
              </div>
            )}

            <button
              ref={buttonRef}
              type="submit"
              disabled={loading}
              className="bg-zinc-800/50 px-10 py-3 mt-2 text-lg cursor-pointer hover:bg-zinc-900 border-b-2 border-zinc-700 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
        className="bg-zinc-800 px-10 py-3 mt-4 rounded-full cursor-pointer hover:bg-zinc-900 border border-zinc-700"
      >
        {showForm ? <i className="ri-close-line"></i> : "Contact Me"}
      </button>
    </div>
  );
};

export default ContactFormGSAP;
