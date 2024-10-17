import React from "react";
import NewNavbar from "../navbar/new-navbar";
import ContainerLayout from "../../layouts/ContainerLayout";
import heroPic from "../../assets/png/smart-data-image.png";
import Image from "next/image";
import MobileNav from "../navbar/mobile-nav";
import Google from "../../assets/svg/g-play.svg";
import Apple from "../../assets/svg/a-store.svg";
import Link from "next/link";
const SmartDataHero = () => {
  return (
    <div className=" w-full h-full project-hero-bg ">
      <div className="w-full lg:h-screen h-[700px] lg:max-h-[908px] relative  flex flex-col">
        <NewNavbar />
        <MobileNav present={2} />
        <ContainerLayout>
          <div className="w-full flex flex-col mt-20">
            <div className="w-full lg:flex-row mt-12  flex flex-col  ">
              <div className="w-full flex flex-col lg:w-6/12 justify-center ">
                <h1
                  className="text-mainBlue font-serif font-semibold text-[48px] 2xl:text-[64px] max-w-[600px] 2xl:leading-[96px]  "
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  SMART DATA <br className="hidden lg:block" /> COLLECTION APP
                </h1>
                <p
                  className="text-customBlack font-medium md:text-2xl 2xl:text-[32px] text-[18px] leading-[39px] 2xl:leading-[48px] max-w-[500px] font-sans"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Our mobile app empowers field agents to gather accurate data,
                  on-the-go.
                </p>
                <div className="w-full flex items-center mt-5 gap-2 ">
                  <Link href={"#"}>
                    <Image
                      src={Google}
                      alt="goodle"
                      className="w-auto h-auto"
                    />
                  </Link>
                  <Link href={"#"}>
                    <Image src={Apple} alt="goodle" className="w-auto h-auto" />
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-6/12 flex justify-center items-center ">
                <Image
                  src={heroPic}
                  alt="hero"
                  width={heroPic.width}
                  height={heroPic.height}
                  className="w-9/12 lg:w-8/12 max-w-[250px] lg:max-w-full mx-auto 2xl:w-auto mt-32 lg:mt-0"
                />
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default SmartDataHero;
