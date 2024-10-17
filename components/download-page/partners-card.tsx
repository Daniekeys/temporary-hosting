import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import plist from "../../assets/png/p-list.png";
import Image from "next/image";
const PartnersCard = () => {
  return (
    <div>
      <div
        className="w-full bg-[#F9F6FF] h-[170px] lg:h-[344px]  z-high"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <ContainerLayout>
          <div className="w-full flex flex-col justify-center items-center h-[172px] z-super ">
            <h1
              className="text-center text-2xl 2xl:text-[32px] font-serif font-semibold text-customBlack mb-8 lg:mb-12 lg:mt-40"
            
            >
              TRUSTED PARTNERS
            </h1>
            <div className="flex justify-center">
              <Image src={plist} alt="picklist" />
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default PartnersCard;
