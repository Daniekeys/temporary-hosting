import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";

function UseHow({howInfo} : {howInfo:any}) {
  return (
    <ContainerLayout>
      <div
        className="w-full flex flex-col flow-hide"
        // data-aos="fade-up"
        // data-aos-duration="1000"
      >
        <p
          className="text-customBlack text-[20px] lg:text-2xl 2xl:text-[32px] font-semibold mt-44 text-center"
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          {howInfo?.title}
        </p>

        <p
          className="text-[#555555] text-[14px] 2xl:text-[18px] font-medium mt-[10px] text-center"
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
      {howInfo?.subtitle}
        </p>
      </div>
    </ContainerLayout>
  );
}

export default UseHow;
