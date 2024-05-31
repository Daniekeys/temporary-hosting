import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContainerLayout from "../layouts/ContainerLayout";
import homehero from "../assets/png/hero-boy.png";
import location from "../assets/png/location-samp.png";
import collection from "../assets/png/offline-ilus.png";
import secure from "../assets/png/secure-ilus.png";
import blueright from "../assets/svg/blueright.svg";

function HomeHero() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(true);
  }, []);
  return (
    <div className="w-full bg-white  lg:bg-white">
      <ContainerLayout>
        <div className="w-full h-auto pt-32 flex flex-col md:flex-row justify-between items-center px-8 lg:px-0 ">
          <div className="w-full md:w-[40%] max-w-[516px]  h-auto text-[#333333] text-center md:text-start ">
            <p className="text-[45px] md:text-[55px] font-bold">
              Insight Gathering
            </p>
            <div className="flex flex-col  relative">
              <p className="text-[45px] md:text-[55px] font-bold z-10">
                Made Easy
              </p>
              <div
                className={`expanding-div ${
                  isExpanded ? "expanded" : ""
                } absolute bottom-2 z-0 max-w-[300px]`}
              ></div>
            </div>

            <p className="text-[#6F6F6F] text-[14px] md:text-[16px] font-medium mt-[30px]">
              Leverage advanced data collecting technology with features like
              GIS and offline data collection as well as a vast network of field
              agents to collect, track, and ensure accurate data for various
              projects
            </p>

            <div className="w-full h-auto flex flex-col md:flex-row items-center mt-8">
              <div className="bg-mainBlue hover:bg-[#E3D5FF] w-[197px] h-[50px] flex justify-center items-center text-white hover:text-mainBlue rounded-[50px] mr-[10px] cursor-pointer font-semibold hero-btn">
                Get started for free
              </div>
              <div className="bg-[#FFFFFF] hover:bg-[#E3D5FF] pl-2 pr-3 h-[50px] flex justify-center items-center text-mainBlue rounded-[50px] hero-btn cursor-pointer my-5 md:my-0 font-semibold ">
                <Image src={blueright} alt="blueright" className="mr-[10px]" />
                Book a demo
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-end h-full relative flow-hide ">
            <Image
              src={homehero}
              alt=""
              className=" w-full h-auto  mt-8 lg:mt-0 z-0"
            />
            <Image
              src={location}
              alt="location"
              className="max-w-[310px] lg:w-[310px] w-[212px] object-contain  h-auto  absolute top-[30%] -left-4 lg:left-0 hero-item-shadow z-10"
              data-aos="fade-down"
              data-aos-delay="0"
            />
            <Image
              src={collection}
              alt="collection"
              className="max-w-[310px] w-[212px] lg:w-[310px] object-contain  h-auto absolute top-[50%] -right-4 lg:right-0"
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-delay="600"
            />
            <Image
              src={secure}
              alt="secure"
              className="max-w-[310px] w-[212px] lg:w-[310px] object-contain  h-auto absolute bottom-[-100px] left-0"
              data-aos="fade-down"
              data-aos-delay="1200"
              data-aos-duration="600"
            />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default HomeHero;
