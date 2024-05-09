import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import plist from "../../assets/png/partners-list.png";
import Image from "next/image";
const PartnersCard = () => {
  return (
    <div>
      <div className="w-full bg-[#EDE6FF] h-[200px] lg:h-[344px] rounded-t-[50px] z-high">
        <ContainerLayout>
          <div className="w-full flex flex-col justify-center items-center h-[172px] z-super ">
            <h1 className="text-center lg:text-[32px] font-semibold text-ash mb-8 lg:mb-12 mt-28">
              OUR PARTNERS
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
