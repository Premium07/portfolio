import React, { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mincir = document.querySelector(".mincir");
      if (mincir) {
        mincir.style.left = e.x + "px";
        mincir.style.top = e.y + "px";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="mincir size-10 rounded-full z-20 bg-white absolute transition-all duration-100 ease-custom-bezier mix-blend-difference"></div>
  );
};

export default Cursor;
