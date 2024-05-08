import { useState, useEffect } from "react";
import Featured from "../LandingPage/Featured";
import Become from "../LandingPage/Become";

const Slider = () => {
  const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowComponent1((prevState) => !prevState);
      setShowComponent2((prevState) => !prevState);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full flex justify-center mt-0 lg:mt-12">
      <div className="animation-container h-[600px] lg:h-[400px]  relative flex items-end justify-center">
        <div
          className={`component1 ${showComponent1 ? "slide-in" : "slide-out"}`}
        >
          <Featured />
        </div>
        <div
          className={`component2 ${showComponent2 ? "slide-in" : "slide-out"}`}
        >
          <Become />
        </div>
      </div>
    </div>
  );
};

export default Slider;
