import React, { useState } from "react";
import Image from "next/image"; // Adjust based on your project setup
import ContainerLayout from "../../layouts/ContainerLayout";
import leftArrow from "../../assets/svg/prev.svg";
import rightArrow from "../../assets/svg/next.svg";
import fullrating from "../../assets/svg/fullrating.svg";
import halfrating from "../../assets/svg/halfrating.svg";

const data = [
  {
    id: 1,
    name: `-James Myles, CEO, Gibrata`,
    img: fullrating,
    review: `Locate a point of interest on the map consectetur. Sed quam luctus lacus accumsan ullamcorper pellentesque condimentum. Quis mus vel diam est accumsan quam `,
  },
  {
    id: 2,
    name: `-Daniel D., CTO, Opensource`,
    img: halfrating,
    review: `Locate a point of interest on the map consectetur. Sed quam luctus lacus accumsan ullamcorper pellentesque condimentum. Quis mus vel diam est accumsan quam `,
  },
  {
    id: 3,
    name: `-Wangwan T., COO, Linuxxx`,
    img: halfrating,
    review: `Locate a point of interest on the map consectetur. Sed quam luctus lacus accumsan ullamcorper pellentesque condimentum. Quis mus vel diam est accumsan quam `,
  },
  {
    id: 4,
    name: `Rigo Louie`,
    img: fullrating,
    review: `Locate a point of interest on the map consectetur. Sed quam luctus lacus accumsan ullamcorper pellentesque condimentum. Quis mus vel diam est accumsan quam `,
  },
  {
    id: 5,
    name: `Mia Williams`,
    img: halfrating,
    review: `Locate a point of interest on the map consectetur. Sed quam luctus lacus accumsan ullamcorper pellentesque condimentum. Quis mus vel diam est accumsan quam `,
  },
  {
    id: 6,
    name: `Mia Williams`,
    img: halfrating,
    review: `Locate a point of interest on the map consectetur. Sed quam luctus lacus accumsan ullamcorper pellentesque condimentum. Quis mus vel diam est accumsan quam `,
  },
  {
    id: 7,
    name: `Mia Williams`,
    img: halfrating,
    review: `Locate a point of interest on the map consectetur. Sed quam luctus lacus accumsan ullamcorper pellentesque condimentum. Quis mus vel diam est accumsan quam `,
  },
  {
    id: 8,
    name: `Mia Williams`,
    img: halfrating,
    review: `Locate a point of interest on the map consectetur. Sed quam luctus lacus accumsan ullamcorper pellentesque condimentum. Quis mus vel diam est accumsan quam `,
  },
  {
    id: 9,
    name: `Mia Williams`,
    img: halfrating,
    review: `Locate a point of interest on the map consectetur. Sed quam luctus lacus accumsan ullamcorper pellentesque condimentum. Quis mus vel diam est accumsan quam `,
  },
];

const CustomCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 3) % data.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 3 + data.length) % data.length);
  };

  const renderIndicators = () => {
    const numOfIndicators = Math.ceil(data.length / 3);
    return (
      <div className="flex justify-center mt-4 w-fit mx-auto ">
        {Array.from({ length: numOfIndicators }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer  ${
              index === Math.floor(currentSlide / 3)
                ? "bg-blue-500"
                : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index * 3)}
          />
        ))}
      </div>
    );
  };

    return (
      <ContainerLayout>
        <p
          className="text-[#333333] text-[36px] font-semibold text-center mt-40"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          TESTIMONIALS
        </p>

        <p className="text-[#333333] text-[20px] font-medium text-center mt-[10px] mb-[50px]">
          Our users have the following to say about Us:
        </p>
        <div className="relative w-full bg-white border-none outline-none px-10 overflow-x-hidden">
          <div className="flex items-center justify-between ">
            <button
              className="absolute left-0 p-2 b rounded-full  focus:outline-none"
              onClick={prevSlide}
            >
              <Image src={leftArrow} alt="Previous" width={20} height={14} />
            </button>
            <div className="grid grid-cols-3 gap-10 overflow-hidden w-full border-none bg-[#F9F6FF] p-[30px] rounded-[30px]">
              {data.slice(currentSlide, currentSlide + 3).map((d) => (
                <div
                  key={d.id}
                  className="w-full m-auto bg-white h-[336px] rounded-[30px] pt-[10px] px-[10px] border-b-[4px] border-b-[#4747D6]"
                >
                  <Image
                    src={d.img}
                    alt=""
                    width={144}
                    height={24}
                    className="m-auto mt-10 mb-6"
                  />
                  <p className="text-center mb-[35px] text-[#555555] text-[18px] font-medium">
                    {d.review}
                  </p>
                  <p className="text-center mb-[54px] text-[#555555] text-[16px] font-semibold">
                    {d.name}
                  </p>
                </div>
              ))}
            </div>
            <button
              className="absolute right-0 p-2    focus:outline-none"
              onClick={nextSlide}
            >
              <Image src={rightArrow} alt="Next" width={20} height={14} />
            </button>
          </div>
          {renderIndicators()}
        </div>
      </ContainerLayout>
    );
};

export default CustomCarousel;
