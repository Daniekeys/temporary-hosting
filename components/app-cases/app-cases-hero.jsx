import React from "react";
import NewNavbar from "../navbar/new-navbar";
import MobileNav from "../navbar/mobile-nav";
import ContainerLayout from "../../layouts/ContainerLayout";
import heroPic from "../../assets/png/app-case-pic.png";
import Image from "next/image";
const AppCaseHero = () => {
  return (
    <div className="grad-blog-bg w-full h-full">
      <div className="w-full lg:h-screen lg:max-h-[908px] relative blog-hero-bg flex flex-col">
        <NewNavbar />
        <MobileNav />
        <ContainerLayout>
          <div className="w-full flex flex-col lg:mt-20 mt-12">
            <div className="w-full lg:flex-row mt-12  flex flex-col ">
              <div className="w-full flex flex-col lg:w-6/12 justify-center ">
                <h1
                  className="text-mainBlue font-semibold text-[48px] lg:text-[64px] max-w-[361px] lg:max-w-none leading-[72px] lg:leading-[96px] "
                  // data-aos="fade-down"
                  // data-aos-duration="1000"
                >
                  DISCOVER HOW WECOLLECT IS USED IN CASES
                </h1>
                <p
                  className="text-customBlack font-medium lg:text-[32px] text-lg  leading-[40px] mt-[30px] "
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                >
                  Explore our most recent cases
                </p>
              </div>
              <div className="w-full lg:w-6/12 justify-center mb-4 lg:mb-0 lg:justify-end flex items-center mt-6 lg:mt-0">
                <Image
                  src={heroPic}
                  alt="hero"
                  width={heroPic.width}
                  height={heroPic.height}
                  className="lg:w-auto lg:h-auto max-w-[250px] lg:max-w-full"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                />
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default AppCaseHero;
