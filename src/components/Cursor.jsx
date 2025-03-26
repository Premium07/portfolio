import React, { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mincir = document.querySelector(".mincir");
      if (mincir) {
        mincir.style.left = e.x + 20 + "px";
        mincir.style.top = e.y + 20 + "px";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="mincir size-16 rounded-full z-20 absolute transition-all duration-100 ease-custom-bezier mix-blend-difference"
      style={{
        backgroundColor:
          "rgba(255, 255, 255, 0.2)" /* Semi-transparent white */,
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)" /* Subtle white border */,
        boxShadow:
          "0 8px 32px 0 rgba(31, 38, 135, 0.37)" /* Optional: subtle shadow */,
      }}
    ></div>
  );
};

export default Cursor;
