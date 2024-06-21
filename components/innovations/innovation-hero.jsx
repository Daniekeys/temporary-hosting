import React from "react";
import NewNavbar from "../navbar/new-navbar";
import MobileNav from "../navbar/mobile-nav";
import ContainerLayout from "../../layouts/ContainerLayout";
import heroPic from "../../assets/png/mac.png";
import Image from "next/image";
const InnovationHero = () => {
  return (
    <div className="grad-blog-bg w-full h-full">
      <div className="w-full lg:h-screen lg:max-h-[908px] relative blog-hero-bg flex flex-col">
        <NewNavbar />
        <MobileNav present={1} />
        <ContainerLayout>
          <div className="w-full flex flex-col mt-20">
            <div className="w-full lg:flex-row mt-12  flex flex-col ">
              <div className="w-full flex flex-col lg:w-6/12 justify-center ">
                <h1
                  className="text-mainBlue font-semibold text-[32px] 2xl:text-[64px] max-w-[632px] leading-[40px] 2xl:leading-[96px]  "
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  OUR INNOVATIVE & INTELLIGENT PRODUCTS
                </h1>
                <p
                  className="text-customBlack font-medium 2xl:text-[32px] lg:text-2xl text-xl  leading-[40px] "
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Explore our carefully curated products
                </p>
              </div>
              <div className="w-full lg:w-6/12 justify-center flex items-center">
                <Image
                  src={heroPic}
                  alt="hero"
                  width={heroPic.width}
                  height={heroPic.height}
                  className="w-auto h-auto"
                />
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default InnovationHero;
