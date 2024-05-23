import React from 'react'
import Image from 'next/image'
import ContainerLayout from '../../layouts/ContainerLayout';
import spiral from "../../assets/png/spiral-curve.png";
import oval from "../../assets/png/oval-b.png"
import angola from "../../assets/png/angola.png"
const OtherProject = () => {
  return (
    <div className="w-full flex flex-col rounded-t-[50px] bg-[#F9F6FF] relative overflow-y-hidden  ">
      <div className="absolute top-0 left-0 ">
        <Image src={spiral} alt="spiral" />
      </div>
      <ContainerLayout>
        <div className="w-full py-20 lg:py-28 flex flex-col items-center justify-center px-4 lg:px-0">
          <h1
            className="text-2xl lg:text-[32px] font-semibold text-mainBlue"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Angola local Spatial Analysis
          </h1>
          <div
            className="flex flex-col items-center relative mt-12"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="z-modal -mb-16">
              <Image
                src={angola}
                alt="images"
                className="mx-auto w-[171px] lg:w-full  lg:max-w-[435px] h-auto "
              />
            </span>
            <span className="z-0">
              <Image src={oval} alt="ima" className="" />
            </span>
          </div>
          <p
            className="text-center mx-auto text-ash text-sm lg:text-lg lg:leading-[36px] max-w-[977px] mt-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Lorem ipsum dolor sit amet consectetur. Id suspendisse enim elit
            ipsum feugiat sed vulputate id amet. Etiam arcu ultricies mauris
            neque porta porta egestas amet. Ut luctus risus dictum urna commodo
            in egestas. Massa lectus ut ornare orci sit.
          </p>
          <div
            className="w-full grid grid-cols-2 lg:flex items-center gap-2 justify-center mt-8 px-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <button className="bg-mainBlue text-white h-[47px] items-center justify-center rounded-[50px] font-semibold flex lg:min-w-[197px] ">
              Explore
            </button>
            <button className="border border-mainBlue text-mainBlue h-[47px] items-center justify-center rounded-[50px] font-semibold flex lg:min-w-[197px]  border-opacity-30">
              Contact Us
            </button>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default OtherProject
