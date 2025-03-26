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
    <div className="loader fixed h-screen w-screen z-50 bg-gray-200 flex items-center justify-center">
      <h2 className="text-[100px] font-thin">{progress}%</h2>
    </div>
  );
};

export default Loader;
