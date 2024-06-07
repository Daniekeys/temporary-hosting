import React from "react";
import Image from "next/image";
import ContainerLayout from "../../layouts/ContainerLayout";
import maskwoman from "../../assets/png/farmer-boy.png";
import playIcon from "../../assets/png/play-icon.png";

function Control() {
  return (
    <ContainerLayout>
      <p
        className="text-[#555555] text-[20px] md:text-[32px] font-semibold text-center mt-[119px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        POWER OF DATA IN YOUR HANDS
      </p>

      <p
        className="w-full md:w-8/12 m-auto text-[#555555] text-[14px] md:text-[18px] font-medium text-center mt-[10px] leading-[25px] lg:leading-[30px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        WeCollect is a smart data collection mobile app that allows you collect
        online and offline data, while Project Management to a dynamic dashboard
        that provides real-time updates on data collected. It promotes quick
        decision-making by allowing users to visualise and analyse data on the
        go. The dashboard is flexible, which is also handy when managing
        multiple projects or forms.
      </p>
      <div className="w-full relative flow-hide">
        <Image
          src={maskwoman}
          alt="maskwoman"
          className="w-full object-contain h-auto m-auto mt-20 max-w-[1030px]"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <div className="w-full absolute inset-0 flex items-center justify-center">
          <Image
            src={playIcon}
            width={playIcon.width}
            height={playIcon.height}
            alt="icon"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
        </div>
      </div>
    </ContainerLayout>
  );
}

export default Control;
