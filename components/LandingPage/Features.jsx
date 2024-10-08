import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import cases from "../../assets/svg/case.svg";
import gps from "../../assets/svg/gps.svg";
import offline from "../../assets/svg/offline.svg";
import Image from "next/image";

const data = [
  {
    img: cases,
    title: "Case Management",
    story:
      "Wecollect helps you consolidate your data, allowing you to analyse them seamlessly.",
  },
  {
    img: gps,
    title: "GPS Coordinates",
    story:
      "With the GPS feature, agents can easily navigate, locate, and track effortlessly, therefore increasing productivity.",
  },
  {
    img: offline,
    title: "Offline Data Collection",
    story:
      "Harness the power of seamless offline data collection, anytime, anywhere, even without an internet connection. Capture insights on the go.",
  },
];
const Features = () => {
  return (
    <div className="w-full mt-12 mb-0 ">
      <ContainerLayout>
        <div className="flex flex-col">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-x-12 pb-8 py-8 ">
            {data?.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="flex flex-col  items-center box-drop  rounded-[30px] bg-white justify-center  w-11/12  h-[400px]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="w-5/12 mx-auto mb-10"
                    />
                    <h2 className="text-[#333333] text-[18px] lg:text-2xl font-bold text-center">
                      {item.title}
                    </h2>
                    <p className="text-[#333333] w-10/12 opacity-70 text-center text-[16px] lg:text-[16px]">
                      {item.story}
                    </p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Features;
