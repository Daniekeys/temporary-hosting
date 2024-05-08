import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import { SpecialArrow } from "../../assets/svg";
import oval from "../../assets/png/oval.png";
import fpmp from "../../assets/png/smart.png";
import Image from "next/image";
import phone from "../../assets/svg/phone-icon.svg"
import appleP from "../../assets/svg/apple-p.svg";
import googleP from "../../assets/svg/google-p.svg";


const OurInnovation = () => {
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

          <div className="flex flex-col items-center justify-center w-full mt-24">
            <div className="flex justify-center items-center gap-4">
              <Image src={phone} alt="phone" />
              <h1 className="text-mainBlue text-center font-semibold text-2xl lg:text-[32px] ">
                Smart Data Collection App
              </h1>
            </div>

            <div className="flex flex-col items-center relative mt-12">
              <span className="">
                <Image src={fpmp} alt="images" className="mx-auto  " />
              </span>
            </div>
            <p className="text-center mt-12 text-ash lg:text-lg text-sm max-w-[977px]  ">
              Lorem ipsum dolor sit amet consectetur. Id suspendisse enim elit
              ipsum feugiat sed vulputate id amet. Etiam arcu ultricies mauris
              neque porta porta egestas amet. Ut luctus risus dictum urna
              commodo in egestas. Massa lectus ut ornare orci sit.
            </p>
            <div className="w-full flex mt-6 gap-4 justify-center items-center">
              <Image
                src={appleP}
                alt="apple-logo"
                width={appleP.width}
                height={appleP.height}
              />
              <Image
                src={googleP}
                alt="goole-logo"
                width={googleP.width}
                height={googleP.height}
              />
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default OurInnovation;
