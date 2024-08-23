import React from "react";
import Image from "next/image";
import ContainerLayout from "../../layouts/ContainerLayout";
import spiral from "../../assets/png/spiral-curve.png";
import desktopIcon from "../../assets/svg/desktop-icon.svg";

import blueright from "../../assets/svg/blueright.svg";
import angola from "../../assets/png/laptop-pic.png";
import Link from "next/link";
const OtherInnovations = () => {
  return (
    <div
      className="w-full flex flex-col rounded-t-[50px] bg-[#F9F6FF] relative overflow-y-hidden "
      id="dashboard"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="absolute top-0 left-0 ">
        <Image src={spiral} alt="spiral" />
      </div>
      <ContainerLayout>
        <div className="w-full py-20 lg:py-28 flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-center gap-4">
            <span>
              <Image src={desktopIcon} alt="des" />
            </span>
            <h1 className="text-2xl 2xl:text-[32px] lg:text-2xl font-semibold text-mainBlue">
              Project Management Dashboard
            </h1>
          </div>
          <div className="flex flex-col items-center relative mt-12">
            <span className="">
              <Image
                src={angola}
                alt="images"
                className="mx-auto max-w-[435px] h-auto "
              />
            </span>
          </div>
          <p
            className="text-center mx-auto text-ash text-sm 2xl:text-lg lg:text-base lg:leading-[36px] max-w-[977px] mt-6"
            // data-aos="fade-up"
            // data-aos-duration="1000"
          >
            Lorem ipsum dolor sit amet consectetur. Id suspendisse enim elit
            ipsum feugiat sed vulputate id amet. Etiam arcu ultricies mauris
            neque porta porta egestas amet. Ut luctus risus dictum urna commodo
            in egestas. Massa lectus ut ornare orci sit.
          </p>
          <div className="w-full h-auto flex flex-col md:flex-row items-center mt-8 justify-center  lg:gap-6">
            <div className="bg-mainBlue hover:bg-[#E3D5FF] w-[197px] h-[50px] flex justify-center items-center text-white hover:text-mainBlue rounded-[50px]  cursor-pointer font-semibold hero-btn">
              Get started for free
            </div>
            <Link
              href="https://demo.wecollect.tech"
              target="_blank"
              className="bg-[#FFFFFF] hover:bg-[#E3D5FF]  w-[197px]  h-[50px] flex justify-start pl-[10px] items-center text-mainBlue rounded-[50px] hero-btn cursor-pointer my-5 md:my-0 font-semibold  "
            >
              <Image src={blueright} alt="blueright" className="mr-[10px]" />
              Book a demo
            </Link>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default OtherInnovations;
