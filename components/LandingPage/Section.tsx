import React, { useState, useEffect } from "react";
import Image from "next/image";
import smartimage from "../../assets/png/smartimage.png";
import realtime from "../../assets/png/realtime.png";
import reporting from "../../assets/png/reporting.png";
import blueangle from "../../assets/svg/blueangle.svg";
import grayangle from "../../assets/svg/grayangle.svg";
import sectionbg from "../../assets/png/sectionbg.png";
import featA from "../../assets/png/feat-one.png"
import featB from "../../assets/png/feat-two.png"
import featC from "../../assets/png/feat-three.png"

const Section = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);

  const steps = [
    {
      id: 1,
      phoneImage: featA,
      title: "Smart location picker",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id suspendisse enim elit ipsum feugiat sed vulputate id amet. Etiam arcu ultricies mauris neque porta porta egestas amet. Ut luctus risus dictum urna commodo in egestas. Massa lectus ut ornare orci sit. Sapien ut cursus non magna bibendum non et nulla nulla. Orci mollis amet magna diam ultrices ultricies non quam. Id nisl cras sapien nisl. Sagittis malesuada suscipit duis lectus dignissim. Eget est sit quam fermentum urna egestas augue tempor.",
    },
    {
      id: 2,
      phoneImage: featB,
      title: "Real-time data collection",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id suspendisse enim elit ipsum feugiat sed vulputate id amet. Etiam arcu ultricies mauris neque porta porta egestas amet. Ut luctus risus dictum urna commodo in egestas. Massa lectus ut ornare orci sit. Sapien ut cursus non magna bibendum non et nulla nulla. Orci mollis amet magna diam ultrices ultricies non quam. Id nisl cras sapien nisl. Sagittis malesuada suscipit duis lectus dignissim. Eget est sit quam fermentum urna egestas augue tempor.",
    },
    {
      id: 3,
      phoneImage: featC,
      title: "Comprehensive reporting",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id suspendisse enim elit ipsum feugiat sed vulputate id amet. Etiam arcu ultricies mauris neque porta porta egestas amet. Ut luctus risus dictum urna commodo in egestas. Massa lectus ut ornare orci sit. Sapien ut cursus non magna bibendum non et nulla nulla. Orci mollis amet magna diam ultrices ultricies non quam. Id nisl cras sapien nisl. Sagittis malesuada suscipit duis lectus dignissim. Eget est sit quam fermentum urna egestas augue tempor.",
    },
  ];



  // Step component
  const Step = ({ index, phoneImage, title, description }) => (
    <div
      className={`w-full md:w-9/12 py-4 rounded-2xl flex items-center mb-6 cursor-pointer  max-w-[525px] mx-auto ${
        index === selectedStepIndex ? "text-[#4747D6]" : ""
      }`}
      onClick={() => setSelectedStepIndex(index)}
    >
      <div className="">
        <div className="flex items-center">
          {index === selectedStepIndex ? (
            <Image src={blueangle} alt="" className="w-[32px] h-[32px]" />
          ) : (
            <Image src={grayangle} alt="" className="w-[32px] h-[32px]" />
          )}
          <p
            className={`text-[20px] md:text-[32px] font-semibold ml-[15px]  ${
              index === selectedStepIndex ? "text-[#4747D6]" : "text-[#999999]"
            }`}
          >
            {title}
          </p>
        </div>
        <p
          className={`text-[14px] md:text-[18px] font-medium text-[#555555] mt-4 ${
            index === selectedStepIndex ? "block" : "hidden"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );

  return (
    
    <div className="w-full h-auto mt-0 lg:pt-[98px] flex flex-col md:flex-row justify-between items-center overflow-x-hidden  ">
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center relative">
        <div className="w-full h-auto mt-8 md:mt-0 px-4 lg:px-0">
          {steps.map((step, index) => (
            <Step
              key={index}
              index={index}
              // image={step.image}
              phoneImage={step.phoneImage}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        <div className="w-full flex justify-center lg:justify-end md:w-2/5 h-auto">
          <Image
            src={steps[selectedStepIndex].phoneImage}
            alt=""
            className={` ${
              selectedStepIndex === 2
                ? "w-full  h-auto"
                : "w-full  h-auto"
            }`}
          />
        </div>
      </div>

      {/* <Image
        src={sectionbg}
        alt=""
        className="w-full md:w-[326px] h-[650px] md:h-[702px] hidden md:block"
      /> */}
    </div>
  );
};

export default Section;
