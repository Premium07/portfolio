import React, { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mincir = document.querySelector(".mincir");
      if (mincir) {
        mincir.style.left = e.x + 10 + "px";
        mincir.style.top = e.y + 10 + "px";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="mincir size-5 rounded-full z-20 absolute bg-white transition-all duration-100 cubic-bezier(0.175, 0.885, 0.32, 1.275) mix-blend-difference"></div>
  );
};

export default Cursor;
