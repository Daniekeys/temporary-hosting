import React from "react";
import NewNavbar from "../navbar/new-navbar";
import ContainerLayout from "../../layouts/ContainerLayout";
import heroPic from "../../assets/png/blog-hero-pic.png";
import Image from "next/image";
import MobileNav from "../navbar/mobile-nav";
const BlogHero = () => {
  return (
    <div className=" w-full h-full flow-hide">
      <div className="w-full   relative blog-hero-bg flex flex-col flow-hide">
        <NewNavbar />
        <MobileNav present={2} />
        <ContainerLayout>
          <div className="w-full flex flex-col  mt-[142px] justify-center flow-hide ">
            <div className="w-full flex justify-center flow-hide">
              <div
                className=" w-full max-w-[725px] mx-auto rounded-[50px] h-[75px] bg-white bg-opacity-60 flex justify-between px-4 items-center mt-8"
                // data-aos="fade-up"
                // data-aos-duration="1000"
              >
                <input
                  type="text"
                  className="bg-transparent flex-grow border-none outline-none focus:outline-none focus:border-none placeholder:text-base placeholder:text-ash text-ash text-base "
                  placeholder="search blog"
                />
                <button className="bg-mainBlue rounded-[50px] h-[50px] px-5 flex items-center justify-center text-white text-base  cursor-pointer lg:min-w-[168px] hover:bg-[#E3D5FF] hover:text-mainBlue font-semibold  ">
                  Search
                </button>
              </div>
            </div>
            <div className="w-full lg:flex-row mt-12  flex flex-col ">
              <div className="w-full flex flex-col lg:w-1/2">
                <h1
                  className="text-mainBlue font-semibold text-[48px] lg:text-[64px]  "
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                >
                  OUR BLOG
                </h1>
                <p
                  className="text-customBlack font-medium lg:text-[32px] text-lg mt-7 "
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                >
                  Stay up to date
                </p>
              </div>
              <div className="w-full lg:w-1/2 mt-24 lg:mt-0 mb-12 lg:mb-0">
                <Image
                  src={heroPic}
                  alt="hero"
                  width={heroPic.width}
                  height={heroPic.height}
                  className="w-full h-auto"
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

export default BlogHero;
