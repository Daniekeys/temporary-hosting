import React, { useEffect } from "react";
import NewNavbar from "../navbar/new-navbar";
import MobileNav from "../navbar/mobile-nav";
import ContainerLayout from "../../layouts/ContainerLayout";
import heroPic from "../../assets/png/brand-hero.png";
import Image from "next/image";

const UseHero = ({ heroInfo }: { heroInfo: any }) => {
  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);
  return (
    <div className="new-hero-bg w-full h-full">
      <div className="w-full lg:h-screen lg:max-h-[908px] relative new-hero-bg flex flex-col">
        <NewNavbar />
        <MobileNav present={1} />
        <ContainerLayout>
          <div className="w-full flex flex-col mt-20">
            <div className="w-full lg:flex-row mt-12  flex flex-col ">
              <div className="w-full flex flex-col lg:w-6/12 justify-center ">
                <h1
                  className="text-mainBlue font-semibold text-[32px] lg:text-[40px] 2xl:text-[64px] max-w-[632px] leading-[40px] 2xl:leading-[96px] font-serif "
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  {heroInfo?.title}
                </h1>
                <p
                  className="text-customBlack font-medium 2xl:text-[32px] lg:text-2xl text-xl 2xl:leading-[48px] leading-[48px] max-w-[550px] mt-8 font-sans "
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  {heroInfo?.subtitle}
                  {/* Our data collection app empowers you to track, analyze, and
                  amplify your brand presence. */}
                </p>
              </div>
              <div className="w-full lg:w-6/12 justify-center flex items-center pb-8 lg:pb-0 mt-16 lg:mt-0">
                <Image
                  src={heroInfo?.image}
                  alt="hero"
                  width={heroInfo?.image?.width}
                  height={heroInfo?.image?.height}
                  className="lg:w-auto lg:object-contain max-w-[230px] lg:max-w-max lg:h-auto "
                />
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default UseHero;
