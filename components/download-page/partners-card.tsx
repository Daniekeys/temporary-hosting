import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import plist from "../../assets/png/p-list.png";
import Image from "next/image";
const PartnersCard = () => {
  return (
    <div>
      <div className="w-full bg-[#F9F6FF] h-[170px] lg:h-[344px]  z-high">
        <ContainerLayout>
          <div className="w-full flex flex-col justify-center items-center h-[172px] z-super ">
            <h1
              className="text-center lg:text-[32px] font-semibold text-ash mb-8 lg:mb-12 lg:mt-40"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              TRUSTED PARTNERS
            </h1>
            <div
              className="flex justify-center"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Image src={plist} alt="picklist" />
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default PartnersCard;
