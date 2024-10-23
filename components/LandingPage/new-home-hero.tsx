import React from 'react'
import MobileNav from '../navbar/mobile-nav';
import NewNavbar from '../navbar/new-navbar';
import ContainerLayout from '../../layouts/ContainerLayout';
import Image from 'next/image';
import trademark from "../../assets/svg/trade-mark.svg"
import Link from 'next/link';
import blueright from "../../assets/svg/blueright.svg";
import HeroPhoto from "../../assets/png/new-frame-hero.png"
const NewHomeHero = () => {
  return (
    <div className="new-hero-bg w-full h-full flex flex-col min-h-screen">
      <NewNavbar />
      <MobileNav present={1} />
      {/* content */}
      <ContainerLayout>
        <div className="w-full flex flex-col mt-32 lg:mt-52 ">
          <h1 className="font-serif md:inline-flex  hidden text-[48px] text-customBlack tracking-widest font-bold mx-auto">
            Insight Gathering Made{" "}
            <span className="text-mainBlue flex flex-col relative ml-3 ">
              Easy
              <span className="-mt-2">
                <Image src={trademark} alt="trade" />
              </span>
            </span>{" "}
          </h1>
          <h1 className="font-serif md:hidden text-[45px] text-customBlack tracking-widest font-bold mx-auto">
            Insight
          </h1>
          <h1 className="font-serif md:hidden text-[45px]  text-customBlack tracking-widest font-bold mx-auto">
            Gathering
          </h1>
          <h1 className="font-serif md:hidden text-[45px] inline-flex text-center   text-customBlack tracking-widest font-bold mx-auto">
            Made
            <span className="text-mainBlue flex ml-2 flex-col relative  ">
              Easy
              <span className="absolute -bottom-2">
                <Image src={trademark} alt="trade" className="" />
              </span>
            </span>
          </h1>
          <p className="font-sans text-ash leading-[22px] tracking-wider text-center mt-8 lg:mt-1 font-[500] max-w-[768px] mx-auto">
            Leverage advanced data collecting technology with features like GIS
            and offline data collection as well as a vast network of field
            agents to collect, track, and ensure accurate data for various
            projects.
          </p>
          <div
            className="w-full h-auto flex flex-col  md:flex-row items-center mt-12 lg:mt-6  lg:gap-6 justify-center "
            // data-aos="fade-up"
            // data-aos-duration="1000"
            // data-aos-delay="1000"
            // data-aos-once="true"
          >
            <div className="bg-mainBlue hover:bg-[#E3D5FF] w-[197px] h-[50px] flex justify-center items-center text-white hover:text-mainBlue rounded-[50px]  cursor-pointer font-semibold hero-btn text-[14px] 2xl:text-[16px] font-sans">
              Get started for free
            </div>
            <Link
              href="https://demo.wecollect.tech"
              target="_blank"
              className="bg-[#FFFFFF] hover:bg-[#E3D5FF]  w-[197px]  h-[50px] flex justify-start pl-[10px] items-center text-mainBlue rounded-[50px] hero-btn cursor-pointer my-5 md:my-0 font-semibold text-[14px] 2xl:text-[16px] font-sans  "
            >
              <Image src={blueright} alt="blueright" className="mr-[10px]" />
              Book a demo
            </Link>
          </div>
          <div
            className="w-full mt-24  lg:pb-0 lg:mt-40  hero-shado"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <Image src={HeroPhoto} className="w-full md:w-10/12 mx-auto " alt="hero" />
          </div>
        </div>
      </ContainerLayout>
      {/* end of content time */}
    </div>
  );
}


export default NewHomeHero









