import React, { useState } from "react";
import leftCarousel from "../../assets/svg/prev.svg";
import rightCarousel from "../../assets/svg/next.svg";

interface CarouselProps {
  Containers: any[];
}

const Carousel: React.FC<CarouselProps> = ({ Containers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDiv = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Containers.length);
  };

  const prevDiv = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + Containers.length) % Containers.length
    );
  };

  const goToDiv = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full h-auto items-center">
      <div className="flex justify-between w-full">
        <div className="w-11/12 md:w-8/12 m-auto">
          {Containers.map((Container: any, index: any) => (
            <div
              key={index}
              className={`w-full ${
                index === currentIndex ? "w-full" : "hidden"
              }`}
            >
              {Container}
            </div>
          ))}
        </div>
      </div>

      <div className="w-11/12 md:w-8/12 flex justify-between items-center m-auto mt-10">
        <div className="dotscontainer">
          {Containers.map((slide, index) => (
            <div
              className={`dots ${index === currentIndex ? "active" : ""}`}
              key={slide.id}
              onClick={() => goToDiv(index)}
            >
              ●
            </div>
          ))}
        </div>

        <div className="h-auto  w-3/12 flex justify-end">
          <img
            onClick={prevDiv}
            src={leftCarousel}
            alt="arrow-left-carousel-icon"
            className="cursor-pointer"
          />
          <img
            onClick={nextDiv}
            src={rightCarousel}
            alt="arrow-right-carousel-icon"
            className="cursor-pointer ml-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
