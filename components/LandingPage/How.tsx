import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";

function How() {
  return (
    <ContainerLayout>
      <div
        className="w-full flex flex-col flow-hide"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p
          className="text-[#555555] text-[20px] md:text-[32px] font-semibold mt-44 text-center"
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          HOW IT WORKS
        </p>

        <p
          className="text-[#555555] text-[14px] md:text-[18px] font-medium mt-[10px] text-center"
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          See how WeCollect allows you to collect data faster, safer and
          reliably
        </p>
      </div>
    </ContainerLayout>
  );
}

export default How;
