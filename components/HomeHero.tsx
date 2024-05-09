import React from "react";
import Image from "next/image";
import ContainerLayout from "../layouts/ContainerLayout";
import homehero from "../assets/png/home-hero.png";
import location from "../assets/svg/location.svg";
import collection from "../assets/svg/collection.svg";
import secure from "../assets/svg/secure.svg";
import blueright from "../assets/svg/blueright.svg";

function HomeHero() {
  return (
    <ContainerLayout>
      <div className="w-full h-auto mt-32 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-[40%] h-auto text-[#333333] text-center md:text-start">
          <p className="text-[45px] md:text-[55px] font-semibold">
            Insight Gathering
          </p>
          <p className="text-[45px] md:text-[55px] font-semibold">Made Easy</p>

          <p className="text-[#6F6F6F] text-[14px] md:text-[16px] font-medium mt-[30px]">
            Leverage advanced data collecting technology with features like GIS
            and offline data collection as well as a vast network of field
            agents to collect, track, and ensure accurate data for various
            projects
          </p>

          <div className="w-full h-auto flex flex-col md:flex-row items-center mt-8">
            <div className="bg-mainBlue w-[197px] h-[50px] flex justify-center items-center text-white rounded-[50px] mr-[10px] cursor-pointer">
              Get started for free
            </div>
            <div className="bg-[#FFFFFF] w-[197px] h-[50px] flex justify-center items-center text-mainBlue rounded-[50px] shadow-md cursor-pointer my-5 md:my-0">
              <Image src={blueright} alt="blueright" className="mr-[10px]" />
              Book a demo
            </div>
          </div>
        </div>

        <div className="w-full md:w-[50%] h-[500px] relative">
          <Image src={homehero} alt="" className="w-full h-full" />
          {/* <Image
            src={location}
            alt="location"
            className="w-[600px] h-[150px] absolute top-[20%] right-[38%]"
          />
          <Image
            src={collection}
            alt="collection"
            className="w-[600px] h-[150px] absolute top-[60%] right-[38%]"
          />
          <Image
            src={secure}
            alt="secure"
            className="w-[500px] h-[100px] absolute top-[70%] right-[-30%]"
          /> */}
        </div>
      </div>
    </ContainerLayout>
  );
}

export default HomeHero;
