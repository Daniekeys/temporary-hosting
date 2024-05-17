import React from "react";
import NewNavbar from "../navbar/new-navbar";
import ContainerLayout from "../../layouts/ContainerLayout";
import heroPic from "../../assets/png/download-hero.png";
import Image from "next/image";
import appleP from "../../assets/svg/apple-p.svg";
import googleP from "../../assets/svg/google-p.svg";
import MobileNav from "../navbar/mobile-nav";
import mobileImage from "../../assets/png/mobile-download.png"

const DownloadHero = () => {
  return (
    <div className="grad-blog-bg w-full h-full relative flex flex-col bg-[#EDE6FF] mb-8 lg:mb-0">
      <div className="w-full lg:h-screen relative blog-hero-bg flex flex-col">
        <NewNavbar />
        <MobileNav present={2} />

        <div className="w-full flex flex-col mt-16">
          <div className="w-full lg:flex-row   flex flex-col ">
            <div className="w-full flex flex-col lg:w-1/2 justify-center ">
              <div className="w-full px-4 max-w-[331px] lg:max-w-full lg:w-9/12 2xl:w-7/12 flex flex-col justify-center lg:mx-auto mt-10 lg:mt-0">
                <h1
                  className="text-mainBlue font-semibold text-[48px] lg:text-[64px]  "
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Download App
                </h1>
                <p
                  className="text-customBlack font-medium text-sm lg:text-base leading-[30px]  lg:max-w-[516px]"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Our enumeration mobile app, specially built for Smart data and
                  useful for Insight gathering in Nigeria ecosystem.
                </p>
                <div
                  className="w-full flex mt-6 gap-4 flex-col lg:flex-row"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <Image
                    src={appleP}
                    alt="apple-logo"
                    width={appleP.width}
                    height={appleP.height}
                  />
                  <Image
                    src={googleP}
                    alt="goole-logo"
                    width={googleP.width}
                    height={googleP.height}
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 z-0 relative px-4  lg:h-screen">
              <Image
                src={heroPic}
                alt="hero"
                width={heroPic.width}
                height={heroPic.height}
                className="w-full h-[90vh] z-low md:flex hidden "
              />
              <Image
                src={mobileImage}
                alt="hero"
                width={mobileImage.width}
                height={mobileImage.height}
                className="w-full  z-low md:hidden mt-10 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadHero;
