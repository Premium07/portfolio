import React, { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const load = () => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const increment = Math.floor(Math.random() * 20);
          const newValue = prev + increment;

          if (newValue >= 100) {
            clearInterval(interval);
            return 100;
          }
          return newValue;
        });
      }, 150);

      return () => clearInterval(interval);
    };

    load();
  }, []);

  return (
    <div className="loader fixed h-screen w-screen z-50 bg-gray-200 flex items-center flex-col justify-center ">
      <div className="size-40 rounded-full flex items-center justify-center border-2 border-t-2 border-t-zinc-950 border-zinc-500 animate-spin"></div>
      <h2 className="absolute z-10 text-[50px] ml-4 font-thin">{progress}%</h2>
    </div>
  );
};

export default Loader;
