import React from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import { SpecialArrow } from '../../assets/svg'
import oval from "../../assets/png/oval.png";
import fpmp from "../../assets/png/fpmp-samp.png"
import Image from 'next/image';

const OurProjectList = () => {
  return (
    <div className="w-full flex flex-col bg-white rounded-t-[50px]  ">
      <ContainerLayout>
        <div className="w-full py-20 lg:py-28 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center w-full">
            <h1 className="text-ash font-semibold text-2xl lg:text-[32px] mb-2">
              OUR PROJECTS
            </h1>
            <span>
              <SpecialArrow />
            </span>
          </div>

          <div className="flex flex-col items-center justify-center w-full mt-24 px-4 lg:px-0">
            <h1 className="text-mainBlue text-center font-semibold text-2xl lg:text-[32px] ">
              Food Price Monitoring Project In Nigeria
            </h1>
            <div className="flex flex-col items-center relative mt-12">
              <span className="z-modal -mb-16">
                <Image src={fpmp} alt="images" className="mx-auto  " />
              </span>
              <span className="z-0">
                <Image src={oval} alt="ima" className="" />
              </span>
            </div>
            <p className="text-center mt-12 text-ash lg:text-lg text-sm  ">
              Tracking the availability of food in Nigeria using a data driven
              price model in line with the UN SD4
            </p>
            <div className="w-full flex items-center gap-2 justify-center mt-8">
              <button className="bg-mainBlue text-white h-[47px] items-center justify-center rounded-[50px] font-semibold flex min-w-[197px] ">
                Explore
              </button>
                          <button className="border border-mainBlue text-mainBlue h-[47px] items-center justify-center rounded-[50px] font-semibold flex min-w-[197px] border-opacity-30">
                              Contact Us
              </button>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default OurProjectList
