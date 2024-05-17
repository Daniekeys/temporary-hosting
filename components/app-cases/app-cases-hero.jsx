import React from "react";
import NewNavbar from "../navbar/new-navbar";
import ContainerLayout from "../../layouts/ContainerLayout";
import heroPic from "../../assets/png/app-case-pic.png";
import Image from "next/image";
const AppCaseHero = () => {
  return (
    <div className="grad-blog-bg w-full h-full">
      <div className="w-full lg:h-screen lg:max-h-[908px] relative blog-hero-bg flex flex-col">
        <NewNavbar />
        <ContainerLayout>
          <div className="w-full flex flex-col mt-20">
            <div className="w-full lg:flex-row mt-12  flex flex-col ">
              <div className="w-full flex flex-col lg:w-6/12 justify-center ">
                <h1
                  className="text-mainBlue font-semibold text-[32px] lg:text-[64px]  "
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  APPLICABLE <br /> CASES
                </h1>
                <p
                  className="text-customBlack font-medium lg:text-[32px] text-xl max-w-[497px] leading-[40px] "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Explore how WeCollect is used in cases
                </p>
              </div>
              <div className="w-full lg:w-6/12 justify-center flex items-center">
                <Image
                  src={heroPic}
                  alt="hero"
                  width={heroPic.width}
                  height={heroPic.height}
                  className="w-auto h-auto"
                  data-aos="fade-up"
               
                  data-aos-duration="1000"
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
