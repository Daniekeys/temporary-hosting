import React, { useEffect } from "react";
import NewNavbar from "../navbar/new-navbar";
import ContainerLayout from "../../layouts/ContainerLayout";
import heroPic from "../../assets/png/download-hero-pic.png";
import Image from "next/image";
import appleP from "../../assets/svg/apple-p.svg";
import googleP from "../../assets/svg/google-p.svg";
import MobileNav from "../navbar/mobile-nav";
import mobileImage from "../../assets/png/mobile-download.png";

const DownloadHero = () => {
  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);
  return (
    <div className="grad-blog-bg w-full h-full relative flex flex-col bg-[#EDE6FF] mb-8 lg:mb-0 flow-hide">
      <div className="w-full  relative blog-hero-bg flex flex-col flow-hide">
        <NewNavbar />
        <MobileNav present={2} />
        <ContainerLayout>
          <div className="w-full flex flex-col mt-16 flow-hide">
            <div className="w-full lg:flex-row   flex flex-col flow-hide ">
              <div className="w-full flex flex-col lg:w-1/2 justify-center ">
                <div className="w-full px-4  lg:max-w-full  flex flex-col justify-center mt-10 lg:mt-0">
                  <h1
                    className="text-mainBlue font-semibold text-[48px] 2xl:text-[64px]  "
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    Download App
                  </h1>
                  <p
                    className="text-customBlack font-medium   2xl:text-[32px] lg:text-2xl text-[18px]  leading-[40px] 2xl:leading-[48px] mt-[30px]  lg:max-w-[490px]"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    Our Smart Data Collection Mobile app, specially built for
                    Smart data and useful for Insight gathering in Nigeria
                    ecosystem.
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
                  className="w-full  z-low md:flex hidden "
                />
                <Image
                  src={heroPic}
                  alt="hero"
                  width={heroPic.width}
                  height={heroPic.height}
                  className="w-full  z-low md:hidden mt-10 "
                />
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default DownloadHero;
