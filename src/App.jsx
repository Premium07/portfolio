import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import "remixicon/fonts/remixicon.css";
import Page2 from "./components/PageTwo";
import LocomotiveScroll from "locomotive-scroll";
import About from "./components/About";
import SkillsSlider from "./components/SkillsSlider";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import ContactForm from "./components/ContactForm";

const App = () => {
  const scrollRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Locomotive Scroll
    let scroll;
    if (scrollRef.current) {
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
    }

    // Simulate loading animation
    const timer = setTimeout(() => {
      gsap.to(".loader", {
        top: "-100vh",
        duration: 1.5,
        onComplete: () => setLoading(false),
      });
    }, 1000);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div
      className="w-full overflow-hidden relative"
      data-scroll-container
      ref={scrollRef}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {loading && <Loader />}
      <Cursor />

      <main id="main" className="w-full bg-zinc-900 relative">
        <Hero />
        <Page2 />
        <About />
        <SkillsSlider />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
};

export default App;
