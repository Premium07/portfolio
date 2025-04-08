import React, { useEffect, useRef, useState } from "react";
import { skillsData } from "../../constants/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SkillsSlider = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const sliderWrapperRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [isScrolling, setIsScrolling] = useState(false);
  const animationRef = useRef(null);
  const sliderWidthRef = useRef(0);

  useGSAP(
    () => {
      // Animate the heading
      gsap.from(".skills-heading", {
        y: 50,
        opacity: 0,
        duration: 10,
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

  // Function to prepare the slider for infinite scrolling
  const prepareInfiniteSlider = () => {
    if (!sliderWrapperRef.current) return;

    // Clear any existing clones first
    while (sliderWrapperRef.current.childElementCount > skillsData.length) {
      sliderWrapperRef.current.removeChild(sliderWrapperRef.current.lastChild);
    }

    // Clone the slider items for infinite effect (create 3 sets for smoother looping)
    const sliderContent = Array.from(sliderWrapperRef.current.children);
    for (let i = 0; i < 2; i++) {
      sliderContent.forEach((item) => {
        const clone = item.cloneNode(true);
        sliderWrapperRef.current.appendChild(clone);
      });
    }

    // Get the width of one set of items
    sliderWidthRef.current = sliderWrapperRef.current.scrollWidth / 3;

    // Set initial position
    gsap.set(sliderWrapperRef.current, { x: 0 });
  };

  // Function to create a smooth animation that changes direction from current position
  const createSmoothAnimation = (direction) => {
    if (!sliderWrapperRef.current || !sliderWidthRef.current) return;

    // Get current position
    const currentX = gsap.getProperty(sliderWrapperRef.current, "x") || 0;

    // Pause any existing animation instead of killing it immediately
    // This allows for smoother transitions
    if (animationRef.current) {
      animationRef.current.pause();
    }

    // Create new animation based on direction
    if (direction === "down") {
      // Right to left when scrolling down - continue from current position
      // Calculate target position (ensure we're moving left)
      const targetX = -sliderWidthRef.current;

      // If we're near the end, prepare to wrap around but don't jump
      if (currentX <= -sliderWidthRef.current + 50) {
        // Smoothly transition to start position
        gsap.to(sliderWrapperRef.current, {
          x: 0,
          duration: 0.5, // Quick but smooth transition
          ease: "power1.inOut", // Smooth easing
          onComplete: () => {
            // Then continue with normal animation
            animationRef.current = gsap.to(sliderWrapperRef.current, {
              x: -sliderWidthRef.current,
              duration: 20, // Slower for smoother movement
              ease: "linear",
            });
          },
        });
      } else {
        // Continue moving left from current position with smooth transition
        animationRef.current = gsap.to(sliderWrapperRef.current, {
          x: targetX,
          duration:
            Math.abs((targetX - currentX) / sliderWidthRef.current) * 20,
          ease: "linear", // Linear for constant speed
          onComplete: () => {
            // When we reach the end, loop back to start with smooth transition
            gsap.to(sliderWrapperRef.current, {
              x: 0,
              duration: 0.5, // Quick but smooth transition
              ease: "power1.inOut", // Smooth easing
              onComplete: () => {
                // Then continue with normal animation
                gsap.to(sliderWrapperRef.current, {
                  x: -sliderWidthRef.current,
                  duration: 20,
                  ease: "linear",
                });
              },
            });
          },
        });
      }
    } else {
      // Left to right when scrolling up - continue from current position
      // Calculate target position (ensure we're moving right)
      const targetX = 0;

      // If we're near the start, prepare to wrap around but don't jump
      if (currentX >= -50) {
        // Smoothly transition to end position
        gsap.to(sliderWrapperRef.current, {
          x: -sliderWidthRef.current,
          duration: 0.5, // Quick but smooth transition
          ease: "power1.inOut", // Smooth easing
          onComplete: () => {
            // Then continue with normal animation
            animationRef.current = gsap.to(sliderWrapperRef.current, {
              x: 0,
              duration: 20, // Slower for smoother movement
              ease: "linear",
            });
          },
        });
      } else {
        // Continue moving right from current position with smooth transition
        animationRef.current = gsap.to(sliderWrapperRef.current, {
          x: targetX,
          duration:
            Math.abs((targetX - currentX) / sliderWidthRef.current) * 20,
          ease: "linear", // Linear for constant speed
          onComplete: () => {
            // When we reach the start, loop back to end with smooth transition
            gsap.to(sliderWrapperRef.current, {
              x: -sliderWidthRef.current,
              duration: 0.5, // Quick but smooth transition
              ease: "power1.inOut", // Smooth easing
              onComplete: () => {
                // Then continue with normal animation
                gsap.to(sliderWrapperRef.current, {
                  x: 0,
                  duration: 20,
                  ease: "linear",
                });
              },
            });
          },
        });
      }
    }
  };

  // Handle scroll events and direction changes
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let scrollTimeout = null;
    let scrollThreshold = 5; // Minimum scroll difference to detect direction change
    let scrollDelayTimer = null;

    // Function to detect scroll direction with improved smoothness
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      // Only change direction if scroll difference exceeds threshold
      if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
        const newDirection = currentScrollY > lastScrollY ? "down" : "up";

        // Delay direction change slightly to prevent rapid back-and-forth
        if (newDirection !== scrollDirection) {
          // Clear any pending direction changes
          if (scrollDelayTimer) clearTimeout(scrollDelayTimer);

          // Set a small delay before changing direction
          scrollDelayTimer = setTimeout(() => {
            setScrollDirection(newDirection);
          }, 50);
        }

        lastScrollY = currentScrollY;
      }

      // Update scroll position
      setIsScrolling(true);

      // Clear previous timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set new timeout with longer duration for smoother transitions
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 300); // Longer delay for smoother experience
    };

    // Use passive event listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Prepare the slider
    prepareInfiniteSlider();

    // Initial animation
    createSmoothAnimation(scrollDirection);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      if (scrollDelayTimer) clearTimeout(scrollDelayTimer);
      if (animationRef.current) animationRef.current.pause();
    };
  }, [scrollDirection]); // Include necessary dependencies

  // Effect to handle direction changes
  useEffect(() => {
    // Only change animation if we're actively scrolling
    if (isScrolling) {
      createSmoothAnimation(scrollDirection);
    }
  }, [scrollDirection, isScrolling]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full bg-zinc-900 py-20 overflow-hidden"
    >
      <div className="container mx-auto px-10">
        <h2 className="skills-heading text-white text-5xl font-bold text-center mb-16">
          My Skills
        </h2>

        {/* Single slider that changes direction based on scroll */}
        <div className="relative w-full overflow-hidden" ref={sliderRef}>
          <div
            className="flex items-center justify-center gap-8 py-10"
            ref={sliderWrapperRef}
          >
            {skillsData.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center justify-center  min-w-[150px]"
              >
                <div className="size-28 bg-zinc-800 rounded-xl flex items-center justify-center p-4 mb-4 border border-zinc-700 hover:border-white hover:scale-110 transition-all duration-300">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-white w-fit text-base font-medium pr-2 text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSlider;
